export default (content,element)=>{
  let h2Element = document.createElement('h2')
  h2Element.innerText = content
  element.appendChild(h2Element)
}