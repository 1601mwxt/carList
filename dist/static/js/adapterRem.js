((doc,win,image_width)=>{
    let docEl = doc.documentElement;                                      //获取HTML
    let docBody = doc.body;
    //判断orientationchange属性在不在window里 ps:这个属性只有在移动端有 判断横屏还是竖屏
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

    let recalc = () => {
        let clientWidth = docEl.clientWidth;                             //每次浏览器窗口大小改变的时候获取实时宽度
        if (!clientWidth){return};                                       //如果没有宽度 阻止后面代码执行                                       
        docEl.style.fontSize = 100 * (clientWidth / image_width) + 'px'; //核心逻辑
    };

    if (!doc.addEventListener){return};                                  //判断浏览器有没有dom2级事件,没有就阻止后面代码执行
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);             

    /*  orientationchange           是移动端判断竖屏还是横屏
        onresize                    resize是ul事件 用于监听浏览器窗宽高变化时触发 ul事件分别是 onload onscroll onresize
        DOMContentLoaded            如果文档中包含脚本，则脚本会阻塞文档的解析，而脚本需要等位于脚本前面的css加载完才能执行。
                                    在任何情况下，DOMContentLoaded 的触发不需要等待图片等其他资源加载完成*/
})(document,window,750);
    /*
    浏览器渲染过程
        01) 当我们在浏览器地址输入URL时，浏览器会发送请求到服务器
        02) 服务器将请求的HTML文档发送回浏览器
        03) 浏览器将文档下载下来后，便开始从上到下解析
        04) 解析完成之后，会生成DOM
        04) 如果页面中有css，会根据css的内容形成CSSOM
        05) 然后DOM和CSSOM会生成一个渲染树
        06) 最后浏览器会根据渲染树的内容计算出各个节点在页面中的确切大小和位置，并将其绘制在浏览器上。
        ps:详细浏览器渲染过程文章地址:https://www.cnblogs.com/caizhenbo/p/6679478.html

    English:
        adapter     适配器

    adapterRem
        01) 获取HTML
        02) 获取html的可视宽度
        03) 使用orientationchang移动端横竖屏属性来in window来判断是pc还是移动端
        03) HTML的可视宽度 乘以100 除以设计稿宽度
*/

