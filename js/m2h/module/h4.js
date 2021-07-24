export default (content,element)=>{
  let h4Element = document.createElement('h4')
  h4Element.innerText = content
  element.appendChild(h4Element)
}