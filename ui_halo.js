const halo_intercity_id = console._halo_intercity_id
const halo_publish_itinerary_id = console._halo_publish_itinerary_id
const storage = console._storage
const my_floaty = console._my_floaty
const getPermission = console._permission



module.exports = {
    xml: (
        <vertical padding='3 3 3 32'>
            <card cardCornerRadius='6' margin='0 0 0 9dp'>
                <horizontal>
                    <text text='' w='3dp' h='*' margin='0 0 6 0' bg='#04A9F5' layout_gravity='center_vertical'></text>
                    <vertical w='*'>
                        <text text='城际/室内' textSize='16sp' textStyle='bold'></text>
                        <vertical padding='3dp'>

                            <radiogroup orientation='horizontal'>
                                <radio id={halo_intercity_id('intercity-goods')} text='市内订单' checked={storage.get(halo_intercity_id('intercity-goods'), 'true')}></radio>
                                <radio id={halo_intercity_id('crosscity-goods')} text='城际订单' checked={storage.get(halo_intercity_id('crosscity-goods'), 'false')}></radio>
                            </radiogroup>

                            <horizontal>
                                <text text='刷新速度: '></text>
                                <input id={halo_intercity_id('refresh-on')} text={storage.get(halo_intercity_id('refresh-on'), '1000')} inputType='number'></input>
                                <text text=' 至 '></text>
                                <input id={halo_intercity_id('refresh-off')} text={storage.get(halo_intercity_id('refresh-off'), '1500')} inputType='number'></input>
                                <text text=' 毫秒'></text>
                            </horizontal>
                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <checkbox checked={storage.get(halo_intercity_id('today'), 'true')} text='今天' id={halo_intercity_id('today')}></checkbox>
                                <checkbox checked={storage.get(halo_intercity_id('tomorrow'), 'true')} text='明天' id={halo_intercity_id('tomorrow')}></checkbox>
                                <checkbox checked={storage.get(halo_intercity_id('after-tomorrow'), 'true')} text='明天以后' id={halo_intercity_id('after-tomorrow')}></checkbox>
                            </horizontal>
                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <text text='时间: '></text>
                                <input id={halo_intercity_id('time-on')} text={storage.get(halo_intercity_id('time-on'), '00:00')} inputType='datetime'></input>
                                <text text=' 至 '></text>
                                <input id={halo_intercity_id('time-off')} text={storage.get(halo_intercity_id('time-off'), '24:00')} inputType='datetime'></input>
                            </horizontal>
                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <checkbox text='独享单' id={halo_intercity_id('exclusive')} checked={storage.get(halo_intercity_id('exclusive'))}></checkbox>
                                <input id={halo_intercity_id('people-exclusive-min')} inputType='number' text={storage.get(halo_intercity_id('people-exclusive-min'), '1')}></input>
                                <text text=' 至 '></text>
                                <input id={halo_intercity_id('people-exclusive-max')} inputType='number' text={storage.get(halo_intercity_id('people-exclusive-max'), '4')}></input>
                                <text text=' 人 | '></text>
                                <checkbox text='拼车单' id={halo_intercity_id('carpooling')} checked={storage.get(halo_intercity_id('carpooling'))}></checkbox>
                                <input id={halo_intercity_id('people-carpooling-min')} inputType='number' text={storage.get(halo_intercity_id('people-carpooling-min'), '1')}></input>
                                <text text=' 至 '></text>
                                <input id={halo_intercity_id('people-carpooling-max')} inputType='number' text={storage.get(halo_intercity_id('people-carpooling-max'), '4')}></input>
                                <text text=' 人'></text>
                            </horizontal>

                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <text text='金额: '></text>
                                <input id={halo_intercity_id('money-min')} text={storage.get(halo_intercity_id('money-min'), '0')} inputType='number'></input>
                                <text text=' 至 '></text>
                                <input id={halo_intercity_id('money-max')} text={storage.get(halo_intercity_id('money-max'), '9999')} inputType='number'></input>
                                <text text=' 元，起点 ≦ '></text>
                                <input id={halo_intercity_id('starting-point')} text={storage.get(halo_intercity_id('starting-point'), '10')}></input>
                                <text text=' km '></text>
                            </horizontal>

                        </vertical>
                        <button id={halo_intercity_id('save-and-openhalo')} text='保存并打开某罗'></button>
                    </vertical>
                </horizontal>
            </card>

            <card cardCornerRadius='6' margin='0 0 0 9dp'>
                <horizontal>
                    <text text='' w='3dp' h='*' margin='0 0 6 0' bg='#ff0000' layout_gravity='center_vertical'></text>
                    <vertical w='*'>
                        <text text='发布行程' textSize='16sp' textStyle='bold'></text>
                        <vertical padding='3dp'>
                            <horizontal>
                                <text text='刷新速度: '></text>
                                <input id={halo_publish_itinerary_id('refresh-on')} text={storage.get(halo_publish_itinerary_id('refresh-on'), '1000')} inputType='number'></input>
                                <text text=' 至 '></text>
                                <input id={halo_publish_itinerary_id('refresh-off')} text={storage.get(halo_publish_itinerary_id('refresh-off'), '1500')} inputType='number'></input>
                                <text text=' 毫秒'></text>
                            </horizontal>
                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <checkbox checked={storage.get(halo_publish_itinerary_id('today'), 'true')} text='今天' id={halo_publish_itinerary_id('today')}></checkbox>
                                <checkbox checked={storage.get(halo_publish_itinerary_id('tomorrow'), 'true')} text='明天' id={halo_publish_itinerary_id('tomorrow')}></checkbox>
                                <checkbox checked={storage.get(halo_publish_itinerary_id('after-tomorrow'), 'true')} text='明天以后' id={halo_publish_itinerary_id('after-tomorrow')}></checkbox>
                            </horizontal>
                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <text text='时间: '></text>
                                <input id={halo_publish_itinerary_id('time-on')} text={storage.get(halo_publish_itinerary_id('time-on'), '00:00')} inputType='datetime'></input>
                                <text text=' 至 '></text>
                                <input id={halo_publish_itinerary_id('time-off')} text={storage.get(halo_publish_itinerary_id('time-off'), '24:00')} inputType='datetime'></input>
                            </horizontal>
                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <checkbox text='独享单' id={halo_publish_itinerary_id('exclusive')} checked={storage.get(halo_publish_itinerary_id('exclusive'), 'true')}></checkbox>
                                <input id={halo_publish_itinerary_id('people-exclusive-min')} text={storage.get(halo_publish_itinerary_id('people-exclusive-min'), '1')} inputType='number'></input>
                                <text text=' 至 '></text>
                                <input id={halo_publish_itinerary_id('people-exclusive-max')} text={storage.get(halo_publish_itinerary_id('people-exclusive-max'), '4')} inputType='number'></input>
                                <text text=' 人 | '></text>
                                <checkbox text='拼车单' id={halo_publish_itinerary_id('carpooling')} checked={storage.get(halo_publish_itinerary_id('carpooling'), 'true')}></checkbox>
                                <input id={halo_publish_itinerary_id('people-carpooling-min')} text={storage.get(halo_publish_itinerary_id('people-carpooling-min'), '1')} inputType='number'></input>
                                <text text=' 至 '></text>
                                <input id={halo_publish_itinerary_id('people-carpooling-max')} text={storage.get(halo_publish_itinerary_id('people-carpooling-max'), '4')} inputType='number'></input>
                                <text text=' 人'></text>
                            </horizontal>
                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <text text='金额: '></text>
                                <input id={halo_publish_itinerary_id('money-min')} text={storage.get(halo_publish_itinerary_id('money-min'), '0')} inputType='number'></input>
                                <text text=' 至 '></text>
                                <input id={halo_publish_itinerary_id('money-max')} text={storage.get(halo_publish_itinerary_id('money-max'), '9999')} inputType='number'></input>
                                <text text=' 元，顺路 ≧ '></text>
                                <input id={halo_publish_itinerary_id('on-theway-percentage')} text={storage.get(halo_publish_itinerary_id('on-theway-percentage'), '50')} inputType='number'></input>
                                <text text=' % '></text>
                            </horizontal>
                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                            <horizontal>
                                <text text='起点 ≦ '></text>
                                <input id={halo_publish_itinerary_id('starting-point')} text={storage.get(halo_publish_itinerary_id('starting-point'), '0')}></input>
                                <text text='km，终点 ≦ '></text>
                                <input id={halo_publish_itinerary_id('end-point')} text={storage.get(halo_publish_itinerary_id('end-point'), '50')}></input>
                                <text text=' km'></text>
                            </horizontal>
                        </vertical>
                        <button id={halo_publish_itinerary_id('save-and-openhalo')} text='保存并打开某罗'></button>
                    </vertical>
                </horizontal>
            </card>
        </vertical>
    ),
    callback: function(view, script) {
        // 市内 跨城
        // ui[halo_intercity_id('save-and-openhalo')].on('click', function() {
        //     if (!getPermission()) return
        //     if (console.errorr <= 0) return
        //     storage.put(halo_intercity_id('intercity-goods'), ui[halo_intercity_id('intercity-goods')].isChecked())
        //     storage.put(halo_intercity_id('crosscity-goods'), ui[halo_intercity_id('crosscity-goods')].isChecked())
            
        //     storage.put(halo_intercity_id('refresh-on'), ui[halo_intercity_id('refresh-on')].getText()+'')
        //     storage.put(halo_intercity_id('refresh-off'), ui[halo_intercity_id('refresh-off')].getText()+'')

        //     storage.put(halo_intercity_id('today'), ui[halo_intercity_id('today')].isChecked())
        //     storage.put(halo_intercity_id('tomorrow'), ui[halo_intercity_id('tomorrow')].isChecked())
        //     storage.put(halo_intercity_id('after-tomorrow'), ui[halo_intercity_id('after-tomorrow')].isChecked())

        //     storage.put(halo_intercity_id('time-on'), ui[halo_intercity_id('time-on')].getText()+'')
        //     storage.put(halo_intercity_id('time-off'), ui[halo_intercity_id('time-off')].getText()+'')
            
        //     storage.put(halo_intercity_id('exclusive'), ui[halo_intercity_id('exclusive')].isChecked())
        //     storage.put(halo_intercity_id('carpooling'), ui[halo_intercity_id('carpooling')].isChecked())
        //     storage.put(halo_intercity_id('people-exclusive-min'), ui[halo_intercity_id('people-exclusive-min')].getText()+'')
        //     storage.put(halo_intercity_id('people-exclusive-max'), ui[halo_intercity_id('people-exclusive-max')].getText()+'')
        //     storage.put(halo_intercity_id('people-carpooling-min'), ui[halo_intercity_id('people-carpooling-min')].getText()+'')
        //     storage.put(halo_intercity_id('people-carpooling-max'), ui[halo_intercity_id('people-carpooling-max')].getText()+'')

        //     storage.put(halo_intercity_id('money-min'), ui[halo_intercity_id('money-min')].getText()+'')
        //     storage.put(halo_intercity_id('money-max'), ui[halo_intercity_id('money-max')].getText()+'')
        //     storage.put(halo_intercity_id('starting-point'), ui[halo_intercity_id('starting-point')].getText()+'')
            
        //     script.init_intercity()
        //     launch('com.jingyao.easybike')
        //     my_floaty(script.intercity, null)
        // })

        // ui[halo_publish_itinerary_id('save-and-openhalo')].on('click', function() {
        //     if (!getPermission()) return
        //     if (console.errorr <= 0) return
            
        //     storage.put(halo_publish_itinerary_id('refresh-on'), ui[halo_publish_itinerary_id('refresh-on')].getText()+'')
        //     storage.put(halo_publish_itinerary_id('refresh-off'), ui[halo_publish_itinerary_id('refresh-off')].getText()+'')
        
        //     storage.put(halo_publish_itinerary_id('today'), ui[halo_publish_itinerary_id('today')].isChecked())
        //     storage.put(halo_publish_itinerary_id('tomorrow'), ui[halo_publish_itinerary_id('tomorrow')].isChecked())
        //     storage.put(halo_publish_itinerary_id('after-tomorrow'), ui[halo_publish_itinerary_id('after-tomorrow')].isChecked())
        
        //     storage.put(halo_publish_itinerary_id('time-on'), ui[halo_publish_itinerary_id('time-on')].getText()+'')
        //     storage.put(halo_publish_itinerary_id('time-off'), ui[halo_publish_itinerary_id('time-off')].getText()+'')
            
        //     storage.put(halo_publish_itinerary_id('exclusive'), ui[halo_publish_itinerary_id('exclusive')].isChecked())
        //     storage.put(halo_publish_itinerary_id('carpooling'), ui[halo_publish_itinerary_id('carpooling')].isChecked())
        //     storage.put(halo_publish_itinerary_id('people-exclusive-min'), ui[halo_publish_itinerary_id('people-exclusive-min')].getText()+'')
        //     storage.put(halo_publish_itinerary_id('people-exclusive-max'), ui[halo_publish_itinerary_id('people-exclusive-max')].getText()+'')
        //     storage.put(halo_publish_itinerary_id('people-carpooling-min'), ui[halo_publish_itinerary_id('people-carpooling-min')].getText()+'')
        //     storage.put(halo_publish_itinerary_id('people-carpooling-max'), ui[halo_publish_itinerary_id('people-carpooling-max')].getText()+'')
        
        //     storage.put(halo_publish_itinerary_id('money-min'), ui[halo_publish_itinerary_id('money-min')].getText()+'')
        //     storage.put(halo_publish_itinerary_id('money-max'), ui[halo_publish_itinerary_id('money-max')].getText()+'')
        
        //     storage.put(halo_publish_itinerary_id('starting-point'), ui[halo_publish_itinerary_id('starting-point')].getText()+'')

        //     storage.put(halo_publish_itinerary_id('on-theway-percentage'), ui[halo_publish_itinerary_id('on-theway-percentage')].getText()+'')
        //     storage.put(halo_publish_itinerary_id('end-point'), ui[halo_publish_itinerary_id('end-point')].getText()+'')

            
        //     script.init_push_trip()
        //     launch('com.jingyao.easybike')
        //     my_floaty(script.push_trip, null)
        // })
    }
}