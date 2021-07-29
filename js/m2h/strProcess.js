import h from './module/h.js'
import blockquote from './module/blockquote.js'
import strong from './module/strong.js'
import del from './module/del.js'
import em from './module/em.js'
import ul from './module/ul.js'

import noTag from './module/p.js'

// 转换的标识符对应关系
let outside = {
  "^[#]{0,5}#$": h,
  "^>*>$": blockquote,
  "^ *-$": ul
}

let inside = {
  "**": strong,
  "~~": del,
  "_": em
}


export { outside, inside, noTag }