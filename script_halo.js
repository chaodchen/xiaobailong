
// 发布行程初始化
function init_push_trip () {
    intercity_config = {
        time_on: console._storage.get(console._halo_publish_itinerary_id('time-on')),
        time_off: console._storage.get(console._halo_publish_itinerary_id('time-off')),

        refresh_on : Number(console._storage.get(console._halo_publish_itinerary_id('refresh-on'))),
        refresh_off : Number(console._storage.get(console._halo_publish_itinerary_id('refresh-off'))),

        today : console._storage.get(console._halo_publish_itinerary_id('today')),
        tomorrow : console._storage.get(console._halo_publish_itinerary_id('tomorrow')),
        after_tomorrow : console._storage.get(console._halo_publish_itinerary_id('after-tomorrow')),

        money_min : Number(console._storage.get(console._halo_publish_itinerary_id('money-min'))),
        money_max : Number(console._storage.get(console._halo_publish_itinerary_id('money-max'))),

        exclusive : {
            state: console._storage.get(console._halo_publish_itinerary_id('exclusive')),
            people_min: Number(console._storage.get(console._halo_publish_itinerary_id('people-exclusive-min'))),
            people_max: Number(console._storage.get(console._halo_publish_itinerary_id('people-exclusive-max')))
        },
        carpooling: {
            state: console._storage.get(console._halo_publish_itinerary_id('carpooling')),
            people_min: Number(console._storage.get(console._halo_publish_itinerary_id('people-carpooling-min'))),
            people_max: Number(console._storage.get(console._halo_publish_itinerary_id('people-carpooling-max')))
        },
        
        on_theway_percentage : Number(console._storage.get(console._halo_publish_itinerary_id('on-theway-percentage'))),
        starting_point : Number(console._storage.get(console._halo_publish_itinerary_id('starting-point'))),
        end_point : Number(console._storage.get(console._halo_publish_itinerary_id('end-point'))),
    }
    console.log(intercity_config)
}
// 市内 城际初始化
function init_intercity() {
    intercity_config = {
        intercity_goods: console._storage.get(console._halo_intercity_id('intercity-goods')),
        crosscity_goods: console._storage.get(console._halo_intercity_id('crosscity-goods')),

        refresh_on : Number(console._storage.get(console._halo_intercity_id('refresh-on'))),
        refresh_off : Number(console._storage.get(console._halo_intercity_id('refresh-off'))),

        today : console._storage.get(console._halo_intercity_id('today')),
        tomorrow : console._storage.get(console._halo_intercity_id('tomorrow')),
        after_tomorrow : console._storage.get(console._halo_intercity_id('after-tomorrow')),

        time_on: console._storage.get(console._halo_intercity_id('time-on')),
        time_off: console._storage.get(console._halo_intercity_id('time-off')),

        money_min : Number(console._storage.get(console._halo_intercity_id('money-min'))),
        money_max : Number(console._storage.get(console._halo_intercity_id('money-max'))),

        starting_point : Number(console._storage.get(console._halo_intercity_id('starting-point'))),

        exclusive : {
            state: console._storage.get(console._halo_intercity_id('exclusive')),
            people_min: Number(console._storage.get(console._halo_intercity_id('people-exclusive-min'))),
            people_max: Number(console._storage.get(console._halo_intercity_id('people-exclusive-max')))
        },
        carpooling: {
            state: console._storage.get(console._halo_intercity_id('carpooling')),
            people_min: Number(console._storage.get(console._halo_intercity_id('people-carpooling-min'))),
            people_max: Number(console._storage.get(console._halo_intercity_id('people-carpooling-max')))
        },
        // on_theway_percentage : Number(console._storage.get(console._halo_intercity_id('on-theway-percentage'))),
        // end_point : Number(console._storage.get(console._halo_intercity_id('end-point'))),

    }
    console.log(intercity_config)
}

let success = false


