import VideoCart from "./VideoCart"
import MovieList from "../containers/MovieList"
import GamesList from "../containers/GamesList"
import ArticleCart from "./ArticleCart"

function FlexComponent({data, isMute, setIsMute, isPlaying, setIsPlaying})
{
    const {type} = data || {}

    if (type === "video")
    {
        return (
            <VideoCart data={data} isMute={isMute} setIsMute={setIsMute} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
        )
    }
    else if (type === "movies")
    {
        return (
            <MovieList data={data}/>
        )
    }
    else if (type === "games")
    {
        return (
            <GamesList data={data}/>
        )
    }
    else if (type === "article")
    {
        return (
            <ArticleCart data={data}/>
        )
    }
}

export default FlexComponent