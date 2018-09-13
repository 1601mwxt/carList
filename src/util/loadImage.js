export default (el)=>{
    // 图片距离底部还有100px的时候图片加载
    let offset=100;
    // 1.找到所有需要懒加载的元素
    let node=Array.from(document.querySelectorAll('[data-src]'));
    console.log(node)
    // 判断元素是否出现在视口中
    let inView=(ele)=>{
        let rect=ele.getBoundingClientRect();
        if(rect.top>0 && rect.top<window.innerHeight+offset){
            return true
        }
        return false
    }
    // 判断元素是都加载过
    let isDeal=(ele)=>{
        return ele.src==ele.dataset.src;
    }
    let load=()=>{
        node.forEach(item => {
            if(inView(item)&& !isDeal(item)){
                item.src=item.dataset.src
            }
        });
    }
    load()
    document.querySelector(el).addEventListener('scroll',load)
}