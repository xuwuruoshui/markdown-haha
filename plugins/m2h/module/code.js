
export default (content) => {
    // 代码块
    let tag = true
    while (content.indexOf("`") != -1) {
        if (tag) {
            content = content.replace("`", `<span id="code" style="background: #F3F4F4;">`)
        } else {
            content = content.replace("`", `</span>`)
        }
        tag = !tag
    }
    return content
}
