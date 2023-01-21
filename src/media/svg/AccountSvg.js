function AccountSvg({className})
{
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
            <g filter="url(#filter0_d_197_2642)">
                <path d="M12 3C9.38 3 7.25 5.13 7.25 7.75C7.25 10.32 9.26 12.4 11.88 12.49C11.96 12.48 12.04 12.48 12.1 12.49C12.12 12.49 12.13 12.49 12.15 12.49C12.16 12.49 12.16 12.49 12.17 12.49C14.73 12.4 16.74 10.32 16.75 7.75C16.75 5.13 14.62 3 12 3Z" fill="url(#paint0_linear_197_2642)"/>
                <path d="M17.08 15.15C14.29 13.29 9.73996 13.29 6.92996 15.15C5.65996 16 4.95996 17.15 4.95996 18.38C4.95996 19.61 5.65996 20.75 6.91996 21.59C8.31996 22.53 10.16 23 12 23C13.84 23 15.68 22.53 17.08 21.59C18.34 20.74 19.04 19.6 19.04 18.36C19.03 17.13 18.34 15.99 17.08 15.15Z" fill="url(#paint1_linear_197_2642)"/>
            </g>
            <defs>
                <filter id="filter0_d_197_2642" x="0.959961" y="0" width="22.08" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_197_2642"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_197_2642" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_197_2642" x1="12" y1="3.79083" x2="12.0004" y2="11.6992" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#FFF7E2"/>
                </linearGradient>
                <linearGradient id="paint1_linear_197_2642" x1="12" y1="14.5254" x2="12.0002" y2="22.2296" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#FFF7E2"/>
                </linearGradient>
            </defs>
        </svg>

    )
}

export default AccountSvg