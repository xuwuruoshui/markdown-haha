
export default (content) => {
    // 加粗
    let tag = true
    let linkReg = new RegExp("\\s*\\w\\w+@\\w+\\.\\w|http[s]?://");

    // 开始位置
    let start = null
    let end = null
    let subStr = null
    let relContent = null
    while ((start = content.search(linkReg))!==-1 && (start===0 || (content.charAt(start-1)!==`"` && content.charAt(start-1)!==">" &&content.charAt(start-1)!==":"))){

        // 字上存在链接的
        let textLinkReg = new RegExp("\\[[^]+\\]\\(<?(s*ww+@w+.w|http[s]?://.*)>?\\s?([\"']?[^]+[\"']?\\s+)?\\)")
        // 带尖括号的链接
        let linkReg1 = new RegExp("<\\s*(\\w\\w+@\\w+\\.\\w|http[s]?://.*)\\s*>")
        // 普通的链接
        let linkReg2 = new RegExp("\\s*(\\w\\w+@\\w+\\.\\w|http[s]?://[^ \\s(\\r\\n)]*)")

        // 1、带文字的链接
        if((start = content.search(textLinkReg))!==-1){
            end = content.indexOf(")",start)
            subStr = content.substring(start,end+1)

            // 文本内容
            let textReg = new RegExp("\\[[^]+\\]")
            let textContent = subStr.match(textReg)[0].replace("[","").replace("]","")

            // 链接内容
            let hrefContent = null
            let titleEffective = true
            if(subStr.match(linkReg1)!==null){
                hrefContent = subStr.match(linkReg1)[0].replace("<","").replace(">","")
            }else if(subStr.match(linkReg2)!==null){
                hrefContent = subStr.match(linkReg2)[0]
            }else {
                hrefContent = subStr.match(linkReg)[0]
                titleEffective = false
            }
            hrefContent = emailProcess(hrefContent)

            // 标题(鼠标移上去显示)
            let titleReg = new RegExp(`["']+.*["']+`)
            let titleContent = null
            if(titleEffective && subStr.match(titleReg)!=null){
                titleContent = subStr.match(titleReg)[0]
            }

            relContent = `<a href="${hrefContent}" title="titleContent">${textContent}</a>`

        }
        // 2、带尖括号的链接
        else if((start=content.search(new RegExp(linkReg1)))!==-1){
            end = content.indexOf(">",start)
            subStr = content.substring(start,end+1)
            let hrefText = subStr.replace("<","").replace(">","")
            hrefText = emailProcess(hrefText)
            relContent = `<a href="${hrefText}">${hrefText}</a>`
        }
        // 3、普通链接
        else {
            start = content.search(linkReg)
            end = content.indexOf(" ",start)
            if(end===-1){
                end = content.length
            }
            subStr = content.substring(start,end+1)
            let hrefContent = emailProcess(subStr)
            relContent = `<a href="${hrefContent}">${subStr}</a>`
        }
        content = content.replace(subStr,relContent)
    }

    return content
}


let emailProcess = (content)=>{
    let emailReg = new RegExp("\\s*\\w\\w+@\\w+\\.\\w")
    return (emailReg.test(content)?"mailto:":"")+content
}