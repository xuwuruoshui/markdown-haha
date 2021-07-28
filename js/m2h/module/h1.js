export default (line, element) => {
  let content = line.substr(line.indexOf(" ") + 1)
  let h1Element = document.createElement('h1')
  h1Element.innerText = content

  element.appendChild(h1Element)

}