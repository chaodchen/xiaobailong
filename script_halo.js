// 市内 城际初始化
function init_intercity() {
    intercity_config = {
        refresh_on : Number(console._storage.get(console._halo_id('city-refresh-on'))),
        refresh_off : Number(console._storage.get(console._halo_id('city-refresh-off'))),

        today : console._storage.get(console._halo_id('city-today')),
        tomorrow : console._storage.get(console._halo_id('city-tomorrow')),
        after_tomorrow : console._storage.get(console._halo_id('city-otherday')),
        expressway : console._storage.get(console._halo_id('city-expressway')),
        
        exclusive : {
            state: console._storage.get(console._halo_id('city-exclusive')),
            people_min: Number(console._storage.get(console._halo_id('city-exclusive-people-min'))),
            people_max: Number(console._storage.get(console._halo_id('city-exclusive-people-max'))),
            time_on: console._storage.get(console._halo_id('city-exclusive-time-on')),
            time_off: console._storage.get(console._halo_id('city-exclusive-time-off')),
            money_min : Number(console._storage.get(console._halo_id('city-exclusive-money-min'))),
            money_max : Number(console._storage.get(console._halo_id('city-exclusive-money-max'))),
            starting_point : Number(console._storage.get(console._halo_id('city-exclusive-starting-point'))),
        },
        carpooling: {
            state: console._storage.get(console._halo_id('city-carpooling')),
            people_min: Number(console._storage.get(console._halo_id('city-carpooling-people-min'))),
            people_max: Number(console._storage.get(console._halo_id('city-carpooling-people-max'))),
            time_on: console._storage.get(console._halo_id('city-carpooling-time-on')),
            time_off: console._storage.get(console._halo_id('city-carpooling-time-off')),
            money_min : Number(console._storage.get(console._halo_id('city-carpooling-money-min'))),
            money_max : Number(console._storage.get(console._halo_id('city-carpooling-money-max'))),
            starting_point : Number(console._storage.get(console._halo_id('city-carpooling-starting-point'))),
            
        },
        comfort: {
            state: console._storage.get(console._halo_id('city-comfort')),
            people_min: Number(console._storage.get(console._halo_id('city-comfort-people-min'))),
            people_max: Number(console._storage.get(console._halo_id('city-comfort-people-max'))),
            time_on: console._storage.get(console._halo_id('city-comfort-time-on')),
            time_off: console._storage.get(console._halo_id('city-comfort-time-off')),
            money_min : Number(console._storage.get(console._halo_id('city-comfort-money-min'))),
            money_max : Number(console._storage.get(console._halo_id('city-comfort-money-max'))),
            starting_point : Number(console._storage.get(console._halo_id('city-comfort-starting-point'))),
        },
        pullgoods: {
            state: console._storage.get(console._halo_id('city-pullgoods')),
            people_min: Number(console._storage.get(console._halo_id('city-pullgoods-people-min'))),
            people_max: Number(console._storage.get(console._halo_id('city-pullgoods-people-max'))),
            time_on: console._storage.get(console._halo_id('city-pullgoods-time-on')),
            time_off: console._storage.get(console._halo_id('city-pullgoods-time-off')),
            money_min : Number(console._storage.get(console._halo_id('city-pullgoods-money-min'))),
            money_max : Number(console._storage.get(console._halo_id('city-pullgoods-money-max'))),
            starting_point : Number(console._storage.get(console._halo_id('city-pullgoods-starting-point'))),
        },
    }
    console.log(intercity_config)
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

/**
 * @description: 字符串转数字
 * @param {*} inputString
 * @return {*}
 */
function extractNumbersAndDecimals(inputString) {
    const regex = /(\d+\.\d+|\d+)/g;
    const matches = inputString.match(regex);
    return matches;
}

/**
 * @description: check时间日期
 * @param {string} datestr 时间日期文本 e.g 今天 06:00~06:10
 * @param {object} config 配置对象
 * @return {boolean}
 */
function checkDate(datestr, config) {
    // text("今天 06:00~06:10")
    if ((datestr.slice(0,2) == '今天' && intercity_config.today) || 
    (datestr.slice(0,2) == '明天' && intercity_config.tomorrow) ||
    (datestr.slice(0,2) == '后天' && intercity_config.after_tomorrow)) {
        datestr = datestr.slice(3);
        let start_time = datestr.split('~')[0];
        let end_time = datestr.split('~')[1];
        if (!__checkTime(start_time, config.time_on, config.time_off)) return false;
        if (end_time != undefined) {
            if (!__checkTime(end_time, config.time_on, config.time_off)) return false;
        }
    }
    return true;
}

/**
 * @description: 
 * @param {string} money 金额文本
 * @param {object} config 配置对象
 * @return {boolean}
 */
function checkMoney(money, config) {
    if (Number(extractNumbersAndDecimals(money)) >= config.money_min && 
    Number(extractNumbersAndDecimals(money) <= config.money_max)) {
        return true
    } else {
        return false
    }
}

/**
 * @description: 
 * @param {*} people 人数文本
 * @param {*} config 配置对象
 * @return {*}
 */
function checkPeople(people, config) {
    if (Number(extractNumbersAndDecimals(people)) >= config.people_min &&
        Number(extractNumbersAndDecimals(people)) <= config.people_max) {
            return true
        } else {
            return false
    }
}

/**
 * @description: 
 * @param {*} strarting 起点距离文本
 * @param {*} config    配置对象
 * @return {*}
 */
function checkStartingPoint(strarting, config) {
    if (Number(extractNumbersAndDecimals(strarting)) <= config.starting_point) {
        return true
    } else {
        return false
    }
}

/**
 * @description: check所有参数
 * @param {Array} para 采集的数据项目: 日期时间 金额 人数 起点距离 高速付费
 * @param {Object} config
 * @return {boolean}
 */
function checkAll (para, config) {
    if (!checkDate(para[0], config)) return false;
    console.log("[check] 时间check通过.");
    if (!checkMoney(para[1], config)) return false;
    console.log("[check] 金额check通过.");
    if (!checkPeople(para[2], config)) return false;
    console.log("[check] 人数check通过");
    if (!checkStartingPoint(para[3], config)) return false;
    console.log("[check] 起点距离check通过");
    if (config.expressway) {
        if (para[4] == null || para[4] == undefined) return false;
        console.log("[check] 高速公路check通过");
    }
    return true;
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


// new 市内 城际 常用路线 发布形成
function newIntercity(type) {
    let success = false;
    let allcheck_stat = false;
    let ordersList = null;
    let errorCount = 0;
    let refview = null;
    console.log("* -----------intercity_config------------");
    console.log(intercity_config);
    console.log("* -----------intercity_config------------");

    // 开始便利
    do {
        ordersList = id("rvMatchOrders").findOnce();
        refview = id("btnRefresh").findOnce();
        if (!ordersList) {
            console.log("[!] 找不到订单列表");
            errorCount++;
        }
        let targetChild = null;
        ordersList.children().forEach(function(child) {
            if (!child || allcheck_stat) return;
            try {
                let dateview = child.child(0).child(0).child(0) || {text: ()=> {return 'null'}};
                let distance = child.child(0).child(2).child(0).child(1).child(0) || {text: ()=> {return 'null'}};
                let people = child.child(0).child(4).child(0) || {text: ()=> {return 'null'}};
                let otype = child.child(0).child(4).child(1) || {text: ()=> {return 'null'}};
                let money = child.child(0).child(3).child(0).child(0) || {text: ()=> {return 'null'}};
                let money2 = {text: ()=> {return 'null'}};
                console.log("[*] 订单类型: " + otype.text())
                if (otype.text() == '独享   拼座') {
                    money2 = child.child(0).child(3).child(1).child(0) || {text: ()=> {return 'null'}};
                }
                let expressway = child.findOne(id('tvDriverHighwayFee')) || {text: ()=> {return 'null'}};

                // 汇总所有数据
                let all_data = [dateview.text(), 
                    money.text(), 
                    people.text(), 
                    distance.text(),
                expressway.text()];
                console.log("* -----------all_data------------");
                console.log(all_data);
                console.log("* -----------all_data------------");
                switch (otype.text()) {
                    case '独享' || '独享   拼座':
                        if (intercity_config.exclusive.state) {
                            if (checkAll(all_data, intercity_config.exclusive
                            )) {
                                // 所有check通过
                                allcheck_stat = true;
                            }
                        }
                        break;
                    case '拼座':
                        if (intercity_config.exclusive.carpooling) {
                            if (checkAll(all_data, intercity_config.carpooling
                            )) {
                                // 所有check通过
                                allcheck_stat = true;
                            }
                        }
                        break;
                    case '拉货':
                        if (intercity_config.exclusive.pullgoods) {
                            if (checkAll(all_data, intercity_config.pullgoods
                            )) {
                                // 所有check通过
                                allcheck_stat = true;
                            }
                        }
                        break;
                }
                if (allcheck_stat) {
                    targetChild = child;
                }

            } catch (error) {
                console.log('[!] '+ error);
                errorCount++;
            }
        });
        
        if (allcheck_stat && targetChild != null) {
            // 开始抢单
            let do_count = 0;
            console.log("[>] 进入订单详情");
            do {
                targetChild.click()
                do_count++
            } while (!id("rtvTitle").exists() && do_count < 500);
            console.log("[>] 确认同行/立即抢单");

            do_count = 0;
            do {
                let tvButton = text("确认同行").id("tvButton").findOnce() || text("立即抢单").id("tvButton").findOnce();
                if (tvButton) {
                    success = true;
                    tvButton.click();
                } else {
                    // 
                    let tvConfirm = id("tvConfirm").text("知道了，确认同行").findOnce();
                    if (tvConfirm) tvConfirm.click();
                }
            } while (!text("请选择到达乘客起点的时间").exists() && do_count < 500);
            console.log("[>] 确定（开始识别人脸）");

            do_count = 0;
            do {
                let tvPickerSure = id("tvPickerSure").text("确定").findOnce();
                if (tvPickerSure) {
                    // success = true;
                    tvPickerSure.click();
                }
            } while (!id("wbcf_live_tip_tv").exists() && do_count < 500);
            break;
        } else {
            // 刷新 id("btnRefresh")
            if (refview) {
                if (refview.click()) {
                    sleep(random(intercity_config.refresh_on, intercity_config.refresh_off));
                    console.log("[>] 刷新完成");
                }
            }
        }
        // break;

    }while(!success || errorCount < 100);

    console.log('[>] 接单成功')
    console._play_music()
}

function intercity() {
    console.log("[>] 开始执行市内单子");
    newIntercity(1)
}


module.exports = {
    init_intercity : init_intercity,
    intercity : intercity,
}