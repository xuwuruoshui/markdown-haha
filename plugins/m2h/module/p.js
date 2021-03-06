export default (line, element, again) => {

  // 判断是否换了一行接着写,不是就新增一个元素,是就拼接
  let pElement = null
  if (!again) {
    pElement = document.createElement('p')
    element.appendChild(pElement)
    pElement.innerHTML += line
  } else {
    pElement = element
    element.innerHTML += ("<br>"+line)
  }
  return pElement
}