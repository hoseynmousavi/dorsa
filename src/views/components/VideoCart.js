import MyPlayer from "./MyPlayer"
import EyeSvg from "../../media/svg/EyeSvg"
import VideoIconSvg from "../../media/svg/VideoIconSvg"
import LikeSvg from "../../media/svg/LikeSvg"
import Material from "../../seyed-modules/components/Material"
import createMaterialColor from "../../seyed-modules/helpers/createMaterialColor"
import showNumber from "../../helpers/showNumber"

function VideoCart({data: {id, title, poster, likes_count, is_liked, views_count, src}, isMute, setIsMute, isPlaying, setIsPlaying})
{
    return (
        <div className="video-cart">
            <MyPlayer id={id} className="video-cart-player" poster={poster} url={src} isMute={isMute} setIsMute={setIsMute} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
            <div className="video-cart-view">
                {showNumber(views_count)}
                <EyeSvg className="video-cart-view-icon"/>
            </div>
            <div className="video-cart-content">
                <VideoIconSvg className="video-cart-content-icon"/>
                <div className="video-cart-content-title">
                    {title}
                </div>
                <div className={`video-cart-content-like ${is_liked ? "liked" : ""}`}>
                    <Material className="video-cart-content-like-material" backgroundColor={!is_liked && createMaterialColor({variable: "--danger-color"})}>
                        {showNumber(likes_count)}
                        <LikeSvg className="video-cart-content-like-icon"/>
                    </Material>
                </div>
            </div>
        </div>
    )
}

export default VideoCart