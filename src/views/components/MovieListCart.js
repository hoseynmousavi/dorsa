import ImageShow from "../../modules/components/ImageShow"

function MovieListCart({data: {id, title, poster}})
{
    return (
        <div className="movie-cart">
            <ImageShow className="movie-cart-img" src={poster}/>
            <div className="movie-cart-title">{title}</div>
        </div>
    )
}

export default MovieListCart