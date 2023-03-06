import {createContext, useReducer} from "react"
import {GET_TIMELINE, LIKE_UNLIKE_TIMELINE} from "./timelineTypes"

export const TimelineContext = createContext(null)

const initialState = {
    list: [],
    getDone: false,
}

const init = () => initialState

function reducer(state, action)
{
    switch (action.type)
    {
        case GET_TIMELINE:
        {
            const {res: {results}} = action.payload
            return {
                ...state,
                list: results,
                getDone: true,
            }
        }
        case LIKE_UNLIKE_TIMELINE:
        {
            const {isLike, id} = action.payload
            const list = state.list
            const item = list.find(item => item.id === id)
            item.is_user_liked = isLike
            item.like_count = item.like_count + (isLike ? 1 : -1)
            return {
                ...state,
                list,
            }
        }
        default:
        {
            throw new Error()
        }
    }
}

function TimelineProvider({children})
{
    const [state, dispatch] = useReducer(reducer, initialState, init)
    return (
        <TimelineContext.Provider value={{state, dispatch}}>
            {children}
        </TimelineContext.Provider>
    )
}

export default TimelineProvider