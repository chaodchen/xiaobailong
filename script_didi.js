// 发布行程初始化
function init_push_trip () {
    intercity_config = {

        swipe_ref: console._storage.get(console._didi_publish_itinerary_id('swipe-ref')),
        switch_ref: console._storage.get(console._didi_publish_itinerary_id('switch-ref')),
    
        auto_sorting: console._storage.get(console._didi_publish_itinerary_id('auto-sorting')),
        on_theway_first: console._storage.get(console._didi_publish_itinerary_id('on-theway-first')),
        grade_down: console._storage.get(console._didi_publish_itinerary_id('grade-down')),
        closest_starting_point: console._storage.get(console._didi_publish_itinerary_id('closest-starting-point')),

        refresh_on : Number(console._storage.get(console._didi_publish_itinerary_id('refresh-on'))),
        refresh_off : Number(console._storage.get(console._didi_publish_itinerary_id('refresh-off'))),

        today : console._storage.get(console._didi_publish_itinerary_id('today')),
        tomorrow : console._storage.get(console._didi_publish_itinerary_id('tomorrow')),
        after_tomorrow : console._storage.get(console._didi_publish_itinerary_id('after-tomorrow')),

        exclusive_money_min : Number(console._storage.get(console._didi_publish_itinerary_id('exclusive-money-min'))),
        exclusive_money_max : Number(console._storage.get(console._didi_publish_itinerary_id('exclusive-money-max'))),
        exclusive_starting_point : Number(console._storage.get(console._didi_publish_itinerary_id('exclusive-starting-point'))),
        exclusive_time_on: console._storage.get(console._didi_publish_itinerary_id('exclusive-time-on')),
        exclusive_time_off: console._storage.get(console._didi_publish_itinerary_id('exclusive-time-off')),
        exclusive_end_point : Number(console._storage.get(console._didi_publish_itinerary_id('exclusive-end-point'))),
        exclusive_on_theway_percentage : Number(console._storage.get(console._didi_publish_itinerary_id('exclusive-on-theway-percentage'))),

        carpooling_money_min : Number(console._storage.get(console._didi_publish_itinerary_id('carpooling-money-min'))),
        carpooling_money_max : Number(console._storage.get(console._didi_publish_itinerary_id('carpooling-money-max'))),
        carpooling_starting_point : Number(console._storage.get(console._didi_publish_itinerary_id('carpooling-starting-point'))),
        carpooling_time_on: console._storage.get(console._didi_publish_itinerary_id('carpooling-time-on')),
        carpooling_time_off: console._storage.get(console._didi_publish_itinerary_id('carpooling-time-off')),
        carpooling_end_point : Number(console._storage.get(console._didi_publish_itinerary_id('carpooling-end-point'))),
        carpooling_on_theway_percentage : Number(console._storage.get(console._didi_publish_itinerary_id('carpooling-on-theway-percentage'))),

        exclusive : {
            state: console._storage.get(console._didi_publish_itinerary_id('exclusive')),
            people_min: Number(console._storage.get(console._didi_publish_itinerary_id('people-exclusive-min'))),
            people_max: Number(console._storage.get(console._didi_publish_itinerary_id('people-exclusive-max')))
        },
        carpooling: {
            state: console._storage.get(console._didi_publish_itinerary_id('carpooling')),
            people_min: Number(console._storage.get(console._didi_publish_itinerary_id('people-carpooling-min'))),
            people_max: Number(console._storage.get(console._didi_publish_itinerary_id('people-carpooling-max')))
        },
        

    }
    console.log(intercity_config)
}
// 市内 城际初始化
function init_intercity() {
    intercity_config = {
        intercity_goods: console._storage.get(console._didi_intercity_id('intercity-goods')),
        crosscity_goods: console._storage.get(console._didi_intercity_id('crosscity-goods')),
        common_route_goods: console._storage.get(console._didi_intercity_id('common-route-goods')),

        only_ref: console._storage.get(console._didi_intercity_id('only-ref')),
        two_ref: console._storage.get(console._didi_intercity_id('two-ref')),

        refresh_on : Number(console._storage.get(console._didi_intercity_id('refresh-on'))),
        refresh_off : Number(console._storage.get(console._didi_intercity_id('refresh-off'))),

        today : console._storage.get(console._didi_intercity_id('today')),
        tomorrow : console._storage.get(console._didi_intercity_id('tomorrow')),
        after_tomorrow : console._storage.get(console._didi_intercity_id('after-tomorrow')),

        exclusive_money_min : Number(console._storage.get(console._didi_intercity_id('exclusive-money-min'))),
        exclusive_money_max : Number(console._storage.get(console._didi_intercity_id('exclusive-money-max'))),
        exclusive_starting_point : Number(console._storage.get(console._didi_intercity_id('exclusive-starting-point'))),
        exclusive_time_on: console._storage.get(console._didi_intercity_id('exclusive-time-on')),
        exclusive_time_off: console._storage.get(console._didi_intercity_id('exclusive-time-off')),
        exclusive_on_theway_percentage : Number(console._storage.get(console._didi_intercity_id('exclusive-on-theway-percentage'))),
        exclusive_end_point : Number(console._storage.get(console._didi_intercity_id('exclusive-end-point'))),
        
        carpooling_money_min : Number(console._storage.get(console._didi_intercity_id('carpooling-money-min'))),
        carpooling_money_max : Number(console._storage.get(console._didi_intercity_id('carpooling-money-max'))),
        carpooling_starting_point : Number(console._storage.get(console._didi_intercity_id('carpooling-starting-point'))),
        carpooling_time_on: console._storage.get(console._didi_intercity_id('carpooling-time-on')),
        carpooling_time_off: console._storage.get(console._didi_intercity_id('carpooling-time-off')),
        carpooling_on_theway_percentage : Number(console._storage.get(console._didi_intercity_id('carpooling-on-theway-percentage'))),
        carpooling_end_point : Number(console._storage.get(console._didi_intercity_id('carpooling-end-point'))),

        exclusive : {
            state: console._storage.get(console._didi_intercity_id('exclusive')),
            people_min: Number(console._storage.get(console._didi_intercity_id('people-exclusive-min'))),
            people_max: Number(console._storage.get(console._didi_intercity_id('people-exclusive-max')))
        },
        carpooling: {
            state: console._storage.get(console._didi_intercity_id('carpooling')),
            people_min: Number(console._storage.get(console._didi_intercity_id('people-carpooling-min'))),
            people_max: Number(console._storage.get(console._didi_intercity_id('people-carpooling-max')))
        },
        

        switch_sort : Number(console._storage.get(console._didi_intercity_id('switch-sort'))),
        thirty_minute : Number(console._storage.get(console._didi_intercity_id('thirty-minute'))),
    }
    console.log(intercity_config)
}

