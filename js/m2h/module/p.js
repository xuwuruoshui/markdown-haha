export default (content,element,again)=>{
  let pElement = null;
  if(!again){
    pElement = document.createElement('p')
    pElement.innerHTML = content
    element.appendChild(pElement)
  }else{
    pElement = element
    element.innerHTML+=("<br>"+content)
  }
  
  return pElement
}