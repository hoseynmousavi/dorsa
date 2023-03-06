import {memo} from "react"

function ActionLink({children, to, className, onClick, replace, style, draggable = "false"})
{
    const go = e =>
    {
        if (to)
        {
            if (to.includes("http"))
            {

            }
            else
            {
                e.preventDefault()
                window.history[replace ? "replaceState" : "pushState"]("", "", to)
            }
        }
        onClick?.(e)
    }

    return <a tabIndex="-1" href={to} style={style} draggable={draggable} onClick={go} className={className}>{children}</a>
}

export default memo(ActionLink)