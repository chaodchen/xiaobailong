const halo_id = console._halo_id
const storage = console._storage
const my_floaty = console._my_floaty
const getPermission = console._permission



module.exports = {
    xml: (
        <vertical>
            <appbar bg='#b2b2b2'>
                <tabs id='tabs3'></tabs>
            </appbar>
            <viewpager id='viewpager3' padding='3'>
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
                                                <input id={halo_id('city-refresh-on')} text={storage.get(halo_id('city-refresh-on'), '1000')} inputType='number'></input>
                                                <text text=' 至 '></text>
                                                <input id={halo_id('city-refresh-off')} text={storage.get(halo_id('city-refresh-off'), '1500')} inputType='number'></input>
                                                <text text=' 毫秒'></text>
                                            </horizontal>
                                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                                            <horizontal>
                                                <checkbox checked={storage.get(halo_id('city-today'), 'true')} text='今天' id={halo_id('city-today')}></checkbox>
                                                <checkbox checked={storage.get(halo_id('city-tomorrow'), 'true')} text='明天' id={halo_id('city-tomorrow')}></checkbox>
                                                <checkbox checked={storage.get(halo_id('city-otherday'), 'true')} text='明天以后' id={halo_id('city-otherday')}></checkbox>
                                            </horizontal>
                                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                                            <horizontal>
                                                <checkbox text='独享单' id={halo_id('city-exclusive')} checked={storage.get(halo_id('city-exclusive'))}></checkbox>
                                                <input id={halo_id('city-exclusive-people-min')} inputType='number' text={storage.get(halo_id('city-exclusive-people-min'), '1')}></input>
                                                <text text=' 至 '></text>
                                                <input id={halo_id('city-exclusive-people-max')} inputType='number' text={storage.get(halo_id('city-exclusive-people-max'), '4')}></input>
                                                <text text=' 人 | '></text>
                                                <text text='时间: '></text>
                                                <input id={halo_id('city-exclusive-time-on')} text={storage.get(halo_id('city-exclusive-time-on'), '00:00')} inputType='datetime'></input>
                                                <text text=' 至 '></text>
                                                <input id={halo_id('city-exclusive-time-off')} text={storage.get(halo_id('city-exclusive-time-off'), '24:00')} inputType='datetime'></input>
                                            </horizontal>
                                            <horizontal>
                                                <text text='金额: '></text>
                                                <input id={halo_id('city-exclusive-money-min')} text={storage.get(halo_id('city-exclusive-money-min'), '0')} inputType='number'></input>
                                                <text text=' 至 '></text>
                                                <input id={halo_id('city-exclusive-money-max')} text={storage.get(halo_id('city-exclusive-money-max'), '9999')} inputType='number'></input>
                                                <text text=' 元，起点 ≦ '></text>
                                                <input id={halo_id('city-exclusive-starting-point')} text={storage.get(halo_id('city-exclusive-starting-point'), '10')}></input>
                                                <text text=' km '></text>
                                            </horizontal>

                                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                                            <horizontal>
                                                <checkbox text='拼车单' id={halo_id('city-carpooling')} checked={storage.get(halo_id('city-carpooling'))}></checkbox>
                                                <input id={halo_id('city-carpooling-people-min')} inputType='number' text={storage.get(halo_id('city-carpooling-people-min'), '1')}></input>
                                                <text text=' 至 '></text>
                                                <input id={halo_id('city-carpooling-people-max')} inputType='number' text={storage.get(halo_id('city-carpooling-people-max'), '4')}></input>
                                                <text text=' 人 | '></text>
                                                <text text='时间: '></text>
                                                <input id={halo_id('city-carpooling-time-on')} text={storage.get(halo_id('city-carpooling-time-on'), '00:00')} inputType='datetime'></input>
                                                <text text=' 至 '></text>
                                                <input id={halo_id('city-carpooling-time-off')} text={storage.get(halo_id('city-carpooling-time-off'), '24:00')} inputType='datetime'></input>
                                            </horizontal>
                                            <horizontal>
                                                <text text='金额: '></text>
                                                <input id={halo_id('city-carpooling-money-min')} text={storage.get(halo_id('city-carpooling-money-min'), '0')} inputType='number'></input>
                                                <text text=' 至 '></text>
                                                <input id={halo_id('city-carpooling-money-max')} text={storage.get(halo_id('city-carpooling-money-max'), '9999')} inputType='number'></input>
                                                <text text=' 元，起点 ≦ '></text>
                                                <input id={halo_id('city-carpooling-starting-point')} text={storage.get(halo_id('city-carpooling-starting-point'), '10')}></input>
                                                <text text=' km '></text>
                                            </horizontal>
                                            
                                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                                            <horizontal>
                                                <checkbox text='舒适拼单' id={halo_id('city-comfort')} checked={storage.get(halo_id('city-comfort'))}></checkbox>
                                                <input id={halo_id('city-comfort-people-min')} inputType='number' text={storage.get(halo_id('city-comfort-people-min'), '1')}></input>
                                                <text text=' 至 '></text>
                                                <input id={halo_id('city-comfort-people-max')} inputType='number' text={storage.get(halo_id('city-comfort-people-max'), '4')}></input>
                                                <text text=' 人 | '></text>
                                                <text text='时间: '></text>
                                                <input id={halo_id('city-comfort-time-on')} text={storage.get(halo_id('city-comfort-time-on'), '00:00')} inputType='datetime'></input>
                                                <text text=' 至 '></text>
                                                <input id={halo_id('city-comfort-time-off')} text={storage.get(halo_id('city-comfort-time-off'), '24:00')} inputType='datetime'></input>
                                            </horizontal>
                                            <horizontal>
                                                <text text='金额: '></text>
                                                <input id={halo_id('city-comfort-money-min')} text={storage.get(halo_id('city-comfort-money-min'), '0')} inputType='number'></input>
                                                <text text=' 至 '></text>
                                                <input id={halo_id('city-comfort-money-max')} text={storage.get(halo_id('city-comfort-money-max'), '9999')} inputType='number'></input>
                                                <text text=' 元，起点 ≦ '></text>
                                                <input id={halo_id('city-comfort-starting-point')} text={storage.get(halo_id('city-comfort-starting-point'), '10')}></input>
                                                <text text=' km '></text>
                                            </horizontal>

                                            <text h='1dp' w='*' bg='#b2b2b2'></text>
                                            <horizontal>
                                                <checkbox text='拉货单' id={halo_id('city-pullgoods')} checked={storage.get(halo_id('city-pullgoods'))}></checkbox>
                                                <input id={halo_id('city-pullgoods-people-min')} inputType='number' text={storage.get(halo_id('city-pullgoods-people-min'), '1')}></input>
                                                <text text=' 至 '></text>
                                                <input id={halo_id('city-pullgoods-people-max')} inputType='number' text={storage.get(halo_id('city-pullgoods-people-max'), '4')}></input>
                                                <text text=' 人 | '></text>
                                                <text text='时间: '></text>
                                                <input id={halo_id('city-pullgoods-time-on')} text={storage.get(halo_id('city-pullgoods-time-on'), '00:00')} inputType='datetime'></input>
                                                <text text=' 至 '></text>
                                                <input id={halo_id('city-pullgoods-time-off')} text={storage.get(halo_id('city-pullgoods-time-off'), '24:00')} inputType='datetime'></input>
                                            </horizontal>
                                            <horizontal>
                                                <text text='金额: '></text>
                                                <input id={halo_id('city-pullgoods-money-min')} text={storage.get(halo_id('city-pullgoods-money-min'), '0')} inputType='number'></input>
                                                <text text=' 至 '></text>
                                                <input id={halo_id('city-pullgoods-money-max')} text={storage.get(halo_id('city-pullgoods-money-max'), '9999')} inputType='number'></input>
                                                <text text=' 元，起点 ≦ '></text>
                                                <input id={halo_id('city-pullgoods-starting-point')} text={storage.get(halo_id('city-pullgoods-starting-point'), '10')}></input>
                                                <text text=' km '></text>
                                            </horizontal>
                                            
                                        </vertical>
                                        <button id={halo_id('city-run')} text='保存并打开某罗'></button>
                                    </vertical>
                                </horizontal>
                            </card>
                        </vertical>
                    </ScrollView>
                </frame>
                <frame>test2</frame>
                <frame>test3</frame>
            </viewpager>
        </vertical>
    ),
    callback: function(view, script) {
        //设置滑动页面的标题
        ui.viewpager3.setTitles(["城际", "市内", "发布行程"]);
        //让滑动页面和标签栏联动
        ui.tabs3.setupWithViewPager(ui.viewpager3);

        ui[halo_id('city-run')].on('click', function() {
            if (!getPermission()) return
            if (console.errorr <= 0) return

            storage.put(halo_id('city-refresh-on'), ui[halo_id('city-refresh-on')].getText()+'')
            storage.put(halo_id('city-refresh-off'), ui[halo_id('city-refresh-off')].getText()+'')

            storage.put(halo_id('city-today'), ui[halo_id('city-today')].isChecked())
            storage.put(halo_id('city-tomorrow'), ui[halo_id('city-tomorrow')].isChecked())
            storage.put(halo_id('city-otherday'), ui[halo_id('city-otherday')].isChecked())

            
            // storage.put(halo_id('city-time-on'), ui[halo_id('city-time-on')].getText()+'')
            // storage.put(halo_id('city-time-off'), ui[halo_id('city-time-off')].getText()+'')

            storage.put(halo_id('city-exclusive'), ui[halo_id('city-exclusive')].isChecked())
            storage.put(halo_id('city-carpooling'), ui[halo_id('city-carpooling')].isChecked())
            storage.put(halo_id('city-comfort'), ui[halo_id('city-comfort')].isChecked())
            storage.put(halo_id('city-pullgoods'), ui[halo_id('city-pullgoods')].isChecked())
            

            // 人数
            storage.put(halo_id('city-exclusive-people-min'), ui[halo_id('city-exclusive-people-min')].getText()+'')
            storage.put(halo_id('city-exclusive-people-max'), ui[halo_id('city-exclusive-people-max')].getText()+'')
            storage.put(halo_id('city-carpooling-people-min'), ui[halo_id('city-carpooling-people-min')].getText()+'')
            storage.put(halo_id('city-carpooling-people-max'), ui[halo_id('city-carpooling-people-max')].getText()+'')
            storage.put(halo_id('city-comfort-people-min'), ui[halo_id('city-comfort-people-min')].getText()+'')
            storage.put(halo_id('city-comfort-people-max'), ui[halo_id('city-comfort-people-max')].getText()+'')
            storage.put(halo_id('city-pullgoods-people-min'), ui[halo_id('city-pullgoods-people-min')].getText()+'')
            storage.put(halo_id('city-pullgoods-people-max'), ui[halo_id('city-pullgoods-people-max')].getText()+'')

            // 时间
            storage.put(halo_id('city-exclusive-time-on'), ui[halo_id('city-exclusive-time-on')].getText()+'')
            storage.put(halo_id('city-exclusive-time-off'), ui[halo_id('city-exclusive-time-off')].getText()+'')
            storage.put(halo_id('city-carpooling-time-on'), ui[halo_id('city-carpooling-time-on')].getText()+'')
            storage.put(halo_id('city-carpooling-time-off'), ui[halo_id('city-carpooling-time-off')].getText()+'')
            storage.put(halo_id('city-comfort-time-on'), ui[halo_id('city-comfort-time-on')].getText()+'')
            storage.put(halo_id('city-comfort-time-off'), ui[halo_id('city-comfort-time-off')].getText()+'')
            storage.put(halo_id('city-pullgoods-time-on'), ui[halo_id('city-pullgoods-time-on')].getText()+'')
            storage.put(halo_id('city-pullgoods-time-off'), ui[halo_id('city-pullgoods-time-off')].getText()+'')

            // 金额
            storage.put(halo_id('city-exclusive-money-min'), ui[halo_id('city-exclusive-money-min')].getText()+'')
            storage.put(halo_id('city-exclusive-money-max'), ui[halo_id('city-exclusive-money-max')].getText()+'')
            storage.put(halo_id('city-carpooling-money-min'), ui[halo_id('city-carpooling-money-min')].getText()+'')
            storage.put(halo_id('city-carpooling-money-max'), ui[halo_id('city-carpooling-money-max')].getText()+'')
            storage.put(halo_id('city-comfort-money-min'), ui[halo_id('city-comfort-money-min')].getText()+'')
            storage.put(halo_id('city-comfort-money-max'), ui[halo_id('city-comfort-money-max')].getText()+'')
            storage.put(halo_id('city-pullgoods-money-min'), ui[halo_id('city-pullgoods-money-min')].getText()+'')
            storage.put(halo_id('city-pullgoods-money-max'), ui[halo_id('city-pullgoods-money-max')].getText()+'')
            
            // 起点
            storage.put(halo_id('city-exclusive-starting-point'), ui[halo_id('city-exclusive-starting-point')].getText()+'')
            storage.put(halo_id('city-carpooling-starting-point'), ui[halo_id('city-carpooling-starting-point')].getText()+'')
            storage.put(halo_id('city-comfort-starting-point'), ui[halo_id('city-comfort-starting-point')].getText()+'')
            storage.put(halo_id('city-pullgoods-starting-point'), ui[halo_id('city-pullgoods-starting-point')].getText()+'')

            // 执行
            script.init_intercity()
            // launch('com.jingyao.easybike')
            // my_floaty(script.intercity, null)
        })

    }
}