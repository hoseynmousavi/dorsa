import poster from "../media/images/poster.jpeg"
import poster2 from "../media/images/poster-2.png"

const mock = {
    videos: [
        {
            id: 1,
            title: "عنوان کارت ویدیویی - متن نسبتا",
            poster: poster,
            likes_count: 2131,
            is_liked: true,
            views_count: 4343,
            src: "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
        },
        {
            id: 2,
            title: "عنوان کارت ویدیویی - متن نسبتا بلند با ارتفاع دو خط",
            poster: poster2,
            likes_count: 549,
            is_liked: false,
            views_count: 8735,
            src: "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
        },
    ],
}

export default mock