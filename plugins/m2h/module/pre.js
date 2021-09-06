import p from './p.js'

export default (line, element, again) => {

    let preElement = null
    if (!again) {
        // ```
        if (line[3] != null) {
            preElement = document.createElement("pre")

            // 格式与复制按钮
            let title = document.createElement("div")
            title.setAttribute("id", "codeTitle")
            let typeSpan = document.createElement("span");
            typeSpan.setAttribute("id","type")
            typeSpan.innerText = line.substring(3)
            let copyBtn = document.createElement("button");
            copyBtn.setAttribute("id", "copy")
            copyBtn.setAttribute("onclick", "copy()")
            copyBtn.innerText = "复制"
            title.appendChild(typeSpan)
            title.appendChild(copyBtn)
            preElement.appendChild(title)

            // 代码块
            let codeElement = document.createElement("code")
            codeElement.setAttribute("class", line.substring(3))

            preElement.appendChild(codeElement)
            element.appendChild(preElement)
            return preElement
        } else {
            return null
        }
    } else {
        if (element.localName !== 'pre') {
            p(line, element, false)
        } else {
            preElement = element
            if(line!=="\r\n"){
                preElement.lastChild.innerHTML += (htmlEscape(line) + "\r\n")
            }else {
                preElement.lastChild.innerHTML +=  "\r\n"
            }

        }
        return preElement
    }


}

/*传入html字符串源码即可*/

let htmlEscape = (text) => {
    return text.replace(/[<>"&]/g, function (match, pos, originalText) {
        switch (match) {
            case "<": return "&lt;";
            case ">": return "&gt;";
            case "&": return "&amp;";
            case "\"": return "&quot;";
        }
    });
}