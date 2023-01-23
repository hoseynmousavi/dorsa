import Material from "../../seyed-modules/components/Material"
import createMaterialColor from "../../seyed-modules/helpers/createMaterialColor"
import showNumber from "../../helpers/showNumber"
import LikeSvg from "../../media/svg/LikeSvg"

function LikeCount({likes_count, is_liked})
{
    return (
        <Material className={`like-count ${is_liked ? "liked" : ""}`} backgroundColor={!is_liked && createMaterialColor({variable: "--danger-color"})}>
            {showNumber(likes_count)}
            <LikeSvg className="like-count-icon"/>
        </Material>
    )
}

export default LikeCount