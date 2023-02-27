function RateStarSvg({className})
{
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
            <g filter="url(#filter0_i_591_7041)">
                <path d="M13.7296 3.50997L15.4896 7.02997C15.7296 7.51997 16.3696 7.98997 16.9096 8.07997L20.0996 8.60997C22.1396 8.94997 22.6196 10.43 21.1496 11.89L18.6696 14.37C18.2496 14.79 18.0196 15.6 18.1496 16.18L18.8596 19.25C19.4196 21.68 18.1296 22.62 15.9796 21.35L12.9896 19.58C12.4496 19.26 11.5596 19.26 11.0096 19.58L8.0196 21.35C5.8796 22.62 4.5796 21.67 5.1396 19.25L5.8496 16.18C5.9796 15.6 5.7496 14.79 5.3296 14.37L2.8496 11.89C1.3896 10.43 1.8596 8.94997 3.8996 8.60997L7.0896 8.07997C7.6196 7.98997 8.2596 7.51997 8.4996 7.02997L10.2596 3.50997C11.2196 1.59997 12.7796 1.59997 13.7296 3.50997Z" fill="#F7F7F7" stroke="#EDEDED" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
                <filter id="filter0_i_591_7041" x="1.49963" y="1.57747" width="21.0043" height="22.8392" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_591_7041"/>
                </filter>
            </defs>
        </svg>
    )
}

export default RateStarSvg