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
        intercity_goods : true,
        crosscity_goods : false,
        refresh_on : Number(console._storage.get(console._dida_id('city-refresh-on'))),
        refresh_off : Number(console._storage.get(console._dida_id('city-refresh-off'))),

        today : console._storage.get(console._dida_id('city-today')),
        tomorrow : console._storage.get(console._dida_id('city-tomorrow')),
        after_tomorrow : console._storage.get(console._dida_id('city-otherday')),
        expressway : console._storage.get(console._dida_id('city-expressway')),

        exclusive : {




            state: console._storage.get(console._dida_id('city-exclusive')),
            people_min: Number(console._storage.get(console._dida_id('city-exclusive-people-min'))),
            people_max: Number(console._storage.get(console._dida_id('city-exclusive-people-max'))),
            time_on: console._storage.get(console._dida_id('city-exclusive-time-on')),
            time_off: console._storage.get(console._dida_id('city-exclusive-time-off')),
            money_min : Number(console._storage.get(console._dida_id('city-exclusive-money-min'))),
            money_max : Number(console._storage.get(console._dida_id('city-exclusive-money-max'))),
            starting_point : Number(console._storage.get(console._dida_id('city-exclusive-starting-point'))),
        },
        carpooling: {
            state: console._storage.get(console._dida_id('city-carpooling')),
            people_min: Number(console._storage.get(console._dida_id('city-carpooling-people-min'))),
            people_max: Number(console._storage.get(console._dida_id('city-carpooling-people-max'))),
            time_on: console._storage.get(console._dida_id('city-carpooling-time-on')),
            time_off: console._storage.get(console._dida_id('city-carpooling-time-off')),
            money_min : Number(console._storage.get(console._dida_id('city-carpooling-money-min'))),
            money_max : Number(console._storage.get(console._dida_id('city-carpooling-money-max'))),
            starting_point : Number(console._storage.get(console._dida_id('city-carpooling-starting-point'))),
        },
        
    }
    console.log(intercity_config)
}


