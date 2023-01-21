import mock from "../../constant/mock"
import {useState} from "react"
import Header from "../containers/Header"
import FlexComponent from "../components/FlexComponent"

function HomePage()
{
    const [isMute, setIsMute] = useState(true)
    const [isPlaying, setIsPlaying] = useState(null)

    return (
        <>
            <Header/>
            <div className="home">
                {
                    mock.contents.map(data =>
                        <FlexComponent key={data.id} data={data} isMute={isMute} setIsMute={setIsMute} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>,
                    )
                }
            </div>
        </>
    )
}

export default HomePage