export default (line, element) => {
  let content = line.substr(line.indexOf(" ") + 1)
  let h6Element = document.createElement('h6')
  h6Element.innerText = content
  element.appendChild(h6Element)
}