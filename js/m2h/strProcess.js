import h from './module/h.js'
import blockquote from './module/blockquote.js'
import strong from './module/strong.js'
import del from './module/del.js'
import em from './module/em.js'
import ul from './module/ul.js'
import ol from './module/ol.js'
import table from './module/table.js'
import pre from './module/pre.js'

import noTag from './module/p.js'
import a from './module/a.js'

// 转换的标识符对应关系
let outside = {
  "^[#]{0,5}#$": h,
  "^>*>$": blockquote,
  "^-": ul,
  "^[0-9]+.$": ol,
  "^\\|": table,
  "^```": pre
}

// TODO "^\\|.*\\|$"

// 部分文字上的处理
let inside = {
  "\\*\\*": strong,
  "\\~\\~": del,
  "\\_": em,
  "\\s*\\w\\w+@\\w+\\.\\w|http[s]?://":a,

}


export { outside, inside, noTag }