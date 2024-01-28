const didi_popup_id = console._didi_popup_id
const didi_intercity_id = console._didi_intercity_id
const didi_publish_itinerary_id = console._didi_publish_itinerary_id
const storage = console._storage
const my_floaty = console._my_floaty
const getPermission = console._permission

module.exports = {
    xml: (
        <vertical padding='3 3 3 32'>
            <card cardCornerRadius='6' margin='0 0 0 9dp' visibility='gone'>
                <horizontal>
                    <text text='' w='3dp' h='*' margin='0 0 6 0' bg='#ff0000' layout_gravity='center_vertical'></text>
                    <vertical w='*'>
                        <text text='弹窗推送(暂不可用)' textSize='16sp' textStyle='bold'></text>
                        <vertical padding='3dp'>
                            <checkbox id={didi_popup_id('listen-notice')} text='监听订单, 发布行程后订单通知弹窗' checked={storage.get(didi_popup_id('listen-notice'), 'false')}></checkbox>
                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <checkbox text='今天' id={didi_popup_id('today')} checked={storage.get(didi_popup_id('today'), 'true')}></checkbox>
                                <checkbox text='明天' id={didi_popup_id('tomorrow')} checked={storage.get(didi_popup_id('tomorrow'), 'true')}></checkbox>
                                <checkbox text='明天以后' id={didi_popup_id('after-tomorrow')} checked={storage.get(didi_popup_id('after-tomorrow'), 'true')}></checkbox>
                            </horizontal>
                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <text text='时间: '></text>
                                <input id={didi_popup_id('time-on')} inputType='datetime' text={storage.get(didi_popup_id('time-on'), '00:00')}></input>
                                <text text=' 至 '></text>
                                <input id={didi_popup_id('time-off')} inputType='datetime' text={storage.get(didi_popup_id('time-off'), '24:00')}></input>
                            </horizontal>
                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <checkbox text='独享单' id={didi_popup_id('exclusive')} checked={storage.get(didi_popup_id('exclusive'))}></checkbox>
                                <input id={didi_popup_id('people-exclusive-min')} inputType='number' text={storage.get(didi_popup_id('people-exclusive-min'), '1')}></input>
                                <text text=' 至 '></text>
                                <input id={didi_popup_id('people-exclusive-max')} inputType='number' text={storage.get(didi_popup_id('people-exclusive-max'), '4')}></input>
                                <text text=' 人 | '></text>
                                <checkbox text='拼车单' id={didi_popup_id('carpooling')} checked={storage.get(didi_popup_id('carpooling'))}></checkbox>
                                <input id={didi_popup_id('people-carpooling-min')} inputType='number' text={storage.get(didi_popup_id('people-carpooling-min'), '1')}></input>
                                <text text=' 至 '></text>
                                <input id={didi_popup_id('people-carpooling-max')} inputType='number' text={storage.get(didi_popup_id('people-carpooling-max'), '4')}></input>
                                <text text=' 人'></text>
                            </horizontal>
                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <text text='金额 ≧ '></text>
                                <input id={didi_popup_id('money-min')} inputType='number' text={storage.get(didi_popup_id('money-min'), '10')}></input>
                                <text text='元，顺路 ≧ '></text>
                                <input id={didi_popup_id('on-theway-percentage')} inputType='number' text={storage.get(didi_popup_id('on-theway-percentage'), '50')}></input>
                                <text text=' %'></text>
                            </horizontal>
                        </vertical>
                        <button id={didi_popup_id('save-and-listen')} text='保存并开启监听'></button>
                    </vertical>
                </horizontal>
            </card>
            <card cardCornerRadius='6' margin='0 0 0 9dp'>
                <horizontal>
                    <text text='' w='3dp' h='*' margin='0 0 6 0' bg='#ff0000' layout_gravity='center_vertical'></text>
                    <vertical w='*'>
                        <text text='城际/室内' textSize='16sp' textStyle='bold'></text>
                        <vertical padding='3dp'>
                            <radiogroup orientation='horizontal'>
                                <radio id={didi_intercity_id('intercity-goods')} text='市内订单' checked={storage.get(didi_intercity_id('intercity-goods'), 'true')}></radio>
                                <radio id={didi_intercity_id('crosscity-goods')} text='跨城订单' checked={storage.get(didi_intercity_id('crosscity-goods'), 'false')}></radio>
                                <radio id={didi_intercity_id('common-route-goods')} text='常用路线订单' checked={storage.get(didi_intercity_id('common-route-goods'), 'false')}></radio>
                            </radiogroup>
                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <text text='刷新速度: '></text>
                                <input id={didi_intercity_id('refresh-on')} text={storage.get(didi_intercity_id('refresh-on'), '1000')} inputType='number'></input>
                                <text text=' 至 '></text>
                                <input id={didi_intercity_id('refresh-off')} text={storage.get(didi_intercity_id('refresh-off'), '1500')} inputType='number'></input>
                                <text text=' 毫秒'></text>
                            </horizontal>
                            <horizontal id='ref-mode2' visibility={storage.get(didi_publish_itinerary_id('intercity-goods')) == false ? 'gone' : 'visible'}>
                                <text text='刷新方式: '></text>
                                <radiogroup orientation='horizontal'>
                                    <radio id={didi_intercity_id('switch-sort')} text='切换排序' checked={storage.get(didi_intercity_id('switch-sort'), 'true')}></radio>
                                    <radio id={didi_intercity_id('thirty-minute')} text='30分钟内出发' checked={storage.get(didi_intercity_id('thirty-minute'), 'flase')}></radio>
                                </radiogroup>
                            </horizontal>
                            <horizontal id='ref-mode3' visibility={storage.get(didi_publish_itinerary_id('common-route-goods')) == false ? 'gone' : 'visible'}>
                                <text text='刷新方式: '></text>
                                <radiogroup orientation='horizontal'>
                                    <radio id={didi_intercity_id('only-ref')} text='单路线刷新' checked={storage.get(didi_intercity_id('only-ref'), 'true')}></radio>
                                    <radio id={didi_intercity_id('two-ref')} text='双路线刷新' checked={storage.get(didi_intercity_id('two-ref'), 'flase')}></radio>
                                </radiogroup>
                            </horizontal>

                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <checkbox checked={storage.get(didi_intercity_id('today'), 'true')} text='今天' id={didi_intercity_id('today')}></checkbox>
                                <checkbox checked={storage.get(didi_intercity_id('tomorrow'), 'true')} text='明天' id={didi_intercity_id('tomorrow')}></checkbox>
                                <checkbox checked={storage.get(didi_intercity_id('after-tomorrow'), 'true')} text='明天以后' id={didi_intercity_id('after-tomorrow')}></checkbox>
                            </horizontal>

                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <checkbox text='独享单' id={didi_intercity_id('exclusive')} checked={storage.get(didi_intercity_id('exclusive'), 'true')}></checkbox>
                                <input id={didi_intercity_id('people-exclusive-min')} text={storage.get(didi_intercity_id('people-exclusive-min'), '1')} inputType='number'></input>
                                <text text=' 至 '></text>
                                <input id={didi_intercity_id('people-exclusive-max')} text={storage.get(didi_intercity_id('people-exclusive-max'), '4')} inputType='number'></input>
                                <text text=' 人 | '></text>
                                <text text='时间: '></text>
                                <input id={didi_intercity_id('exclusive-time-on')} text={storage.get(didi_intercity_id('exclusive-time-on'), '00:00')} inputType='datetime'></input>
                                <text text=' 至 '></text>
                                <input id={didi_intercity_id('exclusive-time-off')} text={storage.get(didi_intercity_id('exclusive-time-off'), '24:00')} inputType='datetime'></input>
                            </horizontal>
                            <horizontal>
                                <text text='金额: '></text>
                                <input id={didi_intercity_id('exclusive-money-min')} text={storage.get(didi_intercity_id('exclusive-money-min'), '0')} inputType='number'></input>
                                <text text=' 至 '></text>
                                <input id={didi_intercity_id('exclusive-money-max')} text={storage.get(didi_intercity_id('exclusive-money-max'), '9999')} inputType='number'></input>
                                <text text=' 元，起点 ≦ '></text>
                                <input id={didi_intercity_id('exclusive-starting-point')} text={storage.get(didi_intercity_id('exclusive-starting-point'), '10')}></input>
                                <text text=' km '></text>
                            </horizontal>
                            <horizontal id='exclusive-on-theway-horizontal' visibility={storage.get(didi_intercity_id('common-route-goods')) == false ? 'gone' : 'visible'}>
                                <text text='顺路 ≧ '></text>
                                <input id={didi_intercity_id('exclusive-on-theway-percentage')} text={storage.get(didi_intercity_id('exclusive-on-theway-percentage'), '50')} inputType='number'></input>
                                <text text='%，终点 ≦ '></text>
                                <input id={didi_intercity_id('exclusive-end-point')} text={storage.get(didi_intercity_id('exclusive-end-point'), '100')}></input>
                                <text text=' km'></text>
                            </horizontal>

                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <checkbox text='拼车单' id={didi_intercity_id('carpooling')} checked={storage.get(didi_intercity_id('carpooling'), 'true')}></checkbox>
                                <input id={didi_intercity_id('people-carpooling-min')} text={storage.get(didi_intercity_id('people-carpooling-min'), '1')} inputType='number'></input>
                                <text text=' 至 '></text>
                                <input id={didi_intercity_id('people-carpooling-max')} text={storage.get(didi_intercity_id('people-carpooling-max'), '4')} inputType='number'></input>
                                <text text=' 人 | '></text>
                                <text text='时间: '></text>
                                <input id={didi_intercity_id('carpooling-time-on')} text={storage.get(didi_intercity_id('carpooling-time-on'), '00:00')} inputType='datetime'></input>
                                <text text=' 至 '></text>
                                <input id={didi_intercity_id('carpooling-time-off')} text={storage.get(didi_intercity_id('carpooling-time-off'), '24:00')} inputType='datetime'></input>
                            </horizontal>

                            <horizontal>
                                <text text='金额: '></text>
                                <input id={didi_intercity_id('carpooling-money-min')} text={storage.get(didi_intercity_id('carpooling-money-min'), '0')} inputType='number'></input>
                                <text text=' 至 '></text>
                                <input id={didi_intercity_id('carpooling-money-max')} text={storage.get(didi_intercity_id('carpooling-money-max'), '9999')} inputType='number'></input>
                                <text text=' 元，起点 ≦ '></text>
                                <input id={didi_intercity_id('carpooling-starting-point')} text={storage.get(didi_intercity_id('carpooling-starting-point'), '10')}></input>
                                <text text=' km '></text>
                            </horizontal>
                            <horizontal id='carpooling-on-theway-horizontal' visibility={storage.get(didi_intercity_id('common-route-goods')) == false ? 'gone' : 'visible'}>
                                <text text='顺路 ≧ '></text>
                                <input id={didi_intercity_id('carpooling-on-theway-percentage')} text={storage.get(didi_intercity_id('carpooling-on-theway-percentage'), '50')} inputType='number'></input>
                                <text text='%，终点 ≦ '></text>
                                <input id={didi_intercity_id('carpooling-end-point')} text={storage.get(didi_intercity_id('carpooling-end-point'), '100')}></input>
                                <text text=' km'></text>
                            </horizontal>
                        </vertical>
                        <button id={didi_intercity_id('save-and-opendidi')} text='保存并打开某滴'></button>
                    </vertical>
                </horizontal>
            </card>

            <card cardCornerRadius='6' margin='0 0 0 9dp'>
                <horizontal>
                    <text text='' w='3dp' h='*' margin='0 0 6 0' bg='#ff0000' layout_gravity='center_vertical'></text>
                    <vertical w='*'>
                        <text text='发布行程' textSize='16sp' textStyle='bold'></text>
                        <vertical padding='3dp'>
                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <text text='刷新速度: '></text>
                                <input id={didi_publish_itinerary_id('refresh-on')} text={storage.get(didi_publish_itinerary_id('refresh-on'), '1000')} inputType='number'></input>
                                <text text=' 至 '></text>
                                <input id={didi_publish_itinerary_id('refresh-off')} text={storage.get(didi_publish_itinerary_id('refresh-off'), '1500')} inputType='number'></input>
                                <text text=' 毫秒'></text>
                            </horizontal>

                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <text text='刷新方式: '></text>
                                <radiogroup orientation='horizontal'>
                                    <radio id={didi_publish_itinerary_id('swipe-ref')} text='下拉刷新' checked={storage.get(didi_publish_itinerary_id('swipe-ref'), 'true')}></radio>
                                    <radio id={didi_publish_itinerary_id('switch-ref')} text='切换刷新' checked={storage.get(didi_publish_itinerary_id('switch-ref'), 'flase')}></radio>
                                </radiogroup>
                            </horizontal>

                            <horizontal id='ref-mode' visibility={storage.get(didi_publish_itinerary_id('switch-ref')) == true ? 'visible' : 'gone'}>
                                <checkbox id={didi_publish_itinerary_id('auto-sorting')} text='智能排序' checked={storage.get(didi_publish_itinerary_id('auto-sorting'), 'true')}></checkbox>
                                <checkbox id={didi_publish_itinerary_id('on-theway-first')} text='顺路优先' checked={storage.get(didi_publish_itinerary_id('on-theway-first'), 'true')}></checkbox>
                                <checkbox id={didi_publish_itinerary_id('grade-down')} text='价格降序' checked={storage.get(didi_publish_itinerary_id('grade-down'), 'false')}></checkbox>
                                <checkbox id={didi_publish_itinerary_id('closest-starting-point')} text='起点最近' checked={storage.get(didi_publish_itinerary_id('closest-starting-point'), 'false')}></checkbox>
                            </horizontal>
                            
                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <checkbox checked={storage.get(didi_publish_itinerary_id('today'), 'true')} text='今天' id={didi_publish_itinerary_id('today')}></checkbox>
                                <checkbox checked={storage.get(didi_publish_itinerary_id('tomorrow'), 'true')} text='明天' id={didi_publish_itinerary_id('tomorrow')}></checkbox>
                                <checkbox checked={storage.get(didi_publish_itinerary_id('after-tomorrow'), 'true')} text='明天以后' id={didi_publish_itinerary_id('after-tomorrow')}></checkbox>
                            </horizontal>
                            <text h='1dp' w='*' bg='#b2b2b2'></text>

                            <horizontal>
                                <checkbox text='独享单' id={didi_publish_itinerary_id('exclusive')} checked={storage.get(didi_publish_itinerary_id('exclusive'), 'true')}></checkbox>
                                <input id={didi_publish_itinerary_id('people-exclusive-min')} text={storage.get(didi_publish_itinerary_id('people-exclusive-min'), '1')} inputType='number'></input>
                                <text text=' 至 '></text>
                                <input id={didi_publish_itinerary_id('people-exclusive-max')} text={storage.get(didi_publish_itinerary_id('people-exclusive-max'), '4')} inputType='number'></input>
                                <text text=' 人 | '></text>
                                <text text='时间: '></text>
                                <input id={didi_publish_itinerary_id('exclusive-time-on')} text={storage.get(didi_publish_itinerary_id('exclusive-time-on'), '00:00')} inputType='datetime'></input>
                                <text text=' 至 '></text>
                                <input id={didi_publish_itinerary_id('exclusive-time-off')} text={storage.get(didi_publish_itinerary_id('exclusive-time-off'), '24:00')} inputType='datetime'></input>
                            </horizontal>
                            <horizontal>
                                <text text='金额: '></text>
                                <input id={didi_publish_itinerary_id('exclusive-money-min')} text={storage.get(didi_publish_itinerary_id('exclusive-money-min'), '0')} inputType='number'></input>
                                <text text=' 至 '></text>
                                <input id={didi_publish_itinerary_id('exclusive-money-max')} text={storage.get(didi_publish_itinerary_id('exclusive-money-max'), '9999')} inputType='number'></input>
                                <text text=' 元，顺路 ≧ '></text>
                                <input id={didi_publish_itinerary_id('exclusive-on-theway-percentage')} text={storage.get(didi_publish_itinerary_id('exclusive-on-theway-percentage'), '50')} inputType='number'></input>
                                <text text=' % '></text>
                            </horizontal>
                            <horizontal>
                                <text text='起点 ≦ '></text>
                                <input id={didi_publish_itinerary_id('exclusive-starting-point')} text={storage.get(didi_publish_itinerary_id('exclusive-starting-point'), '0')}></input>
                                <text text='km，终点 ≦ '></text>
                                <input id={didi_publish_itinerary_id('exclusive-end-point')} text={storage.get(didi_publish_itinerary_id('exclusive-end-point'), '50')}></input>
                                <text text=' km'></text>
                            </horizontal>

                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <checkbox text='拼车单' id={didi_publish_itinerary_id('carpooling')} checked={storage.get(didi_publish_itinerary_id('carpooling'), 'true')}></checkbox>
                                <input id={didi_publish_itinerary_id('people-carpooling-min')} text={storage.get(didi_publish_itinerary_id('people-carpooling-min'), '1')} inputType='number'></input>
                                <text text=' 至 '></text>
                                <input id={didi_publish_itinerary_id('people-carpooling-max')} text={storage.get(didi_publish_itinerary_id('people-carpooling-max'), '4')} inputType='number'></input>
                                <text text=' 人 | '></text>
                                <text text='时间: '></text>
                                <input id={didi_publish_itinerary_id('carpooling-time-on')} text={storage.get(didi_publish_itinerary_id('carpooling-time-on'), '00:00')} inputType='datetime'></input>
                                <text text=' 至 '></text>
                                <input id={didi_publish_itinerary_id('carpooling-time-off')} text={storage.get(didi_publish_itinerary_id('carpooling-time-off'), '24:00')} inputType='datetime'></input>
                            </horizontal>
                            <horizontal>
                                <text text='金额: '></text>
                                <input id={didi_publish_itinerary_id('carpooling-money-min')} text={storage.get(didi_publish_itinerary_id('carpooling-money-min'), '0')} inputType='number'></input>
                                <text text=' 至 '></text>
                                <input id={didi_publish_itinerary_id('carpooling-money-max')} text={storage.get(didi_publish_itinerary_id('carpooling-money-max'), '9999')} inputType='number'></input>
                                <text text=' 元，顺路 ≧ '></text>
                                <input id={didi_publish_itinerary_id('carpooling-on-theway-percentage')} text={storage.get(didi_publish_itinerary_id('carpooling-on-theway-percentage'), '50')} inputType='number'></input>
                                <text text=' % '></text>
                            </horizontal>
                            <horizontal>
                                <text text='起点 ≦ '></text>
                                <input id={didi_publish_itinerary_id('carpooling-starting-point')} text={storage.get(didi_publish_itinerary_id('carpooling-starting-point'), '0')}></input>
                                <text text='km，终点 ≦ '></text>
                                <input id={didi_publish_itinerary_id('carpooling-end-point')} text={storage.get(didi_publish_itinerary_id('carpooling-end-point'), '50')}></input>
                                <text text=' km'></text>
                            </horizontal>
                        </vertical>
                        <button id={didi_publish_itinerary_id('save-and-opendidi')} text='保存并打开某滴'></button>
                    </vertical>
                </horizontal>
            </card>
        </vertical>
    ),
    callback: function(view, script) {
        ui[didi_popup_id('save-and-listen')].on('click', function() {
            if (console.errorr <= 0) return
            if (!getPermission()) return
            storage.put(didi_popup_id('listen-notice'), ui[didi_popup_id('listen-notice')].isChecked())
            storage.put(didi_popup_id('today'), ui[didi_popup_id('today')].isChecked())
            storage.put(didi_popup_id('tomorrow'), ui[didi_popup_id('tomorrow')].isChecked())
            storage.put(didi_popup_id('after-tomorrow'), ui[didi_popup_id('after-tomorrow')].isChecked())
            storage.put(didi_popup_id('time-on'), ui[didi_popup_id('time-on')].getText()+'')
            storage.put(didi_popup_id('time-off'), ui[didi_popup_id('time-off')].getText()+'')
            storage.put(didi_popup_id('exclusive'), ui[didi_popup_id('exclusive')].isChecked())
            storage.put(didi_popup_id('people-exclusive-min'), ui[didi_popup_id('people-exclusive-min')].getText()+'')
            storage.put(didi_popup_id('people-exclusive-max'), ui[didi_popup_id('people-exclusive-max')].getText()+'')
            storage.put(didi_popup_id('carpooling'), ui[didi_popup_id('carpooling')].isChecked())
            storage.put(didi_popup_id('people-carpooling-min'), ui[didi_popup_id('people-carpooling-min')].getText()+'')
            storage.put(didi_popup_id('people-carpooling-max'), ui[didi_popup_id('people-carpooling-max')].getText()+'')
            storage.put(didi_popup_id('money-min'), ui[didi_popup_id('money-min')].getText()+'')
            storage.put(didi_popup_id('on-theway-percentage'), ui[didi_popup_id('on-theway-percentage')].getText()+'')
            script.init_listen_orders()
            
        })
        // 市内 跨城
        ui[didi_intercity_id('save-and-opendidi')].on('click', function() {
            if (console.errorr <= 0) return
            if (!getPermission()) return

            storage.put(didi_intercity_id('intercity-goods'), ui[didi_intercity_id('intercity-goods')].isChecked())
            storage.put(didi_intercity_id('crosscity-goods'), ui[didi_intercity_id('crosscity-goods')].isChecked())
            storage.put(didi_intercity_id('common-route-goods'), ui[didi_intercity_id('common-route-goods')].isChecked())


            storage.put(didi_intercity_id('only-ref'), ui[didi_intercity_id('only-ref')].isChecked())
            storage.put(didi_intercity_id('two-ref'), ui[didi_intercity_id('two-ref')].isChecked())

            storage.put(didi_intercity_id('refresh-on'), ui[didi_intercity_id('refresh-on')].getText()+'')
            storage.put(didi_intercity_id('refresh-off'), ui[didi_intercity_id('refresh-off')].getText()+'')
            storage.put(didi_intercity_id('today'), ui[didi_intercity_id('today')].isChecked())
            storage.put(didi_intercity_id('tomorrow'), ui[didi_intercity_id('tomorrow')].isChecked())
            storage.put(didi_intercity_id('after-tomorrow'), ui[didi_intercity_id('after-tomorrow')].isChecked())


            storage.put(didi_intercity_id('exclusive'), ui[didi_intercity_id('exclusive')].isChecked())
            storage.put(didi_intercity_id('carpooling'), ui[didi_intercity_id('carpooling')].isChecked())
            
            storage.put(didi_intercity_id('people-exclusive-min'), ui[didi_intercity_id('people-exclusive-min')].getText()+'')
            storage.put(didi_intercity_id('people-exclusive-max'), ui[didi_intercity_id('people-exclusive-max')].getText()+'')
            storage.put(didi_intercity_id('people-carpooling-min'), ui[didi_intercity_id('people-carpooling-min')].getText()+'')
            storage.put(didi_intercity_id('people-carpooling-max'), ui[didi_intercity_id('people-carpooling-max')].getText()+'')

            storage.put(didi_intercity_id('exclusive-time-on'), ui[didi_intercity_id('exclusive-time-on')].getText()+'')
            storage.put(didi_intercity_id('exclusive-time-off'), ui[didi_intercity_id('exclusive-time-off')].getText()+'')
            storage.put(didi_intercity_id('exclusive-money-min'), ui[didi_intercity_id('exclusive-money-min')].getText()+'')
            storage.put(didi_intercity_id('exclusive-money-max'), ui[didi_intercity_id('exclusive-money-max')].getText()+'')
            storage.put(didi_intercity_id('exclusive-starting-point'), ui[didi_intercity_id('exclusive-starting-point')].getText()+'')
            storage.put(didi_intercity_id('exclusive-end-point'), ui[didi_intercity_id('exclusive-end-point')].getText()+'')
            storage.put(didi_intercity_id('exclusive-on-theway-percentage'), ui[didi_intercity_id('exclusive-on-theway-percentage')].getText()+'')
            
            storage.put(didi_intercity_id('carpooling-time-on'), ui[didi_intercity_id('carpooling-time-on')].getText()+'')
            storage.put(didi_intercity_id('carpooling-time-off'), ui[didi_intercity_id('carpooling-time-off')].getText()+'')
            storage.put(didi_intercity_id('carpooling-money-min'), ui[didi_intercity_id('carpooling-money-min')].getText()+'')
            storage.put(didi_intercity_id('carpooling-money-max'), ui[didi_intercity_id('carpooling-money-max')].getText()+'')
            storage.put(didi_intercity_id('carpooling-starting-point'), ui[didi_intercity_id('carpooling-starting-point')].getText()+'')
            storage.put(didi_intercity_id('carpooling-end-point'), ui[didi_intercity_id('carpooling-end-point')].getText()+'')
            storage.put(didi_intercity_id('carpooling-on-theway-percentage'), ui[didi_intercity_id('carpooling-on-theway-percentage')].getText()+'')

            storage.put(didi_intercity_id('switch-sort'), ui[didi_intercity_id('switch-sort')].isChecked())
            storage.put(didi_intercity_id('thirty-minute'), ui[didi_intercity_id('thirty-minute')].isChecked())
            
            script.init_intercity()
            launch('com.sdu.didi.psnger')
            my_floaty(script.intercity, null)
        })

        // 发布行程
        ui[didi_publish_itinerary_id('save-and-opendidi')].on('click', function() {
            if (console.errorr <= 0) return
            if (!getPermission()) return

            console.log('发布行程')
            storage.put(didi_publish_itinerary_id('swipe-ref'), ui[didi_publish_itinerary_id('swipe-ref')].isChecked())
            storage.put(didi_publish_itinerary_id('switch-ref'), ui[didi_publish_itinerary_id('switch-ref')].isChecked())

            storage.put(didi_publish_itinerary_id('auto-sorting'), ui[didi_publish_itinerary_id('auto-sorting')].isChecked())
            storage.put(didi_publish_itinerary_id('on-theway-first'), ui[didi_publish_itinerary_id('on-theway-first')].isChecked())
            storage.put(didi_publish_itinerary_id('grade-down'), ui[didi_publish_itinerary_id('grade-down')].isChecked())
            storage.put(didi_publish_itinerary_id('closest-starting-point'), ui[didi_publish_itinerary_id('closest-starting-point')].isChecked())


            storage.put(didi_publish_itinerary_id('refresh-on'), ui[didi_publish_itinerary_id('refresh-on')].getText()+'')
            storage.put(didi_publish_itinerary_id('refresh-off'), ui[didi_publish_itinerary_id('refresh-off')].getText()+'')
            storage.put(didi_publish_itinerary_id('today'), ui[didi_publish_itinerary_id('today')].isChecked())
            storage.put(didi_publish_itinerary_id('tomorrow'), ui[didi_publish_itinerary_id('tomorrow')].isChecked())
            storage.put(didi_publish_itinerary_id('after-tomorrow'), ui[didi_publish_itinerary_id('after-tomorrow')].isChecked())

            storage.put(didi_publish_itinerary_id('exclusive-time-on'), ui[didi_publish_itinerary_id('exclusive-time-on')].getText()+'')
            storage.put(didi_publish_itinerary_id('exclusive-time-off'), ui[didi_publish_itinerary_id('exclusive-time-off')].getText()+'')
            storage.put(didi_publish_itinerary_id('exclusive-money-min'), ui[didi_publish_itinerary_id('exclusive-money-min')].getText()+'')
            storage.put(didi_publish_itinerary_id('exclusive-money-max'), ui[didi_publish_itinerary_id('exclusive-money-max')].getText()+'')
            storage.put(didi_publish_itinerary_id('exclusive-on-theway-percentage'), ui[didi_publish_itinerary_id('exclusive-on-theway-percentage')].getText()+'')
            storage.put(didi_publish_itinerary_id('exclusive-starting-point'), ui[didi_publish_itinerary_id('exclusive-starting-point')].getText()+'')
            storage.put(didi_publish_itinerary_id('exclusive-end-point'), ui[didi_publish_itinerary_id('exclusive-end-point')].getText()+'')

            storage.put(didi_publish_itinerary_id('carpooling-time-on'), ui[didi_publish_itinerary_id('carpooling-time-on')].getText()+'')
            storage.put(didi_publish_itinerary_id('carpooling-time-off'), ui[didi_publish_itinerary_id('carpooling-time-off')].getText()+'')
            storage.put(didi_publish_itinerary_id('carpooling-money-min'), ui[didi_publish_itinerary_id('carpooling-money-min')].getText()+'')
            storage.put(didi_publish_itinerary_id('carpooling-money-max'), ui[didi_publish_itinerary_id('carpooling-money-max')].getText()+'')
            storage.put(didi_publish_itinerary_id('carpooling-on-theway-percentage'), ui[didi_publish_itinerary_id('carpooling-on-theway-percentage')].getText()+'')
            storage.put(didi_publish_itinerary_id('carpooling-starting-point'), ui[didi_publish_itinerary_id('carpooling-starting-point')].getText()+'')
            storage.put(didi_publish_itinerary_id('carpooling-end-point'), ui[didi_publish_itinerary_id('carpooling-end-point')].getText()+'')

            storage.put(didi_publish_itinerary_id('exclusive'), ui[didi_publish_itinerary_id('exclusive')].isChecked())
            storage.put(didi_publish_itinerary_id('people-exclusive-min'), ui[didi_publish_itinerary_id('people-exclusive-min')].getText()+'')
            storage.put(didi_publish_itinerary_id('people-exclusive-max'), ui[didi_publish_itinerary_id('people-exclusive-max')].getText()+'')
            storage.put(didi_publish_itinerary_id('carpooling'), ui[didi_publish_itinerary_id('carpooling')].isChecked())
            storage.put(didi_publish_itinerary_id('people-carpooling-min'), ui[didi_publish_itinerary_id('people-carpooling-min')].getText()+'')
            storage.put(didi_publish_itinerary_id('people-carpooling-max'), ui[didi_publish_itinerary_id('people-carpooling-max')].getText()+'')

            script.init_push_trip()
            launch('com.sdu.didi.psnger')
            my_floaty(script.push_trip, null)
        })

        ui[didi_intercity_id('common-route-goods')].on('check', function(checked) {
            if (checked) {
                ui['exclusive-on-theway-horizontal'].setVisibility(0)
                ui['carpooling-on-theway-horizontal'].setVisibility(0)

                ui['ref-mode2'].setVisibility(8)
                ui['ref-mode3'].setVisibility(0)

            }
        })
        ui[didi_intercity_id('intercity-goods')].on('check', function(checked) {
            if (checked) {
                ui['exclusive-on-theway-horizontal'].setVisibility(8)
                ui['carpooling-on-theway-horizontal'].setVisibility(8)

                ui['ref-mode2'].setVisibility(0)
                ui['ref-mode3'].setVisibility(8)

            }
        })
        ui[didi_intercity_id('crosscity-goods')].on('check', function(checked) {
            if (checked) {
                ui['exclusive-on-theway-horizontal'].setVisibility(8)
                ui['carpooling-on-theway-horizontal'].setVisibility(8)

                ui['ref-mode2'].setVisibility(8)
                ui['ref-mode3'].setVisibility(8)

            }
        })

        ui[didi_publish_itinerary_id('switch-ref')].on('check', function(checked) {
            if (checked) ui['ref-mode'].setVisibility(0)
        })

        ui[didi_publish_itinerary_id('swipe-ref')].on('check', function(checked) {
            if (checked) ui['ref-mode'].setVisibility(8)
        })
    }
}