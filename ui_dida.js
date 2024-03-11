const dida_intercity_id = console._dida_intercity_id
const storage = console._storage
const my_floaty = console._my_floaty
const getPermission = console._permission

module.exports = {
    xml: (
        <vertical padding='3 3 3 32'>
            <card cardCornerRadius='6' margin='0 0 0 9dp'>
                <horizontal>
                    <text text='' w='3dp' h='*' margin='0 0 6 0' bg='#ff0000' layout_gravity='center_vertical'></text>
                    <vertical w='*'>
                        <text text='功能配置' textSize='16sp' textStyle='bold'></text>
                        <vertical padding='3dp'>
                            <radiogroup orientation='vertical'>
                                <radio id={dida_intercity_id('intercity-goods')} text='市内订单' checked={storage.get(dida_intercity_id('intercity-goods'), 'true')}></radio>
                                <radio id={dida_intercity_id('crosscity-goods')} text='跨城订单' checked={storage.get(dida_intercity_id('crosscity-goods'), 'false')}></radio>
                                <radio id={dida_intercity_id('common-route-goods')} text='常用路线' checked={storage.get(dida_intercity_id('common-route-goods'), 'false')}></radio>
                                <radio id={dida_intercity_id('publish_itinerary')} text='发布行程' checked={storage.get(dida_intercity_id('publish_itinerary'), 'false')}></radio>
                            </radiogroup>
                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <text text='刷新速度: '></text>
                                <input id={dida_intercity_id('refresh-on')} text={storage.get(dida_intercity_id('refresh-on'), '1000')} inputType='number'></input>
                                <text text=' 至 '></text>
                                <input id={dida_intercity_id('refresh-off')} text={storage.get(dida_intercity_id('refresh-off'), '1500')} inputType='number'></input>
                                <text text=' 毫秒'></text>
                            </horizontal>

                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <checkbox checked={storage.get(dida_intercity_id('today'), 'true')} text='今天' id={dida_intercity_id('today')}></checkbox>
                                <checkbox checked={storage.get(dida_intercity_id('tomorrow'), 'true')} text='明天' id={dida_intercity_id('tomorrow')}></checkbox>
                                <checkbox checked={storage.get(dida_intercity_id('after-tomorrow'), 'true')} text='明天以后' id={dida_intercity_id('after-tomorrow')}></checkbox>
                            </horizontal>

                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <checkbox text='独享单' id={dida_intercity_id('exclusive')} checked={storage.get(dida_intercity_id('exclusive'), 'true')}></checkbox>
                                <input id={dida_intercity_id('people-exclusive-min')} text={storage.get(dida_intercity_id('people-exclusive-min'), '1')} inputType='number'></input>
                                <text text=' 至 '></text>
                                <input id={dida_intercity_id('people-exclusive-max')} text={storage.get(dida_intercity_id('people-exclusive-max'), '4')} inputType='number'></input>
                                <text text=' 人 | '></text>
                                <text text='时间: '></text>
                                <input id={dida_intercity_id('exclusive-time-on')} text={storage.get(dida_intercity_id('exclusive-time-on'), '00:00')} inputType='datetime'></input>
                                <text text=' 至 '></text>
                                <input id={dida_intercity_id('exclusive-time-off')} text={storage.get(dida_intercity_id('exclusive-time-off'), '24:00')} inputType='datetime'></input>
                            </horizontal>
                            <horizontal>
                                <text text='金额: '></text>
                                <input id={dida_intercity_id('exclusive-money-min')} text={storage.get(dida_intercity_id('exclusive-money-min'), '0')} inputType='number'></input>
                                <text text=' 至 '></text>
                                <input id={dida_intercity_id('exclusive-money-max')} text={storage.get(dida_intercity_id('exclusive-money-max'), '9999')} inputType='number'></input>
                                <text text=' 元，起点 ≦ '></text>
                                <input id={dida_intercity_id('exclusive-starting-point')} text={storage.get(dida_intercity_id('exclusive-starting-point'), '10')}></input>
                                <text text=' km '></text>
                            </horizontal>
                            
                            <horizontal id={dida_intercity_id('exclusive-on-theway-horizontal')} visibility={(storage.get(dida_intercity_id('common-route-goods')) == true || storage.get(dida_intercity_id('publish_itinerary')) == true ) ? 'visible' : 'gone'}>
                                <text text='顺路 ≧ '></text>
                                <input id={dida_intercity_id('exclusive-on-theway-percentage')} text={storage.get(dida_intercity_id('exclusive-on-theway-percentage'), '50')} inputType='number'></input>
                                <text text='%，终点 ≦ '></text>
                                <input id={dida_intercity_id('exclusive-end-point')} text={storage.get(dida_intercity_id('exclusive-end-point'), '100')}></input>
                                <text text=' km'></text>
                            </horizontal>

                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <checkbox text='拼车单' id={dida_intercity_id('carpooling')} checked={storage.get(dida_intercity_id('carpooling'), 'true')}></checkbox>
                                <input id={dida_intercity_id('people-carpooling-min')} text={storage.get(dida_intercity_id('people-carpooling-min'), '1')} inputType='number'></input>
                                <text text=' 至 '></text>
                                <input id={dida_intercity_id('people-carpooling-max')} text={storage.get(dida_intercity_id('people-carpooling-max'), '4')} inputType='number'></input>
                                <text text=' 人 | '></text>
                                <text text='时间: '></text>
                                <input id={dida_intercity_id('carpooling-time-on')} text={storage.get(dida_intercity_id('carpooling-time-on'), '00:00')} inputType='datetime'></input>
                                <text text=' 至 '></text>
                                <input id={dida_intercity_id('carpooling-time-off')} text={storage.get(dida_intercity_id('carpooling-time-off'), '24:00')} inputType='datetime'></input>
                            </horizontal>

                            <horizontal>
                                <text text='金额: '></text>
                                <input id={dida_intercity_id('carpooling-money-min')} text={storage.get(dida_intercity_id('carpooling-money-min'), '0')} inputType='number'></input>
                                <text text=' 至 '></text>
                                <input id={dida_intercity_id('carpooling-money-max')} text={storage.get(dida_intercity_id('carpooling-money-max'), '9999')} inputType='number'></input>
                                <text text=' 元，起点 ≦ '></text>
                                <input id={dida_intercity_id('carpooling-starting-point')} text={storage.get(dida_intercity_id('carpooling-starting-point'), '10')}></input>
                                <text text=' km '></text>
                            </horizontal>
                            <horizontal id={dida_intercity_id('carpooling-on-theway-horizontal')} visibility={(storage.get(dida_intercity_id('common-route-goods')) == true || storage.get(dida_intercity_id('publish_itinerary')) == true ) ? 'visible' : 'gone'}>
                                <text text='顺路 ≧ '></text>
                                <input id={dida_intercity_id('carpooling-on-theway-percentage')} text={storage.get(dida_intercity_id('carpooling-on-theway-percentage'), '50')} inputType='number'></input>
                                <text text='%，终点 ≦ '></text>
                                <input id={dida_intercity_id('carpooling-end-point')} text={storage.get(dida_intercity_id('carpooling-end-point'), '100')}></input>
                                <text text=' km'></text>
                            </horizontal>
                        </vertical>
                        <button id={dida_intercity_id('save-and-opendida')} text='保存并打开某嗒'></button>
                    </vertical>
                </horizontal>
            </card>
        </vertical>
    ),
    callback: function(view, script) {

        // 市内 跨城
        ui[dida_intercity_id('save-and-opendida')].on('click', function() {
            if (console.errorr <= 0) return
            toastLog("未完成...")
            return
            if (!getPermission()) return

            storage.put(dida_intercity_id('intercity-goods'), ui[dida_intercity_id('intercity-goods')].isChecked())
            storage.put(dida_intercity_id('crosscity-goods'), ui[dida_intercity_id('crosscity-goods')].isChecked())
            storage.put(dida_intercity_id('common-route-goods'), ui[dida_intercity_id('common-route-goods')].isChecked())
            storage.put(dida_intercity_id('publish_itinerary'), ui[dida_intercity_id('publish_itinerary')].isChecked())

            storage.put(dida_intercity_id('refresh-on'), ui[dida_intercity_id('refresh-on')].getText()+'')
            storage.put(dida_intercity_id('refresh-off'), ui[dida_intercity_id('refresh-off')].getText()+'')
            storage.put(dida_intercity_id('today'), ui[dida_intercity_id('today')].isChecked())
            storage.put(dida_intercity_id('tomorrow'), ui[dida_intercity_id('tomorrow')].isChecked())
            storage.put(dida_intercity_id('after-tomorrow'), ui[dida_intercity_id('after-tomorrow')].isChecked())

            storage.put(dida_intercity_id('exclusive'), ui[dida_intercity_id('exclusive')].isChecked())
            storage.put(dida_intercity_id('carpooling'), ui[dida_intercity_id('carpooling')].isChecked())
            
            storage.put(dida_intercity_id('people-exclusive-min'), ui[dida_intercity_id('people-exclusive-min')].getText()+'')
            storage.put(dida_intercity_id('people-exclusive-max'), ui[dida_intercity_id('people-exclusive-max')].getText()+'')
            storage.put(dida_intercity_id('people-carpooling-min'), ui[dida_intercity_id('people-carpooling-min')].getText()+'')
            storage.put(dida_intercity_id('people-carpooling-max'), ui[dida_intercity_id('people-carpooling-max')].getText()+'')

            storage.put(dida_intercity_id('exclusive-time-on'), ui[dida_intercity_id('exclusive-time-on')].getText()+'')
            storage.put(dida_intercity_id('exclusive-time-off'), ui[dida_intercity_id('exclusive-time-off')].getText()+'')
            storage.put(dida_intercity_id('exclusive-money-min'), ui[dida_intercity_id('exclusive-money-min')].getText()+'')
            storage.put(dida_intercity_id('exclusive-money-max'), ui[dida_intercity_id('exclusive-money-max')].getText()+'')
            storage.put(dida_intercity_id('exclusive-starting-point'), ui[dida_intercity_id('exclusive-starting-point')].getText()+'')
            storage.put(dida_intercity_id('exclusive-end-point'), ui[dida_intercity_id('exclusive-end-point')].getText()+'')
            storage.put(dida_intercity_id('exclusive-on-theway-percentage'), ui[dida_intercity_id('exclusive-on-theway-percentage')].getText()+'')
            
            storage.put(dida_intercity_id('carpooling-time-on'), ui[dida_intercity_id('carpooling-time-on')].getText()+'')
            storage.put(dida_intercity_id('carpooling-time-off'), ui[dida_intercity_id('carpooling-time-off')].getText()+'')
            storage.put(dida_intercity_id('carpooling-money-min'), ui[dida_intercity_id('carpooling-money-min')].getText()+'')
            storage.put(dida_intercity_id('carpooling-money-max'), ui[dida_intercity_id('carpooling-money-max')].getText()+'')
            storage.put(dida_intercity_id('carpooling-starting-point'), ui[dida_intercity_id('carpooling-starting-point')].getText()+'')
            storage.put(dida_intercity_id('carpooling-end-point'), ui[dida_intercity_id('carpooling-end-point')].getText()+'')
            storage.put(dida_intercity_id('carpooling-on-theway-percentage'), ui[dida_intercity_id('carpooling-on-theway-percentage')].getText()+'')
            // paid
            
            script.init_intercity()
            launch('com.didapinche.booking')
            my_floaty(script.intercity, null)
        })

        ui[dida_intercity_id('common-route-goods')].on('check', function(checked) {
            if (checked) {
                ui[dida_intercity_id('exclusive-on-theway-horizontal')].setVisibility(0)
                ui[dida_intercity_id('carpooling-on-theway-horizontal')].setVisibility(0)
            }
        })

        ui[dida_intercity_id('intercity-goods')].on('check', function(checked) {
            if (checked) {
                ui[dida_intercity_id('exclusive-on-theway-horizontal')].setVisibility(8)
                ui[dida_intercity_id('carpooling-on-theway-horizontal')].setVisibility(8)
            }
        })

        ui[dida_intercity_id('crosscity-goods')].on('check', function(checked) {
            if (checked) {
                ui[dida_intercity_id('exclusive-on-theway-horizontal')].setVisibility(8)
                ui[dida_intercity_id('carpooling-on-theway-horizontal')].setVisibility(8)
            }
        })

        ui[dida_intercity_id('publish_itinerary')].on('check', function(checked) {
            if (checked) {
                ui[dida_intercity_id('exclusive-on-theway-horizontal')].setVisibility(0)
                ui[dida_intercity_id('carpooling-on-theway-horizontal')].setVisibility(0)
            }
        })

    }
}