function __refresh3() {
    do {
        let v1 = id("tvFilterName").text("智能排序").findOnce()
        if (v1) v1.parent().click()
    } while(!id("tvName").text("智能排序").exists());
    
    do {
        let v2 = id("tvName").text("智能排序").findOnce()
        if (v2) {
            v2.parent().click()
        }
    } while(!id("tvFilterName").text("智能排序").exists());
}


function swipeTop() {
    swipe(device.width/2, Math.floor(device.height*0.6), device.width/2, Math.floor(device.height*0.9), 300)
}
function swipeDown() {
    swipe(device.width/2, Math.floor(device.height*0.8), device.width/2, Math.floor(device.height*0.5), 300)
}
// order_card_recycler
function __checkTime(time, startTime, endTime) {
    console.log("time: %s", time)
    const timeParts = time.split(":");
    const hour = parseInt(timeParts[0]);
    const minute = parseInt(timeParts[1]);

    const startParts = startTime.split(":");
    const startHour = parseInt(startParts[0]);
    const startMinute = parseInt(startParts[1]);

    const endParts = endTime.split(":");
    const endHour = parseInt(endParts[0]);
    const endMinute = parseInt(endParts[1]);

    if (hour > startHour && hour < endHour) {
        console.log("[check] 时间校验成功 %s > %s && < %s", time, startTime, endTime)
        return true;
    } else if (hour === startHour && hour === endHour) {
        return minute >= startMinute && minute <= endMinute;
    } else if (hour === startHour) {
        return minute >= startMinute;
    } else if (hour === endHour) {
        return minute <= endMinute;
    } else {
        return false;
    }
}

function extractNumbersAndDecimals(inputString) {
    const regex = /(\d+\.\d+|\d+)/g;
    const matches = inputString.match(regex);
    return matches;
}

function listen_orders() {

}

function __checkDate(timestr) {
    // 今天17:15
    // 今天17:20-17:35
    if (timestr.indexOf('-')) {
        timestr = timestr.split('-')[0]
    }
    let check = false
    switch (timestr.slice(0,2)) {
        case '今天':
            if (intercity_config.today) {
                check = true
                console.info('[check] 今天校验成功')
            }
            break;
        case '明天':
            if (intercity_config.tomorrow) {
                check = true
                console.info('[check] 明天校验成功')

            }
            break;
        default:
            if (intercity_config.after_tomorrow) {
                console.info('[check] 明天以后校验成功')
                check = true
            }
    }
    if (!check) return false;
    return __checkTime(timestr.slice(-5), intercity_config.time_on, intercity_config.time_off)
}

function __checkEndPointDistance(distancestr) {
    let distance_now = Number(extractNumbersAndDecimals(distancestr)[0])
    if (distance_now <= intercity_config.end_point) {
        console.info('[check] 终点校验成功 %d <= %d', distance_now, intercity_config.end_point)
        return true
    } else {
        return false
    }
}

function __checkMoney(moneystr) {
    let moneystr_now = Number(extractNumbersAndDecimals(moneystr)[0])
    if (moneystr_now >= intercity_config.money_min && moneystr_now <= intercity_config.money_max) {
        console.info('[check] 金额校验成功 %d >= %d && <= %d', moneystr_now,intercity_config.money_min, intercity_config.money_max)
        return true
    } else {
        return false
    }
}

function __checkStartingPointDistance(starting_point) {
    starting_point = Number(extractNumbersAndDecimals(starting_point)[0])
    console.log("起点距离: %d", starting_point)
    if (starting_point <= intercity_config.starting_point) {
        console.info("[check] 起点距离校验成功 %d <= %d", starting_point, intercity_config.starting_point)
        return true
    } else {
        return false
    }
}


