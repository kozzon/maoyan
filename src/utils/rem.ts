// rem计算文件
// 设计稿是： 750 
// 参考其他网站来做的 375

function fontHandler (): void {
    // 如果你用的是设计稿，那么这里写 7.5
    // 如果你高仿的其他移动端网站： 3.75
    document.documentElement.style.fontSize = document.documentElement.clientWidth/3.75 + 'px'
}
// 浏览器第一次加载项目时，要计算一次
fontHandler()
// 浏览器的模拟器尺寸发生改变时，我们要再次重新计算rem
window.onresize  = fontHandler 
// resize 事件就指的是浏览器尺寸改变
