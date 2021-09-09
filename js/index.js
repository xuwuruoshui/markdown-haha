let c = () => {
    let w = document.documentElement.clientHeight;/*获取设备宽度*/
    let n = (20 * (w / 320) > 20 ? 20 : (20 * (w / 320))) + "px";
    document.documentElement.style.fontSize = n;
}

window.addEventListener("load", c);
window.addEventListener("resize", c);
