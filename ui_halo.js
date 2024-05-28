/*
 * @Author: chaodchen 17685034710@163.com
 * @Date: 2024-01-10 01:44:40
 * @LastEditors: chaodchen 17685034710@163.com
 * @LastEditTime: 2024-05-28 00:30:16
 * @FilePath: \xiaobailong\ui_halo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
                                            <horizontal>
                                                <checkbox checked={storage.get(halo_id('city-today'), 'true')} text='今天' id={halo_id('city-today')}></checkbox>
                                                <checkbox checked={storage.get(halo_id('city-tomorrow'), 'true')} text='明天' id={halo_id('city-tomorrow')}></checkbox>
                                                <checkbox checked={storage.get(halo_id('city-otherday'), 'true')} text='明天以后' id={halo_id('city-otherday')}></checkbox>
                                            </horizontal>
                                            <horizontal>
                                                <checkbox checked={storage.get(halo_id('city-expressway'), 'false')} text='只抢乘客承担高速公路费用' id={halo_id('city-expressway')}></checkbox>
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
                                            <input id={halo_id('crossCity-refresh-on')} text={storage.get(halo_id('crossCity-refresh-on'), '1000')} inputType='number'></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('crossCity-refresh-off')} text={storage.get(halo_id('crossCity-refresh-off'), '1500')} inputType='number'></input>
                                            <text text=' 毫秒'></text>
                                        </horizontal>
                                        <horizontal>
                                            <checkbox checked={storage.get(halo_id('crossCity-today'), 'true')} text='今天' id={halo_id('crossCity-today')}></checkbox>
                                            <checkbox checked={storage.get(halo_id('crossCity-tomorrow'), 'true')} text='明天' id={halo_id('crossCity-tomorrow')}></checkbox>
                                            <checkbox checked={storage.get(halo_id('crossCity-otherday'), 'true')} text='明天以后' id={halo_id('crossCity-otherday')}></checkbox>
                                        </horizontal>
                                        <horizontal>
                                            <checkbox checked={storage.get(halo_id('crossCity-expressway'), 'false')} text='只抢乘客承担高速公路费用' id={halo_id('crossCity-expressway')}></checkbox>
                                        </horizontal>
                                        <text h='1dp' w='*' bg='#b2b2b2'></text>
                                        <horizontal>
                                            <checkbox text='独享单' id={halo_id('crossCity-exclusive')} checked={storage.get(halo_id('crossCity-exclusive'))}></checkbox>
                                            <input id={halo_id('crossCity-exclusive-people-min')} inputType='number' text={storage.get(halo_id('crossCity-exclusive-people-min'), '1')}></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('crossCity-exclusive-people-max')} inputType='number' text={storage.get(halo_id('crossCity-exclusive-people-max'), '4')}></input>
                                            <text text=' 人 | '></text>
                                            <text text='时间: '></text>
                                            <input id={halo_id('crossCity-exclusive-time-on')} text={storage.get(halo_id('crossCity-exclusive-time-on'), '00:00')} inputType='datetime'></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('crossCity-exclusive-time-off')} text={storage.get(halo_id('crossCity-exclusive-time-off'), '24:00')} inputType='datetime'></input>
                                        </horizontal>
                                        <horizontal>
                                            <text text='金额: '></text>
                                            <input id={halo_id('crossCity-exclusive-money-min')} text={storage.get(halo_id('crossCity-exclusive-money-min'), '0')} inputType='number'></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('crossCity-exclusive-money-max')} text={storage.get(halo_id('crossCity-exclusive-money-max'), '9999')} inputType='number'></input>
                                            <text text=' 元，起点 ≦ '></text>
                                            <input id={halo_id('crossCity-exclusive-starting-point')} text={storage.get(halo_id('crossCity-exclusive-starting-point'), '10')}></input>
                                            <text text=' km '></text>
                                        </horizontal>

                                        <text h='1dp' w='*' bg='#b2b2b2'></text>
                                        <horizontal>
                                            <checkbox text='拼车单' id={halo_id('crossCity-carpooling')} checked={storage.get(halo_id('crossCity-carpooling'))}></checkbox>
                                            <input id={halo_id('crossCity-carpooling-people-min')} inputType='number' text={storage.get(halo_id('crossCity-carpooling-people-min'), '1')}></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('crossCity-carpooling-people-max')} inputType='number' text={storage.get(halo_id('crossCity-carpooling-people-max'), '4')}></input>
                                            <text text=' 人 | '></text>
                                            <text text='时间: '></text>
                                            <input id={halo_id('crossCity-carpooling-time-on')} text={storage.get(halo_id('crossCity-carpooling-time-on'), '00:00')} inputType='datetime'></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('crossCity-carpooling-time-off')} text={storage.get(halo_id('crossCity-carpooling-time-off'), '24:00')} inputType='datetime'></input>
                                        </horizontal>
                                        <horizontal>
                                            <text text='金额: '></text>
                                            <input id={halo_id('crossCity-carpooling-money-min')} text={storage.get(halo_id('crossCity-carpooling-money-min'), '0')} inputType='number'></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('crossCity-carpooling-money-max')} text={storage.get(halo_id('crossCity-carpooling-money-max'), '9999')} inputType='number'></input>
                                            <text text=' 元，起点 ≦ '></text>
                                            <input id={halo_id('crossCity-carpooling-starting-point')} text={storage.get(halo_id('crossCity-carpooling-starting-point'), '10')}></input>
                                            <text text=' km '></text>
                                        </horizontal>
                                        
                                        <text h='1dp' w='*' bg='#b2b2b2'></text>
                                        <horizontal>
                                            <checkbox text='舒适拼单' id={halo_id('crossCity-comfort')} checked={storage.get(halo_id('crossCity-comfort'))}></checkbox>
                                            <input id={halo_id('crossCity-comfort-people-min')} inputType='number' text={storage.get(halo_id('crossCity-comfort-people-min'), '1')}></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('crossCity-comfort-people-max')} inputType='number' text={storage.get(halo_id('crossCity-comfort-people-max'), '4')}></input>
                                            <text text=' 人 | '></text>
                                            <text text='时间: '></text>
                                            <input id={halo_id('crossCity-comfort-time-on')} text={storage.get(halo_id('crossCity-comfort-time-on'), '00:00')} inputType='datetime'></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('crossCity-comfort-time-off')} text={storage.get(halo_id('crossCity-comfort-time-off'), '24:00')} inputType='datetime'></input>
                                        </horizontal>
                                        <horizontal>
                                            <text text='金额: '></text>
                                            <input id={halo_id('crossCity-comfort-money-min')} text={storage.get(halo_id('crossCity-comfort-money-min'), '0')} inputType='number'></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('crossCity-comfort-money-max')} text={storage.get(halo_id('crossCity-comfort-money-max'), '9999')} inputType='number'></input>
                                            <text text=' 元，起点 ≦ '></text>
                                            <input id={halo_id('crossCity-comfort-starting-point')} text={storage.get(halo_id('crossCity-comfort-starting-point'), '10')}></input>
                                            <text text=' km '></text>
                                        </horizontal>

                                        <text h='1dp' w='*' bg='#b2b2b2'></text>
                                        <horizontal>
                                            <checkbox text='拉货单' id={halo_id('crossCity-pullgoods')} checked={storage.get(halo_id('crossCity-pullgoods'))}></checkbox>
                                            <input id={halo_id('crossCity-pullgoods-people-min')} inputType='number' text={storage.get(halo_id('crossCity-pullgoods-people-min'), '1')}></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('crossCity-pullgoods-people-max')} inputType='number' text={storage.get(halo_id('crossCity-pullgoods-people-max'), '4')}></input>
                                            <text text=' 人 | '></text>
                                            <text text='时间: '></text>
                                            <input id={halo_id('crossCity-pullgoods-time-on')} text={storage.get(halo_id('crossCity-pullgoods-time-on'), '00:00')} inputType='datetime'></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('crossCity-pullgoods-time-off')} text={storage.get(halo_id('crossCity-pullgoods-time-off'), '24:00')} inputType='datetime'></input>
                                        </horizontal>
                                        <horizontal>
                                            <text text='金额: '></text>
                                            <input id={halo_id('crossCity-pullgoods-money-min')} text={storage.get(halo_id('crossCity-pullgoods-money-min'), '0')} inputType='number'></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('crossCity-pullgoods-money-max')} text={storage.get(halo_id('crossCity-pullgoods-money-max'), '9999')} inputType='number'></input>
                                            <text text=' 元，起点 ≦ '></text>
                                            <input id={halo_id('crossCity-pullgoods-starting-point')} text={storage.get(halo_id('crossCity-pullgoods-starting-point'), '10')}></input>
                                            <text text=' km '></text>
                                        </horizontal>
                                        
                                    </vertical>
                                    <button id={halo_id('crossCity-run')} text='保存并打开某罗'></button>
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
                                            <input id={halo_id('pushOrder-refresh-on')} text={storage.get(halo_id('pushOrder-refresh-on'), '1000')} inputType='number'></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('pushOrder-refresh-off')} text={storage.get(halo_id('pushOrder-refresh-off'), '1500')} inputType='number'></input>
                                            <text text=' 毫秒'></text>
                                        </horizontal>
                                        <horizontal>
                                            <checkbox checked={storage.get(halo_id('pushOrder-today'), 'true')} text='今天' id={halo_id('pushOrder-today')}></checkbox>
                                            <checkbox checked={storage.get(halo_id('pushOrder-tomorrow'), 'true')} text='明天' id={halo_id('pushOrder-tomorrow')}></checkbox>
                                            <checkbox checked={storage.get(halo_id('pushOrder-otherday'), 'true')} text='明天以后' id={halo_id('pushOrder-otherday')}></checkbox>
                                        </horizontal>
                                        <horizontal>
                                            <checkbox checked={storage.get(halo_id('pushOrder-expressway'), 'false')} text='只抢乘客承担高速公路费用' id={halo_id('pushOrder-expressway')}></checkbox>
                                        </horizontal>
                                        <text h='1dp' w='*' bg='#b2b2b2'></text>
                                        <horizontal>
                                            <checkbox text='独享单' id={halo_id('pushOrder-exclusive')} checked={storage.get(halo_id('pushOrder-exclusive'))}></checkbox>
                                            <input id={halo_id('pushOrder-exclusive-people-min')} inputType='number' text={storage.get(halo_id('pushOrder-exclusive-people-min'), '1')}></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('pushOrder-exclusive-people-max')} inputType='number' text={storage.get(halo_id('pushOrder-exclusive-people-max'), '4')}></input>
                                            <text text=' 人 | '></text>
                                            <text text='时间: '></text>
                                            <input id={halo_id('pushOrder-exclusive-time-on')} text={storage.get(halo_id('pushOrder-exclusive-time-on'), '00:00')} inputType='datetime'></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('pushOrder-exclusive-time-off')} text={storage.get(halo_id('pushOrder-exclusive-time-off'), '24:00')} inputType='datetime'></input>
                                        </horizontal>
                                        <horizontal>
                                            <text text='金额: '></text>
                                            <input id={halo_id('pushOrder-exclusive-money-min')} text={storage.get(halo_id('pushOrder-exclusive-money-min'), '0')} inputType='number'></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('pushOrder-exclusive-money-max')} text={storage.get(halo_id('pushOrder-exclusive-money-max'), '9999')} inputType='number'></input>
                                            <text text=' 元，起点 ≦ '></text>
                                            <input id={halo_id('pushOrder-exclusive-starting-point')} text={storage.get(halo_id('pushOrder-exclusive-starting-point'), '10')}></input>
                                            <text text=' km '></text>
                                        </horizontal>
                                        <horizontal>
                                            <text text='顺路 ≧ '></text>
                                            <input id={halo_id('pushOrder-exclusive-along-way')} text={storage.get(halo_id('pushOrder-exclusive-along-way'), '60')} inputType='number'></input>
                                            <text text=' %，终点 ≦ '></text>
                                            <input id={halo_id('pushOrder-exclusive-end-point')} text={storage.get(halo_id('pushOrder-exclusive-end-point'), '50')}></input>
                                            <text text=' km '></text>
                                        </horizontal>
                                        <text h='1dp' w='*' bg='#b2b2b2'></text>
                                        <horizontal>
                                            <checkbox text='拼车单' id={halo_id('pushOrder-carpooling')} checked={storage.get(halo_id('pushOrder-carpooling'))}></checkbox>
                                            <input id={halo_id('pushOrder-carpooling-people-min')} inputType='number' text={storage.get(halo_id('pushOrder-carpooling-people-min'), '1')}></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('pushOrder-carpooling-people-max')} inputType='number' text={storage.get(halo_id('pushOrder-carpooling-people-max'), '4')}></input>
                                            <text text=' 人 | '></text>
                                            <text text='时间: '></text>
                                            <input id={halo_id('pushOrder-carpooling-time-on')} text={storage.get(halo_id('pushOrder-carpooling-time-on'), '00:00')} inputType='datetime'></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('pushOrder-carpooling-time-off')} text={storage.get(halo_id('pushOrder-carpooling-time-off'), '24:00')} inputType='datetime'></input>
                                        </horizontal>
                                        <horizontal>
                                            <text text='金额: '></text>
                                            <input id={halo_id('pushOrder-carpooling-money-min')} text={storage.get(halo_id('pushOrder-carpooling-money-min'), '0')} inputType='number'></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('pushOrder-carpooling-money-max')} text={storage.get(halo_id('pushOrder-carpooling-money-max'), '9999')} inputType='number'></input>
                                            <text text=' 元，起点 ≦ '></text>
                                            <input id={halo_id('pushOrder-carpooling-starting-point')} text={storage.get(halo_id('pushOrder-carpooling-starting-point'), '10')}></input>
                                            <text text=' km '></text>
                                        </horizontal>
                                        <horizontal>
                                            <text text='顺路 ≧ '></text>
                                            <input id={halo_id('pushOrder-carpooling-along-way')} text={storage.get(halo_id('pushOrder-carpooling-along-way'), '60')} inputType='number'></input>
                                            <text text=' %，终点 ≦ '></text>
                                            <input id={halo_id('pushOrder-carpooling-end-point')} text={storage.get(halo_id('pushOrder-carpooling-end-point'), '50')}></input>
                                            <text text=' km '></text>
                                        </horizontal>
                                        <text h='1dp' w='*' bg='#b2b2b2'></text>
                                        <horizontal>
                                            <checkbox text='舒适拼单' id={halo_id('pushOrder-comfort')} checked={storage.get(halo_id('pushOrder-comfort'))}></checkbox>
                                            <input id={halo_id('pushOrder-comfort-people-min')} inputType='number' text={storage.get(halo_id('pushOrder-comfort-people-min'), '1')}></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('pushOrder-comfort-people-max')} inputType='number' text={storage.get(halo_id('pushOrder-comfort-people-max'), '4')}></input>
                                            <text text=' 人 | '></text>
                                            <text text='时间: '></text>
                                            <input id={halo_id('pushOrder-comfort-time-on')} text={storage.get(halo_id('pushOrder-comfort-time-on'), '00:00')} inputType='datetime'></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('pushOrder-comfort-time-off')} text={storage.get(halo_id('pushOrder-comfort-time-off'), '24:00')} inputType='datetime'></input>
                                        </horizontal>
                                        <horizontal>
                                            <text text='金额: '></text>
                                            <input id={halo_id('pushOrder-comfort-money-min')} text={storage.get(halo_id('pushOrder-comfort-money-min'), '0')} inputType='number'></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('pushOrder-comfort-money-max')} text={storage.get(halo_id('pushOrder-comfort-money-max'), '9999')} inputType='number'></input>
                                            <text text=' 元，起点 ≦ '></text>
                                            <input id={halo_id('pushOrder-comfort-starting-point')} text={storage.get(halo_id('pushOrder-comfort-starting-point'), '10')}></input>
                                            <text text=' km '></text>
                                        </horizontal>
                                        <horizontal>
                                            <text text='顺路 ≧ '></text>
                                            <input id={halo_id('pushOrder-comfort-along-way')} text={storage.get(halo_id('pushOrder-comfort-along-way'), '60')} inputType='number'></input>
                                            <text text=' %，终点 ≦ '></text>
                                            <input id={halo_id('pushOrder-comfort-end-point')} text={storage.get(halo_id('pushOrder-comfort-end-point'), '50')}></input>
                                            <text text=' km '></text>
                                        </horizontal>
                                        <text h='1dp' w='*' bg='#b2b2b2'></text>
                                        <horizontal>
                                            <checkbox text='拉货单' id={halo_id('pushOrder-pullgoods')} checked={storage.get(halo_id('pushOrder-pullgoods'))}></checkbox>
                                            <input id={halo_id('pushOrder-pullgoods-people-min')} inputType='number' text={storage.get(halo_id('pushOrder-pullgoods-people-min'), '1')}></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('pushOrder-pullgoods-people-max')} inputType='number' text={storage.get(halo_id('pushOrder-pullgoods-people-max'), '4')}></input>
                                            <text text=' 人 | '></text>
                                            <text text='时间: '></text>
                                            <input id={halo_id('pushOrder-pullgoods-time-on')} text={storage.get(halo_id('pushOrder-pullgoods-time-on'), '00:00')} inputType='datetime'></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('pushOrder-pullgoods-time-off')} text={storage.get(halo_id('pushOrder-pullgoods-time-off'), '24:00')} inputType='datetime'></input>
                                        </horizontal>
                                        <horizontal>
                                            <text text='金额: '></text>
                                            <input id={halo_id('pushOrder-pullgoods-money-min')} text={storage.get(halo_id('pushOrder-pullgoods-money-min'), '0')} inputType='number'></input>
                                            <text text=' 至 '></text>
                                            <input id={halo_id('pushOrder-pullgoods-money-max')} text={storage.get(halo_id('pushOrder-pullgoods-money-max'), '9999')} inputType='number'></input>
                                            <text text=' 元，起点 ≦ '></text>
                                            <input id={halo_id('pushOrder-pullgoods-starting-point')} text={storage.get(halo_id('pushOrder-pullgoods-starting-point'), '10')}></input>
                                            <text text=' km '></text>
                                        </horizontal>
                                        <horizontal>
                                            <text text='顺路 ≧ '></text>
                                            <input id={halo_id('pushOrder-pullgoods-along-way')} text={storage.get(halo_id('pushOrder-pullgoods-along-way'), '60')} inputType='number'></input>
                                            <text text=' %，终点 ≦ '></text>
                                            <input id={halo_id('pushOrder-pullgoods-end-point')} text={storage.get(halo_id('pushOrder-pullgoods-end-point'), '50')}></input>
                                            <text text=' km '></text>
                                        </horizontal>
                                    </vertical>
                                    <button id={halo_id('pushOrder-run')} text='保存并打开某罗'></button>
                                </vertical>
                            </horizontal>
                        </card>
                    </vertical>
                    </ScrollView>
                </frame>
            </viewpager>
        </vertical>
    ),
    callback: function(view, script) {
        //设置滑动页面的标题        
        ui.viewpager3.setTitles(["市内", "城际", "发布行程"]);
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
            storage.put(halo_id('city-expressway'), ui[halo_id('city-expressway')].isChecked())

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
            launch('com.jingyao.easybike')
            my_floaty(script.intercity, null)
        })

        ui[halo_id('crossCity-run')].on('click', function() {
            if (!getPermission()) return
            if (console.errorr <= 0) return
        
            storage.put(halo_id('crossCity-refresh-on'), ui[halo_id('crossCity-refresh-on')].getText()+'')
            storage.put(halo_id('crossCity-refresh-off'), ui[halo_id('crossCity-refresh-off')].getText()+'')
        
            storage.put(halo_id('crossCity-today'), ui[halo_id('crossCity-today')].isChecked())
            storage.put(halo_id('crossCity-tomorrow'), ui[halo_id('crossCity-tomorrow')].isChecked())
            storage.put(halo_id('crossCity-otherday'), ui[halo_id('crossCity-otherday')].isChecked())
            storage.put(halo_id('crossCity-expressway'), ui[halo_id('crossCity-expressway')].isChecked())
        
            storage.put(halo_id('crossCity-exclusive'), ui[halo_id('crossCity-exclusive')].isChecked())
            storage.put(halo_id('crossCity-carpooling'), ui[halo_id('crossCity-carpooling')].isChecked())
            storage.put(halo_id('crossCity-comfort'), ui[halo_id('crossCity-comfort')].isChecked())
            storage.put(halo_id('crossCity-pullgoods'), ui[halo_id('crossCity-pullgoods')].isChecked())
            
        
            // 人数
            storage.put(halo_id('crossCity-exclusive-people-min'), ui[halo_id('crossCity-exclusive-people-min')].getText()+'')
            storage.put(halo_id('crossCity-exclusive-people-max'), ui[halo_id('crossCity-exclusive-people-max')].getText()+'')
            storage.put(halo_id('crossCity-carpooling-people-min'), ui[halo_id('crossCity-carpooling-people-min')].getText()+'')
            storage.put(halo_id('crossCity-carpooling-people-max'), ui[halo_id('crossCity-carpooling-people-max')].getText()+'')
            storage.put(halo_id('crossCity-comfort-people-min'), ui[halo_id('crossCity-comfort-people-min')].getText()+'')
            storage.put(halo_id('crossCity-comfort-people-max'), ui[halo_id('crossCity-comfort-people-max')].getText()+'')
            storage.put(halo_id('crossCity-pullgoods-people-min'), ui[halo_id('crossCity-pullgoods-people-min')].getText()+'')
            storage.put(halo_id('crossCity-pullgoods-people-max'), ui[halo_id('crossCity-pullgoods-people-max')].getText()+'')
        
            // 时间
            storage.put(halo_id('crossCity-exclusive-time-on'), ui[halo_id('crossCity-exclusive-time-on')].getText()+'')
            storage.put(halo_id('crossCity-exclusive-time-off'), ui[halo_id('crossCity-exclusive-time-off')].getText()+'')
            storage.put(halo_id('crossCity-carpooling-time-on'), ui[halo_id('crossCity-carpooling-time-on')].getText()+'')
            storage.put(halo_id('crossCity-carpooling-time-off'), ui[halo_id('crossCity-carpooling-time-off')].getText()+'')
            storage.put(halo_id('crossCity-comfort-time-on'), ui[halo_id('crossCity-comfort-time-on')].getText()+'')
            storage.put(halo_id('crossCity-comfort-time-off'), ui[halo_id('crossCity-comfort-time-off')].getText()+'')
            storage.put(halo_id('crossCity-pullgoods-time-on'), ui[halo_id('crossCity-pullgoods-time-on')].getText()+'')
            storage.put(halo_id('crossCity-pullgoods-time-off'), ui[halo_id('crossCity-pullgoods-time-off')].getText()+'')
        
            // 金额
            storage.put(halo_id('crossCity-exclusive-money-min'), ui[halo_id('crossCity-exclusive-money-min')].getText()+'')
            storage.put(halo_id('crossCity-exclusive-money-max'), ui[halo_id('crossCity-exclusive-money-max')].getText()+'')
            storage.put(halo_id('crossCity-carpooling-money-min'), ui[halo_id('crossCity-carpooling-money-min')].getText()+'')
            storage.put(halo_id('crossCity-carpooling-money-max'), ui[halo_id('crossCity-carpooling-money-max')].getText()+'')
            storage.put(halo_id('crossCity-comfort-money-min'), ui[halo_id('crossCity-comfort-money-min')].getText()+'')
            storage.put(halo_id('crossCity-comfort-money-max'), ui[halo_id('crossCity-comfort-money-max')].getText()+'')
            storage.put(halo_id('crossCity-pullgoods-money-min'), ui[halo_id('crossCity-pullgoods-money-min')].getText()+'')
            storage.put(halo_id('crossCity-pullgoods-money-max'), ui[halo_id('crossCity-pullgoods-money-max')].getText()+'')
            
            // 起点
            storage.put(halo_id('crossCity-exclusive-starting-point'), ui[halo_id('crossCity-exclusive-starting-point')].getText()+'')
            storage.put(halo_id('crossCity-carpooling-starting-point'), ui[halo_id('crossCity-carpooling-starting-point')].getText()+'')
            storage.put(halo_id('crossCity-comfort-starting-point'), ui[halo_id('crossCity-comfort-starting-point')].getText()+'')
            storage.put(halo_id('crossCity-pullgoods-starting-point'), ui[halo_id('crossCity-pullgoods-starting-point')].getText()+'')
        
            // 执行
            script.init_crossCity()
            launch('com.jingyao.easybike')
            my_floaty(script.crossCity, null)
        })
        
        ui[halo_id('pushOrder-run')].on('click', function() {
            if (!getPermission()) return
            if (console.errorr <= 0) return
        
            storage.put(halo_id('pushOrder-refresh-on'), ui[halo_id('pushOrder-refresh-on')].getText()+'')
            storage.put(halo_id('pushOrder-refresh-off'), ui[halo_id('pushOrder-refresh-off')].getText()+'')
        
            storage.put(halo_id('pushOrder-today'), ui[halo_id('pushOrder-today')].isChecked())
            storage.put(halo_id('pushOrder-tomorrow'), ui[halo_id('pushOrder-tomorrow')].isChecked())
            storage.put(halo_id('pushOrder-otherday'), ui[halo_id('pushOrder-otherday')].isChecked())
            storage.put(halo_id('pushOrder-expressway'), ui[halo_id('pushOrder-expressway')].isChecked())
        
            storage.put(halo_id('pushOrder-exclusive'), ui[halo_id('pushOrder-exclusive')].isChecked())
            storage.put(halo_id('pushOrder-carpooling'), ui[halo_id('pushOrder-carpooling')].isChecked())
            storage.put(halo_id('pushOrder-comfort'), ui[halo_id('pushOrder-comfort')].isChecked())
            storage.put(halo_id('pushOrder-pullgoods'), ui[halo_id('pushOrder-pullgoods')].isChecked())
            
        
            // 人数
            storage.put(halo_id('pushOrder-exclusive-people-min'), ui[halo_id('pushOrder-exclusive-people-min')].getText()+'')
            storage.put(halo_id('pushOrder-exclusive-people-max'), ui[halo_id('pushOrder-exclusive-people-max')].getText()+'')
            storage.put(halo_id('pushOrder-carpooling-people-min'), ui[halo_id('pushOrder-carpooling-people-min')].getText()+'')
            storage.put(halo_id('pushOrder-carpooling-people-max'), ui[halo_id('pushOrder-carpooling-people-max')].getText()+'')
            storage.put(halo_id('pushOrder-comfort-people-min'), ui[halo_id('pushOrder-comfort-people-min')].getText()+'')
            storage.put(halo_id('pushOrder-comfort-people-max'), ui[halo_id('pushOrder-comfort-people-max')].getText()+'')
            storage.put(halo_id('pushOrder-pullgoods-people-min'), ui[halo_id('pushOrder-pullgoods-people-min')].getText()+'')
            storage.put(halo_id('pushOrder-pullgoods-people-max'), ui[halo_id('pushOrder-pullgoods-people-max')].getText()+'')
        
            // 时间
            storage.put(halo_id('pushOrder-exclusive-time-on'), ui[halo_id('pushOrder-exclusive-time-on')].getText()+'')
            storage.put(halo_id('pushOrder-exclusive-time-off'), ui[halo_id('pushOrder-exclusive-time-off')].getText()+'')
            storage.put(halo_id('pushOrder-carpooling-time-on'), ui[halo_id('pushOrder-carpooling-time-on')].getText()+'')
            storage.put(halo_id('pushOrder-carpooling-time-off'), ui[halo_id('pushOrder-carpooling-time-off')].getText()+'')
            storage.put(halo_id('pushOrder-comfort-time-on'), ui[halo_id('pushOrder-comfort-time-on')].getText()+'')
            storage.put(halo_id('pushOrder-comfort-time-off'), ui[halo_id('pushOrder-comfort-time-off')].getText()+'')
            storage.put(halo_id('pushOrder-pullgoods-time-on'), ui[halo_id('pushOrder-pullgoods-time-on')].getText()+'')
            storage.put(halo_id('pushOrder-pullgoods-time-off'), ui[halo_id('pushOrder-pullgoods-time-off')].getText()+'')
        
            // 金额
            storage.put(halo_id('pushOrder-exclusive-money-min'), ui[halo_id('pushOrder-exclusive-money-min')].getText()+'')
            storage.put(halo_id('pushOrder-exclusive-money-max'), ui[halo_id('pushOrder-exclusive-money-max')].getText()+'')
            storage.put(halo_id('pushOrder-carpooling-money-min'), ui[halo_id('pushOrder-carpooling-money-min')].getText()+'')
            storage.put(halo_id('pushOrder-carpooling-money-max'), ui[halo_id('pushOrder-carpooling-money-max')].getText()+'')
            storage.put(halo_id('pushOrder-comfort-money-min'), ui[halo_id('pushOrder-comfort-money-min')].getText()+'')
            storage.put(halo_id('pushOrder-comfort-money-max'), ui[halo_id('pushOrder-comfort-money-max')].getText()+'')
            storage.put(halo_id('pushOrder-pullgoods-money-min'), ui[halo_id('pushOrder-pullgoods-money-min')].getText()+'')
            storage.put(halo_id('pushOrder-pullgoods-money-max'), ui[halo_id('pushOrder-pullgoods-money-max')].getText()+'')
            
            // 起点
            storage.put(halo_id('pushOrder-exclusive-starting-point'), ui[halo_id('pushOrder-exclusive-starting-point')].getText()+'')
            storage.put(halo_id('pushOrder-carpooling-starting-point'), ui[halo_id('pushOrder-carpooling-starting-point')].getText()+'')
            storage.put(halo_id('pushOrder-comfort-starting-point'), ui[halo_id('pushOrder-comfort-starting-point')].getText()+'')
            storage.put(halo_id('pushOrder-pullgoods-starting-point'), ui[halo_id('pushOrder-pullgoods-starting-point')].getText()+'')
        
            // 终点
            storage.put(halo_id('pushOrder-exclusive-end-point'), ui[halo_id('pushOrder-exclusive-end-point')].getText()+'')
            storage.put(halo_id('pushOrder-carpooling-end-point'), ui[halo_id('pushOrder-carpooling-end-point')].getText()+'')
            storage.put(halo_id('pushOrder-comfort-end-point'), ui[halo_id('pushOrder-comfort-end-point')].getText()+'')
            storage.put(halo_id('pushOrder-pullgoods-end-point'), ui[halo_id('pushOrder-pullgoods-end-point')].getText()+'')
        
            // 顺路
            storage.put(halo_id('pushOrder-exclusive-along-way'), ui[halo_id('pushOrder-exclusive-along-way')].getText()+'')
            storage.put(halo_id('pushOrder-carpooling-along-way'), ui[halo_id('pushOrder-carpooling-along-way')].getText()+'')
            storage.put(halo_id('pushOrder-comfort-along-way'), ui[halo_id('pushOrder-comfort-along-way')].getText()+'')
            storage.put(halo_id('pushOrder-pullgoods-along-way'), ui[halo_id('pushOrder-pullgoods-along-way')].getText()+'')
        
            // 执行
            script.init_pushOrder()
            launch('com.jingyao.easybike')
            my_floaty(script.pushOrder, null)
        })
    }
}
