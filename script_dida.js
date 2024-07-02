
let exclusive_or_carpooling = 0

let tabs = []

// 刷新控件
let refresh_view = [{},{},{},{}]
// 全局类型
let global_type = 1
const idfix = 'com.didapinche.booking:id/'
let intercity_config = null
// 市内 城际初始化
function init_intercity() {
    intercity_config = {
        intercity_goods: console._storage.get(console._dida_intercity_id('intercity-goods')),
        crosscity_goods: console._storage.get(console._dida_intercity_id('crosscity-goods')),
        common_route_goods: console._storage.get(console._dida_intercity_id('common-route-goods')),
        publish_itinerary: console._storage.get(console._dida_intercity_id('publish_itinerary')),


        refresh_on : Number(console._storage.get(console._dida_intercity_id('refresh-on'))),
        refresh_off : Number(console._storage.get(console._dida_intercity_id('refresh-off'))),

        today : console._storage.get(console._dida_intercity_id('today')),
        tomorrow : console._storage.get(console._dida_intercity_id('tomorrow')),
        after_tomorrow : console._storage.get(console._dida_intercity_id('after-tomorrow')),

        exclusive_money_min : Number(console._storage.get(console._dida_intercity_id('exclusive-money-min'))),
        exclusive_money_max : Number(console._storage.get(console._dida_intercity_id('exclusive-money-max'))),
        exclusive_starting_point : Number(console._storage.get(console._dida_intercity_id('exclusive-starting-point'))),
        exclusive_time_on: console._storage.get(console._dida_intercity_id('exclusive-time-on')),
        exclusive_time_off: console._storage.get(console._dida_intercity_id('exclusive-time-off')),
        exclusive_on_theway_percentage : Number(console._storage.get(console._dida_intercity_id('exclusive-on-theway-percentage'))),
        exclusive_end_point : Number(console._storage.get(console._dida_intercity_id('exclusive-end-point'))),
        
        carpooling_money_min : Number(console._storage.get(console._dida_intercity_id('carpooling-money-min'))),
        carpooling_money_max : Number(console._storage.get(console._dida_intercity_id('carpooling-money-max'))),
        carpooling_starting_point : Number(console._storage.get(console._dida_intercity_id('carpooling-starting-point'))),
        carpooling_time_on: console._storage.get(console._dida_intercity_id('carpooling-time-on')),
        carpooling_time_off: console._storage.get(console._dida_intercity_id('carpooling-time-off')),
        carpooling_on_theway_percentage : Number(console._storage.get(console._dida_intercity_id('carpooling-on-theway-percentage'))),
        carpooling_end_point : Number(console._storage.get(console._dida_intercity_id('carpooling-end-point'))),

        exclusive : {
            state: console._storage.get(console._dida_intercity_id('exclusive')),
            people_min: Number(console._storage.get(console._dida_intercity_id('people-exclusive-min'))),
            people_max: Number(console._storage.get(console._dida_intercity_id('people-exclusive-max')))
        },
        carpooling: {
            state: console._storage.get(console._dida_intercity_id('carpooling')),
            people_min: Number(console._storage.get(console._dida_intercity_id('people-carpooling-min'))),
            people_max: Number(console._storage.get(console._dida_intercity_id('people-carpooling-max')))
        },
        
    }
    console.log(intercity_config)
}

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

// 获取订单列表
function getItemList() {
    let result_array = []
    let goodListViwe = id(idfix+'order_card_recycler').findOne(3 * 1000)
    if (goodListViwe == null) return result_array;
    goodListViwe.children().forEach(function(child, index) {
        if (child == null) return;
        let result = {}
        try {
            if (global_type == 2) {
                // 顺路
                result.ontheway = child.child(0).child(0).child(0).text()
                // 时间     
                result.date = child.child(0).child(0).child(1).text()
                // 终点距离
                result.distance_of_end = child.child(0).child(1).child(6).text()
            } else if (global_type == 1) {
                if (intercity_config.intercity_goods || 
                    intercity_config.crosscity_goods) {
                    // 顺路
                    result.ontheway = null
                    // 时间     
                    result.date = child.child(0).child(0).child(0).text()
                    // 终点距离
                    result.distance_of_end = null
                } else if (intercity_config.common_route_goods) {
                    // 顺路
                    result.ontheway = child.child(0).child(0).child(0).text()
                    // 时间     
                    result.date = child.child(0).child(0).child(1).text()
                    // 终点距离
                    result.distance_of_end = child.child(0).child(1).child(6).text()
                }
            }
            // 起点距离
            result.distance_of_start = child.child(0).child(1).child(2).text()
            // 独享、订单里程
            result.type_and_mileage =  child.child(0).child(5).child(0).child(0).text()
            // 金额
            result.gold = child.child(0).child(3).child(0).child(0).text()
            // 发送按钮
            result.send_button = send_button = child.child(0).child(8)
        } catch (err) {
            result = null
        }
        result_array.push(result)
    })
    return result_array;
}

