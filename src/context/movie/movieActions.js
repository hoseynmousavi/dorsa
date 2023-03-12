import request from "../../modules/request/request"
import apiUrlsConstant from "../../constant/apiUrlsConstant"
import {BOOKMARK_ITEM, GET_MOVIE_ITEM} from "./movieTypes"

function getMovieItem({data: {id}, dispatch})
{
    return request.get({url: apiUrlsConstant.movie(id)})
        .then(res =>
        {
            dispatch({
                type: GET_MOVIE_ITEM,
                payload: {res},
            })
        })
}

function bookmarkItem({data: {postId, id}, dispatch})
{
    return request.post({url: apiUrlsConstant.bookmark(postId)})
        .then(() =>
        {
            dispatch({
                type: BOOKMARK_ITEM,
                payload: {id, isBookmarked: true},
            })
        })
}

function unBookmarkItem({data: {postId, id}, dispatch})
{
    return request.del({url: apiUrlsConstant.bookmark(postId)})
        .then(() =>
        {
            dispatch({
                type: BOOKMARK_ITEM,
                payload: {id, isBookmarked: false},
            })
        })
}

const movieActions = {
    getMovieItem,
    bookmarkItem,
    unBookmarkItem,
}

export default movieActions