let exclusive_or_carpooling = 0

let tabs = []

const idfix = 'com.sdu.didi.psnger:id/'
function swipeTop() {
    swipe(device.width/2, Math.floor(device.height*0.5), device.width/2, Math.floor(device.height*0.9), 500)
    while(text('加载中...').exists());
}
function swipeDown() {
    swipe(device.width/2, Math.floor(device.height*0.9), device.width/2, Math.floor(device.height*0.5), 500)
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
    if (exclusive_or_carpooling == 0) {
        return __checkTime(timestr.slice(-5), intercity_config.exclusive_time_on, intercity_config.exclusive_time_off)
    } else {
        return __checkTime(timestr.slice(-5), intercity_config.carpooling_time_on, intercity_config.carpooling_time_off)

    }
}

function __checkEndPointDistance(distancestr) {
    let distance_now = Number(extractNumbersAndDecimals(distancestr)[0])
    if (exclusive_or_carpooling == 0) {
        if (distance_now <= intercity_config.exclusive_end_point) {
            console.info('[check] 终点校验成功 %d <= %d', distance_now, intercity_config.exclusive_end_point)
            return true
        } else {
            return false
        }
    } else {
        if (distance_now <= intercity_config.carpooling_end_point) {
            console.info('[check] 终点校验成功 %d <= %d', distance_now, intercity_config.carpooling_end_point)
            return true
        } else {
            return false
        }
    }

}

