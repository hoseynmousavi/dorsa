import ImageShow from "../../seyed-modules/components/ImageShow"
import ArticleSvg from "../../media/svg/ArticleSvg"
import ViewCount from "./ViewCount"
import LikeCount from "./LikeCount"

function ArticleCart({data: {title, desc, poster, date, likes_count, is_liked, views_count}})
{
    return (
        <div className="article-cart">
            <div className="article-cart-poster">
                <ImageShow className="article-cart-poster-img" src={poster}/>
                <ViewCount className="article-cart-poster-view" views_count={views_count}/>
            </div>
            <div className="article-cart-detail">
                <div className="article-cart-detail-title">
                    <ArticleSvg className="article-cart-detail-title-icon"/>
                    {title}
                </div>
                <div className="article-cart-detail-desc">
                    {desc}
                </div>
                <div className="article-cart-detail-footer">
                    <div className="article-cart-detail-footer-date">{date}</div>
                    <LikeCount likes_count={likes_count} is_liked={is_liked}/>
                </div>
            </div>
        </div>
    )
}

export default ArticleCart