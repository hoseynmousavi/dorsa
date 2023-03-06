const apiUrlsConstant = {
    login: "api/user/login",
    profile: "api/user/profile",
    timeline: "api/timeline",

    bookmark: id => `api/post/${id}/bookmark`,

    like: id => `api/timeline/${id}/like`,

    movie: id => `api/video/${id}`,
}

export default apiUrlsConstant