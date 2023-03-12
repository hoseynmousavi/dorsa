import Material from "../../modules/components/Material"
import ArrowSvg from "../../media/svg/ArrowSvg"
import GetTextConstant from "../../modules/hooks/GetTextConstant"
import MyPlayer from "../components/MyPlayer"
import StarSvg from "../../media/svg/StarSvg"
import ClockSvg from "../../media/svg/ClockSvg"
import LanguageSvg from "../../media/svg/LanguageSvg"
import VideoHorizontalSvg from "../../media/svg/VideoHorizontalSvg"
import AgeSvg from "../../media/svg/AgeSvg"
import Button from "../../modules/components/Button"
import ImageShow from "../../modules/components/ImageShow"
import RateStarSvg from "../../media/svg/RateStarSvg"
import Comment from "../components/Comment"
import goBack from "../../modules/helpers/goBack"
import {useContext, useEffect} from "react"
import movieActions from "../../context/movie/movieActions"
import {MovieContext} from "../../context/movie/movieReducer"
import LoadingWrapper from "../../modules/components/LoadingWrapper"
import getImageLink from "../../helpers/getImageLink"
import MinuteToTime from "../../hooks/MinuteToTime"
import mock from "../../constant/mock"
import MovieList from "../containers/MovieList"
import MovieBookmark from "../components/MovieBookmark"

function MovieProfilePage({route: {match: {params: {id}}}})
{
    const {state: {list}, dispatch} = useContext(MovieContext)
    const data = list[id]
    const {characters, post, comments, user_bookmarked, thumbnail_image, title, description, streaming_link, duration_minutes, rate, min_age, gallery, countries, companies, main_languages} = data || {}
    const isLoading = !data
    const {textConstant} = GetTextConstant()
    const time = MinuteToTime({timeMinutes: duration_minutes, withLetter: true})

    useEffect(() =>
    {
        movieActions.getMovieItem({data: {id}, dispatch})
        // eslint-disable-next-line
    }, [])

    if (isLoading) return <LoadingWrapper haveBg/>
    else return (
        <div className="movie-profile">
            <div className="movie-profile-header">
                <div>
                    <Material className="movie-profile-header-back" onClick={goBack}>
                        <ArrowSvg className="movie-profile-header-back-icon"/>
                        <div>{textConstant.back}</div>
                    </Material>
                </div>
                <MyPlayer className="movie-profile-player" poster={getImageLink(thumbnail_image)} url={streaming_link} playFullScreen title={title}/>
                <div className="movie-profile-detail">
                    <div className="movie-profile-detail-title">{title}</div>
                    <div className="movie-profile-detail-rate">
                        {rate}
                        <StarSvg className="movie-profile-detail-rate-icon"/>
                    </div>
                </div>
                <div className="movie-profile-desc">
                    {description}
                </div>
                <div className="movie-profile-content">
                    <div className="movie-profile-content-item">
                        <ClockSvg className="movie-profile-content-item-icon"/>
                        <div className="movie-profile-content-item-title">{time}</div>
                    </div>
                    <div className="movie-profile-content-item">
                        <LanguageSvg className="movie-profile-content-item-icon"/>
                        <div className="movie-profile-content-item-title">{main_languages.map(item => item.title).join("، ")}</div>
                    </div>
                    <div className="movie-profile-content-item">
                        <VideoHorizontalSvg className="movie-profile-content-item-icon"/>
                        <div className="movie-profile-content-item-title">{textConstant.productCountries}{countries.map(item => item.name).join("، ")}</div>
                    </div>
                    <div className="movie-profile-content-item">
                        <VideoHorizontalSvg className="movie-profile-content-item-icon"/>
                        <div className="movie-profile-content-item-title">{textConstant.productCountries}{companies.map(item => item.name).join("، ")}</div>
                    </div>
                    <div className="movie-profile-content-item">
                        <AgeSvg className="movie-profile-content-item-icon age"/>
                        <div className="movie-profile-content-item-title">{textConstant.productAge(min_age)}</div>
                    </div>
                </div>
            </div>
            <MovieBookmark id={id} postId={post.id} user_bookmarked={user_bookmarked}/>
            {
                gallery?.length > 0 &&
                <div className="movie-profile-album">
                    <div className="movie-profile-album-title">{textConstant.album}</div>
                    <div className="movie-profile-album-list hide-scroll">
                        {
                            gallery.map(({image}, index) =>
                                <ImageShow key={index} src={getImageLink(image)} className="movie-profile-album-list-item" zoomable/>,
                            )
                        }
                    </div>
                </div>
            }
            {
                characters?.length > 0 &&
                <div className="movie-profile-album">
                    <div className="movie-profile-album-title">{textConstant.characters}</div>
                    <div className="movie-profile-album-list hide-scroll">
                        {
                            characters.map((item, index) =>
                                <ImageShow key={index} src={getImageLink(item.character.avatar)} className="movie-profile-album-list-item-character" zoomable/>,
                            )
                        }
                    </div>
                </div>
            }
            <div className="movie-profile-movies">
                <MovieList data={mock.also}/>
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
                {
                    comments?.length > 0 ?
                        comments.map(data =>
                            <Comment key={data.id} data={data}/>,
                        )
                        :
                        <div className="movie-profile-comments-404">{textConstant.noComments}</div>
                }
            </div>
        </div>
    )
}

export default MovieProfilePage