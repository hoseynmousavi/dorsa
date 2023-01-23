import poster from "../media/images/poster.jpeg"
import poster2 from "../media/images/poster-2.png"
import cloud from "../media/images/cloud.png"
import toy from "../media/images/toy.png"
import coco from "../media/images/coco.png"
import clash from "../media/images/clash.png"
import royal from "../media/images/royal.png"
import mirza from "../media/images/mirza.png"
import article from "../media/images/article.png"

const mock = {
    contents: [
        {
            type: "video",
            id: 1,
            title: "عنوان کارت ویدیویی - متن نسبتا",
            poster: poster,
            likes_count: 2131,
            is_liked: true,
            views_count: 4343,
            src: "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
        },
        {
            type: "video",
            id: 2,
            title: "عنوان کارت ویدیویی - متن نسبتا بلند با ارتفاع دو خط",
            poster: poster2,
            likes_count: 549,
            is_liked: false,
            views_count: 8735,
            // src: "https://ts12.tarafdari.com/contents/user752402/content-sound/rema_-_calm_down.mp3",
            src: "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
        },
        {
            type: "article",
            id: 10,
            title: "متنی از کتاب بادبادک‌باز",
            poster: article,
            desc: "ﻣﺮﺩ ﺁﻫﺴﺘﻪ ﺩﺭ ﮔﻮﺵ ﻓﺮﺯﻧﺪ ﺗﺎﺯﻩ ﺑﻪ ﺑﻠﻮﻍ ﺭﺳﯿﺪﻩ ﺍﺵ ﺑﺮﺍﯼ ﭘﻨﺪ ﭼﻨﯿﻦ ﻧﺠﻮﺍ ﮐﺮﺩ : ” ﭘﺴﺮﻡ ﺩﺭ ﺯﻧﺪﮔﯽ",
            date: "۳ روز پیش",
            likes_count: 234,
            views_count: 1233,
            is_liked: false,
        },
        {
            type: "movies",
            id: 3,
            title: "برترین‌های هفته",
            items: [
                {
                    id: 4,
                    title: "ابری با احتمال بارش کوفته قلقلی",
                    poster: cloud,
                },
                {
                    id: 5,
                    title: "داستان اسباب‌بازی ۳",
                    poster: toy,
                },
                {
                    id: 6,
                    title: "کوکو",
                    poster: coco,
                },
            ],
        },
        {
            type: "games",
            id: 7,
            title: "بازی‌های منتخب",
            items: [
                {
                    id: 8,
                    title: "کلش آو کلنز",
                    poster: clash,
                },
                {
                    id: 12,
                    title: "کلش رویال",
                    poster: royal,
                },
                {
                    id: 13,
                    title: "آمیرزا",
                    poster: mirza,
                },
            ],
        },
    ],
}

export default mock