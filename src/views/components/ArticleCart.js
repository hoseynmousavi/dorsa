import ImageShow from "../../modules/components/ImageShow"
import ArticleSvg from "../../media/svg/ArticleSvg"
import ViewCount from "./ViewCount"
import LikeCount from "./LikeCount"
import getImageLink from "../../helpers/getImageLink"
import ActionLink from "./ActionLink"

function ArticleCart({data: {id, title, description, poster, date, like_count, is_user_liked, view_count, action_destination}})
{
    return (
        <ActionLink to={action_destination} className="article-cart">
            <div className="article-cart-poster">
                <ImageShow className="article-cart-poster-img" src={getImageLink(poster)}/>
                <ViewCount className="article-cart-poster-view" views_count={view_count}/>
            </div>
            <div className="article-cart-detail">
                <div className="article-cart-detail-title">
                    <ArticleSvg className="article-cart-detail-title-icon"/>
                    {title}
                </div>
                <div className="article-cart-detail-desc">
                    {description}
                </div>
                <div className="article-cart-detail-footer">
                    <div className="article-cart-detail-footer-date">{date}</div>
                    <LikeCount likes_count={like_count} is_liked={is_user_liked} id={id}/>
                </div>
            </div>
        </ActionLink>
    )
}

export default ArticleCart