// 订单类型check 和人数
function __checkTargetDistance(targetstr) {
    // 人数类型
    console.log("targetstr: %s", targetstr)
    let headcount_now = Number(extractNumbersAndDecimals(targetstr)[0])
    if (intercity_config.exclusive.state && targetstr.slice(0, 2) == '独享') {
        console.log('[check] 独享校验成功')
        if (headcount_now >= intercity_config.exclusive.people_min && 
            headcount_now <= intercity_config.exclusive.people_max) {
                console.info("[check] 人数校验成功 %d >= %d && <= %d", headcount_now, intercity_config.exclusive.people_min, intercity_config.exclusive.people_max)
                return true
            }
    }
    
    if (intercity_config.carpooling.state && targetstr.slice(0, 2) == '拼座') {
        console.log('[check] 拼座校验成功')
        if (headcount_now >= intercity_config.carpooling.people_min &&
            headcount_now <= intercity_config.carpooling.people_max) {
                console.info("[check] 人数校验成功 %d >= %d && <= %d", headcount_now, intercity_config.carpooling.people_min, intercity_config.carpooling.people_max)
                return true
            }
    }
    return false
}

// 顺路cheuck
function __checkOnTheway(ontheway) {
    ontheway = Number(extractNumbersAndDecimals(ontheway)[0])
    if (ontheway >= intercity_config.on_theway_percentage) {
        console.log('[check] 顺路校验成功 %d >= %d', ontheway, intercity_config.on_theway_percentage)
        return true
    } else {
        return false
    }
}

function __refresh1() {
    let filter = id('btnRefresh').findOnce()
    if (!filter) return
    filter.click()
    // sleep(300)
    // let x = filter.bounds().centerX()
    // let y = filter.bounds().centerY() + Math.floor((device.width / 1080 ) * 140)
    // click(x, y)
    // sleep(300)
}

function __refresh2() {
    let rvlist = id('rv_route_list').findOnce()
    if (!rvlist) return
    if (rvlist.childCount() < 2) return;
    if (!rvlist.child(0).click()) return;
}

// new 市内 城际 常用路线 发布形成
function newIntercity(type) {
    success = false
    while (1) {
        // 城际 跨城
        if (type == 1) {
            let intercityTab = null
            if (intercity_config.intercity_goods) {
                intercityTab = id('tvNearPaxClick').findOnce()
            } else if (intercity_config.crosscity_goods) {
                intercityTab = id('tvAcrossPaxClick').findOnce()
            }
            if (!intercityTab) continue
            if (intercityTab.click()) break
        // 发布行程 todo
        } else if (type == 2) {
            // let intercityTab = null
            // if (intercity_config.auto_sorting) {
            //     intercityTab = id('sfc_drv_wait_sort_button').text('智能排序').findOnce()
            // } else if (intercity_config.on_theway_first) {
            //     intercityTab = id('sfc_drv_wait_sort_button').text('顺路优先').findOnce()
            // } else if (intercity_config.grade_down) {
            //     intercityTab = id('sfc_drv_wait_sort_button').text('价格降序').findOnce()
            // } else if (intercity_config.closest_starting_point) {
            //     intercityTab = id('sfc_drv_wait_sort_button').text('起点最近').findOnce()
            // }
            // if (!intercityTab) continue
            // if (intercityTab.click()) break
            break
        }
    }
    sleep(1000)
    do {
        console.log('开始刷新')
        if (currentActivity().indexOf('com.hellobike') == -1) continue;

        // 刷新
        if (type == 1) {
            __refresh1()
        } else if (type == 2){
            console.log('下拉刷新')
            __refresh3()
        }
        sleep(random(intercity_config.refresh_on, intercity_config.refresh_off))
        let goodListViwe = null
        // 遍历
        do {
            if (success) break;
            goodListViwe = null
            if (type == 1) {
                goodListViwe = id('rvMatchOrders').findOnce()
            } else if (type == 2) {
                goodListViwe = id('orderRecycler').findOnce()
            }
            if (!goodListViwe) break;
            goodListViwe.children().forEach(function(child, index) {
                console.log('开始遍历')
                if (success) return;
                if (!child) return;
                if (child.className() != 'android.widget.RelativeLayout') return
                console.log('11111')
                let time_title = child.findOne(id('tvDate'))
                // let distance = child.find(id('unordered_list_right_tv_sub'))
                let startpoint_distance = null
                if (intercity_config.intercity_goods || type == 2) {
                    startpoint_distance = child.findOne(id('tvStartAddress'))
                } else if (intercity_config.crosscity_goods) {
                    startpoint_distance = child.findOne(id('tvStartDistanceCross'))
                }
                
                let people_count = child.findOne(id('tvDriverPeopleCount')) // 
                let pooling = child.findOne(id('tvDriverPooling'))          // 独享或拼座
                if (!pooling) return
                console.log('22222')

                pooling = pooling.text()
                let money = child.findOne(id('tvAmount'))
                
                if (pooling == "独享   拼座") {
                    // 区分独享还是拼座
                    if (intercity_config.exclusive.state) {
                        money = child.findOne(id('tvAmount'))
                        console.log('独享')
                        pooling = "独享"
                    } else if (intercity_config.carpooling.state) {
                        money = child.findOne(id('simuAmountContainer')).child(0)
                        console.log('拼座')
                        pooling = "拼座"
                    }
                }
                console.log('2.3333')
                if (!time_title || !startpoint_distance || !people_count || !money) return;
                if (type == 2) {
                    let end_point = null, ontheway_percentage = null
                    end_point = child.findOne(id("tvEndDistance"))
                    ontheway_percentage = child.findOne(id("tvHitchPercent"))
                    console.log('666666')
                    if (!end_point || !ontheway_percentage) return;
                    if (!__checkEndPointDistance(end_point.text())) return;
                    if (!__checkOnTheway(ontheway_percentage.text())) return;
                    console.log('7777777')
                }
                

                console.log('2.5555')
                if (!__checkDate(time_title.text())) return;
                if (!__checkStartingPointDistance(startpoint_distance.text())) return;
                if (!__checkTargetDistance(pooling + people_count.text())) return;
                if (!__checkMoney(money.text())) return;
                console.log('33333')

                // 符合所有条件
                console.log('开始邀请')
                do {
                    child.click()
                } while(!id("ivOrderBack").exists());
                let click_count = 0
                do {
                    if (text('确认同行').exists()) click('确认同行');
                    if (text('确定').exists()) click('确定');
                    if (text('请确认接单类型').exists()) {
                        if (intercity_config.exclusive.state) {
                            click('独享')
                        } else if (intercity_config.carpooling.state) {
                            click('拼座')
                        }
                        click('确认')
                    }
                    click_count++;
                    // console.log("click_count: %d", click_count)
                } while (click_count < 500);
                success = true
            })
            break
        } while(goodListViwe != null && !success);
    } while(!success);
    console.log('接单成功')
    console._play_music()
}

