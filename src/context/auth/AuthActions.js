import {SET_USER} from "./AuthTypes"
import request from "../../seyed-modules/request/request"
import apiUrlsConstant from "../../constant/apiUrlsConstant"
import cookieHelper from "../../seyed-modules/helpers/cookieHelper"

const base = process.env.REACT_APP_REST_URL

function sendOtp({data: {phone_number}, cancel})
{
    return request.post({base, url: apiUrlsConstant.login, data: {phone_number}, cancel})
}

function loginOrSignup({data: {phone_number, code}, dispatch})
{
    return request.post({base, url: apiUrlsConstant.login, data: {phone_number, code}})
        .then(({user, access_token, refresh_token, created}) =>
        {
            cookieHelper.setItem("token", access_token)
            cookieHelper.setItem("refreshToken", refresh_token)
            localStorage.setItem("user", JSON.stringify(user))
            setUser({user, dispatch})
        })
}

function getUser({dispatch})
{
    return request.get({base, url: apiUrlsConstant.profile, dontCache: true, dontToast: true})
        .then(user =>
        {
            setUser({user, dispatch})
        })
}

function getTokenWithRefreshToken()
{
    return request.get({base, url: apiUrlsConstant.refreshToken, dontCache: true, dontToast: true, useRefreshToken: true})
        .then(res =>
        {
            const {refreshToken, token} = res
            cookieHelper.setItem("token", token)
            cookieHelper.setItem("refreshToken", refreshToken)
            return true
        })
        .catch(() =>
        {
            return false
        })
}

function checkEmail({email, cancel})
{
    return request.get({base, url: apiUrlsConstant.checkEmail, param: `?email=${email}`, cancel})
}

function setUser({user, dispatch})
{
    dispatch({
        type: SET_USER,
        payload: {user},
    })
}

function logout()
{
    return request.post({base, url: apiUrlsConstant.logout, useRefreshToken: true})
}

const AuthActions = {
    sendOtp,
    loginOrSignup,
    getUser,
    checkEmail,
    setUser,
    getTokenWithRefreshToken,
    logout,
}

export default AuthActions