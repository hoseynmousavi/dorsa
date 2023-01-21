import NavbarBackSvg from "../../media/svg/NavbarBackSvg"
import CupSvg from "../../media/svg/CupSvg"
import VideoSvg from "../../media/svg/VideoSvg"
import AppsSvg from "../../media/svg/AppsSvg"
import HomeSvg from "../../media/svg/HomeSvg"
import NavbarItem from "../components/NavbarItem"
import GetTextConstant from "../../seyed-modules/hooks/GetTextConstant"
import AccountSvg from "../../media/svg/AccountSvg"
import HomeActiveSvg from "../../media/svg/HomeActiveSvg"

function NavbarContainer()
{
    const {textConstant} = GetTextConstant()
    return (
        <nav className="navbar">
            <NavbarBackSvg className="navbar-back"/>
            <div className="navbar-content">
                <NavbarItem Icon={VideoSvg} title={textConstant.multiMedia}/>
                <NavbarItem Icon={AppsSvg} title={textConstant.apps}/>
                <NavbarItem Icon={HomeSvg} ActiveIcon={HomeActiveSvg} title={textConstant.home} isHome isActive/>
                <NavbarItem Icon={CupSvg} title={textConstant.contest}/>
                <NavbarItem Icon={AccountSvg} title={textConstant.account}/>
            </div>
        </nav>
    )
}

export default NavbarContainer