export default (content,element)=>{

  let h1Element = document.createElement('h1')
  h1Element.innerText = content

  element.appendChild(h1Element)

}