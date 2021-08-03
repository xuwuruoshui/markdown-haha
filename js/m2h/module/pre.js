import p from './p.js'

export default (line, element, again) => {

  let codeBlockElement = null
  if (!again) {
    // ```
    if (line[3] != null) {
      codeBlockElement = document.createElement("pre")
      element.appendChild(codeBlockElement)
      return codeBlockElement
    } else {
      return element
    }
  } else {
    if (element.localName !== 'pre') {
      p(line, element, false)
    } else {
      codeBlockElement = element
      codeBlockElement.innerHTML += (line + "\r\n")
    }
    return codeBlockElement
  }


}