# 了解、认识、学习、掌握JavaScript

#
## stage1_task008 任务十三：零基础JavaScript编码（一）
[code](https://github.com/bmxklYzj/ife_2016/tree/master/stage2/stage2_task013) 
[demo](http://bmxklyzj.github.io/ife_2016/stage2/stage2_task013/index.html)

review到别人的，看到输入为空时也要做相应的特殊处理，体现了友好性

## stage1_task0014 任务十四：零基础JavaScript编码（二）
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

## stage1_task0015 任务十五：零基础JavaScript编码（三）
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

## stage1_task0016 任务十六：零基础JavaScript编码（四）
[code](https://github.com/bmxklYzj/ife_2016/tree/master/stage2/stage2_task016) 
[demo](http://bmxklyzj.github.io/ife_2016/stage2/stage2_task016/index.html)

1. querySelector和querySelectorAll
    以前我们获取dom中的元素都是通过getElementById/getElementsByTagName/getElementsByName这三种方式
    其中getElementById返回的是单个元素，
    getElementsByTagName/getElementsByName返回的是一个nodelist数组
    
    那么现在我们可以使用querySelector()和querySelectorAll()（这两个函数支持ie8+）；
    他们类似于jquery中$()选择器，都是接受 css选择器语法
    区别就是：
    >querySelectorAll 在文档内找全部符合选择器描述的节点包括Element本身
     jQuery(element).find(selector) 在文档内找全部符合选择器描述的节点不包括Element本身
    
2. js正则表达式
[MDN正则表达式，讲解的很详细很到位！](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)
正则表达式可以单独做一个笔记了，这里只针对任务中用到的做个小结
* 必须为中英文字符 /^[a-zA-Z\u4e00-\u9fa5]+$/ ^表示必须以[]中的字符开始，&表示必须以[]中的字符结束
[]表示字符集，可以匹配其中的一个；+表示1个或多个，等价于{1, }
* 必须为整数 /^\d+$/ 类似于上面的，\d表示整数

* 事件代理，主要是要考虑到ie的兼容性（还有待深入学习）
    
但就这个任务来说，还有很多需要改善，比如：低版本ie的事件监听，trim()(ie9+)，querySelector()(ie8+)

## stage1_task0017 任务17：零基础JavaScript编码（四）
[code](https://github.com/bmxklYzj/ife_2016/tree/master/stage2/stage2_task017) 
[demo](http://bmxklyzj.github.io/ife_2016/stage2/stage2_task017/index.html)

任务17有点难，有时间写，先做18了

## stage1_task0018 任务十八：基础JavaScript练习（一）
[code1](https://github.com/bmxklYzj/ife_2016/tree/master/stage2/stage2_task018) 
[demo1](http://bmxklyzj.github.io/ife_2016/stage2/stage2_task018/index.html)

[code2](https://github.com/bmxklYzj/ife_2016/tree/master/stage2/stage2_task018) 
[demo2](http://bmxklyzj.github.io/ife_2016/stage2/stage2_task018/index02.html)
我是先把数据存进数组里，然后render数组的
也可以直接操作dom，而不用吧数据存进数组，感觉更简单
用两种方式都做了

## stage1_task0019 任务十九：基础JavaScript练习（二）
[code](https://github.com/bmxklYzj/ife_2016/tree/master/stage2/stage2_task019) 
[demo](http://bmxklyzj.github.io/ife_2016/stage2/stage2_task019/index.html)

 
1. setInterval()这个函数开始用错了，导致我卡了很久
```
正确用法是：
比如我有一个run()方法，在setInterval()中调用，那么就用
setInterval(run, msValue);
setTimeout是一样的

一定不要再方法后面加()，加了之后就不会有延迟而是直接执行函数了
```

2. 事件代理：
在父元素上设置监听事件，然后通过event.target来判断是那个子元素
我们可以给每个子元素设置不同的id，然后通过判断event.target.id来判断具体的子元素

换了种实现方式：第一种方式是一边排序，一边交换元素的位置，
第二种方式是直接改变元素的高度，这样更加直观好看
[code](https://github.com/bmxklYzj/ife_2016/tree/master/stage2/stage2_task019) 
[demo](http://bmxklyzj.github.io/ife_2016/stage2/stage2_task019/index02.html)

 