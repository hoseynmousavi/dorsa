import request from "../../modules/request/request"
import apiUrlsConstant from "../../constant/apiUrlsConstant"
import {GET_TIMELINE, LIKE_UNLIKE_TIMELINE} from "./timelineTypes"

function getTimeline({dispatch})
{
    return request.get({url: apiUrlsConstant.timeline})
        .then(res =>
        {
            dispatch({
                type: GET_TIMELINE,
                payload: {res},
            })
        })
}

function like({data: {id}, dispatch})
{
    return request.post({url: apiUrlsConstant.like(id)})
        .then(() =>
        {
            dispatch({
                type: LIKE_UNLIKE_TIMELINE,
                payload: {isLike: true, id},
            })
        })
}

function unLike({data: {id}, dispatch})
{
    return request.del({url: apiUrlsConstant.like(id)})
        .then(() =>
        {
            dispatch({
                type: LIKE_UNLIKE_TIMELINE,
                payload: {isLike: false, id},
            })
        })
}

const timelineActions = {
    getTimeline,
    like,
    unLike,
}

export default timelineActions