function waitWorkActivity() {
    for(;;) {
        if (intercity_config.intercity_goods || intercity_config.crosscity_goods) {
            let intercityTab = null
            if (intercity_config.intercity_goods) {
                // 市内
                intercityTab = id(idfix+'ivTitleInnerCity').findOnce()
            } else if (intercity_config.crosscity_goods) {
                // 城际
                intercityTab = id(idfix+'ivTitleInterCity').findOnce()
            }
            if (!intercityTab) continue
            if (intercityTab.click()) break
        } else if (intercity_config.common_route_goods) {
            
        } else if (intercity_config.publish_itinerary) {

        }
    }
}

function initOtherThreads() {
    try {
        if (console._livethread && console._livethread.isAlive()) console._livethread.interrupt();
    } catch (e) {
        console.error(e)
    }
    console._livethread = threads.start(function(){
        for(;;) {
            let closebutton = id(idfix+'popClose').findOnce() || id(idfix+'iv_close').findOnce();
            if (closebutton != null) closebutton.click()
            sleep(1 * 1000)
        }
    })
}

function refresh() {
    try {
        if (global_type == 1) {
            if (intercity_config.intercity_goods) {
                if (intercity_config.switch_sort) {
                    // 切换刷新
                    if (refresh_view[0].bt1.click()) {
                        sleep(500)
                        let x = refresh_view[0].bt1.bounds().centerX()
                        let y = refresh_view[0].bt1.bounds().centerY() + Math.floor((device.width / 1080 ) * 140)
                        click(x, y)
                    }
                } else if (intercity_config.thirty_minute) {
                    // 3分钟
                    refresh_view[0].bt2.click()
                }
            } else if (intercity_config.crosscity_goods) {
                if (intercity_config.switch_sort2) {
                    // 切换刷新
                    if (refresh_view[1].bt1.click()) {
                        sleep(300)
                        let x = refresh_view[1].bt1.bounds().centerX()
                        let y = refresh_view[1].bt1.bounds().centerY() + Math.floor((device.width / 1080 ) * 140)
                        click(x, y)
                    }
                } else if (intercity_config.paid) {
                    // 已支付
                    refresh_view[1].bt2.click()
                }
            } else if (intercity_config.common_route_goods) {
                if (!refresh_view[2].list1) return false
                if (intercity_config.only_ref) {
                    // if (rvlist.childCount() < 2) return;
                    if (!refresh_view[2].list1.child(0).click()) return;
                } else if (intercity_config.two_ref) {
                    // if (rvlist.childCount() < 3) return;
                    if (!refresh_view[2].list1.child(1).click()) return;
                    if (!refresh_view[2].list1.child(0).click()) return;
                }
            }
        } else if (global_type == 2) {
            if (intercity_config.swipe_ref) {               // 下拉刷新
                swipeTop()
            } else if (intercity_config.switch_ref) {       // 切换刷新
                if (refresh_view[3].bt1.click()) {
                    sleep(1)
                    while(!refresh_view[3].bt2.click());
                }
            }
        }
    } catch (e) {
        console.error(e)
        console.error('刷新失败')
        return false

    }
    return true
}

function initRefreshViews() {
    if (global_type == 1) {
        if (intercity_config.intercity_goods) {
            refresh_view[0].bt1 = id(idfix+'tv_filter_name').text('智能排序').findOnce()
            if (!refresh_view[0].bt1) refresh_view[0].bt1 = id(idfix+'tv_filter_name').text('出发时间-从早到晚').findOnce()
            if (!refresh_view[0].bt1) refresh_view[0].bt1 = id(idfix+'tv_filter_name').text('订单价格-从高到低').findOnce()
            if (!refresh_view[0].bt1) refresh_view[0].bt1 = id(idfix+'tv_filter_name').text('接驾距离-从近到远').findOnce()
            refresh_view[0].bt2 = id(idfix+"bt_refresh").findOnce()
            if (!refresh_view[0].bt2 || !refresh_view[0].bt1) return false
        } else if (intercity_config.crosscity_goods) {
            refresh_view[1].bt1 = id(idfix+'tv_filter_name').text('智能排序').findOnce()
            if (!refresh_view[1].bt1) refresh_view[1].bt1 = id(idfix+'tv_filter_name').text('出发时间-从早到晚').findOnce()
            if (!refresh_view[1].bt1) refresh_view[1].bt1 = id(idfix+'tv_filter_name').text('订单价格-从高到低').findOnce()
            if (!refresh_view[1].bt1) refresh_view[1].bt1 = id(idfix+'tv_filter_name').text('接驾距离-从近到远').findOnce()
            refresh_view[1].bt2 = id(idfix+"bt_refresh").findOnce()
            if (!refresh_view[1].bt2 || !refresh_view[1].bt1) return false
        } else if (intercity_config.common_route_goods) {
            refresh_view[2].list1 = id(idfix+'rv_route_list').findOnce()
            if (refresh_view[2].list1 == null) return false
        }
    } else if (global_type == 2) {
        refresh_view[3].bt1 = id(idfix+'sfc_drv_wait_sort_button').text(tabs[1]).findOnce()
        refresh_view[3].bt2 = id(idfix+'sfc_drv_wait_sort_button').text(tabs[0]).findOnce()
        if (!refresh_view[3].bt2 || !refresh_view[3].bt1) return false
    }
    return true
}

function checkItem(item) {
    // 独享还是拼单
    if (item.type_and_mileage.slice(2, 4) == '独享' && intercity_config.exclusive.state) {
        exclusive_or_carpooling = 0
    } else if (item.type_and_mileage.slice(2, 4) == '愿拼' && intercity_config.carpooling.state) {
        exclusive_or_carpooling = 1
    } else {
        return false
    }
    // check人数
    if (!__checkTargetDistance(item.type_and_mileage)) return false;
    // check时间
    if (!__checkDate(item.date)) return false;
    // check起点
    if (!__checkStartingPointDistance(item.distance_of_start)) return false;
    // check金钱
    if (!__checkMoney(item.gold)) return false;

    // 补充的一些check
    if (global_type == 2) {
        // 发布行程
        if (!__checkStartingPointDistance(item.distance_of_end)) return false;
    } else if (global_type == 1) {
        if (intercity_config.intercity_goods || 
            intercity_config.crosscity_goods) {
            // 市内 跨城
        } else if (intercity_config.common_route_goods) {
            // 常用路线
            if (!__checkOnTheway(item.ontheway)) return false;
            if (!__checkEndPointDistance(item.distance_of_end)) return false;
        }
    }
    return true
}

// new 市内 城际 常用路线 发布形成 
function newIntercity() {
    let success = false
    console.log("Helo")
    // 初始化其他线程
    // initOtherThreads()
    // 等待出现在工作窗口
    waitWorkActivity()
    // 初始化刷新模块
    while (!initRefreshViews()) {
        console.error('初始化刷新模块失败')
        sleep(1 * 1000)
    }
    sleep(1 * 1000)
    do {
        // 刷新
        if (refresh() == false) continue;
        // 开始延迟
        sleep(random(intercity_config.refresh_on, intercity_config.refresh_off))
        // 开始获取订单信息列表
        let itemlist = getItemList()
        if (itemlist.length == 0) continue;
        console.log('开始处理订单信息')
        for (let index = 0; index < itemlist.length; index++) {
            if (success) break
            if (itemlist[index] == null) break
            console.log('开始check [%d]', index)
            if (checkItem(itemlist[index])) {
                console.log('check成功')
                if (itemlist[index].send_button != null &&
                    itemlist[index].send_button.clickable()) {
                    if (itemlist[index].send_button.click()) {
                        // 点击开始邀请
                        let istimeout = false
                        let temp_th = threads.start(function(){
                            sleep(6 * 1000)
                            istimeout = true
                        })
                        let okclick = false
                        // 不停点击确认
                        while (!istimeout) {
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
            
                        try {
                            if (temp_th && temp_th.isAlive()) {
                                console.log('中断定时器')
                                temp_th.interrupt()
                            }
                        } catch (e) {
                            console.error(e)
                        }
            
                        if (success == false) {
                            if (global_type == 2) {
                                while (!id(idfix+"back_icon").exists()) {
                                    back()
                                    sleep(2000)
                                }
                            } else if (global_type == 1) {
                                while (!id(idfix+"ch_tab_name").text("顺风车").exists()) {
                                    back()
                                    sleep(2000)
                                }
                            }
                        }

                    }
                }
            }
        }
        if (success) break

    } while(!success);
    console.log('接单成功')
    console._play_music()
}

function intercity() {
    newIntercity()
}



module.exports = {
    intercity: intercity,
    init_intercity: init_intercity,
}