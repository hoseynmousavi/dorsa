import showNumber from "../../helpers/showNumber"
import EyeSvg from "../../media/svg/EyeSvg"

function ViewCount({className, views_count})
{
    return (
        <div className={`view-count ${className}`}>
            {showNumber(views_count)}
            <EyeSvg className="view-count-icon"/>
        </div>
    )
}

export default ViewCount