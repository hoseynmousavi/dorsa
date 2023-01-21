import ImageShow from "../../seyed-modules/components/ImageShow"
import ArticleSvg from "../../media/svg/ArticleSvg"
import Material from "../../seyed-modules/components/Material"
import createMaterialColor from "../../seyed-modules/helpers/createMaterialColor"
import showNumber from "../../helpers/showNumber"
import LikeSvg from "../../media/svg/LikeSvg"
import EyeSvg from "../../media/svg/EyeSvg"

function ArticleCart({data: {title, desc, poster, date, likes_count, is_liked, views_count}})
{
    return (
        <div className="article-cart">
            <ImageShow className="article-cart-poster" src={poster}/>
            <div className="article-cart-view">
                {showNumber(views_count)}
                <EyeSvg className="video-cart-view-icon"/>
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
                    <div className={`video-cart-content-like ${is_liked ? "liked" : ""}`}>
                        <Material className="video-cart-content-like-material" backgroundColor={!is_liked && createMaterialColor({variable: "--danger-color"})}>
                            {showNumber(likes_count)}
                            <LikeSvg className="video-cart-content-like-icon"/>
                        </Material>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleCart