import React, {Suspense} from "react"
import LoadingWrapper from "./LoadingWrapper"

function SwitchItem({isTab, index, stateLength, element, location})
{
    const isRendering = index === stateLength - 1
    const output = <Suspense fallback={<LoadingWrapper haveBg key="loading-wrapper"/>}>{React.cloneElement(element, {location, isRendering})}</Suspense>
    return (
        <div className={`switch-cont ${isRendering ? "rendering" : ""}`}>
            <div className={`switch ${isRendering ? `${isTab ? "tab-" : ""}main-render` : ""}`}>
                {output}
            </div>
        </div>
    )
}

export default SwitchItem