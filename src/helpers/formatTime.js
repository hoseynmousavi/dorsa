function formatTime(timeInSeconds)
{
    if (timeInSeconds)
    {
        let duration = new Date(timeInSeconds * 1000).toISOString().substr(11, 8)
        if (duration.substr(0, 2) === "00") duration = duration.substr(3, 5)
        return duration
    }
    else return "00:00"
}

export default formatTime