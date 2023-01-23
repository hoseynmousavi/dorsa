import NavbarBackSvg from "../../media/svg/NavbarBackSvg"
import CupSvg from "../../media/svg/CupSvg"
import VideoSvg from "../../media/svg/VideoSvg"
import AppsSvg from "../../media/svg/AppsSvg"
import HomeSvg from "../../media/svg/HomeSvg"
import NavbarItem from "../components/NavbarItem"
import GetTextConstant from "../../seyed-modules/hooks/GetTextConstant"
import AccountSvg from "../../media/svg/AccountSvg"
import urlConstant from "../../constant/urlConstant"
import GetCurrentLocation from "../../seyed-modules/hooks/GetCurrentLocation"

function NavbarContainer()
{
    const {textConstant} = GetTextConstant()
    const {location} = GetCurrentLocation()
    return (
        <nav className="navbar">
            <NavbarBackSvg className="navbar-back"/>
            <div className="navbar-content">
                <NavbarItem Icon={VideoSvg}
                            title={textConstant.multiMedia}
                            link={urlConstant.multiMedia}
                            location={location}
                />
                <NavbarItem Icon={AppsSvg}
                            title={textConstant.apps}
                            link={urlConstant.apps}
                            location={location}
                />
                <NavbarItem Icon={HomeSvg}
                            title={textConstant.home}
                            link={urlConstant.home}
                            location={location}
                            isHome
                />
                <NavbarItem Icon={CupSvg}
                            title={textConstant.contest}
                            link={urlConstant.contest}
                            location={location}
                />
                <NavbarItem Icon={AccountSvg}
                            title={textConstant.account}
                            link={urlConstant.account}
                            location={location}
                />
            </div>
        </nav>
    )
}

export default NavbarContainer