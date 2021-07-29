import h from './h.js'
import blockquote from './blockquote.js'

export default (line, element) => {

  let ulElement = null
  let liElement = document.createElement("li")

  // "- "，空格后的位置
  let position = line.indexOf("- ")
  let lineContent = line.substr(position + 2)
  let blockquoteReg = new RegExp("^ *>*>$")
  let hReg = new RegExp("^ *[#]{0,5}#$")

  // 判断是否有# >
  let relContent = lineContent.substr(0, lineContent.indexOf(" "))
  if (hReg.test(relContent)) {
    h(lineContent, liElement)
  } else if (blockquoteReg.test(relContent)) {
    blockquote(lineContent, liElement)
  } else {
    liElement.innerHTML = lineContent
  }


  if (position == 0) {
    if (element.lastChild.localName !== "ul") {
      ulElement = document.createElement("ul")
      element.appendChild(ulElement)
    } else {
      ulElement = element.lastChild
    }
    ulElement.appendChild(liElement)
  } else {
    let currentElement = element
    // 获取最后一为ul或为li的子元素
    if (position % 2 == 0) {
      let iterativeNumber = position / 2
      while (iterativeNumber >= 0) {
        currentElement = currentElement.lastChild
        iterativeNumber--
      }
      ulElement = document.createElement("ul")
      ulElement.appendChild(liElement)
      currentElement.parentNode.appendChild(ulElement)
    } else {
      currentElement.parentNode.innerHTML += line.substr(position + 2)
    }

  }

  return ulElement
}