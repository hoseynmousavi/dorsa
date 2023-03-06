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
import {useContext} from "react"
import {AuthContext} from "../../context/auth/AuthReducer"

function NavbarContainer()
{
    const {state: user} = useContext(AuthContext)
    const {textConstant} = GetTextConstant()
    const {location} = GetCurrentLocation()
    const hide = !(
        location === urlConstant.multiMedia ||
        location === urlConstant.apps ||
        location === urlConstant.home ||
        location === urlConstant.contest ||
        location === urlConstant.account ||
        location === urlConstant.profile
    )

    return (
        <nav className={`navbar ${hide ? "hide" : ""}`}>
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
                            link={user ? urlConstant.profile : urlConstant.account}
                            location={location}
                />
            </div>
        </nav>
    )
}

export default NavbarContainer