function __checkMoney(moneystr) {
    let moneystr_now = Number(extractNumbersAndDecimals(moneystr))
    if (exclusive_or_carpooling == 0) {
        if (moneystr_now >= intercity_config.exclusive_money_min && moneystr_now <= intercity_config.exclusive_money_max) {
            console.info('[check] 金额校验成功 %d >= %d && <= %d', moneystr_now,intercity_config.exclusive_money_min, intercity_config.exclusive_money_max)
            return true
        } else {
            console.info('[check] 金额校验失败 %d >= %d && <= %d', moneystr_now,intercity_config.exclusive_money_min, intercity_config.exclusive_money_max)
            return false
        }
    } else {
        if (moneystr_now >= intercity_config.carpooling_money_min && moneystr_now <= intercity_config.carpooling_money_max) {
            console.info('[check] 金额校验成功 %d >= %d && <= %d', moneystr_now,intercity_config.carpooling_money_min, intercity_config.carpooling_money_max)
            return true
        } else {
            console.info('[check] 金额校验失败 %d >= %d && <= %d', moneystr_now,intercity_config.carpooling_money_min, intercity_config.carpooling_money_max)
            return false
        }
    }

}

function __checkStartingPointDistance(starting_point) {
    starting_point = Number(extractNumbersAndDecimals(starting_point))
    console.log("起点距离: %d", starting_point)
    if (exclusive_or_carpooling == 0) {
        if (starting_point <= intercity_config.exclusive_starting_point) {
            console.info("[check] 起点距离校验成功 %d <= %d", starting_point, intercity_config.exclusive_starting_point)
            return true
        } else {
            return false
        }
    } else {
        if (starting_point <= intercity_config.carpooling_starting_point) {
            console.info("[check] 起点距离校验成功 %d <= %d", starting_point, intercity_config.carpooling_starting_point)
            return true
        } else {
            return false
        }
    }

}

