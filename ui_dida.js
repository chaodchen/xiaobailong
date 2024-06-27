const dida_id = console._dida_id
const storage = console._storage
const my_floaty = console._my_floaty
const getPermission = console._permission

module.exports = {
    xml: (
        <vertical>
            <appbar bg='#b2b2b2'>
                <tabs id='tabs4'></tabs>
            </appbar>
            <viewpager id='viewpager4' padding='3'>
                <frame>
                    <ScrollView>
                        <vertical>
                            <card cardCornerRadius='6' margin='0 0 0 9dp'>
                                <horizontal>
                                    <text text='' w='3dp' h='*' margin='0 0 6 0' bg='#04A9F5' layout_gravity='center_vertical'></text>
                                    <vertical w='*'>
                                        {/* <text text='城际' textSize='16sp' textStyle='bold'></text> */}
                                        <vertical padding='3dp'>
                                            <horizontal>
                                                <text text='刷新速度: '></text>
                                                <input id={dida_id('city-refresh-on')} text={storage.get(dida_id('city-refresh-on'), '1000')} inputType='number'></input>
                                                <text text=' 至 '></text>
                                                <input id={dida_id('city-refresh-off')} text={storage.get(dida_id('city-refresh-off'), '1500')} inputType='number'></input>
                                                <text text=' 毫秒'></text>
                                            </horizontal>
                                            <horizontal>
                                                <checkbox checked={storage.get(dida_id('city-today'), 'true')} text='今天' id={dida_id('city-today')}></checkbox>
                                                <checkbox checked={storage.get(dida_id('city-tomorrow'), 'true')} text='明天' id={dida_id('city-tomorrow')}></checkbox>
                                                <checkbox checked={storage.get(dida_id('city-otherday'), 'true')} text='明天以后' id={dida_id('city-otherday')}></checkbox>
                                            </horizontal>
                                            <horizontal>
                                                <checkbox checked={storage.get(dida_id('city-expressway'), 'false')} text='只抢已支付' id={dida_id('city-expressway')}></checkbox>
                                            </horizontal>
                                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                                            <horizontal>
                                                <checkbox text='独享单' id={dida_id('city-exclusive')} checked={storage.get(dida_id('city-exclusive'))}></checkbox>
                                                <input id={dida_id('city-exclusive-people-min')} inputType='number' text={storage.get(dida_id('city-exclusive-people-min'), '1')}></input>
                                                <text text=' 至 '></text>
                                                <input id={dida_id('city-exclusive-people-max')} inputType='number' text={storage.get(dida_id('city-exclusive-people-max'), '4')}></input>
                                                <text text=' 人 | '></text>
                                                <text text='时间: '></text>
                                                <input id={dida_id('city-exclusive-time-on')} text={storage.get(dida_id('city-exclusive-time-on'), '00:00')} inputType='datetime'></input>
                                                <text text=' 至 '></text>
                                                <input id={dida_id('city-exclusive-time-off')} text={storage.get(dida_id('city-exclusive-time-off'), '24:00')} inputType='datetime'></input>
                                            </horizontal>
                                            <horizontal>
                                                <text text='金额: '></text>
                                                <input id={dida_id('city-exclusive-money-min')} text={storage.get(dida_id('city-exclusive-money-min'), '0')} inputType='number'></input>
                                                <text text=' 至 '></text>
                                                <input id={dida_id('city-exclusive-money-max')} text={storage.get(dida_id('city-exclusive-money-max'), '9999')} inputType='number'></input>
                                                <text text=' 元，起点 ≦ '></text>
                                                <input id={dida_id('city-exclusive-starting-point')} text={storage.get(dida_id('city-exclusive-starting-point'), '10')}></input>
                                                <text text=' km '></text>
                                            </horizontal>

                                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                                            <horizontal>
                                                <checkbox text='拼车单' id={dida_id('city-carpooling')} checked={storage.get(dida_id('city-carpooling'))}></checkbox>
                                                <input id={dida_id('city-carpooling-people-min')} inputType='number' text={storage.get(dida_id('city-carpooling-people-min'), '1')}></input>
                                                <text text=' 至 '></text>
                                                <input id={dida_id('city-carpooling-people-max')} inputType='number' text={storage.get(dida_id('city-carpooling-people-max'), '4')}></input>
                                                <text text=' 人 | '></text>
                                                <text text='时间: '></text>
                                                <input id={dida_id('city-carpooling-time-on')} text={storage.get(dida_id('city-carpooling-time-on'), '00:00')} inputType='datetime'></input>
                                                <text text=' 至 '></text>
                                                <input id={dida_id('city-carpooling-time-off')} text={storage.get(dida_id('city-carpooling-time-off'), '24:00')} inputType='datetime'></input>
                                            </horizontal>
                                            <horizontal>
                                                <text text='金额: '></text>
                                                <input id={dida_id('city-carpooling-money-min')} text={storage.get(dida_id('city-carpooling-money-min'), '0')} inputType='number'></input>
                                                <text text=' 至 '></text>
                                                <input id={dida_id('city-carpooling-money-max')} text={storage.get(dida_id('city-carpooling-money-max'), '9999')} inputType='number'></input>
                                                <text text=' 元，起点 ≦ '></text>
                                                <input id={dida_id('city-carpooling-starting-point')} text={storage.get(dida_id('city-carpooling-starting-point'), '10')}></input>
                                                <text text=' km '></text>
                                            </horizontal>
                                            
                                        </vertical>
                                        <button id={dida_id('city-run')} text='保存并打开某嗒'></button>
                                    </vertical>
                                </horizontal>
                            </card>
                        </vertical>
                    </ScrollView>
                </frame>
                <frame>
                    <ScrollView>
                        <vertical>
                            <card cardCornerRadius='6' margin='0 0 0 9dp'>
                                <horizontal>
                                    <text text='' w='3dp' h='*' margin='0 0 6 0' bg='#04A9F5' layout_gravity='center_vertical'></text>
                                    <vertical w='*'>
                                        {/* <text text='城际' textSize='16sp' textStyle='bold'></text> */}
                                        <vertical padding='3dp'>
                                            <horizontal>
                                                <text text='刷新速度: '></text>
                                                <input id={dida_id('crossCity-refresh-on')} text={storage.get(dida_id('crossCity-refresh-on'), '1000')} inputType='number'></input>
                                                <text text=' 至 '></text>
                                                <input id={dida_id('crossCity-refresh-off')} text={storage.get(dida_id('crossCity-refresh-off'), '1500')} inputType='number'></input>
                                                <text text=' 毫秒'></text>
                                            </horizontal>
                                            <horizontal>
                                                <checkbox checked={storage.get(dida_id('crossCity-today'), 'true')} text='今天' id={dida_id('crossCity-today')}></checkbox>
                                                <checkbox checked={storage.get(dida_id('crossCity-tomorrow'), 'true')} text='明天' id={dida_id('crossCity-tomorrow')}></checkbox>
                                                <checkbox checked={storage.get(dida_id('crossCity-otherday'), 'true')} text='明天以后' id={dida_id('crossCity-otherday')}></checkbox>
                                            </horizontal>
                                            <horizontal>
                                                <checkbox checked={storage.get(dida_id('crossCity-expressway'), 'false')} text='只抢已支付' id={dida_id('crossCity-expressway')}></checkbox>
                                            </horizontal>
                                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                                            <horizontal>
                                                <checkbox text='独享单' id={dida_id('crossCity-exclusive')} checked={storage.get(dida_id('crossCity-exclusive'))}></checkbox>
                                                <input id={dida_id('crossCity-exclusive-people-min')} inputType='number' text={storage.get(dida_id('crossCity-exclusive-people-min'), '1')}></input>
                                                <text text=' 至 '></text>
                                                <input id={dida_id('crossCity-exclusive-people-max')} inputType='number' text={storage.get(dida_id('crossCity-exclusive-people-max'), '4')}></input>
                                                <text text=' 人 | '></text>
                                                <text text='时间: '></text>
                                                <input id={dida_id('crossCity-exclusive-time-on')} text={storage.get(dida_id('crossCity-exclusive-time-on'), '00:00')} inputType='datetime'></input>
                                                <text text=' 至 '></text>
                                                <input id={dida_id('crossCity-exclusive-time-off')} text={storage.get(dida_id('crossCity-exclusive-time-off'), '24:00')} inputType='datetime'></input>
                                            </horizontal>
                                            <horizontal>
                                                <text text='金额: '></text>
                                                <input id={dida_id('crossCity-exclusive-money-min')} text={storage.get(dida_id('crossCity-exclusive-money-min'), '0')} inputType='number'></input>
                                                <text text=' 至 '></text>
                                                <input id={dida_id('crossCity-exclusive-money-max')} text={storage.get(dida_id('crossCity-exclusive-money-max'), '9999')} inputType='number'></input>
                                                <text text=' 元，起点 ≦ '></text>
                                                <input id={dida_id('crossCity-exclusive-starting-point')} text={storage.get(dida_id('crossCity-exclusive-starting-point'), '10')}></input>
                                                <text text=' km '></text>
                                            </horizontal>

                                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                                            <horizontal>
                                                <checkbox text='拼车单' id={dida_id('crossCity-carpooling')} checked={storage.get(dida_id('crossCity-carpooling'))}></checkbox>
                                                <input id={dida_id('crossCity-carpooling-people-min')} inputType='number' text={storage.get(dida_id('crossCity-carpooling-people-min'), '1')}></input>
                                                <text text=' 至 '></text>
                                                <input id={dida_id('crossCity-carpooling-people-max')} inputType='number' text={storage.get(dida_id('crossCity-carpooling-people-max'), '4')}></input>
                                                <text text=' 人 | '></text>
                                                <text text='时间: '></text>
                                                <input id={dida_id('crossCity-carpooling-time-on')} text={storage.get(dida_id('crossCity-carpooling-time-on'), '00:00')} inputType='datetime'></input>
                                                <text text=' 至 '></text>
                                                <input id={dida_id('crossCity-carpooling-time-off')} text={storage.get(dida_id('crossCity-carpooling-time-off'), '24:00')} inputType='datetime'></input>
                                            </horizontal>
                                            <horizontal>
                                                <text text='金额: '></text>
                                                <input id={dida_id('crossCity-carpooling-money-min')} text={storage.get(dida_id('crossCity-carpooling-money-min'), '0')} inputType='number'></input>
                                                <text text=' 至 '></text>
                                                <input id={dida_id('crossCity-carpooling-money-max')} text={storage.get(dida_id('crossCity-carpooling-money-max'), '9999')} inputType='number'></input>
                                                <text text=' 元，起点 ≦ '></text>
                                                <input id={dida_id('crossCity-carpooling-starting-point')} text={storage.get(dida_id('crossCity-carpooling-starting-point'), '10')}></input>
                                                <text text=' km '></text>
                                            </horizontal>
                                        </vertical>
                                        <button id={dida_id('crossCity-run')} text='保存并打开某嗒'></button>
                                    </vertical>
                                </horizontal>
                            </card>
                        </vertical>
                    </ScrollView>
                </frame>
                <frame>
                    <text text='暂不支持'></text>
                </frame>
            </viewpager>
        </vertical>
    ),
    callback: function(view, script) {
        //设置滑动页面的标题        
        ui.viewpager4.setTitles(["市内", "城际", "发布行程(不支持)"]);
        //让滑动页面和标签栏联动    
        ui.tabs4.setupWithViewPager(ui.viewpager4);

        ui[dida_id('city-run')].on('click', function() {
            if (!getPermission()) return
            if (console.errorr <= 0) return

            storage.put(dida_id('city-refresh-on'), ui[dida_id('city-refresh-on')].getText()+'')
            storage.put(dida_id('city-refresh-off'), ui[dida_id('city-refresh-off')].getText()+'')

            storage.put(dida_id('city-today'), ui[dida_id('city-today')].isChecked())
            storage.put(dida_id('city-tomorrow'), ui[dida_id('city-tomorrow')].isChecked())
            storage.put(dida_id('city-otherday'), ui[dida_id('city-otherday')].isChecked())
            storage.put(dida_id('city-expressway'), ui[dida_id('city-expressway')].isChecked())

            storage.put(dida_id('city-exclusive'), ui[dida_id('city-exclusive')].isChecked())
            storage.put(dida_id('city-carpooling'), ui[dida_id('city-carpooling')].isChecked())

            

            // 人数
            storage.put(dida_id('city-exclusive-people-min'), ui[dida_id('city-exclusive-people-min')].getText()+'')
            storage.put(dida_id('city-exclusive-people-max'), ui[dida_id('city-exclusive-people-max')].getText()+'')
            storage.put(dida_id('city-carpooling-people-min'), ui[dida_id('city-carpooling-people-min')].getText()+'')
            storage.put(dida_id('city-carpooling-people-max'), ui[dida_id('city-carpooling-people-max')].getText()+'')


            // 时间
            storage.put(dida_id('city-exclusive-time-on'), ui[dida_id('city-exclusive-time-on')].getText()+'')
            storage.put(dida_id('city-exclusive-time-off'), ui[dida_id('city-exclusive-time-off')].getText()+'')
            storage.put(dida_id('city-carpooling-time-on'), ui[dida_id('city-carpooling-time-on')].getText()+'')
            storage.put(dida_id('city-carpooling-time-off'), ui[dida_id('city-carpooling-time-off')].getText()+'')


            // 金额
            storage.put(dida_id('city-exclusive-money-min'), ui[dida_id('city-exclusive-money-min')].getText()+'')
            storage.put(dida_id('city-exclusive-money-max'), ui[dida_id('city-exclusive-money-max')].getText()+'')
            storage.put(dida_id('city-carpooling-money-min'), ui[dida_id('city-carpooling-money-min')].getText()+'')
            storage.put(dida_id('city-carpooling-money-max'), ui[dida_id('city-carpooling-money-max')].getText()+'')

            
            // 起点
            storage.put(dida_id('city-exclusive-starting-point'), ui[dida_id('city-exclusive-starting-point')].getText()+'')
            storage.put(dida_id('city-carpooling-starting-point'), ui[dida_id('city-carpooling-starting-point')].getText()+'')


            // 执行
            script.init_intercity()
            launch('com.didapinche.booking')
            my_floaty(script.intercity, null)
        })

        ui[dida_id('crossCity-run')].on('click', function() {
            if (!getPermission()) return
            if (console.errorr <= 0) return
        
            storage.put(dida_id('crossCity-refresh-on'), ui[dida_id('crossCity-refresh-on')].getText()+'')
            storage.put(dida_id('crossCity-refresh-off'), ui[dida_id('crossCity-refresh-off')].getText()+'')
        
            storage.put(dida_id('crossCity-today'), ui[dida_id('crossCity-today')].isChecked())
            storage.put(dida_id('crossCity-tomorrow'), ui[dida_id('crossCity-tomorrow')].isChecked())
            storage.put(dida_id('crossCity-otherday'), ui[dida_id('crossCity-otherday')].isChecked())
            storage.put(dida_id('crossCity-expressway'), ui[dida_id('crossCity-expressway')].isChecked())
        
            storage.put(dida_id('crossCity-exclusive'), ui[dida_id('crossCity-exclusive')].isChecked())
            storage.put(dida_id('crossCity-carpooling'), ui[dida_id('crossCity-carpooling')].isChecked())

            
        
            // 人数
            storage.put(dida_id('crossCity-exclusive-people-min'), ui[dida_id('crossCity-exclusive-people-min')].getText()+'')
            storage.put(dida_id('crossCity-exclusive-people-max'), ui[dida_id('crossCity-exclusive-people-max')].getText()+'')
            storage.put(dida_id('crossCity-carpooling-people-min'), ui[dida_id('crossCity-carpooling-people-min')].getText()+'')
            storage.put(dida_id('crossCity-carpooling-people-max'), ui[dida_id('crossCity-carpooling-people-max')].getText()+'')

            // 时间
            storage.put(dida_id('crossCity-exclusive-time-on'), ui[dida_id('crossCity-exclusive-time-on')].getText()+'')
            storage.put(dida_id('crossCity-exclusive-time-off'), ui[dida_id('crossCity-exclusive-time-off')].getText()+'')
            storage.put(dida_id('crossCity-carpooling-time-on'), ui[dida_id('crossCity-carpooling-time-on')].getText()+'')
            storage.put(dida_id('crossCity-carpooling-time-off'), ui[dida_id('crossCity-carpooling-time-off')].getText()+'')

        
            // 金额
            storage.put(dida_id('crossCity-exclusive-money-min'), ui[dida_id('crossCity-exclusive-money-min')].getText()+'')
            storage.put(dida_id('crossCity-exclusive-money-max'), ui[dida_id('crossCity-exclusive-money-max')].getText()+'')
            storage.put(dida_id('crossCity-carpooling-money-min'), ui[dida_id('crossCity-carpooling-money-min')].getText()+'')
            storage.put(dida_id('crossCity-carpooling-money-max'), ui[dida_id('crossCity-carpooling-money-max')].getText()+'')

            
            // 起点
            storage.put(dida_id('crossCity-exclusive-starting-point'), ui[dida_id('crossCity-exclusive-starting-point')].getText()+'')
            storage.put(dida_id('crossCity-carpooling-starting-point'), ui[dida_id('crossCity-carpooling-starting-point')].getText()+'')

        
            // 执行
            script.init_crossCity()
            launch('com.didapinche.booking')
            my_floaty(script.crossCity, null)
        })

    }
}