function init_crosscity() {
    intercity_config = {
        intercity_goods : false,
        crosscity_goods : true,
        refresh_on : Number(console._storage.get(console._dida_id('crossCity-refresh-on'))),
        refresh_off : Number(console._storage.get(console._dida_id('crossCity-refresh-off'))),

        today : console._storage.get(console._dida_id('crossCity-today')),
        tomorrow : console._storage.get(console._dida_id('crossCity-tomorrow')),
        after_tomorrow : console._storage.get(console._dida_id('crossCity-otherday')),
        expressway : console._storage.get(console._dida_id('crossCity-expressway')),

        exclusive : {
            state: console._storage.get(console._dida_id('crossCity-exclusive')),
            people_min: Number(console._storage.get(console._dida_id('crossCity-exclusive-people-min'))),
            people_max: Number(console._storage.get(console._dida_id('crossCity-exclusive-people-max'))),
            time_on: console._storage.get(console._dida_id('crossCity-exclusive-time-on')),
            time_off: console._storage.get(console._dida_id('crossCity-exclusive-time-off')),
            money_min : Number(console._storage.get(console._dida_id('crossCity-exclusive-money-min'))),
            money_max : Number(console._storage.get(console._dida_id('crossCity-exclusive-money-max'))),
            starting_point : Number(console._storage.get(console._dida_id('crossCity-exclusive-starting-point'))),
        },
        carpooling: {
            state: console._storage.get(console._dida_id('crossCity-carpooling')),
            people_min: Number(console._storage.get(console._dida_id('crossCity-carpooling-people-min'))),
            people_max: Number(console._storage.get(console._dida_id('crossCity-carpooling-people-max'))),
            time_on: console._storage.get(console._dida_id('crossCity-carpooling-time-on')),
            time_off: console._storage.get(console._dida_id('crossCity-carpooling-time-off')),
            money_min : Number(console._storage.get(console._dida_id('crossCity-carpooling-money-min'))),
            money_max : Number(console._storage.get(console._dida_id('crossCity-carpooling-money-max'))),
            starting_point : Number(console._storage.get(console._dida_id('crossCity-carpooling-starting-point'))),
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
    // 今天16:20前 随时可走
    // 今天16:15 - 16:35
    if (timestr.indexOf(' ')) {
        timestr = timestr.split(' ')[0]
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
        return __checkTime(timestr.slice(2, 7), intercity_config.exclusive.time_on, intercity_config.exclusive.time_off)
    } else {
        return __checkTime(timestr.slice(2, 7), intercity_config.carpooling.time_on, intercity_config.carpooling.time_off)

    }
}


function __checkMoney(moneystr) {
    let moneystr_now = Number(extractNumbersAndDecimals(moneystr))
    if (exclusive_or_carpooling == 0) {
        if (moneystr_now >= intercity_config.exclusive.money_min && moneystr_now <= intercity_config.exclusive.money_max) {
            console.info('[check] 金额校验成功 %d >= %d && <= %d', moneystr_now,intercity_config.exclusive.money_min, intercity_config.exclusive.money_max)
            return true
        } else {
            console.info('[check] 金额校验失败 %d >= %d && <= %d', moneystr_now,intercity_config.exclusive.money_min, intercity_config.exclusive.money_max)
            return false
        }
    } else {
        if (moneystr_now >= intercity_config.carpooling.money_min && moneystr_now <= intercity_config.carpooling.money_max) {
            console.info('[check] 金额校验成功 %d >= %d && <= %d', moneystr_now,intercity_config.carpooling.money_min, intercity_config.carpooling.money_max)
            return true
        } else {
            console.info('[check] 金额校验失败 %d >= %d && <= %d', moneystr_now,intercity_config.carpooling.money_min, intercity_config.carpooling.money_max)
            return false
        }
    }

}

function __checkStartingPointDistance(starting_point) {
    starting_point = Number(extractNumbersAndDecimals(starting_point))
    console.log("起点距离: %d", starting_point)
    if (exclusive_or_carpooling == 0) {
        if (starting_point <= intercity_config.exclusive.starting_point) {
            console.info("[check] 起点距离校验成功 %d <= %d", starting_point, intercity_config.exclusive.starting_point)
            return true
        } else {
            return false
        }
    } else {
        if (starting_point <= intercity_config.carpooling.starting_point) {
            console.info("[check] 起点距离校验成功 %d <= %d", starting_point, intercity_config.carpooling.starting_point)
            return true
        } else {
            return false
        }
    }

}

// check人数
function __checkTargetDistance(targetstr) {
    console.log("[*] targetstr: %s", targetstr)
    let headcount_now = Number(extractNumbersAndDecimals(targetstr))
    if (intercity_config.exclusive.state && exclusive_or_carpooling == 0) {
        console.log('[*] 独享校验成功')
        if (headcount_now >= intercity_config.exclusive.people_min && 
            headcount_now <= intercity_config.exclusive.people_max) {
                console.info("[check] 人数校验成功 %d >= %d && <= %d", headcount_now, intercity_config.exclusive.people_min, intercity_config.exclusive.people_max)
                return true
            }
    }
    
    if (intercity_config.carpooling.state && exclusive_or_carpooling == 1) {
        console.log('[*] 愿拼校验成功')
        if (headcount_now >= intercity_config.carpooling.people_min &&
            headcount_now <= intercity_config.carpooling.people_max) {
                console.info("[*] 人数校验成功 %d >= %d && <= %d", headcount_now, intercity_config.carpooling.people_min, intercity_config.carpooling.people_max)
                return true
            }
    }
    return false
}


// 获取订单列表
function getItemList() {
    let result_array = []
    let goodListViwe = id(idfix+'rvContent').findOne(3 * 1000)
    if (goodListViwe == null) return result_array;
    let cap = captureScreen();
    goodListViwe.children().forEach(function(child, index) {
        if (child == null) return;
        if (child.className() != 'android.view.ViewGroup') return;
        if (child.child(0) && child.child(0).className() == 'android.view.ViewGroup') return;
        if (child.bounds().bottom > device.height*0.9) return;
        let result = {}
        console.log("第" + (index+1) + "项采集.")
        try {
            if (intercity_config.intercity_goods || 
                intercity_config.crosscity_goods) {
                // 顺路
                result.ontheway = null
                // 时间     
                result.date = child.findOne(id("startTimeAndNum")).text()
                // 终点距离
                result.distance_of_end = null
            }
            // 起点距离
            if (intercity_config.intercity_goods) {
                result.distance_of_start = child.findOne(id('tvStartInnerDistance')).text()
            } else if (intercity_config.crosscity_goods) {
                result.distance_of_start = child.findOne(id('tvStartInterDistance')).text()
            }
            // 金额
            let goldview = child.findOne(id("llPrice"))
            let typeview = child.findOne(id("ivRemark"))

            let ocr_temp_img = images.clip(cap, goldview.bounds().left, goldview.bounds().top, goldview.bounds().width(), goldview.bounds().height())
            let ocr_text_gold = gmlkit.ocr(ocr_temp_img, 'zh');
            if (ocr_text_gold) {
                result.gold = ocr_text_gold.text
            }
            ocr_temp_img.recycle()
            ocr_temp_img = null

            ocr_temp_img = images.clip(cap, typeview.bounds().left, typeview.bounds().top, typeview.bounds().width(), typeview.bounds().height())
            let ocr_text_type = gmlkit.ocr(images.clip(cap, typeview.bounds().left, typeview.bounds().top, typeview.bounds().width(), typeview.bounds().height()), 'zh');
            if (ocr_text_type) {
                result.type = ocr_text_type.text
            }
            ocr_temp_img.recycle()
            cap.recycle()
            cap = null

            let all_tag_layout = child.findOne(id("rvRemarks"))
            if (all_tag_layout) {
                result.people_count = all_tag_layout.child(1).child(0).text()  // 第一个一定是人数
                if (all_tag_layout.childCount() > 2) {
                    try {
                        result.ispay = all_tag_layout.child(2).child(0).text()         // 不一定出现已支付
                    } catch (e) {
                        result.ispay = null
                    }
                } else {
                    result.ispay = null
                }
            }
            // 发送按钮
            result.send_button = child
        } catch (err) {
            result = null
            console.error(err)
            console.error("[!] 列表信息采集错误")
        }
        result_array.push(result)
    })
    return result_array;
}

function waitWorkActivity() {
    console.log("[*] 开始初始化ui.")
    for (;;) {
        let tvMore = id(idfix+"tvMore").text("更多").findOne(1 * 1000)
        if (!tvMore || !tvMore.click()) continue;
        
        if (intercity_config.intercity_goods || intercity_config.crosscity_goods) {
            let intercityTab = null
            if (intercity_config.intercity_goods) {
                // 市内
                intercityTab = id(idfix+'ivTitleInnerCity').findOne(1 * 1000)
            } else if (intercity_config.crosscity_goods) {
                // 城际
                intercityTab = id(idfix+'ivTitleInterCity').findOne(1 * 1000)
            }
            if (!intercityTab) continue;
            intercityTab.click();
    
        } else if (intercity_config.common_route_goods) {
            
        }
        break
    }
    console.log("[*] dida抢单初始化完成.")
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
        if (intercity_config.intercity_goods || intercity_config.crosscity_goods) {
            refresh_view[0].bt1.click() == true ? console.log("[*] 刷新成功.") : console.error("[!] 刷新失败.");
        }
    } catch (e) {
        console.error(e + '\n[!] 刷新错误.')
        return false
    }
    return true
}

function initRefreshViews() {
    if (intercity_config.intercity_goods || intercity_config.crosscity_goods) {
        refresh_view[0].bt1 = id(idfix+"iv_bottom_update").findOne(3 * 1000)
        if (!refresh_view[0].bt1) {
            return false;
        }
    }
    return true
}

function __checkPay(str) {
    console.log('[*] check已支付')
    if (intercity_config.expressway) {
        if (str == null || str == '') return false;
        if (str == '已支付') {
            return true
        } else {
            return false
        }
    } else {
        return true
    }
}

function checkItem(item) {
    // 独享还是拼单
    if (item.type.indexOf('独享') > -1 && intercity_config.exclusive.state) {
        exclusive_or_carpooling = 0
    } else if (intercity_config.carpooling.state) {
        exclusive_or_carpooling = 1
    } else {
        return false
    }
    // check人数
    if (!__checkTargetDistance(item.people_count)) return false;
    // check时间
    if (!__checkDate(item.date)) return false;
    // check起点
    if (!__checkStartingPointDistance(item.distance_of_start)) return false;
    // check金钱
    if (!__checkMoney(item.gold)) return false;
    // check已支付
    if (!__checkPay(item.ispay)) return false;

    if (intercity_config.intercity_goods || 
        intercity_config.crosscity_goods) {
        // 市内 跨城
    } else if (intercity_config.common_route_goods) {

    }
    return true
}

// new 市内 城际 常用路线 发布形成 
function newIntercity() {
    //安卓版本高于Android 9
    if(device.sdkInt>28){
        //等待截屏权限申请并同意
        threads.start(function () {
            packageName('com.android.systemui').text('立即开始').waitFor();
            text('立即开始').click();
        });
    }
    //申请截屏权限
    if (!requestScreenCapture()) {
        toast("请求截图失败");
        exit()
    }

    let success = false
    console.log("Dida")
    // 初始化其他线程
    // initOtherThreads()
    // 等待出现在工作窗口
    waitWorkActivity()
    // 初始化刷新模块
    while (!initRefreshViews()) {
        console.error('[!] 初始化刷新模块失败')
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
        console.log(itemlist)
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
                            sleep(10 * 1000)
                            istimeout = true
                        })
                        let okclick = false
                        // 不停点击确认
                        while (!istimeout) {
                            let ok = text("顺路捎上乘客").findOnce()

                            if (ok) {
                                console.log("[*] 顺路捎上乘客")
                                click(ok.bounds().centerX(), ok.bounds().centerY())
                            }

                            if (text('确认并捎上乘客').exists() || text("确认捎上乘客").exists()) {
                                break
                            }
                        }

                        while (!istimeout) {
                            let zkk = null
                            if (intercity_config.intercity_goods) {
                                zkk = text("确认并捎上乘客").findOnce()
                                if (zkk) click(zkk.bounds().centerX(), zkk.bounds().centerY());
                            } else if (intercity_config.crosscity_goods) {
                                zkk = text("确认捎上乘客").findOnce()
                                if (zkk) click(zkk.bounds().centerX(), zkk.bounds().centerY());
                            }

                            console.log("[*] 确认并捎上乘客")
                            zkk = text('我知道了').findOnce()
                            if (zkk) zkk.click();
                            console.log("[*] 我知道了")

                            zkk = text("开始识别").findOnce()
                            if (zkk) {
                                console.log("[*] 开始识别")
                                zkk.click();
                                success = true
                                console.log('邀请成功')
                                break
                            }
                        }
            
                        try {
                            if (temp_th && temp_th.isAlive()) {
                                temp_th.interrupt()
                            }
                        } catch (e) {
                            console.error(e)
                        }
            
                        if (success == false) {
                            while (!id(idfix+"iv_bottom_update").exists()) {
                                back()
                                sleep(2000)
                            }
                            initRefreshViews()
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

function crosscity() {
    newIntercity()
}



module.exports = {
    intercity: intercity,
    init_intercity: init_intercity,
    crosscity: crosscity,
    init_crosscity: init_crosscity,
}