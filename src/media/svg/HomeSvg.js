function HomeSvg({className})
{
    return (
        <svg className={className} viewBox="0 0 54 54" fill="none">
            <rect width="54" height="54" rx="23" fill="white"/>
            <rect className="home-icon-circle" x="4.4082" y="4.27734" width="45.4455" height="45.4455" rx="19" fill="#7691F8"/>
            <g filter="url(#filter1_d_355_4357)">
                <path d="M34.3884 22.6514L29.2557 19.0603C27.8567 18.0801 25.7092 18.1336 24.3636 19.1762L19.8992 22.6603C19.0082 23.3554 18.3042 24.7811 18.3042 25.9039V32.0524C18.3042 34.3247 20.1488 36.1782 22.421 36.1782H32.027C34.2993 36.1782 36.1438 34.3336 36.1438 32.0613V26.0198C36.1438 24.8168 35.3686 23.3376 34.3884 22.6514ZM27.8923 32.6138C27.8923 32.9792 27.5893 33.2821 27.224 33.2821C26.8587 33.2821 26.5557 32.9792 26.5557 32.6138V29.9405C26.5557 29.5752 26.8587 29.2722 27.224 29.2722C27.5893 29.2722 27.8923 29.5752 27.8923 29.9405V32.6138Z" fill="white"/>
            </g>
            <defs>
                <filter id="filter0_i_355_4357" x="4.4082" y="2.27734" width="45.4453" height="47.4453" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_innerShadow_355_4357"/>
                    <feOffset dy="-2"/>
                    <feGaussianBlur stdDeviation="2.5"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.392157 0 0 0 0 0.392157 0 0 0 0 0.745098 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_355_4357"/>
                </filter>
                <filter id="filter1_d_355_4357" x="12.3042" y="16.3584" width="29.8398" height="29.8193" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="3"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.392157 0 0 0 0 0.392157 0 0 0 0 0.745098 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_355_4357"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_355_4357" result="shape"/>
                </filter>
            </defs>
        </svg>
    )
}

export default HomeSvg