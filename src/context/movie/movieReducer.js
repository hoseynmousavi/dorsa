import {createContext, useReducer} from "react"
import {BOOKMARK_ITEM, GET_MOVIE_ITEM} from "./movieTypes"

export const MovieContext = createContext(null)

const initialState = {
    list: {},
}

const init = () => initialState

function reducer(state, action)
{
    switch (action.type)
    {
        case GET_MOVIE_ITEM:
        {
            const {res} = action.payload
            return {
                ...state,
                list: {
                    ...state.list,
                    [res.id]: res,
                },
            }
        }
        case BOOKMARK_ITEM:
        {
            const {id, isBookmarked} = action.payload
            return {
                ...state,
                list: {
                    ...state.list,
                    [id]: {
                        ...state.list[id],
                        user_bookmarked: isBookmarked,
                    },
                },
            }
        }
        default:
        {
            throw new Error()
        }
    }
}

function MovieProvider({children})
{
    const [state, dispatch] = useReducer(reducer, initialState, init)
    return (
        <MovieContext.Provider value={{state, dispatch}}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieProvider