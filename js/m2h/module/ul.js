import h from './h.js'
import blockquote from './blockquote.js'
import ol from './ol.js'

export default (line, element) => {

  let ulElement = null
  let liElement = document.createElement("li")

  // "- "，空格后的位置
  let position = line.indexOf("- ")
  let lineContent = line.substr(position + 2)
  let hReg = new RegExp("^\\s*[#]{0,5}#$")
  let checkBoxReg = new RegExp("^\\[")
  let blockquoteReg = new RegExp("^\\s*>*>$")
  let olReg = new RegExp("^[0-9]*.\\s+$")


  // 判断是否有# > [x]
  let otherMark = lineContent.substr(0, lineContent.indexOf(" "))
  if (hReg.test(otherMark)) {
    h(lineContent, liElement)
  } else if (blockquoteReg.test(otherMark)) {
    blockquote(lineContent, liElement)
  } else if (olReg.test(otherMark)) {
    ol(lineContent, liElement)
  } else if (checkBoxReg.test(otherMark)) {
    // checkbox
    checkBoxReg = checkBoxOpt(lineContent, checkBoxReg, liElement)
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
    // 获取最后一位为ul或为li的子元素
    if (position % 2 == 0) {
      let iterativeNumber = (position / 2) + 1
      while (iterativeNumber >= 0) {
        currentElement = currentElement.lastChild
        iterativeNumber--
      }
      if (currentElement.localName === undefined || currentElement.localName === "li") {
        ulElement = document.createElement("ul")
        ulElement.appendChild(liElement)
        currentElement.parentNode.appendChild(ulElement)
      } else {
        currentElement.appendChild(liElement)
      }

    } else {
      currentElement.parentNode.innerHTML += line.substr(position + 2)
    }

  }

  return ulElement
}

let checkBoxOpt = (lineContent, checkBoxReg, liElement) => {
  let checkBoxMark = lineContent.substr(lineContent.indexOf("["), lineContent.indexOf("]") + 1)
  checkBoxReg = new RegExp("^\\[(x|\\s){1}\\]")
  if (checkBoxReg.test(checkBoxMark)) {
    let checkBoxElement = document.createElement("input")
    checkBoxElement.setAttribute("type", "checkbox")
    if (checkBoxMark.indexOf("x") != -1) {
      checkBoxElement.setAttribute("checked", "true")
    }
    liElement.appendChild(checkBoxElement)
    liElement.innerHTML += lineContent.substr(lineContent.indexOf("]") + 1)
    liElement.style.cssText = "list-style:none"
  } else {
    liElement.innerHTML = lineContent
  }
  return checkBoxReg
}
