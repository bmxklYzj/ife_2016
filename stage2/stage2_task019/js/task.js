/**
 * Created by 94822 on 2016/4/5.
 */
//"use strict";

var text = document.querySelector("#text"),
    buttons = document.querySelector("fieldset").querySelectorAll("button"),
    wrap = document.querySelector(".wrap");
var showNumCount = document.getElementById("showNumCount");
var spanAll =  wrap.querySelectorAll("span");
var MAX_NUM = 100,
    MIN_NUM = 10,
    MAX_COUNT = 60;

var array = new Array();

//检查input框的内容是否是数字
function checkText(){
    if(array.length >= MAX_COUNT) {
        return "arrayFull";
    }
    var re = /^\d+$/;
    if(text.value.match(re)) {
        if(text.value >= MIN_NUM && text.value <= MAX_NUM) {
            return "ok";
        } else {
            return "outOfRange";
        }
    } else {
        return "notANumber";
    }
}

//读取数组中的值，并渲染
function render() {
    wrap.innerHTML = "";
    var tmp = "";
    for(var i = 0, len = array.length; i < len; i++) {
        var span = document.createElement("span");
        span.innerHTML = array[i];
        span.id = ("span-"+i);
        //span.title = array[i]; //两种给title赋值的方式都可以的
        span.setAttribute("title", array[i]);
        span.style.height = (array[i]*3+"px");
        wrap.appendChild(span);
    }
    showNumCount.innerHTML = "数字总个数：" + array.length;
}

//左侧入
buttons[0].addEventListener("click", function() {
    var res = checkText();
    if(res === "arrayFull") {
        alert("队列最大为60个，超出，无法继续添加");
    } else if(res === "outOfRange"){
        alert("请输入10-100之间的数字");
    } else if(res === "notANumber") {
        alert("请输入合法的数字");
    } else {
        array.unshift(text.value);
        render();
    }
    text.value = "";
});

//右侧入
buttons[1].addEventListener("click", function() {
    var res = checkText();
    if(res === "arrayFull") {
        alert("队列最大为60个，超出，无法继续添加");
    } else if(res === "outOfRange"){
        alert("请输入10-100之间的数字");
    } else if(res === "notANumber") {
        alert("请输入合法的数字");
    } else {
        array.push(text.value);
        render();
    }
    text.value = "";
});

//左侧出
buttons[2].addEventListener("click", function() {
    if(array.length) {
        var tmp = array.shift();
        render();
        alert("左侧出:" + tmp);
    } else {
        alert("没有元素了");
    }
});

//右侧出
buttons[3].addEventListener("click", function () {
    if(array.length) {
        var tmp = array.pop();
        render();
        alert("右侧出" + tmp);
    } else {
        alert("没有元素了");
    }
});

/**
 * 点击单个元素删除，采用事件代理
 */
function delSpan(event) {
    //移除数组中的元素
    if(event.target.nodeName == "SPAN") {
        var index = event.target.id.substring(5);
        array.splice(index, 1);
        console.log(event.target);
        console.log(index);
        console.log(array);
        render();
    } else {
        console.log("not a span");
    }
}

wrap.addEventListener("click", delSpan);

/**
 *先随机生成一些数，形成柱状图
 */
(function() {
    for(var i = 0; i < MAX_COUNT; i++) {
        var num = Math.floor(Math.random() * (MAX_NUM - MIN_NUM) + MIN_NUM);
        array.push(num);
    }
    render();
})();

/**
 * 排序比较函数
 */
function cmp(a, b) {
    return a-b;
}

/**
 * bubble sort
 * @constructor
 */
function bubbleSort() {
    var i = 0, j = 0, tmp, len = array.length;
    /*for(i = 0; i < len -1; i++) {
        for(j = 0; j < len-1; j++) {
            if(array[j+1] > array[j]) {
                tmp = array[j+1];
                array[j+1] = array[j];
                array[j] = tmp;
            }
            console.log(array.length);
            var s = setTimeout(render(), 2000);
        }
    }*/
    var s = setInterval(run, 5);
    function run() {
        if(i < len - 1) {
            if(j < len - 1) {
                if(array[j+1] > array[j]) {
                    tmp = array[j+1];
                    array[j+1] = array[j];
                    array[j] = tmp;
                }
                j++;
                console.log("asdf");
                //setTimeout("run()", 10);
                render();

            } else {
                i++;j = 0;
            }
        } else {
            clearInterval(s);
            alert("排序完成！");
        }
    }
    run();
    //clearInterval(s);
}

/**
 * 排序
 */
 buttons[4].addEventListener("click", function() {
     console.log(array);
     //array.sort(cmp); //排序可以直接用sort的，但是这里要可视化，所以就自己写方法吧
     bubbleSort();
     render();
 });