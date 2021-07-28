export default (line, element) => {
  let content = line.substr(line.indexOf(" ") + 1)
  let h2Element = document.createElement('h2')
  h2Element.innerText = content
  element.appendChild(h2Element)
}