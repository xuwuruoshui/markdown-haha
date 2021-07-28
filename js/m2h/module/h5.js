export default (line, element) => {
  let content = line.substr(line.indexOf(" ") + 1)
  let h5Element = document.createElement('h5')
  h5Element.innerText = content
  element.appendChild(h5Element)
}