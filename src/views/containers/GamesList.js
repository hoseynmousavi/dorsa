import GameListCart from "../components/GameListCart"

function GamesList({data})
{
    const {title, items} = data
    return (
        <div>
            <div className="game-title">{title}</div>
            <div className="game-list hide-scroll">
                {
                    items.map(data =>
                        <GameListCart key={data.id} data={data}/>,
                    )
                }
            </div>
        </div>
    )
}

export default GamesList