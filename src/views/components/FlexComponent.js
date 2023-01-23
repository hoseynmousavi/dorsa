import VideoCart from "./VideoCart"
import MovieList from "../containers/MovieList"
import GamesList from "../containers/GamesList"
import ArticleCart from "./ArticleCart"

function FlexComponent({data, isMute, setIsMute, isPlaying, setIsPlaying})
{
    const {type} = data || {}
    let Component

    if (type === "video") Component = VideoCart
    else if (type === "movies") Component = MovieList
    else if (type === "games") Component = GamesList
    else if (type === "article") Component = ArticleCart

    if (Component)
    {
        return <Component data={data} isMute={isMute} setIsMute={setIsMute} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
    }
}

export default FlexComponent