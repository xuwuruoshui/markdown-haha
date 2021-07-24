export default (content,element)=>{
  let h5Element = document.createElement('h5')
  h5Element.innerText = content
  element.appendChild(h5Element)
}