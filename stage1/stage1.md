#wram-up热身练习
 [code](https://github.com/bmxklYzj/bmxklYzj.github.io/tree/master/demo/ife_2016/warm-up) 
 [demo](http://bmxklyzj.github.io/ife_2016/stage1/stage1_task001/blog.html)
主要是做了一个静态的博客，页面比较花哨

# stage1_task001
[code](https://github.com/bmxklYzj/bmxklYzj.github.io/tree/master/demo/ife_2016/stage1/stage1_task001) 
[demo](http://bmxklyzj.github.io/ife_2016/stage1/stage1_task001/index.html)

## 学习到了html5的一些新标签，如article,section,figure,figcaption,aside,nav等
然后就是form表单中，需要加上label标签给对应的input，
input的属性为radio时要实现单选，name必须相同


> article和section
在HTML5中，article元素可以看成是一种特殊类型的section元素，它比section元素更强调独立性。即section元素强调分段或分块，而article强调独立性。具体来说，如果一块内容相对来说比较独立的、完整的时候，应该使用article元素，但是如果你想将一块内容分成几段的时候，应该使用section元素。

来自 http://www.yiiyaa.net/?p=1457


> figure和figcaption
img标签要在figure标签中,而figcatption标签其实就是图片下的
一段简单的说明文字而已
`<figure>`标签中可以包含多个图片标签

来自 <http://jackyrong.iteye.com/blog/1543209> 

> aside
放在article中其中的内容可以是与当前文章有关的相关资料、名次解释
放在article之外使用作为页面或站点全局的附属信息部分。最典型的是侧边栏，其中的内容可以使友情链接，博客中的其它文章列表、广告单元等
来自 <http://www.wangqi.com/html/2012-03/15271.htm> 

# stage1_task002
[code](https://github.com/bmxklYzj/bmxklYzj.github.io/tree/master/demo/ife_2016/stage1/stage1_task002) 
[demo](http://bmxklyzj.github.io/ife_2016/stage1/stage1_task002/index.html)
    练习简单的css

# stage1_task003
##经典的三栏自适应布局有三种：圣杯布局、双飞翼布局、直接flaot布局
1. 双飞翼布局
[code](https://github.com/bmxklYzj/bmxklYzj.github.io/tree/master/demo/ife_2016/stage1/stage1_task003) 
[demo](http://bmxklyzj.github.io/ife_2016/stage1/stage1_task003/index.html)
    双飞翼布局父元素加上min-width:500px可以防止极限情况下的混乱
2. 圣杯布局
    因为.bd有个margin:0280px0180px;无法做到最外层的边框，所以放弃此布局
[code](https://github.com/bmxklYzj/bmxklYzj.github.io/tree/master/demo/ife_2016/stage1/stage1_task003) 
[demo](http://bmxklyzj.github.io/ife_2016/stage1/stage1_task003/shengBieLayout.html)
3. 直接float
    左右分别float left、right写在前面，然后中间部分写在最后，加个margin即可
[code](https://github.com/bmxklYzj/bmxklYzj.github.io/tree/master/demo/ife_2016/stage1/stage1_task003) 
[demo](http://bmxklyzj.github.io/ife_2016/stage1/stage1_task003/floatLayout.html)

# stage1_task004
[code](https://github.com/bmxklYzj/bmxklYzj.github.io/tree/master/demo/ife_2016/stage1/stage1_task004) 
[demo](http://bmxklyzj.github.io/ife_2016/stage1/stage1_task004/index.html)
##此次画1/4圆，开始还以为要用图片，后来发现可以用border-radius属性
border-radius是由
```
border-top-left-radius
border-top-right-radius
border-bottom-right-radius
border-bottom-left-radius
```
这四个属性合成的 

##关于水平垂直居中的问题：
>参考资料
 	• HTML和CSS高级指南之二——定位详解：大漠老师手把手教你，这次彻底搞懂定位问题
 	• Centering in CSS: A Complete Guide：完整讨论了不同情况下的居中方案，建议自己思考之后再看答案
 	• Get HTML & CSS Tips In Your Inbox：有人写了一个作弊工具生成居中代码，但是看着代码你明白为什么吗
 
 来自 <http://ife.baidu.com/task/detail?taskId=4>
 
1. 水平居中：
* inline||inline-*用text-align:center
* block元素用margin: 0 auto;
* 多个block元素：先变成inline-block类型，然后text-align:center
 如：
 
```
.div1,
.div2 {
    display:inline-block;
}
.container{
    text-align:center;
}
```
 
2. 垂直居中：
* single line单行
    * 父元素没有高度，直接padding-top和padding-bottom设成相等的值就可以居中了
    ``` 
    .container {
     			width: 200px;
     			/*height: 300px;*/
     			background-color: #ccc;
     			padding-top: 150px;
     			padding-bottom: 150px;
     		}
    ```
    * 父元素有高度，把文字的line-height设成父元素的高度即可
    ```
    .center-text-trick {
           height: 100px;
           line-height: 100px;
           white-space: nowrap;
         }
    ```
     
* multiple line多行
    *   设置相同的padding-top和padding-bottom
    *   使用table-cell
        ```
        display: table-cell;
        vertical-align: middle;
        ```
        
    *   使用flex只支持IE10+
        ```
        display: flex;
        justify-content: center;
        flex-direction: column;
        ```
        
    *   使用before伪元素
        ```
        .container {
            width: 300px;
            height: 300px;
            background-color: #ccc;
        }
        .container:before {
            content: '';
            display: inline-block;
            height: 100%;
            /*width: 1%;*/
            vertical-align: middle;
        }
        .container p{
            display: inline-block;
            vertical-align: middle;
        }
        ```
*block垂直居中
    * 高度已知，使用margin-top为本身高度一半的负值
    ```
    .parent {
      position: relative;
    }
    .child {
      position: absolute;
      top: 50%;
      height: 100px;
      margin-top: -50px; /* account for padding and border if not using box-sizing: border-box; */
    }
    ```
    * 高度未知，使用transform: translateY(-50%)
    ```
    .container {
        width: 600px;
        height: 600px;
        background-color: #ccc;
        position: relative;
    }
    .main {
        width: 200px;
        /*height: 200px;*/
        background-color: #555;
        position: absolute;
        top: 50%;
        /*margin-top: -100px;*/
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    ```
    * 父元素使用flex布局,只支持IE10+
    ```
    .parent {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    ```
3. 水平垂直居中
    * 元素宽高已知
    
    ```
        .parent {
                   position: relative;
                 }
                .child {
                   width: 300px;
                   height: 100px;
                   padding: 20px;
                 
                   position: absolute;
                   top: 50%;
                   left: 50%;
                 
                   margin: -70px 0 0 -170px;
                }
    ```
    
    *   元素宽高未知
    ```
    .parent {
      position: relative;
    }
    .child {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    ```
    
# stage1_task005
[code](https://github.com/bmxklYzj/bmxklYzj.github.io/tree/master/demo/ife_2016/stage1/stage1_task005) 
[demo](http://bmxklyzj.github.io/demo/ife_2016/stage1/stage1_task005/index.html)
在实验一的基础上修改，和实验二差不多，只是把框架改成了两栏布局，右边固定，左边自适应

# stage1_task006
[code](https://github.com/bmxklYzj/bmxklYzj.github.io/tree/master/demo/ife_2016/stage1/stage1_task006) 
[demo](http://bmxklyzj.github.io/ife_2016/stage1/stage1_task006/index.html)

1. 利用border制作三角形
```
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 10px solid #10456b;
```
http://www.w3cplus.com/solution/border/border.html
2. 在慕课网上学习了切图，利用photoshop学习前端切图
    但是感觉自己此次还是没有完全还原设计图，主要是因为没有很细致的利用ps
    中的标尺等工具来度量，导致我自己的页面有些地方宽高与设计图一致
3. 熟练利用before和after伪类

# stage1_task008
[code](https://github.com/bmxklYzj/ife_2016/tree/master/stage1/stage1_task008) 
[demo](http://bmxklyzj.github.io/ife_2016/stage1/stage1_task008/index.html)

利用媒体查询实现简单的栅格化布局
参考网址：[w3cplus](http://www.w3cplus.com/blog/tags/172.html)

# stage1_task009