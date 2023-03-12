import Material from "../../modules/components/Material"
import Link from "../../modules/components/Link"

function NavbarItem({Icon, title, isHome, link, location})
{
    const isActive = link === location
    return (
        <Link to={link}>
            <Material className={`navbar-content-item ${isHome ? "home-icon" : ""}`}>
                <Icon className={`navbar-content-item-icon ${isActive ? "active" : ""} ${isHome ? "home-icon" : ""}`}/>
                <div className={`navbar-content-item-title ${isActive ? "" : "hide"}`}>{title}</div>
            </Material>
        </Link>
    )
}

export default NavbarItem