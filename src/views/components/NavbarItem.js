import Material from "../../seyed-modules/components/Material"

function NavbarItem({Icon, title, isHome, isActive, ActiveIcon})
{
    const ShowIcon = isActive ? ActiveIcon : Icon
    return (
        <Material className={`navbar-content-item ${isHome ? "home-icon" : ""}`}>
            <ShowIcon className={`navbar-content-item-icon ${isHome ? "home-icon" : ""}`}/>
            <div className={`navbar-content-item-title ${isActive ? "" : "hide"}`}>{title}</div>
        </Material>
    )
}

export default NavbarItem