// check人数
function __checkTargetDistance(targetstr) {
    // 人数类型
    console.log("targetstr: %s", targetstr)
    let headcount_now = Number(extractNumbersAndDecimals(targetstr)[0])
    // 总里程
    let distance_now = extractNumbersAndDecimals(targetstr)[1]
    if (intercity_config.exclusive.state && exclusive_or_carpooling == 0) {
        console.log('[check] 独享校验成功')
        if (headcount_now >= intercity_config.exclusive.people_min && 
            headcount_now <= intercity_config.exclusive.people_max) {
                console.info("[check] 人数校验成功 %d >= %d && <= %d", headcount_now, intercity_config.exclusive.people_min, intercity_config.exclusive.people_max)
                return true
            }
    }
    
    if (intercity_config.carpooling.state && exclusive_or_carpooling == 1) {
        console.log('[check] 愿拼校验成功')
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
    console.log("ontheway: " + ontheway)
    ontheway = Number(extractNumbersAndDecimals(ontheway)[0])
    if (exclusive_or_carpooling == 0) {
        if (ontheway >= intercity_config.exclusive_on_theway_percentage) {
            console.log('[check] 顺路校验成功 %d >= %d', ontheway, intercity_config.exclusive_on_theway_percentage)
            return true
        } else {
            return false
        }
    } else {
        if (ontheway >= intercity_config.carpooling_on_theway_percentage) {
            console.log('[check] 顺路校验成功 %d >= %d', ontheway, intercity_config.carpooling_on_theway_percentage)
            return true
        } else {
            return false
        }
    }

}

function __refresh1() {
    let filter = id(idfix+'tv_filter_name').text('智能排序').findOnce()
    if (!filter) {
        filter = id(idfix+'tv_filter_name').text('出发时间-从早到晚').findOnce()
    }
    if (!filter) {
        filter = id(idfix+'tv_filter_name').text('订单价格-从高到低').findOnce()
    }
    if (!filter) {
        filter = id(idfix+'tv_filter_name').text('接驾距离-从近到远').findOnce()
    }
    if (!filter) return
    if (!filter.click()) return
    sleep(300)
    let x = filter.bounds().centerX()
    let y = filter.bounds().centerY() + Math.floor((device.width / 1080 ) * 140)
    click(x, y)
    // sleep(300)
}

function __refresh2() {
    let rvlist = id(idfix+'rv_route_list').findOnce()
    if (!rvlist) return
    if (intercity_config.only_ref) {
        // if (rvlist.childCount() < 2) return;
        if (!rvlist.child(0).click()) return;
    } else if (intercity_config.two_ref) {
        // if (rvlist.childCount() < 3) return;
        if (!rvlist.child(1).click()) return;
        if (!rvlist.child(0).click()) return;
    }

}

function ref_switch(start, end) {
    sleep(1)
    let start_switch = id(idfix+'sfc_drv_wait_sort_button').text(start).findOnce()
    sleep(1)
    let end_switch = id(idfix+'sfc_drv_wait_sort_button').text(end).findOnce()
    sleep(1)
    if (start_switch && end_switch) {
        if (start_switch.click()) {
            sleep(1)
            while(!end_switch.click());
        }
    }
}

function __refresh4() {
    ref_switch(tabs[1], tabs[0])
    while(text('加载中...').exists());
}

function __refresh6 () {
    let refview = id(idfix+"tv_tag_name").text("30分钟内出发").findOnce()
    if (refview && refview.click()) {
        while(!refview.click());
    }
}

// new 市内 城际 常用路线 发布形成 
function newIntercity(type) {
    let success = false
    let ref_x = 0
    let ref_y = 0

    


    try {
        if (console._livethread && console._livethread.isAlive()) {
            console._livethread.interrupt()
        }
    } catch (e) {
        console.error(e)
    }

    console._livethread = threads.start(function(){
        while (1) {
            let closebutton = id(idfix+'popClose').findOnce()

            if (!closebutton) {
                closebutton = id(idfix+'iv_close').findOnce()
            }
            if (closebutton) closebutton.click()
            sleep(500)
        }
    })

    success = false

    while (1) {
        if (type == 1) {
            let intercityTab = null
            if (intercity_config.intercity_goods) {
                intercityTab = id(idfix+'sfc_tab_item_text').text('市内订单').findOnce()
            } else if (intercity_config.crosscity_goods) {
                intercityTab = id(idfix+'sfc_tab_item_text').text('跨城订单').findOnce()
            } else if (intercity_config.common_route_goods) {
                intercityTab = id(idfix+'sfc_tab_item_text').text('常用路线订单').findOnce()
            }
            if (!intercityTab) continue
            if (intercityTab.parent().click()) break
        } else if (type == 2) {
            break
        }
    }
    sleep(1000)

    do {
        // 刷新
        if (type == 1) {
            if (intercity_config.crosscity_goods) {
                __refresh1()
            } else if (intercity_config.intercity_goods) {
                if (intercity_config.switch_sort) {
                    __refresh1()
                } else if (intercity_config.thirty_minute) {
                    __refresh6()
                }
            } else if (intercity_config.common_route_goods) {
                __refresh2()
            }
        } else if (type == 2){
            let ref_backicon = id("back_icon").findOne(3 * 1000)
            if (ref_backicon != null) {
                ref_x = ref_backicon.bounds().centerX() * 3
                ref_y = ref_backicon.bounds().centerY()
                console.log("ref_x: %d, ref_y: %d", ref_x, ref_y)
            }
            // 区分下拉刷新和切换刷新
            if (intercity_config.swipe_ref) {               // 下拉刷新
                swipeTop()
            } else if (intercity_config.switch_ref) {       // 切换刷新
                __refresh4()
            }
        }


        if (type == 2) click(ref_x, ref_y);
        console.log('开始延迟')
        sleep(random(intercity_config.refresh_on, intercity_config.refresh_off))
        // 遍历
        // if (success) break;
        console.log('订单列表 start')
        let goodListViwe = id(idfix+'order_card_recycler').findOne(3 * 1000)
        console.log('订单列表 end')

        if (goodListViwe == null) {
            console.log('找不到订单列表')
            continue
        }
        console.log("订单数量: %d", goodListViwe.childCount())
        goodListViwe.children().forEach(function(child, index) {
            if (success || !child) return;
            
            // 时间
            let time_title = child.findOne(id(idfix+'sfc_order_card_time_title'))
            // 兼容新版的时间id控件
            if (time_title == null) time_title = child.findOne(id(idfix+'sfc_new_order_card_time_title'))
            
            // 起点和终点距离
            let distance = child.find(id(idfix+'unordered_list_right_tv_sub'))
            if (distance.length < 2) {
                distance = []
                let distance_0 = child.findOne(id(idfix+'from_tv_tag'))
                let distance_1 = child.findOne(id(idfix+'to_tv_tag'))
                if (distance_0) distance.push(distance_0)
                if (distance_1) distance.push(distance_1)
                console.log("distance.length: %d", distance.length)
            }
            
            // 订单里程
            let target_distance = child.findOne(id(idfix+'sfc_order_card_tips_content'))

            // 订单金额
            let money = child.findOne(id(idfix+'sfc_order_price_content'))

            if (!time_title) {
                console.log('时间找不到')
                return
            }
            if (distance.length < 2) {
                console.log('distance < 2');
                return
            }
            if (!target_distance) {
                console.log('目标距离');
                return
            }
            if (!money) {
                console.log('金额没找到');
                return
            }

            // 先判断独享和拼单
            if (target_distance.text().slice(2, 4) == '独享') {
                exclusive_or_carpooling = 0
            } else if (target_distance.text().slice(2, 4) == '愿拼') {
                exclusive_or_carpooling = 1
            }
            
            if (!__checkTargetDistance(target_distance.text())) return;
            if (!__checkDate(time_title.text())) return;
            if (!__checkStartingPointDistance(distance[0].text())) return;
            if (type == 2) {
                if (!__checkEndPointDistance(distance[1].text())) return;
            }
            if (!__checkMoney(money.text())) return;

            // 常用路线订单需要校验顺路之类的东西
            if (type == 1 && intercity_config.common_route_goods) {
                let ontheway = child.findOne(id(idfix+'sfc_order_card_degree_title'))
                if (!ontheway) ontheway = child.findOne(id(idfix+'sfc_new_order_card_degree_title'))
                if (!ontheway) return;

                if (!__checkOnTheway(ontheway.text())) return;
                let distance_end = distance[1]
                if (!distance_end) return;
                if (!__checkEndPointDistance(distance_end.text())) return;
            }

            // 符合所有条件 开始接单
            console.log('开始邀请')
            let invitation = child.findOne(id(idfix+'sfc_wait_list_send_invit_button'))
            let istimeout = false
            
            let temp_th = threads.start(function(){
                sleep(6 * 1000)
                istimeout = true
            })

            let okclick = false
            if (invitation && invitation.click()) {
                while (!istimeout) {
                    console.log('aaaaaaaaaaaaa')
                    let ok1 = id(idfix + "btn_main_title").text('确认').findOne(3 * 1000)
                    if (ok1) {
                        ok1.parent().parent().click()
                        okclick = true
                        continue
                    }
                    let zkk = id(idfix + "btn_main_title").text('再看看').findOnce()
                    if (zkk) zkk.parent().parent().click();

                    if (okclick) {
                        if (id(idfix+"status_detail_btn").exists() ||
                            id(idfix+"detail_title").exists()) {
                            success = true
                            console.log('邀请成功')
                            break
                        }
                    }
                }
            }

            try {
                if (temp_th && temp_th.isAlive()) {
                    console.log('中断定时器')
                    temp_th.interrupt()
                }
            } catch (e) {
                console.error(e)
            }

            if (success == false) {
                if (type == 2 ) {
                    while (!id(idfix+"back_icon").exists()) {
                        back()
                        sleep(2000)
                    }
                } else if (type == 1) {
                    while (!id(idfix+"ch_tab_name").text("顺风车").exists()) {
                        back()
                        sleep(2000)
                    }
                }
            }
        })
    } while(!success);
    console.log('接单成功')
    console._play_music()
}

function intercity() {
    newIntercity(1)
}

function pushTrip() {
    console.log('开始发布行程')
    if (intercity_config.auto_sorting) tabs.push('智能排序')
    if (intercity_config.on_theway_first) tabs.push('顺路优先')
    if (intercity_config.grade_down) tabs.push('价格降序')
    if (intercity_config.closest_starting_point) tabs.push('起点最近')
    if (tabs.length == 1) tabs.push('起点最近')
    if (tabs.length == 0) {
        tabs.push('智能排序')
        tabs.push('起点最近')
    }
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
    intercity: intercity,
    init_intercity: init_intercity,
    init_push_trip: init_push_trip,
    push_trip: pushTrip,
    listen_orders: listen_orders,
    init_listen_orders: init_listen_orders
}