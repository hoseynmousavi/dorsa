import SearchSvg from "../../media/svg/SearchSvg"
import Material from "../../seyed-modules/components/Material"
import MenuSvg from "../../media/svg/MenuSvg"

function Header()
{
    return (
        <header className="header">
            <h1 className="header-logo">کنجد</h1>
            <div className="header-second">
                <Material className="header-second-btn">
                    <SearchSvg className="header-second-btn-icon"/>
                </Material>
                <Material className="header-second-btn second">
                    <MenuSvg className="header-second-btn-icon"/>
                </Material>
            </div>
        </header>
    )
}

export default Header