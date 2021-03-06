import h from './h.js'
import blockquote from './blockquote.js'
import ul from './ul.js'
import p from './p.js'

export default (line, element) => {

  let olElement = null
  let liElement = document.createElement("li")

  // "- "，空格后的位置
  let position = line.indexOf(". ")
  let lineContent = line.substr(position + 2)
  let blockquoteReg = new RegExp("^\\s*>*>$")
  let hReg = new RegExp("^\\s*[#]{0,5}#$")
  let ulReg = new RegExp("^\\s*-$")

  // 判断是否有# >
  let relContent = lineContent.substr(0, lineContent.indexOf(" "))
  if (hReg.test(relContent)) {
    h(lineContent, liElement)
  } else if (blockquoteReg.test(relContent)) {
    blockquote(lineContent, liElement)
  } else if (ulReg.test(relContent)) {
    ul(lineContent, liElement)
  } else {
    liElement.innerHTML = lineContent
  }

  // ol比ul多了个字符,所以position的位置-1
  if (position === -1) {
    p(line, element)
    return element
  }
  else if ((position - 1) === 0) {
    if (element.lastChild.localName !== "ol") {
      olElement = document.createElement("ol")
      element.appendChild(olElement)
    } else {
      olElement = element.lastChild
    }
    olElement.appendChild(liElement)
  } else {
    let currentElement = element

    // 获取最后一为ol或为li的子元素
    if ((position - 1) % 2 == 0) {
      let iterativeNumber = (position - 1) / 2 + 1
      while (iterativeNumber >= 0) {
        currentElement = currentElement.lastChild
        iterativeNumber--
      }
      // 为列表添加子列表，undefined就创建一个ol,存在ol就接着拼接li
      if (currentElement.localName === undefined || currentElement.localName === "li") {
        olElement = document.createElement("ol")
        olElement.appendChild(liElement)
        currentElement.parentNode.appendChild(olElement)
      } else {
        currentElement.appendChild(liElement)
      }
    } else {
      currentElement.parentNode.innerHTML += line.substr(position + 2)
    }

  }

  return olElement
}