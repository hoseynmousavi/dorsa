import Material from "../../seyed-modules/components/Material"
import ArrowSvg from "../../media/svg/ArrowSvg"
import GetTextConstant from "../../seyed-modules/hooks/GetTextConstant"
import MyPlayer from "../components/MyPlayer"
import mock from "../../constant/mock"
import StarSvg from "../../media/svg/StarSvg"
import ClockSvg from "../../media/svg/ClockSvg"
import LanguageSvg from "../../media/svg/LanguageSvg"
import VideoHorizontalSvg from "../../media/svg/VideoHorizontalSvg"
import AgeSvg from "../../media/svg/AgeSvg"
import Button from "../../seyed-modules/components/Button"
import BookmarkSvg from "../../media/svg/BookmarkSvg"
import ImageShow from "../../seyed-modules/components/ImageShow"
import MovieList from "../containers/MovieList"
import RateStarSvg from "../../media/svg/RateStarSvg"
import Comment from "../components/Comment"
import avatar from "../../media/images/avatar.svg"
import goBack from "../../seyed-modules/helpers/goBack"

function MovieProfilePage()
{
    const {textConstant} = GetTextConstant()
    const {profile: {poster, src, title, rate, desc, time, sound, age, company, product, gallery, also}} = mock
    return (
        <div className="movie-profile">
            <div className="movie-profile-header">
                <div>
                    <Material className="movie-profile-header-back" onClick={goBack}>
                        <ArrowSvg className="movie-profile-header-back-icon"/>
                        <div>{textConstant.back}</div>
                    </Material>
                </div>
                <MyPlayer className="movie-profile-player" poster={poster} url={src} playFullScreen title={title}/>
                <div className="movie-profile-detail">
                    <div className="movie-profile-detail-title">{title}</div>
                    <div className="movie-profile-detail-rate">
                        {rate}
                        <StarSvg className="movie-profile-detail-rate-icon"/>
                    </div>
                </div>
                <div className="movie-profile-desc">
                    {desc}
                </div>
                <div className="movie-profile-content">
                    <div className="movie-profile-content-item">
                        <ClockSvg className="movie-profile-content-item-icon"/>
                        <div className="movie-profile-content-item-title">{time}</div>
                    </div>
                    <div className="movie-profile-content-item">
                        <LanguageSvg className="movie-profile-content-item-icon"/>
                        <div className="movie-profile-content-item-title">{sound}</div>
                    </div>
                    <div className="movie-profile-content-item">
                        <VideoHorizontalSvg className="movie-profile-content-item-icon"/>
                        <div className="movie-profile-content-item-title">{product}</div>
                    </div>
                    <div className="movie-profile-content-item">
                        <VideoHorizontalSvg className="movie-profile-content-item-icon"/>
                        <div className="movie-profile-content-item-title">{company}</div>
                    </div>
                    <div className="movie-profile-content-item">
                        <AgeSvg className="movie-profile-content-item-icon age"/>
                        <div className="movie-profile-content-item-title">{age}</div>
                    </div>
                </div>
            </div>
            <Button className="movie-profile-bookmark">
                <BookmarkSvg className="movie-profile-bookmark-icon"/>
                {textConstant.watchLater}
            </Button>
            <div className="movie-profile-album">
                <div className="movie-profile-album-title">{textConstant.album}</div>
                <div className="movie-profile-album-list hide-scroll">
                    {
                        gallery.map((item, index) =>
                            <ImageShow key={index} src={item} className="movie-profile-album-list-item" zoomable/>,
                        )
                    }
                </div>
            </div>
            <div className="movie-profile-movies">
                <MovieList data={also}/>
            </div>
            <div className="movie-profile-rate">
                <div className="movie-profile-rate-title">{textConstant.rateThis}</div>
                <div className="movie-profile-rate-detail">
                    <RateStarSvg className="movie-profile-rate-detail-item"/>
                    <RateStarSvg className="movie-profile-rate-detail-item"/>
                    <RateStarSvg className="movie-profile-rate-detail-item"/>
                    <RateStarSvg className="movie-profile-rate-detail-item"/>
                    <RateStarSvg className="movie-profile-rate-detail-item"/>
                </div>
            </div>
            <div className="movie-profile-comments">
                <div className="movie-profile-comments-title">{textConstant.userComments}</div>
                <textarea className="movie-profile-comments-area" placeholder={textConstant.commentHolder}/>
                <Button className="movie-profile-comments-btn">
                    {textConstant.submitComment}
                </Button>
                <Comment name="فرمان فتحعلیان"
                         avatar={avatar}
                         date="۳ روز پیش"
                         rate={4}
                         desc="خیلی عالی بود، قسمت گیتارش رو دوست داشتم، لورم ایپسوم دولور سیت آمت متن نمونه برای تصاویر گرافیکی کامنت درباره فیلم، ‌لورم ایپسوم دولور سیت آمت متن نمونه برای تصاویر گرافیکی کامنت درباره فیلم"
                />
                <Comment name="فرمان فتحعلیان"
                         avatar={avatar}
                         date="۳ روز پیش"
                         rate={4}
                         desc="خیلی عالی بود، قسمت گیتارش رو دوست داشتم، لورم ایپسوم دولور سیت آمت متن نمونه برای تصاویر گرافیکی کامنت درباره فیلم، ‌لورم ایپسوم دولور سیت آمت متن نمونه برای تصاویر گرافیکی کامنت درباره فیلم"
                />
                <Comment name="فرمان فتحعلیان"
                         avatar={avatar}
                         date="۳ روز پیش"
                         rate={4}
                         desc="خیلی عالی بود، قسمت گیتارش رو دوست داشتم، لورم ایپسوم دولور سیت آمت متن نمونه برای تصاویر گرافیکی کامنت درباره فیلم، ‌لورم ایپسوم دولور سیت آمت متن نمونه برای تصاویر گرافیکی کامنت درباره فیلم"
                />
                <Comment name="فرمان فتحعلیان"
                         avatar={avatar}
                         date="۳ روز پیش"
                         rate={4}
                         desc="خیلی عالی بود، قسمت گیتارش رو دوست داشتم، لورم ایپسوم دولور سیت آمت متن نمونه برای تصاویر گرافیکی کامنت درباره فیلم، ‌لورم ایپسوم دولور سیت آمت متن نمونه برای تصاویر گرافیکی کامنت درباره فیلم"
                />
                <Comment name="فرمان فتحعلیان"
                         avatar={avatar}
                         date="۳ روز پیش"
                         rate={4}
                         desc="خیلی عالی بود، قسمت گیتارش رو دوست داشتم، لورم ایپسوم دولور سیت آمت متن نمونه برای تصاویر گرافیکی کامنت درباره فیلم، ‌لورم ایپسوم دولور سیت آمت متن نمونه برای تصاویر گرافیکی کامنت درباره فیلم"
                />
            </div>
        </div>
    )
}

export default MovieProfilePage