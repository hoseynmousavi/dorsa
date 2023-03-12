import Material from "../../modules/components/Material"
import createMaterialColor from "../../modules/helpers/createMaterialColor"
import showNumber from "../../helpers/showNumber"
import LikeSvg from "../../media/svg/LikeSvg"
import timelineActions from "../../context/timeline/timelineActions"
import {useContext} from "react"
import {TimelineContext} from "../../context/timeline/timelineReducer"

function LikeCount({id, likes_count, is_liked})
{
    const {dispatch} = useContext(TimelineContext)

    function onLikeClick()
    {
        if (is_liked)
        {
            timelineActions.unLike({data: {id}, dispatch})
        }
        else
        {
            timelineActions.like({data: {id}, dispatch})
        }
    }

    return (
        <Material className={`like-count ${is_liked ? "liked" : ""}`} backgroundColor={!is_liked && createMaterialColor({variable: "--danger-color"})} onClick={onLikeClick}>
            {showNumber(likes_count)}
            <LikeSvg className="like-count-icon"/>
        </Material>
    )
}

export default LikeCount