function PlaySvg({className})
{
    return (
        <svg className={className} viewBox="0 0 26 26" fill="none">
            <g filter="url(#filter0_i_313_1933)">
                <path d="M4.46826 13.0001V9.23999C4.46826 4.57154 7.7742 2.6598 11.8195 4.99403L15.0832 6.87408L18.3469 8.75413C22.3921 11.0884 22.3921 14.9118 18.3469 17.2461L15.0832 19.1261L11.8195 21.0062C7.7742 23.3404 4.46826 21.4286 4.46826 16.7602V13.0001Z" fill="#7691F8"/>
            </g>
            <defs>
                <filter id="filter0_i_313_1933" x="4.46826" y="0.998184" width="16.9126" height="21.0038" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_innerShadow_313_1933"/>
                    <feOffset dy="-3"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.392157 0 0 0 0 0.392157 0 0 0 0 0.745098 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_313_1933"/>
                </filter>
            </defs>
        </svg>

    )
}

export default PlaySvg