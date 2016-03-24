#wram-up热身练习
 [code](https://github.com/bmxklYzj/bmxklYzj.github.io/tree/master/demo/ife_2016/warm-up) 
 [demo](http://bmxklyzj.github.io/demo/ife_2016/warm-up/blog.html)
主要是做了一个静态的博客，页面比较花哨

# stage1_task001
[code](https://github.com/bmxklYzj/bmxklYzj.github.io/tree/master/demo/ife_2016/stage1/stage1_task001) 
[demo](http://bmxklyzj.github.io/demo/ife_2016/stage1/stage1_task001/index.html)

### 学习到了html5的一些新标签，如article,section,figure,figcaption,aside,nav等
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
[demo](http://bmxklyzj.github.io/demo/ife_2016/stage1/stage1_task002/index.html)

### 练习简单的css

# stage1_task003
##经典的三栏自适应布局有三种：圣杯布局、双飞翼布局、直接flaot布局
1. 双飞翼布局
[code](https://github.com/bmxklYzj/bmxklYzj.github.io/tree/master/demo/ife_2016/stage1/stage1_task003) 
[demo](http://bmxklyzj.github.io/demo/ife_2016/stage1/stage1_task003/index.html)
双飞翼布局父元素加上min-width:500px可以防止极限情况下的混乱
2. 圣杯布局
因为.bd有个margin:0280px0180px;无法做到最外层的边框，所以放弃此布局
[code](https://github.com/bmxklYzj/bmxklYzj.github.io/tree/master/demo/ife_2016/stage1/stage1_task003) 
[demo](http://bmxklyzj.github.io/demo/ife_2016/stage1/stage1_task003/shengBeiLayout.html)
3. 直接float
左右分别float left、right写在前面，然后中间部分写在最后，加个margin即可
[code](https://github.com/bmxklYzj/bmxklYzj.github.io/tree/master/demo/ife_2016/stage1/stage1_task003) 
[demo](http://bmxklyzj.github.io/demo/ife_2016/stage1/stage1_task003/floatLayout.html)
# stage1_task004