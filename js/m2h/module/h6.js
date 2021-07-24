export default (content,element)=>{
  let h6Element = document.createElement('h6')
  h6Element.innerText = content
  element.appendChild(h6Element)
}