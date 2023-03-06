function getImageLink(link)
{
    return link.replace("http://188.121.118.80", process.env.REACT_APP_REST_URL)
}

export default getImageLink