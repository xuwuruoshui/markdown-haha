export default (line, element) => {

  let mark = line.substr(0, line.indexOf(" "))
  let content = line.substr(line.indexOf(" ") + 1)
  let h1Element = document.createElement('h' + mark.length)
  h1Element.innerText = content

  element.appendChild(h1Element)
  return h1Element
}