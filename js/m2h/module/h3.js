export default (content,element)=>{
  let h3Element = document.createElement('h3')
  h3Element.innerText = content
  element.appendChild(h3Element)
}