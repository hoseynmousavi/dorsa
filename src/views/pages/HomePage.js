import mock from "../../constant/mock"
import VideoCart from "../components/VideoCart"
import {useState} from "react"
import Header from "../containers/Header"

function HomePage()
{
    const [isMute, setIsMute] = useState(true)
    const [isPlaying, setIsPlaying] = useState(null)

    return (
        <>
            <Header/>
            <div className="home">
                {
                    mock.videos.map(item =>
                        <VideoCart key={item.id} data={item} isMute={isMute} setIsMute={setIsMute} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>,
                    )
                }
            </div>
        </>
    )
}

export default HomePage