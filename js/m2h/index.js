import { inside, outside, noTag } from './strProcess.js'

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

  // 遍历每行
  lines.forEach((line, index) => {

    // 预处理，含有加粗,下划线,删除线的元素标签设置上
    for (const key in inside) {
      if (line.indexOf(key) != -1) {
        line = inside[key](line)
      }
    }

    // 以空格结尾
    let mark = line.substr(0, line.indexOf(" "))

    // 判断是否包含有转换的标识符
    if (outside.hasOwnProperty(mark)) {
      again = false;
      let content = line.substr(line.indexOf(" ") + 1)
      currentMark = mark
      currentElement = outside[mark](content, element, again)
    } else {
      if (currentMark != null && lines[index - 1] !== "" && line != "") {
        again = true;
        // 上一段未处理完，继续处理标识符
        outside[currentMark](line, currentElement, again)
      }
      else {
        // 空白处处理
        currentMark = null
        currentElement = null
        // 不为空说明已有上文,为true接着拼接
        again = (lines[index - 1] !== "")

        noTag(line, element, again)
      }
    }
  })

}

export default m2h