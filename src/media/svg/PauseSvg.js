function PauseSvg({className})
{
    return (
        <svg className={className} viewBox="0 0 20 21">
            <g transform="translate(-21 -20)">
                <rect width="8" height="21" rx="3" transform="translate(21 20)" fill="#fff"/>
                <rect width="8" height="21" rx="3" transform="translate(33 20)" fill="#fff"/>
            </g>
        </svg>
    )
}

export default PauseSvg