function intercity() {
    newIntercity(1)
}

function pushTrip() {
    newIntercity(2)
}

function listen_orders() {

}

function init_listen_orders() {
    intercity_config = {

        listen_notice: console._storage.get(console._didi_popup_id('listen-notice')),
    
        time_on: console._storage.get(console._didi_popup_id('time-on')),
        time_off: console._storage.get(console._didi_popup_id('time-off')),
    
        today : console._storage.get(console._didi_popup_id('today')),
        tomorrow : console._storage.get(console._didi_popup_id('tomorrow')),
        after_tomorrow : console._storage.get(console._didi_popup_id('after-tomorrow')),
    
        money_min : Number(console._storage.get(console._didi_popup_id('money-min'))),
    
        exclusive : {
            state: console._storage.get(console._didi_popup_id('exclusive')),
            people_min: Number(console._storage.get(console._didi_popup_id('people-exclusive-min'))),
            people_max: Number(console._storage.get(console._didi_popup_id('people-exclusive-max')))
        },
        carpooling: {
            state: console._storage.get(console._didi_popup_id('carpooling')),
            people_min: Number(console._storage.get(console._didi_popup_id('people-carpooling-min'))),
            people_max: Number(console._storage.get(console._didi_popup_id('people-carpooling-max')))
        },
        
        on_theway_percentage : Number(console._storage.get(console._didi_popup_id('on-theway-percentage'))),
    }
    console.log(intercity_config)
}


module.exports = {
    init_intercity : init_intercity,
    intercity : intercity,
    init_push_trip: init_push_trip,
    push_trip: pushTrip,
}