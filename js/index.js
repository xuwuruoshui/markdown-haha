import m2h from './m2h/index.js'
import ajax from './request/ajax.js'



// axios.get("../source/a.md").then(res=>{
//   let data = res.data;
//   let lineData = data.split("\r\n");
//   let h1 = new RegExp(/^#/) 
//   if(h1.test(lineData[0])){
//     let pre = "<h1>"
//     let msg = lineData[0].substr(lineData[0].indexOf("#")+1)
//     let end = "</h1>"
//     console.log(pre+msg.trim()+end);
//   }
//   console.log();
// })
// Old compatibility code, no longer needed.
let content = document.getElementById("content")

ajax.get("../source/a.md",res=>{
  m2h(res)
  //console.log(res);
})
