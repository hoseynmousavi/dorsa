import poster from "../media/images/poster.jpeg"
import poster2 from "../media/images/poster-2.png"
import cloud from "../media/images/cloud.png"
import toy from "../media/images/toy.png"
import coco from "../media/images/coco.png"
import clash from "../media/images/clash.png"
import royal from "../media/images/royal.png"
import mirza from "../media/images/mirza.png"
import article from "../media/images/article.png"
import gallery1 from "../media/images/gallery1.png"
import gallery2 from "../media/images/gallery2.png"

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
            type: "audio",
            id: 2,
            title: "بازی‌های آوازی ۳",
            poster: poster2,
            likes_count: 549,
            is_liked: false,
            views_count: 8735,
            src: "https://ts12.tarafdari.com/contents/user752402/content-sound/rema_-_calm_down.mp3",
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
    profile: {
        poster: poster,
        src: "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
        title: "انیمیشن کوکو",
        rate: "4.6",
        desc: "داستان انیمیشن پسر ۱۲ ساله‌ای به نام میگل را روایت می‌کند که به موسیقی علاقه دارد و خانواده‌اش آن را نسل به نسل ممنوع کرده‌اند. او آرزو دارد مانند هنرمند و الگوی او ارنستو دِلا کروز به یک نوازنده حرفه‌ای تبدیل شود.\n" +
            "در روز مردگان مسابقه موسیقی برگزار می‌شود و او می‌خواهد در آن شرکت کند اما خانواده‌اش متوجه می‌شوند",
        time: "۱ ساعت ۲۰ دقیقه",
        sound: "دوبله فارسی",
        product: "محصول آمریکا ۲۰۲۰",
        company: "محصول دیزنی",
        age: "مناسب ۷ سال به بالا",
        gallery: [gallery1, gallery2, gallery1, gallery2],
        also: {
            type: "movies",
            id: 3,
            title: "فیلم‌های مشابه",
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
    },

}

export default mock