import MyPlayer from "./MyPlayer"
import VideoIconSvg from "../../media/svg/VideoIconSvg"
import ViewCount from "./ViewCount"
import LikeCount from "./LikeCount"
import getImageLink from "../../helpers/getImageLink"
import ActionLink from "./ActionLink"

function VideoCart({data: {id, title, poster, like_count, is_user_liked, view_count, stream_link, action_destination}, isMute, setIsMute, isPlaying, setIsPlaying})
{
    return (
        <div className="video-cart">
            <MyPlayer id={id} className="video-cart-player" poster={getImageLink(poster)} url={stream_link} isMute={isMute} setIsMute={setIsMute} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
            <ViewCount className="video-cart-view" views_count={view_count}/>
            <div className="video-cart-content">
                <VideoIconSvg className="video-cart-content-icon"/>
                <ActionLink to={id ==="7fd99734-da7e-49d1-9455-e810cc65dcd2" ? "/movie/profile/855bb081-83bc-4986-a84f-98ea7ed78d9f" :action_destination} className="video-cart-content-title">
                    {title}
                </ActionLink>
                <LikeCount is_liked={is_user_liked} likes_count={like_count} id={id}/>
            </div>
        </div>
    )
}

export default VideoCart