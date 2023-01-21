function goOutOfFullScreen({playerRef, videoCont})
{
    setTimeout(() =>
    {
        const rect = playerRef.current.getBoundingClientRect()
        videoCont.current.style.left = rect.left + "px"
        videoCont.current.style.top = rect.top + "px"
        videoCont.current.style.width = rect.width + "px"
        videoCont.current.style.height = rect.height + "px"
        videoCont.current.style.backgroundColor = "transparent"
        videoCont.current.style.borderRadius = "var(--third-radius)"

        setTimeout(() =>
        {
            videoCont.current.style.removeProperty("border-radius")
            videoCont.current.style.removeProperty("left")
            videoCont.current.style.removeProperty("top")
            videoCont.current.style.removeProperty("width")
            videoCont.current.style.removeProperty("height")
            videoCont.current.style.removeProperty("background-color")
            videoCont.current.style.removeProperty("z-index")
            videoCont.current.style.removeProperty("transition")
            videoCont.current.style.removeProperty("position")
        }, 250)
    }, 10)
}

export default goOutOfFullScreen