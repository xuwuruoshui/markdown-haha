
export default (content) => {
  // 加粗
  let tag = true
  while (content.indexOf("_") != -1) {
    if (tag) {
      content = content.replace("_", "<em>")
    } else {
      content = content.replace("_", "</em>")
    }
    tag = !tag
  }
  return content
}