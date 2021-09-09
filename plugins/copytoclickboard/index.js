const copyToClipboard = async str => {

    // 写入粘贴板
    await navigator.clipboard.writeText(str)

    // 读取粘贴板
    // await navigator.clipboard.readText()
};

const copy = () => {
    let copyBtn = document.getElementById("copy");
    if (copyBtn.innerText === "完成复制") {
        return;
    }

    let copyConetnt = copyBtn.parentNode.parentNode.children[1]

    copyToClipboard(copyConetnt.innerText)
    copyBtn.innerText = "Copied!";
    setTimeout(() => {
        copyBtn.innerText = "Copy"
    }, 1000)

}