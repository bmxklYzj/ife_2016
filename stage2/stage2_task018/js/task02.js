/**
 * Created by 94822 on 2016/4/5.
 */
/*不用把输入后的数据存到数组，直接操作dom，这样更方便*/

var text = document.querySelector("#text"),
    leftIn = document.querySelector("#leftIn"),
    rightIn = document.querySelector("#rightIn"),
    leftOut = document.querySelector("#leftOut"),
    rightOut = document.querySelector("#rightOut"),

    wrap = document.querySelector(".wrap");

function checkText() {
    var re = /^\d+$/;
    if (text.value.match(re)) {
        return true;
    } else {
        return false;
    }
}

leftIn.onclick = function () {
    if (checkText()) {
        var span = document.createElement("span");
        span.innerHTML = text.value;

        wrap.insertBefore(span, wrap.firstChild);
    } else {
        alert("请输入整数");
    }
    text.value = "";
};

rightIn.onclick = function () {
    if (checkText()) {
        var span = document.createElement("span");
        span.innerHTML = text.value;

        wrap.appendChild(span);
    } else {
        alert("请输入整数");
    }
    text.value = "";
};

leftOut.onclick = function () {
    if (wrap.hasChildNodes()) {
        var tmp = wrap.firstChild.innerHTML;
        wrap.removeChild(wrap.firstChild);
        alert("从左侧出:" + tmp);
    } else {
        alert("请先插入数值！");
    }
};

rightOut.onclick = function () {
    if (wrap.hasChildNodes()) {
        var tmp = wrap.lastChild.innerHTML;
        wrap.removeChild(wrap.lastChild);
        alert("从右侧出;" + tmp);
    } else {
        alert("请先插入数值");
    }
};

function delSpan(event) {
    //console.log(event.target);
    //wrap.remove(event.target);
    event.target.remove();
}

//var span = document.querySelectorAll("span");
wrap.addEventListener("click", delSpan);