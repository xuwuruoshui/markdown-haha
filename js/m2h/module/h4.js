export default (line, element) => {
  let content = line.substr(line.indexOf(" ") + 1)
  let h4Element = document.createElement('h4')
  h4Element.innerText = content
  element.appendChild(h4Element)
}