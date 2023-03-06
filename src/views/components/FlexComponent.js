import VideoCart from "./VideoCart"
import ArticleCart from "./ArticleCart"

function FlexComponent({data, isMute, setIsMute, isPlaying, setIsPlaying})
{
    const {card_type: type} = data || {}
    let Component

    if (type === "VI" || type === "AU") Component = VideoCart
    else if (type === "AR") Component = ArticleCart
    // else if (type === "movies") Component = MovieList
    // else if (type === "games") Component = GamesList

    if (Component)
    {
        return <Component data={data} isMute={isMute} setIsMute={setIsMute} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
    }
}

export default FlexComponent