
// 市内 城际初始化
function init_intercity() {
    intercity_config = {
        refresh_on : Number(console._storage.get(console._halo_id('city-refresh-on'))),
        refresh_off : Number(console._storage.get(console._halo_id('city-refresh-off'))),

        today : console._storage.get(console._halo_id('city-today')),
        tomorrow : console._storage.get(console._halo_id('city-tomorrow')),
        after_tomorrow : console._storage.get(console._halo_id('city-otherday')),

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



// new 市内 城际 常用路线 发布形成
function newIntercity(type) {
    let success = false;
    let ordersList = null;
    let errorCount = 0;
    let refview = id("btnRefresh").findOnce();
    if (!refview) {
        console.log("找不到刷新按钮");
        return
    }
    console.log("开始运行 展示配置信息");
    console.log(intercity_config);
    // 开始便利
    // id("tvDriverHighwayFee")
    // text("愿与车主分摊高速费")
    // id("simuAmountContainer")
    do {
        ordersList = id("rvMatchOrders").findOnce();
        if (!ordersList) {
            console.log("找不到订单列表");
            errorCount++;
        }
        ordersList.children().forEach(function(child) {
            if (!child) return;
            
            try {
                let dateview = child.child(0).child(0).child(0) || {text: ()=> {return 'null'}};
                let distance = child.child(0).child(2).child(0).child(1).child(0) || {text: ()=> {return 'null'}};
                let people = child.child(0).child(4).child(0) || {text: ()=> {return 'null'}};
                let otype = child.child(0).child(4).child(1) || {text: ()=> {return 'null'}};
                let money = child.child(0).child(3).child(0).child(0) || {text: ()=> {return 'null'}};
                let money2 = {text: ()=> {return 'null'}};
                if (otype.text() == '独享   拼座') {
                    money2 = child.child(0).child(3).child(1).child(0) || {text: ()=> {return 'null'}};
                }
                let expressway = child.findOne(id('tvDriverHighwayFee')) || {text: ()=> {return 'null'}};
                console.log(dateview.text())
                console.log(distance.text())
                console.log(people.text())
                console.log(otype.text())
                console.log(money.text())
                console.log(money2.text())
                console.log(expressway.text())
                
            } catch (error) {
                console.log(error);
                errorCount++;
            }
        });
        break;
    }while(!success || errorCount < 100);

    console.log('接单成功')
    console._play_music()
}

function intercity() {
    console.log("开始执行市内单子");
    newIntercity(1)
}


module.exports = {
    init_intercity : init_intercity,
    intercity : intercity,
}