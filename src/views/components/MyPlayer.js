import ReactPlayer from "react-player"
import formatTime from "../../helpers/formatTime"
import {useRef, useState} from "react"
import MyLoader from "../../seyed-modules/components/MyLoader"
import goFullScreen from "../../helpers/goFullScreen"
import goOutOfFullScreen from "../../helpers/goOutOfFullScreen"

function MyPlayer({url, poster, className, setVideoRef, onEnded, showInFullScreen})
{
    const [isPlaying, setIsPlaying] = useState(false)
    const [hideControls, setHideControls] = useState(true)
    const hideControlsRef = useRef(true)
    const hideTimer = useRef(null)
    const [isLoading, setIsLoading] = useState(true)
    const isFullScreenRef = useRef(false)
    const loadedWell = useRef(false)
    const video = useRef(null)
    const videoRef = useRef(null)
    const videoCont = useRef(null)
    const playerRef = useRef(null)
    const timeElapse = useRef(null)
    const durationRef = useRef(null)
    const seekRef = useRef(null)
    const seekLoadedRef = useRef(null)
    const seekSeenRef = useRef(null)
    const seekSliderRef = useRef(null)
    const maxRef = useRef(null)

    function onFullChange()
    {
        isFullScreenRef.current = !isFullScreenRef.current
        if (!isFullScreenRef.current) goOutOfFullScreen({playerRef, videoCont})
        showControlsFunc()
    }

    function runScripts()
    {
        if (!loadedWell.current)
        {
            video.current = videoRef?.current?.getInternalPlayer()
            if (video?.current?.readyState && video.current.readyState > 0 && !!document.createElement("video").canPlayType)
            {
                setVideoRef?.(video.current)
                loadedWell.current = true
                showControlsFunc()
                waitingEnd()
                videoCont.current.addEventListener("fullscreenchange", onFullChange)
                videoCont.current.addEventListener("webkitfullscreenchange", onFullChange)
            }
            else setTimeout(runScripts, 50)
        }
    }

    function initialize(videoDuration)
    {
        maxRef.current = videoDuration
        seekRef.current.setAttribute("max", videoDuration.toString())
        durationRef.current.innerText = formatTime(videoDuration)
    }

    function waiting()
    {
        setIsLoading(true)
    }

    function waitingEnd()
    {
        setIsLoading(false)
    }

    function updatePlayButton()
    {
        setIsPlaying(isPlaying => !isPlaying)
    }

    function updateProgress()
    {
        waitingEnd()
        const currentTime = Math.floor(videoRef.current.getCurrentTime())
        seekRef.current.value = currentTime
        seekSeenRef.current.style.width = currentTime / maxRef.current * 100 + "%"
        seekSliderRef.current.style.left = currentTime / maxRef.current * 100 + "%"
        timeElapse.current.innerText = formatTime(currentTime)
        seekLoadedRef.current.style.width = videoRef.current.getSecondsLoaded() / maxRef.current * 100 + "%"
    }

    function togglePlay(e)
    {
        if (e?.stopPropagation) e.stopPropagation()
        if (loadedWell.current)
        {
            if (video.current.paused || video.current.ended) video.current.play()
            else video.current.pause()
            showControlsFunc()
        }
    }

    function skipAheadClick(e)
    {
        if (e?.stopPropagation) e.stopPropagation()
    }

    function skipAhead(e)
    {
        if (loadedWell.current)
        {
            waiting()
            const skipTo = e.target.dataset.seek ? e.target.dataset.seek : e.target.value
            videoRef.current.seekTo(skipTo)
            seekRef.current.value = skipTo
            seekSeenRef.current.style.width = skipTo / maxRef.current * 100 + "%"
            seekSliderRef.current.style.left = skipTo / maxRef.current * 100 + "%"
            showControlsFunc()
        }
    }

    function toggleFullScreen()
    {
        if (loadedWell.current)
        {
            if (hideControlsRef.current) showControlsFunc()
            else
            {
                if (isFullScreenRef.current)
                {
                    if (document.exitFullscreen) document.exitFullscreen()
                    else if (document.webkitExitFullscreen) document.webkitExitFullscreen()
                    else if (document.msExitFullscreen) document.msExitFullscreen()
                }
                else goFullScreen({playerRef, videoCont})
            }
        }
    }

    function showControlsFunc()
    {
        setHideControls(false)
        hideControlsRef.current = false
        clearTimeout(hideTimer.current)
        hideTimer.current = setTimeout(() => hideControlsFunc(), 4000)
    }

    function hideControlsFunc()
    {
        if (!video.current.paused && !video.current.ended)
        {
            setHideControls(true)
            hideControlsRef.current = true
            clearTimeout(hideTimer.current)
        }
    }

    return (
        <div className={className} ref={playerRef}>
            <div className="video-container" ref={videoCont} onClick={togglePlay}>
                <MyLoader className={`playback-loading ${isLoading ? "" : "hide"}`} strokeWidth={2} width={40}/>
                <ReactPlayer onReady={runScripts}
                             url={url}
                             ref={videoRef}
                             playsinline
                             className="my-player-video"
                             controlsList="nodownload"
                             onPause={updatePlayButton}
                             onPlay={updatePlayButton}
                             volume={1}
                             width="100%"
                             height="100%"
                             onDuration={initialize}
                             onEnded={onEnded}
                             config={{
                                 file: {
                                     attributes: {
                                         poster,
                                         onWaiting: waiting,
                                         onCanPlayThrough: waitingEnd,
                                         onTimeUpdate: updateProgress,
                                     },
                                 },
                             }}
                />
                <div className={`video-controls ${hideControls ? "hide" : ""}`}>
                    <div className="video-progress">
                        <input className="seek" ref={seekRef} onInput={skipAhead} onClick={skipAheadClick} defaultValue="0" min="0" type="range" step="1"/>
                        <div className="seek-seen loaded" ref={seekLoadedRef}/>
                        <div className="seek-seen" ref={seekSeenRef}/>
                        <div className="seek-slider" ref={seekSliderRef}/>
                    </div>
                    <div className="player-time">
                        <div ref={timeElapse} className="time-item">{formatTime(0)}</div>
                        <div ref={durationRef} className="time-item">{formatTime(0)}</div>
                    </div>
                </div>
                {showInFullScreen && <div onClick={e => e.stopPropagation()}>{showInFullScreen}</div>}
            </div>
        </div>
    )
}

export default MyPlayer