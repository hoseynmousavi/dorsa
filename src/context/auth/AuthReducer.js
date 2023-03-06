import {createContext, useEffect, useReducer} from "react"
import {LOGOUT, SET_USER} from "./AuthTypes"
import AuthActions from "./AuthActions"
import logoutManager from "../../seyed-modules/helpers/logoutManager"
import cookieHelper from "../../seyed-modules/helpers/cookieHelper"

export const AuthContext = createContext(null)

const initialState = null

const init = () => initialState

function reducer(state, action)
{
    switch (action.type)
    {
        case SET_USER:
        {
            const {user} = action.payload
            return {
                ...state,
                ...user,
            }
        }
        case LOGOUT:
        {
            cookieHelper.removeItem("token")
            cookieHelper.removeItem("refreshToken")
            localStorage.clear()
            return init()
        }
        default:
        {
            throw new Error()
        }
    }
}

function AuthProvider({children})
{
    const [state, dispatch] = useReducer(reducer, initialState, init)

    useEffect(() =>
    {
        const token = cookieHelper.getItem("token")
        const refreshToken = cookieHelper.getItem("refreshToken")
        const user = localStorage.getItem("user")
        if (token && refreshToken && user)
        {
            try
            {
                AuthActions.setUser({user: JSON.parse(user), dispatch})
            }
            catch (e)
            {
                console.log("err parsing user:", e.message)
            }

            AuthActions.getUser({dispatch})
        }

        logoutManager.setLogOut({callBack: () => dispatch({type: LOGOUT})})
    }, [])

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider