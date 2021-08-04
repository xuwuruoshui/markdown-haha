
export default (content) => {
  // 加粗
  let tag = true
  while (content.indexOf("**") != -1) {
    if (tag) {
      content = content.replace("**", "<strong> ")
    } else {
      content = content.replace("**", " </strong>")
    }
    tag = !tag
  }
  return content
}
