function VideoSvg({className})
{
    return (
        <svg className={className} viewBox="0 0 28 28" fill="none">
            <g filter="url(#filter0_d_352_4101)">
                <path d="M16.73 3H11.27V7.36H16.73V3Z" fill="url(#paint0_linear_352_4101)"/>
                <path d="M18.23 3V7.36H23.87C23.36 4.61 21.33 3.01 18.23 3Z" fill="url(#paint1_linear_352_4101)"/>
                <path d="M4 8.86V17.19C4 20.83 6.17 23 9.81 23H18.19C21.83 23 24 20.83 24 17.19V8.86H4ZM16.44 17.18L14.36 18.38C13.92 18.63 13.49 18.76 13.09 18.76C12.79 18.76 12.52 18.69 12.27 18.55C11.69 18.22 11.37 17.54 11.37 16.66V14.26C11.37 13.38 11.69 12.7 12.27 12.37C12.85 12.03 13.59 12.09 14.36 12.54L16.44 13.74C17.21 14.18 17.63 14.8 17.63 15.47C17.63 16.14 17.2 16.73 16.44 17.18Z" fill="url(#paint2_linear_352_4101)"/>
                <path d="M9.77 3C6.67 3.01 4.64 4.61 4.13 7.36H9.77V3Z" fill="url(#paint3_linear_352_4101)"/>
            </g>
            <defs>
                <filter id="filter0_d_352_4101" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_352_4101"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_352_4101" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_352_4101" x1="13.5833" y1="4.66667" x2="14.0008" y2="20.9166" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#FFF7E2"/>
                </linearGradient>
                <linearGradient id="paint1_linear_352_4101" x1="13.5833" y1="4.66667" x2="14.0008" y2="20.9166" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#FFF7E2"/>
                </linearGradient>
                <linearGradient id="paint2_linear_352_4101" x1="13.5833" y1="4.66667" x2="14.0008" y2="20.9166" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#FFF7E2"/>
                </linearGradient>
                <linearGradient id="paint3_linear_352_4101" x1="13.5833" y1="4.66667" x2="14.0008" y2="20.9166" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#FFF7E2"/>
                </linearGradient>
            </defs>
        </svg>
    )
}

export default VideoSvg