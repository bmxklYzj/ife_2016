/**
 * Created by 94822 on 2016/4/1.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var aqiCity = document.querySelector("#aqi-city-input");
    var aqiValue = document.querySelector("#aqi-value-input");

    /*去除首尾的空格，ie9+支持，也可以用正则表达式*/
    aqiCity = aqiCity.value.trim();
    aqiValue = aqiValue.value.trim();

    if(/^[a-zA-Z\u4e00-\u9fa5]+$/.test(aqiCity)) {
        if(/^\d+$/.test(aqiValue)) {
            aqiData[aqiCity] = aqiValue;
        } else {
            alert("空气质量请输入整数");
        }
    } else {
        alert("城市必须是中英文字符");
    }
    aqiCity.value = "";
    aqiValue.value = "";
    //window.location.href = window.location.href;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var aqiTable = document.getElementById("aqi-table");
    aqiTable.innerHTML = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    for(var city in aqiData) {
        aqiTable.innerHTML += ("<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button>删除</button></td></tr>")
    }

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(event) {
    // do sth.
    //console.log(event.target.previousSibling.previousSibling);
    delete aqiData[event.target.parentNode.previousSibling.previousSibling.innerText];
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    var addBtn = document.getElementById("add-btn");
    addBtn.onclick = function() {
        addBtnHandle();
    }
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    /*事件代理*/
    document.querySelector("#aqi-table").addEventListener("click", delBtnHandle);
}

init();
