import {useContext, useEffect, useState} from "react"
import Header from "../containers/Header"
import FlexComponent from "../components/FlexComponent"
import timelineActions from "../../context/timeline/timelineActions"
import MyLoader from "../../modules/components/MyLoader"
import {TimelineContext} from "../../context/timeline/timelineReducer"

function HomePage({route: {isRendering}})
{
    const {state: {list, getDone}, dispatch} = useContext(TimelineContext)
    const [isMute, setIsMute] = useState(true)
    const [isPlaying, setIsPlaying] = useState(null)

    useEffect(() =>
    {
        timelineActions.getTimeline({dispatch})
        // eslint-disable-next-line
    }, [])

    useEffect(() =>
    {
        if (isRendering)
        {
            return () => setIsPlaying(null)
        }
    }, [isRendering])

    return (
        <>
            <Header/>
            <div className="timeline">
                {
                    !getDone ?
                        <div className="timeline-loading">
                            <MyLoader width={32}/>
                        </div>
                        :
                        list.map(data =>
                            <FlexComponent key={data.id} data={data} isMute={isMute} setIsMute={setIsMute} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>,
                        )
                }
            </div>
        </>
    )
}

export default HomePage