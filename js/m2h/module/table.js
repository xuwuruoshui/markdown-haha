export default (line, element) => {


  let trElement = document.createElement("tr")
  let tableElemnt = null
  // 第一次进来div元素,就先创建table、tr、th,第二次如果形式正确就在div上设置上子元素
  if (element.lastChild.localName != "table") {
    tableElemnt = document.createElement("table")
    tableElemnt.style.display = "none"

    // 根据|个数n，添加n-1个th。split分割首位为空字符串故从1表里到length-1
    let thArray = line.split("|")
    for (let i = 1; i < thArray.length - 1; i++) {
      let thElement = document.createElement("th")
      thElement.innerHTML = thArray[i].trim()
      trElement.appendChild(thElement)
    }
    element.appendChild(tableElemnt)
    tableElemnt.appendChild(trElement)
  } else {
    tableElemnt = element.lastChild

    let tableReg = new RegExp("^\\|(\\s)*:?-*:?(\\s)*\\|$")

    if (tableReg.test(line.substr(0, line.indexOf("|", 1) + 1))) {
      tableElemnt.style.display = ""
      tableElemnt.border = "1px"
      tableElemnt.style.width = "300px"

      // 分割第二行的|,判断设置文字对齐
      let markArray = line.split("|")
      let firstTrElement = tableElemnt.firstElementChild
      for (let i = 0; i < firstTrElement.childNodes.length; i++) {
        let tdMark = markArray[i + 1].trim()
        if (tdMark.indexOf(":") === 0 && tdMark.lastIndexOf(":") === (tdMark.length - 1)) {
          firstTrElement.childNodes[i].style.textAlign = "center"
        } else if (tdMark.lastIndexOf(":") === (tdMark.length - 1) && tdMark.length !== 0) {
          firstTrElement.childNodes[i].style.textAlign = "right"
        } else {
          firstTrElement.childNodes[i].style.textAlign = "left"
        }
      }
    } else {
      let tdArray = line.split("|")
      let firstTrElement = tableElemnt.firstElementChild
      for (let i = 0; i < firstTrElement.childNodes.length; i++) {
        let tdElement = document.createElement("td")
        tdElement.style.textAlign = firstTrElement.childNodes[i].style.textAlign
        tdElement.innerHTML = (tdArray[i + 1] != null ? tdArray[i + 1].trim() : "")
        trElement.appendChild(tdElement)
      }
      tableElemnt.appendChild(trElement)
    }

  }

  return tableElemnt

}

// let tableTextPosition = tableElement => {
//   tableElement.
// }