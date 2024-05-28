function refresh2 () {
    let bt1 = id('tvFilterName').text('智能排序').findOnce()
    if (!bt1) return;

    bt1.parent().click()

    while (id('tvName').text('智能排序').exists()) {
        let bt2 = id('tvName').text('智能排序').findOnce()
        if (bt2) {
            bt2.parent().click()
        }
    }
}

// a()
console.log(id('orderRecycler').find().length)