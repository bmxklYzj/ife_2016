# 了解、认识、学习、掌握JavaScript

#
# stage1_task008 任务十三：零基础JavaScript编码（一）
[code](https://github.com/bmxklYzj/ife_2016/tree/master/stage2/stage2_task013) 
[demo](http://bmxklyzj.github.io/ife_2016/stage2/stage2_task013/index.html)

review到别人的，看到输入为空时也要做相应的特殊处理，体现了友好性

# stage1_task0014 任务十四：零基础JavaScript编码（二）
[code](https://github.com/bmxklYzj/ife_2016/tree/master/stage2/stage2_task014) 
[demo](http://bmxklyzj.github.io/ife_2016/stage2/stage2_task014/index.html)

1. 有操作dom的js代码的时候一定要放到最后，如果放到页面前面会报错，因为根本就找不到此元素
2. 学会了innerHTML/innerText/outHTML这三个东东，
innerHTML是对象内的全部内容，包含html标签
innerText是对象内的全部内容，但是不包含标签，只返回纯文本
outerHTML是包含本对象的及其内部的标签

```
<div id="div1"><strong id="strong">hello world</strong></div>
 <script>
     console.log(document.getElementById("div1").innerHTML);
     console.log(document.getElementById("div1").innerText);
     console.log(document.getElementById("div1").outerHTML);
 
     console.log(document.getElementById("strong").innerHTML);
     console.log(document.getElementById("strong").innerText);
     console.log(document.getElementById("strong").outerHTML);
 </script>
 
 输出为
 <strong id="strong">hello world</strong>
 hello world
 <div id="div1"><strong id="strong">hello world</strong></div>
 hello world
 hello world
 <strong id="strong">hello world</strong>
```

# stage1_task0014 任务十五：零基础JavaScript编码（三）
[code](https://github.com/bmxklYzj/ife_2016/tree/master/stage2/stage2_task015) 
[demo](http://bmxklyzj.github.io/ife_2016/stage2/stage2_task015/index.html)

1. 学习到了dom操作：
```
比如如下一句：<li>第一名：北京空气质量：<b>90</b></li>
li中包含了一个textNode和一个b element
先创建一个createTextNode,执行li.appendChild,再创建一个createelement，执行li.appendChild
var b = document.createElement("b");
b.innerHTML = data[i][1];
var text = document.createTextNode("第" + (i+1) + "名:" + data[i][0] + "空气质量:");
var li = document.createElement("li");
li.appendChild(text);
li.appendChild(b);
```
2. 多维数组的创建
```
首先要先声明一个一维数组，然后对于一维数组中的每一个元素继续创建数组
var data = new Array();
data[i] = [city, quality];
```
3. 数组的sort函数
```
我要比较的是每一行元素的第二列，那么sort函数需要传一个参数
data.sort(function(x, y) {
    return x[1] - y[1];
});
```