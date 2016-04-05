/**
 * Created by 94822 on 2016/4/5.
 * notice： 我是先把数据存进数组里，然后render数组的
 * 也可以直接操作dom，而不用吧数据存进数组，感觉更简单，这里用的是第一种，
 * 有时间写第二种
 */


window.onload = function () {
    var wrap = document.querySelector(".wrap");
    var text = document.querySelector("#text");
    var leftIn = document.querySelector("#leftIn");
    var rightIn = document.querySelector("#rightIn");
    var leftOut = document.querySelector("#leftOut");
    var rightOut = document.querySelector("#rightOut");


    function checkText() {
        var textValue = text.value;
        var re = /^\d+$/;
        if (textValue.search(re) != -1) {
            return textValue;
        } else {
            text.value = "";
            //alert("只能输入数字！");
            return false;
        }
    }


    var array = new Array();

    function render() {
        wrap.innerHTML = "";
        for (var i = 0, len = array.length; i < len; i++) {
            var span = document.createElement("span");
            span.innerHTML = array[i];
            wrap.appendChild(span);
        }
    }

    function delSpan(event) {
        //var pos = event.target.parentNode.find(event.target);
        //console.log(event.target.parentNode);
        /*找当前点击的子元素span在父元素中的index*/
        var wrap = document.querySelectorAll(".wrap span");
        for (var i = 0, len = wrap.length; i < len; i++) {
            if (wrap[i] === event.target) {
                console.log(i);
                break; //开始时候忘了加brak导致出错
            }
        }
        /*删除dom*/
        event.target.remove();
        /*删除array数组中的元素*/
        array.splice(i, 1);
        render();
    }

    leftIn.onclick = function () {
        if (checkText()) {
            array.unshift(checkText());
            render();
        } else {
            alert("只能输入数字！");
        }
    };

    rightIn.onclick = function () {
        if (checkText()) {
            array.push(checkText());
            render();
        } else {
            alert("只能输入数字！");
        }
    };

    leftOut.addEventListener("click", function () {
        var tmp = array.shift();
        alert("左侧出" + tmp);
        render();
    });

    rightOut.onclick = function () {
        alert("右侧出" + array.pop());
        render();
    }

    wrap.addEventListener("click", delSpan);


};