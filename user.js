const myhost = '119.29.208.208:9999'
const rc4 = console._rcf
const olid = console._olid
function __login(card, device_id, callback) {
    let url = 'http://' + myhost + '/login?card=' + card + '&device_id=' + device_id
    http.get(url, {}, function (res, err) {
        if (err) {
            console.log(err)
            toastLog('请求错误')
            return
        }
        if (res.statusCode != 200) return
        let resjson = JSON.parse(rc4('null', res.body.string() + ''))
        console.log(resjson)
        if (resjson['code'] == 0 && resjson['message'] == 'ok') {
            // 开始心跳
            console.errorr = 180
            if (console._timer != null) clearInterval(console._timer)
            if (console._timetime != null) clearInterval(console._timetime)
            console._timetime = setInterval(function() {
                console.errorr -= 1
                // console.log("errorr: %d", console.errorr)
            }, 1000)
            console._timer = setInterval(function() {
                console.error("console.errorr: %d", console.errorr)
                Heartbeat(card)
            }, 1000 * 60)
            callback(0, resjson['result']['expires'])
        } else {
            console.errorr = -6
            if (console._timer != null) clearInterval(console._timer)
            if (console._timetime != null) clearInterval(console._timetime)
            callback(resjson['code'], resjson['message'])

        }
    })

}

function Login(card, callback) {
    console.log("开始登录")
    return __login(card, olid(), callback)
}

function Heartbeat(card) {
    let url = 'http://' + myhost + '/heartbeat?card=' + card
    http.get(url, {}, function (res, err) {
        if (err) {
            console.log(err)
            console.errorr = -1
            return
        }
        if (res.statusCode != 200) {
            toastLog('心跳失败 网络错误')
            console.errorr = -2
            return
        }
        let resjson = JSON.parse(rc4('null', res.body.string() + ''))
        if (resjson['code'] != 0 && resjson['message'] != 'ok') {
            console.errorr = -3
            toastLog(resjson['message'])
            return
        }
        console.log('心跳成功')
        console.errorr = 180
    })
}

module.exports = {
    Login: Login,
}