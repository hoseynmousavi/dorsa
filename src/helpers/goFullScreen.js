function goFullScreen({playerRef, videoCont})
{
    const rect = playerRef.current.getBoundingClientRect()
    videoCont.current.style.zIndex = "var(--modal-z-index)"
    videoCont.current.style.position = "fixed"
    videoCont.current.style.left = rect.left + "px"
    videoCont.current.style.top = rect.top + "px"
    videoCont.current.style.width = rect.width + "px"
    videoCont.current.style.height = rect.height + "px"
    videoCont.current.style.backgroundColor = "transparent"

    setTimeout(() =>
    {
        videoCont.current.style.transition = "left ease 0.2s, top ease 0.2s, height ease 0.2s, width ease 0.2s"
        videoCont.current.style.left = "0"
        videoCont.current.style.top = "0"
        videoCont.current.style.width = "100%"
        videoCont.current.style.height = "100%"
        videoCont.current.style.backgroundColor = "var(--solid-dark)"

        setTimeout(() =>
        {
            if (videoCont.current.requestFullscreen) videoCont.current.requestFullscreen()
            else if (videoCont.current.webkitRequestFullscreen) videoCont.current.webkitRequestFullscreen()
            else if (videoCont.current.msRequestFullscreen) videoCont.current.msRequestFullscreen()
            if (window?.screen?.orientation)
            {
                window.screen.orientation.lock("landscape")
                    .then(() => console.log("Locked"))
                    .catch(error => console.log(error))
            }
        }, 250)
    }, 10)
}

export default goFullScreen