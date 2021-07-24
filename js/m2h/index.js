import { inside, outside } from './strProcess.js'

// 获取当前元素
let element = document.getElementById("content");


let m2h = (msg) => {
  // 按行分割字符串
  let lines = msg.split("\r\n")

  // 当前行正在处理的元素
  let currentMark = null;
  let currentElement = null;


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
      let content = line.substr(line.indexOf(" ") + 1)
      currentMark = mark
      currentElement = outside[mark](content, element, false)
    } else {
      if (lines[index - 1] !== "" && line != "") {
        outside[currentMark](line, currentElement, true)
      } else {
        element.innerHTML += line
      }

    }
  })

}

export default m2h