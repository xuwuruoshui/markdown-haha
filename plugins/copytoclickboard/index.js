const copyToClipboard = async str => {

    // 写入粘贴板
    await navigator.clipboard.writeText(str)

    // 读取粘贴板
    // await navigator.clipboard.readText()
};