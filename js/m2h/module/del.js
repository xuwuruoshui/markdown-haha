
export default (content) => {
  // 加粗
  let tag = true
  while (content.indexOf("~~") != -1) {
    if (tag) {
      content = content.replace("~~", "<del> ")
    } else {
      content = content.replace("~~", " </del>")
    }
    tag = !tag
  }
  return content
}
