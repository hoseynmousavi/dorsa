function CupSvg({className})
{
    return (
        <svg className={className} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_197_2632)">
                <path d="M9.15002 23H19.15V22C19.15 20.9 18.25 20 17.15 20H11.15C10.05 20 9.15002 20.9 9.15002 22V23Z" fill="url(#paint0_linear_197_2632)"/>
                <path d="M14 17C10.13 17 7 13.87 7 10V7C7 4.79 8.79 3 11 3H17C19.21 3 21 4.79 21 7V10C21 13.87 17.87 17 14 17Z" fill="url(#paint1_linear_197_2632)"/>
                <path d="M7.47004 12.65C6.72004 12.41 6.06004 11.97 5.54004 11.45C4.64004 10.45 4.04004 9.24998 4.04004 7.84998C4.04004 6.44998 5.14004 5.34998 6.54004 5.34998H7.19004C6.99004 5.80998 6.89004 6.31998 6.89004 6.84998V9.84998C6.89004 10.85 7.10004 11.79 7.47004 12.65Z" fill="url(#paint2_linear_197_2632)"/>
                <path d="M20.53 12.65C21.28 12.41 21.94 11.97 22.46 11.45C23.36 10.45 23.96 9.24998 23.96 7.84998C23.96 6.44998 22.86 5.34998 21.46 5.34998H20.81C21.01 5.80998 21.11 6.31998 21.11 6.84998V9.84998C21.11 10.85 20.9 11.79 20.53 12.65Z" fill="url(#paint3_linear_197_2632)"/>
            </g>
            <defs>
                <filter id="filter0_d_197_2632" x="0.0400391" y="0" width="27.92" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_197_2632"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_197_2632" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_197_2632" x1="13.9417" y1="20.25" x2="13.9605" y2="22.689" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#FFF7E2"/>
                </linearGradient>
                <linearGradient id="paint1_linear_197_2632" x1="13.7083" y1="4.16667" x2="14.0005" y2="15.5417" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#FFF7E2"/>
                </linearGradient>
                <linearGradient id="paint2_linear_197_2632" x1="5.68358" y1="5.95831" x2="6.00711" y2="11.8758" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#FFF7E2"/>
                </linearGradient>
                <linearGradient id="paint3_linear_197_2632" x1="22.1736" y1="5.95831" x2="22.4971" y2="11.8758" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#FFF7E2"/>
                </linearGradient>
            </defs>
        </svg>
    )
}

export default CupSvg