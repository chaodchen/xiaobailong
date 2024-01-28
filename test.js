auto("fast")

const idfix = 'com.sdu.didi.psnger:id/'

function ref_switch(start, end) {
    console.log('1')
    sleep(1)
    let start_switch = id(idfix+'sfc_drv_wait_sort_button').text(start).findOnce()
    sleep(1)
    let end_switch = id(idfix+'sfc_drv_wait_sort_button').text(end).findOnce()
    sleep(1)
    console.log('2')
    if (start_switch != null && end_switch != null) {
        console.log('3')
        if (start_switch.click()) {
            console.log('4')
            end_switch.click()
            console.log('5')
        }
    }
}



while (1) {
    ref_switch('智能排序', '价格降序')
    // sleep(100)
}


