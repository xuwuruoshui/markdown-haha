import {inside, outside, noTag} from './strProcess.js'

// 获取当前元素
let element = document.getElementById("content");


let m2h = (msg) => {
    // 按行分割字符串
    let lines = msg.split("\r\n")

    // 当前行正在处理的标识符
    let currentMark = null;

    // 当前行正在处理的DOM
    let currentElement = null;

    // 当前行是否承接上一行
    let again = false;


    lines.forEach((line, index) => {

        // 预处理，含有加粗,下划线,删除线的元素标签设置上
        for (const insideMark in inside) {
            if (line.search(new RegExp(insideMark)) !== -1) {
                line = inside[insideMark](line)
            }
        }

        // 以空格结尾
        let trimLeft = new RegExp("^ *")
        let tempLine = line.replace(trimLeft, "");
        let mark = tempLine.substr(0, tempLine.indexOf(" ") !== -1 ? tempLine.indexOf(" ") : tempLine.length)
        let {isContainMark, key} = isMarkInKey(mark, currentElement);

        // 判断是否包含有转换的标签
        if (isContainMark) {
            again = false;
            currentMark = key
            currentElement = outside[key](line, element, again)
        } else {

            // 上一段未处理完，接着之前的标签进行处理
            if (line != "") {

                if (currentMark != null && lines[index - 1] !== "") {
                    again = true;
                    outside[currentMark](line, currentElement, again)
                    return
                }

                currentMark = null
                // 调用noTag作为放入p标签
                if (lines[index - 1] === "" || lines[index-1]===undefined) {
                    again = false
                    currentElement = noTag(line, element, again)
                } else {
                    again = true
                    currentElement = noTag(line, currentElement, again)
                }
            }

        }
    })

}

/**
 * 开头的标记,key是否含有
 * @param mark
 * @param currentElement
 * @returns {{isContainMark: boolean, key}}
 */
function isMarkInKey(mark, currentElement) {
    let isContainMark = false
    let key
    for (key in outside) {
        let reg = new RegExp(key)
        // 含有标记设置,上一个处理的元素为空、名字不为pre、当前的标记是```，则为true
        if (reg.test(mark) && (currentElement === null || currentElement.localName !== "pre" || mark === "```")) {
            isContainMark = true
            break;
        }
    }
    return {isContainMark, key};
}

export default m2h