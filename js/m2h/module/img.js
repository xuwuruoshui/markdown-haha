
export default (content) => {


    let imageReg = new RegExp("!\\[.+\\]\\(.+\\s*((\"|'){1}.+(\"|'){1})+\\)")
    let start = null
    let end = null
    while (content.match(imageReg) !== null) {
        start = content.search(imageReg)
        end = content.match(imageReg)[0].length
        let subStr = content.substring(start, end + 1)

        // alt
        let altReg = new RegExp("\\[.+\\]")
        let altContent = null
        if (subStr.match(altReg)[0] != null) {
            altContent = subStr.match(altReg)[0].replace("[", "").replace("]", "")
        }

        // src
        let srcReg = new RegExp("\\(.+\\s\"")
        let srcContent = null
        if (subStr.match(srcReg)[0] != null) {
            srcContent = subStr.match(srcReg)[0].replace("(", "").replace("\"", "")
        } else if (subStr.match(srcReg)[0] != null) {
            srcReg = new RegExp("\\(.+\\)")
            srcContent = subStr.match(srcContent)[0].replace("(", "").replace(")", "")
        }


        // title
        let titleReg = new RegExp("\".*\"")
        let titleContent = subStr.match(titleReg)[0]
        if (subStr.match(titleReg)[0] != null) {
            //let reg = new RegExp("(^\")|(\"$)")
            titleContent = subStr.match(titleReg)[0].replace(/(^")|("$)/g, "")
        }

        content = content.replace(subStr, `<img alt="${altContent}" title="${titleContent}" src="${srcContent}" style="width:400px;heigh:400px"></img>`)
    }
    return content
}
