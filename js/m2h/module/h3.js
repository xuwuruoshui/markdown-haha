export default (line, element) => {
  let content = line.substr(line.indexOf(" ") + 1)
  let h3Element = document.createElement('h3')
  h3Element.innerText = content
  element.appendChild(h3Element)
}