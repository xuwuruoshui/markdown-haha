export default (content, element, again) => {


  // 判断是否换了一行接着写,不是就新增一个元素,是就拼接
  if (!again) {
    element.innerHTML += content
  } else {
    element.innerHTML += ("<br>" + content)
  }

}