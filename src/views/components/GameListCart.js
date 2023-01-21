import ImageShow from "../../seyed-modules/components/ImageShow"

function GameListCart({data: {id, title, poster}})
{
    return (
        <div className="game-cart">
            <ImageShow className="game-cart-img" src={poster}/>
            <div className="game-cart-title">{title}</div>
        </div>
    )
}

export default GameListCart