import BookmarkSvg from "../../media/svg/BookmarkSvg"
import Button from "../../seyed-modules/components/Button"
import movieActions from "../../context/movie/movieActions"
import {useContext, useState} from "react"
import {MovieContext} from "../../context/movie/movieReducer"
import GetTextConstant from "../../seyed-modules/hooks/GetTextConstant"
import BookmarkedSvg from "../../media/svg/BookmarkedSvg"
import toastManager from "../../seyed-modules/helpers/toastManager"
import {SUCCESS_TOAST} from "../../seyed-modules/constant/toastTypes"

function MovieBookmark({user_bookmarked, id, postId})
{
    const {dispatch} = useContext(MovieContext)
    const {textConstant} = GetTextConstant()
    const Icon = user_bookmarked ? BookmarkedSvg : BookmarkSvg
    const [isLoading, setIsLoading] = useState(false)

    function onBookmark()
    {
        setIsLoading(true)
        if (!user_bookmarked)
        {
            movieActions.bookmarkItem({data: {postId, id}, dispatch})
                .then(() =>
                {
                    toastManager.addToast({message: "با موفقیت اضافه شد", type: SUCCESS_TOAST})
                    setIsLoading(false)
                })
                .catch(() =>
                {
                    setIsLoading(false)
                })
        }
        else
        {
            movieActions.unBookmarkItem({data: {postId, id}, dispatch})
                .then(() =>
                {
                    toastManager.addToast({message: "با موفقیت حذف شد", type: SUCCESS_TOAST})
                    setIsLoading(false)
                })
                .catch(() =>
                {
                    setIsLoading(false)
                })
        }
    }

    return (
        <Button className="movie-profile-bookmark" loading={isLoading} onClick={onBookmark}>
            <Icon className="movie-profile-bookmark-icon"/>
            {textConstant.watchLater}
        </Button>
    )
}

export default MovieBookmark