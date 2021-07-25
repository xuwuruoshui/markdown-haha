export default (content, element, again) => {
  let pElement = null;


  // 判断是否换了一行接着写,不是就新增一个元素,是就拼接
  if (!again) {
    pElement = document.createElement('blockquote')
    pElement.innerHTML = content
    element.appendChild(pElement)
  } else {
    pElement = element
    element.innerHTML += ("<br>" + content)
  }

  return pElement
}