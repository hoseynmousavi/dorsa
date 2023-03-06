import ReactPlayer from "react-player"
import {useRef, useState} from "react"
import MyLoader from "../../seyed-modules/components/MyLoader"
import PlaySvg from "../../media/svg/PlaySvg"
import Material from "../../seyed-modules/components/Material"
import PauseSvg from "../../media/svg/PauseSvg"
import VolumeMuteSvg from "../../media/svg/VolumeMuteSvg"
import VolumeHighSvg from "../../media/svg/VolumeHighSvg"
import goOutOfFullScreen from "../../helpers/goOutOfFullScreen"
import goFullScreen from "../../helpers/goFullScreen"
import FullScreenSvg from "../../media/svg/FullScreenSvg"
import LockSvg from "../../media/svg/LockSvg"

function MyPlayer({
                      id = "local", url, poster, className, setVideoRef,
                      playFullScreen, showInFullScreen, isMute: isMuteExternal, setIsMute: setIsMuteExternal,
                      isPlaying: isPlayingExternal, setIsPlaying: setIsPlayingExternal,
                      title,
                  })
{
    const [isMuteLocal, setIsMuteLocal] = useState(!playFullScreen)
    const [isPlayingLocal, setIsPlayingLocal] = useState(null)

    const isMute = isMuteExternal !== undefined ? isMuteExternal : isMuteLocal
    const setIsMute = setIsMuteExternal !== undefined ? setIsMuteExternal : setIsMuteLocal

    const isPlaying = isPlayingExternal !== undefined ? isPlayingExternal === id : isPlayingLocal === id
    const setIsPlaying = setIsMuteExternal !== undefined ? setIsPlayingExternal : setIsPlayingLocal

    // const [hideControls, setHideControls] = useState(true)
    // const hideTimer = useRef(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isFullScreen, setIsFullScreen] = useState(false)
    const isFullScreenRef = useRef(false)
    const loadedWell = useRef(false)
    const video = useRef(null)
    const videoRef = useRef(null)
    const videoCont = useRef(null)
    const playerRef = useRef(null)
    // const timeElapse = useRef(null)
    // const durationRef = useRef(null)
    const seekRef = useRef(null)
    const seekLoadedRef = useRef(null)
    const seekSeenRef = useRef(null)
    const seekSliderRef = useRef(null)
    const maxRef = useRef(null)

    function onFullChange()
    {
        isFullScreenRef.current = !isFullScreenRef.current
        setIsFullScreen(isFullScreen => !isFullScreen)

        if (!isFullScreenRef.current)
        {
            goOutOfFullScreen({playerRef, videoCont})
        }
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
        // durationRef.current.innerText = formatTime(videoDuration)
    }

    function waiting()
    {
        setIsLoading(true)
    }

    function waitingEnd()
    {
        setIsLoading(false)
    }

    function updateProgress()
    {
        waitingEnd()
        const currentTime = videoRef.current.getCurrentTime()
        seekRef.current.value = currentTime
        seekSeenRef.current.style.width = currentTime / maxRef.current * 100 + "%"
        seekSliderRef.current.style.left = currentTime / maxRef.current * 100 + "%"
        // timeElapse.current.innerText = formatTime(currentTime)
        seekLoadedRef.current.style.width = videoRef.current.getSecondsLoaded() / maxRef.current * 100 + "%"
    }

    function toggleSound(e)
    {
        if (e?.stopPropagation) e.stopPropagation()
        setIsMute(isMute => !isMute)
    }

    function onEnded()
    {
        setIsPlaying(null)
    }

    function togglePlay(e)
    {
        if (e?.stopPropagation) e.stopPropagation()
        if (loadedWell.current)
        {
            if (video.current.paused || video.current.ended)
            {
                if (playFullScreen && !isFullScreen) goFull()
                setIsPlaying(id)
                // showControlsFunc()
            }
            else
            {
                setIsPlaying(null)
                // hideControlsFunc()
            }
        }
    }

    function ignoreClick(e)
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
        }
    }

    function goFull()
    {
        goFullScreen({playerRef, videoCont})
    }

    function exitFull(e)
    {
        e.stopPropagation()
        if (document.exitFullscreen) document.exitFullscreen()
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen()
        else if (document.msExitFullscreen) document.msExitFullscreen()
    }

    // function showControlsFunc()
    // {
    //     setHideControls(false)
    //     // clearTimeout(hideTimer.current)
    //     // hideTimer.current = setTimeout(hideControlsFunc, 4000)
    // }

    // function hideControlsFunc()
    // {
    //     // if (!video.current.paused && !video.current.ended)
    //     // {
    //     setHideControls(true)
    //     clearTimeout(hideTimer.current)
    //     // }
    // }

    return (
        <div className={`player ${className}`} ref={playerRef}>
            <div className="video-container" ref={videoCont} onClick={togglePlay}>
                {
                    isLoading ?
                        <MyLoader className="playback-loading" strokeWidth={2} width={32}/>
                        :
                        <Material className={`playback-play ${isPlaying ? "hide" : ""}`}>
                            {
                                isPlaying ?
                                    <PauseSvg className="playback-play-icon"/>
                                    :
                                    <PlaySvg className="playback-play-icon"/>
                            }
                        </Material>
                }

                <ReactPlayer onReady={runScripts}
                             playing={isPlaying}
                             muted={isMute}
                             url={url}
                             ref={videoRef}
                             playsinline
                             className="my-player-video"
                             controlsList="nodownload"
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

                {
                    isFullScreen &&
                    <div className="video-header">
                        <div className="video-header-second">
                            <Material className="video-header-second-btn">
                                <LockSvg className="video-header-second-btn-icon"/>
                            </Material>
                            <Material className="video-header-second-btn" onClick={exitFull}>
                                <FullScreenSvg className="video-header-second-btn-icon"/>
                            </Material>
                        </div>
                        <div className="video-header-title">{title}</div>
                    </div>
                }

                {
                    !playFullScreen &&
                    <Material className={`video-volume-material ${!isPlaying ? "hide" : ""}`} onClick={toggleSound}>
                        <div className="video-volume">
                            {
                                isMute ?
                                    <VolumeMuteSvg className="video-volume-icon"/>
                                    :
                                    <VolumeHighSvg className="video-volume-icon"/>
                            }
                        </div>
                    </Material>
                }

                <div className={`video-controls ${!isPlaying ? "hide" : ""}`}>
                    <div className="video-progress">
                        <input className="seek" ref={seekRef} onInput={skipAhead} onClick={ignoreClick} defaultValue="0" min="0" type="range" step="1"/>
                        <div className="seek-seen loaded" ref={seekLoadedRef}/>
                        <div className="seek-seen" ref={seekSeenRef}/>
                        <div className="seek-slider" ref={seekSliderRef}/>
                    </div>
                    {/*<div className="player-time">*/}
                    {/*    <div ref={timeElapse}>{formatTime(0)}</div>*/}
                    {/*    <div ref={durationRef}>{formatTime(0)}</div>*/}
                    {/*</div>*/}
                </div>
                {showInFullScreen && <div onClick={ignoreClick}>{showInFullScreen}</div>}
            </div>
        </div>
    )
}

export default MyPlayer