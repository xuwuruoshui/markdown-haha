export default (line, element, again) => {


  let blockQuoteElement = null;
  let childElement = null;
  // 没换行就从头新增元素,换了就沿用上一个元素的样式
  if (!again) {
    let words = line.split(" ")
    blockQuoteElement = document.createElement('blockquote')
    childElement = blockQuoteElement

    let hreg = new RegExp("^[#]{0,5}#$")

    let postion = line.indexOf(" ");
    for (let i = 1; i < words.length; i++) {
      let tempPostion = line.indexOf(" ", postion + 1)
      if (tempPostion != -1) {
        postion = tempPostion
      }

      // 判断是否为>、#、-
      if (words[i] === ">") {
        let tempElement = document.createElement('blockquote')
        childElement.appendChild(tempElement)
        childElement = tempElement
      } else if (hreg.test(words[i])) {
        let tempElement = document.createElement("h" + words[i].length)
        childElement.appendChild(tempElement)
        childElement = tempElement
        break;
      } else {
        break;
      }
    }

    childElement.innerHTML = line.substr(postion)
    element.appendChild(blockQuoteElement)
    return childElement
  } else {
    let newLineElement = element.cloneNode(true)
    let parentNode = element.parentNode
    while (newLineElement.localName != "blockquote") {
      newLineElement = parentNode.cloneNode(true)
      parentNode = parentNode.parentNode
    }
    parentNode.appendChild(newLineElement)
    blockQuoteElement = newLineElement
    blockQuoteElement.innerHTML = line
  }

  return blockQuoteElement
}