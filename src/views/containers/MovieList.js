import MovieListCart from "../components/MovieListCart"

function MovieList({data})
{
    const {title, items} = data
    return (
        <div>
            <div className="movie-title">{title}</div>
            <div className="movie-list hide-scroll">
                {
                    items.map(data =>
                        <MovieListCart key={data.id} data={data}/>,
                    )
                }
            </div>
        </div>
    )
}

export default MovieList