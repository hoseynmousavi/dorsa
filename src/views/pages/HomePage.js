import {useContext, useEffect, useState} from "react"
import Header from "../containers/Header"
import FlexComponent from "../components/FlexComponent"
import timelineActions from "../../context/timeline/timelineActions"
import MyLoader from "../../seyed-modules/components/MyLoader"
import {TimelineContext} from "../../context/timeline/timelineReducer"

function HomePage()
{
    const {state: {list, getDone}, dispatch} = useContext(TimelineContext)
    const [isMute, setIsMute] = useState(true)
    const [isPlaying, setIsPlaying] = useState(null)

    useEffect(() =>
    {
        timelineActions.getTimeline({dispatch})
    }, [])

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