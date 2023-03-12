import ImageShow from "../../modules/components/ImageShow"
import RateStarSvg from "../../media/svg/RateStarSvg"
import RateStarActiveSvg from "../../media/svg/RateStarActiveSvg"

function Comment({name, desc, date, avatar})
{
    return (
        <div className="comment">
            <div className="comment-header">
                <div className="comment-header-first">
                    <ImageShow src={avatar} className="comment-header-first-img"/>
                    <div>
                        <div className="comment-header-first-name">{name}</div>
                        <div className="comment-header-first-date">{date}</div>
                    </div>
                </div>
                <div className="comment-header-second">
                    <RateStarSvg className="comment-header-second-icon"/>
                    <RateStarActiveSvg className="comment-header-second-icon"/>
                    <RateStarActiveSvg className="comment-header-second-icon"/>
                    <RateStarActiveSvg className="comment-header-second-icon"/>
                    <RateStarActiveSvg className="comment-header-second-icon"/>
                </div>
            </div>
            <div className="comment-desc">
                {desc}
            </div>
        </div>
    )
}

export default Comment