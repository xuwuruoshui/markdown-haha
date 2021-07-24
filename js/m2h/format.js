import h1 from './module/h1.js'
import h2 from './module/h2.js'
import h3 from './module/h3.js'
import h4 from './module/h4.js'
import h5 from './module/h5.js'
import h6 from './module/h6.js'
import p from './module/p.js'

// 转换的标识符对应关系
let format = {
  "#":h1,
  "##":h2,
  "###":h3,
  "####":h4,
  "#####":h5,
  "######":h6,
  ">":p
}

export default format