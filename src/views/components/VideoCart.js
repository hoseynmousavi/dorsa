import MyPlayer from "./MyPlayer"
import VideoIconSvg from "../../media/svg/VideoIconSvg"
import ViewCount from "./ViewCount"
import LikeCount from "./LikeCount"

function VideoCart({data: {id, title, poster, likes_count, is_liked, views_count, src}, isMute, setIsMute, isPlaying, setIsPlaying})
{
    return (
        <div className="video-cart">
            <MyPlayer id={id} className="video-cart-player" poster={poster} url={src} isMute={isMute} setIsMute={setIsMute} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
            <ViewCount className="video-cart-view" views_count={views_count}/>
            <div className="video-cart-content">
                <VideoIconSvg className="video-cart-content-icon"/>
                <div className="video-cart-content-title">
                    {title}
                </div>
                <LikeCount is_liked={is_liked} likes_count={likes_count}/>
            </div>
        </div>
    )
}

export default VideoCart