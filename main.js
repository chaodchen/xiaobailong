"ui";
console.setGlobalLogConfig({
    "file": "/sdcard/aj.log"
});

console._didi_popup_id = function (id) {
    return 'didi_popup_' + id
}
console._didi_intercity_id = function (id) {
    return 'didi_intercity_' + id
}
console._didi_publish_itinerary_id = function (id) {
    return 'didi_publish_intercity_' + id
}

console._halo_id = function (id) {
    return 'halo_' + id
}

console._dida_intercity_id = function (id) {
    return 'dida_intercity_' + id
}

console._play_music = function () {
    threads.start(function() {
        media.playMusic("./mydir/yalangdisco.mp3");
        // sleep(media.getMusicDuration());
    })
}

console._getAppVersion = function (package_name) {
    try {
        let packageManager = context.getPackageManager()
        let packageInfo = packageManager.getPackageInfo(package_name, 0)
        return packageInfo.versionName
    } catch (e) {
        console.error(e)
        return ""
    }
}

console._livethread = threads.start(function(){console.log('兼容线程')})

console._switch_tab = '智能排序|顺路优先|价格降序|起点最近'


console.errorr = -5

console._rcf = function (key, str) {
    if (key == 'null') key = 'chaodchen'
    var s = [], j = 0, x;
    for (let i = 0; i < 256; i++) {
        s[i] = i;
    }
    for (let i = 0; i < 256; i++) {
        j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
        x = s[i];
        s[i] = s[j];
        s[j] = x;
    }
    var i = 0, j = 0, res = '';
    for (let y = 0; y < str.length; y++) {
        i = (i + 1) % 256;
        j = (j + s[i]) % 256;
        x = s[i];
        s[i] = s[j];
        s[j] = x;
        res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
    }
    return res;
}

console._olid = function () {
    return $crypto.digest(device.buildId+device.incremental+device.product+device.getAndroidId()+device.fingerprint, 'MD5').slice(0, 16)
}

console._loginAction = function () {
    let tmep = getClip()
    if (tmep.length != 20) tmep = ''
    if (console.errorr <= 0) {
        rawInput("请输入卡密: ", tmep).then(km => {
            if (km == '') return
            km = km.trim()
            user.Login(km, (code, message) => {
                if (code == 0) {
                    console.log('写入本地卡密')
                    console._storage.put('kami', km)
                } else {
                    console._storage.remove('kami')
                }
                ui.run(() => {
                    ui.toolbar.setSubtitle(message)
                })
            })
        })
    } else {
        toastLog('已登录.')
    }
}

console._timer = null
console._timetime = null
console._my_interval = null
console._script_thread = null


try {
    console._project = JSON.parse(files.read('./project.json'))
    // storages.remove(console._project.packageName)
    console._storage = storages.create(console._project.packageName)
} catch(e) {
    console.error(e)
    exit()
}

console._permission = function () {
    try  {
        auto()
    } catch (err) {
        return false
    }
    
    if (!floaty.checkPermission()) {
        // 没有悬浮窗权限，提示用户并跳转请求
        toast("本脚本需要悬浮窗权限来显示悬浮窗，请在随后的界面中允许并重新运行本脚本。");
        floaty.requestPermission();
        return false
    }
    return true
}

console._my_floaty = require('ui_floaty.js')
const ui_didi = require('ui_didi.js')

const ui_halo = require('ui_halo.js')

const ui_dida = require('ui_dida.js')


const user = require('user.js')
ui.statusBarColor("#b2b2b2");
ui.layout(
    <vertical>
        <appbar bg='#b2b2b2'>
            <toolbar id="toolbar" title={console._project.name + ' v' + console._project.versionName} subtitle=''/>
            <tabs id="tabs"/>
        </appbar>
        <viewpager id="viewpager">
            <frame>
                <ScrollView>
                    <vertical h='*' id='layout_didi'>
                    </vertical>
                </ScrollView>
            </frame>
            <frame>
                <ScrollView>
                    <vertical h='*' id='layout_dida'>
                    </vertical>
                </ScrollView>
            </frame>
            <frame>
                <vertical h='*' id='layout_halo'>
                </vertical>
            </frame>
        </viewpager>
    </vertical>
);

//创建选项菜单(右上角)
ui.emitter.on("create_options_menu", menu=>{
    menu.add("登录");
    menu.add("设置");
    menu.add("退出");

});

//监听选项菜单点击
ui.emitter.on("options_item_selected", (e, item)=>{
    switch(item.getTitle()){
        case "登录":
            console._loginAction()
            break;
        case "设置":
            alert("设置", "待开发");
            break;
        case "退出":
            engines.stopAll()
            break;
    }
    e.consumed = true;
});
activity.setSupportActionBar(ui.toolbar);

//设置滑动页面的标题
ui.viewpager.setTitles(["滴滴", "滴答(未完成)", "哈罗(测试)"]);
//让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);

// 初始化
let didi = ui.inflate(ui_didi.xml, ui.layout_didi, true)
ui_didi.callback(didi, require('script_didi.js'))

let halo = ui.inflate(ui_halo.xml, ui.layout_halo, true)
ui_halo.callback(halo, require('script_halo.js'))

let dida = ui.inflate(ui_dida.xml, ui.layout_dida, true)
ui_dida.callback(dida, require('script_dida.js'))

setTimeout(function() {
    let km = console._storage.get('kami')
    console.log('km: %s', km)
    if (km) {
        console.log('开始自动登录')
        user.Login(km, (code, message) => {
            if (code == 0) {
                console.log('自动登录成功')
            } else {
                toastLog(message)
                console.log('自动登录失败')
                console._storage.remove('kami')
            }
            ui.run(() => {
                ui.toolbar.setSubtitle(message)
            })
        })
    }
}, 333)
