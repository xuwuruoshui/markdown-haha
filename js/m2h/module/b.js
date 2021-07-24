
export default (content) => {
  // 加粗
  let tag = true
  while (content.indexOf("**") != -1) {
    if (tag) {
      content = content.replace("**", "<b>")
    } else {
      content = content.replace("**", "</b>")
    }
    tag = !tag
  }
  return content
}
