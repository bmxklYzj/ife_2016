# 了解、认识、学习、掌握JavaScript

#
# stage1_task008 零基础JavaScript编码（一）
[code](https://github.com/bmxklYzj/ife_2016/tree/master/stage2/stage2_task013) 
[demo](http://bmxklyzj.github.io/ife_2016/stage2/stage2_task013/index.html)

review到别人的，看到输入为空时也要做相应的特殊处理，体现了友好性

# stage1_task0014 零基础JavaScript编码（二）
[code](https://github.com/bmxklYzj/ife_2016/tree/master/stage2/stage2_task014) 
[demo](http://bmxklyzj.github.io/ife_2016/stage2/stage2_task014/index.html)

学会了innerHTML/innerText/outHTML这三个东东，
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
