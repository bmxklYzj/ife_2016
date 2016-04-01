/**
 * Created by 94822 on 2016/3/30.
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

    /*正则表达式判断 城市名必须为中英文字符*/
    var aqiCityValue = aqiCity.value.trim();
    var aqiValueValue = aqiValue.value.trim();
    if (aqiCityValue.search(/^[a-zA-Z\u4e00-\u9fa5]+$/)) {
        alert("请输入合法的城市名");
    } else if (aqiValueValue.search(/^\d+$/) || aqiValueValue == "") {
        alert("空气质量必须是整数");
    } else {
        aqiData[aqiCityValue] = aqiValueValue;
        console.log(aqiData);
    }

    aqiCity.value = "";
    aqiValue.value = "";
    //aqiCityValue = "";
    //aqiValueValue = "";
    //console.log(aqiData);
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var aqiTable = document.querySelector("#aqi-table");

    aqiTable.innerHTML = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    for(var city in aqiData) {
        aqiTable.innerHTML += "<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button>删除</button></td></tr>";
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
    //console.log(event.target.parentNode.previousSibling.previousSibling);
    var delCity = event.target.parentNode.previousSibling.previousSibling.innerHTML;
    delete aqiData[delCity];
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    var addBtn = document.getElementById("add-btn");
    addBtn.onclick = function () {
        addBtnHandle();
    };

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    document.getElementById("aqi-table").addEventListener("click", delBtnHandle);
}

init();