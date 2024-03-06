// auto("fast")
// auto.setMode("fast")
const idfix = 'com.sdu.didi.psnger:id/'

function ref_switch(start, end) {
    let start_switch = id(idfix+'sfc_drv_wait_sort_button').text(start).findOnce()
    let end_switch = id(idfix+'sfc_drv_wait_sort_button').text(end).findOnce()
    if (start_switch != null && end_switch != null) {
        if (start_switch.click()) {
            end_switch.click()
        }
    }
}


function test1 () {
    while (1) {
        console.log("---------------------------------------")
        ref_switch('智能排序', '价格降序')
        console.log('刷新成功')
        sleep(random(0,0))
        console.log('订单列表 start')
        let goodListViwe = id(idfix+'order_card_recycler').findOne(3* 1000)
        if (goodListViwe == null) continue;
        console.log('订单列表 end')
        goodListViwe.children().forEach(function(child, index) {
            if (!child) return;
            
            // 时间sfc_new_order_card_time_title
            let time_title = child.findOne(id(idfix+'sfc_new_order_card_time_title'))
            console.log('时间')
            // 兼容新版的时间id控件
            if (time_title == null) {
                time_title = child.findOne(id(idfix+'sfc_order_card_time_title'))
                console.log("兼容新版时间")
            }
            // 起点和终点距离
            let distance = child.find(id(idfix+'unordered_list_right_tv_sub'))
            console.log("起点和距离")
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
            console.log('里程')
    
            // 订单金额
            let money = child.findOne(id(idfix+'sfc_order_price_content'))
            console.log('订单金额')
            console.log("---------------------------------------")
        });
    }
}
// 市内/城际/常用路线/发布行程
function itemConfig(type) {
    let result_array = []
    let goodListViwe = id(idfix+'order_card_recycler').findOne(3 * 1000)
    if (goodListViwe == null) return result_array;
    goodListViwe.children().forEach(function(child, index) {
        if (child == null) return;
        let result = {}
        try {
            if (type == 4) {
                // 顺路
                result.ontheway = child.child(0).child(0).child(0).text()
                // 时间     
                result.date = child.child(0).child(0).child(1).text()
                // 终点距离
                result.distance_of_end = child.child(0).child(1).child(6).text()
            } else if (type == 1 || type == 2) {
                // 顺路
                result.ontheway = null
                // 时间     
                result.date = child.child(0).child(0).child(0).text()
                // 终点距离
                result.distance_of_end = null
            } else if (type == 3) {
                // 顺路
                result.ontheway = child.child(0).child(0).child(0).text()
                // 时间     
                result.date = child.child(0).child(0).child(1).text()
                // 终点距离
                result.distance_of_end = child.child(0).child(1).child(6).text()
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

// 发布行程
function test2 () {
    for(;;) {
        // ref_switch('智能排序', '价格降序')
        let goodListViwe = id(idfix+'order_card_recycler').findOne()
        sleep(random(0,0))
        goodListViwe.children().forEach(function(child, index) {
            if (!child) return;
            // 顺路
            let ontheway = child.child(0).child(0).child(0).text()
            // 时间     
            let date = child.child(0).child(0).child(1).text()
            // 起点距离
            let distance_of_start = child.child(0).child(1).child(2).text()
            // 终点距离
            let distance_of_end = child.child(0).child(1).child(6).text()
            // 独享、订单里程
            let type_and_mileage =  child.child(0).child(5).child(0).child(0).text()
            // 金额
            let gold = child.child(0).child(3).child(0).child(0).text()
            console.log("----------------------")
            console.log("----------------------")
            console.log("顺路: %s", ontheway)
            console.log("时间: %s", date)
            console.log("起点距离: %s", distance_of_start)
            console.log("终点距离: %s", distance_of_end)
            console.log("独享里程: %s", type_and_mileage)
            console.log("金额: %s", gold)
        })
    }
}
// 市内 / 跨城
function test3 () {
    for (;;) {
        let goodListViwe = id(idfix+'order_card_recycler').findOne()
        sleep(random(0,0))
        goodListViwe.children().forEach(function(child, index) {
            // 顺路
            let ontheway = null
            // 时间     
            let date = child.child(0).child(0).child(0).text()
            // 起点距离
            let distance_of_start = child.child(0).child(1).child(2).text()
            // 终点距离
            let distance_of_end = null
            // 独享、订单里程
            let type_and_mileage = child.child(0).child(5).child(0).child(0).text()
            // 金额
            let gold = child.child(0).child(3).child(0).child(0).text()
            let send_button = child.child(0).child(8)

            console.log("----------------------")
            console.log("----------------------")
            console.log("顺路: %s", ontheway)
            console.log("时间: %s", date)
            console.log("起点距离: %s", distance_of_start)
            console.log("终点距离: %s", distance_of_end)
            console.log("独享里程: %s", type_and_mileage)
            console.log("金额: %s", gold)
        });
        break
    }
}

// 常用路线
function test4 () {
    for (;;) {
        let goodListViwe = id(idfix+'order_card_recycler').findOne()
        sleep(random(0,0))
        goodListViwe.children().forEach(function(child, index) {
            // 顺路
            let ontheway = child.child(0).child(0).child(0).text()
            // 时间     
            let date = child.child(0).child(0).child(1).text()
            // 起点距离
            let distance_of_start = child.child(0).child(1).child(2).text()
            // 终点距离
            let distance_of_end = child.child(0).child(1).child(6).text()
            // 独享、订单里程
            let type_and_mileage = child.child(0).child(5).child(0).child(0).text()
            // 金额
            let gold = child.child(0).child(3).child(0).child(0).text()
            let send_button = child.child(0).child(8)
            console.log("----------------------")
            console.log("----------------------")
            console.log("顺路: %s", ontheway)
            console.log("时间: %s", date)
            console.log("起点距离: %s", distance_of_start)
            console.log("终点距离: %s", distance_of_end)
            console.log("独享里程: %s", type_and_mileage)
            console.log("金额: %s", gold)
        });
        break
    }
}

function refresh() {
    let start = "价格降序"
    let end = "智能排序"
    let start_switch = id(idfix+'sfc_drv_wait_sort_button').text(start).findOnce()
    let end_switch = id(idfix+'sfc_drv_wait_sort_button').text(end).findOnce()
    for (;;) {
        start_switch.click()
        end_switch.click()
        sleep(200)
    }
}

console.log(itemConfig(4))
// refresh()
let res = "1人愿拼 · 订单里程59.4km'"
console.log(res.slice(2,4))
