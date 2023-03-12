import SearchSvg from "../../media/svg/SearchSvg"
import Material from "../../modules/components/Material"
import MenuSvg from "../../media/svg/MenuSvg"
import {useContext, useState} from "react"
import MenuBackSvg from "../../media/svg/MenuBackSvg"
import {createPortal} from "react-dom"
import AccountSvg from "../../media/svg/AccountSvg"
import SettingSvg from "../../media/svg/SettingSvg"
import InfoSvg from "../../media/svg/InfoSvg"
import MessageSvg from "../../media/svg/MessageSvg"
import {AuthContext} from "../../context/auth/AuthReducer"

function Header()
{
    const {state: user} = useContext(AuthContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleSide()
    {
        setIsMenuOpen(isMenuOpen => !isMenuOpen)
    }

    return (
        <>
            <header className="header">
                <h1 className="header-logo">کنجد</h1>
                <div className="header-second">
                    <Material className="header-second-btn">
                        <SearchSvg className="header-second-btn-icon"/>
                    </Material>
                    <Material className="header-second-btn second" onClick={toggleSide}>
                        <MenuSvg className="header-second-btn-icon"/>
                    </Material>
                </div>
            </header>
            {
                createPortal(
                    <>
                        {isMenuOpen && <div className="header-side-back-fade" onClick={toggleSide}/>}
                        <div className={`header-side ${isMenuOpen ? "open" : ""}`}>
                            <MenuBackSvg className="header-side-back"/>
                            <div className="header-side-title">کنجد</div>
                            <Material className="header-side-item user">
                                <AccountSvg className="header-side-item-icon"/>
                                <div className="header-side-item-name">{user?.full_name ?? "کاربر"}</div>
                            </Material>
                            <Material className="header-side-item">
                                <SettingSvg className="header-side-item-icon"/>
                                <div className="header-side-item-name">تنظیمات</div>
                            </Material>
                            <Material className="header-side-item">
                                <InfoSvg className="header-side-item-icon"/>
                                <div className="header-side-item-name">درباره کنجد</div>
                            </Material>
                            <Material className="header-side-item">
                                <MessageSvg className="header-side-item-icon"/>
                                <div className="header-side-item-name">پشتیبانی</div>
                            </Material>
                        </div>
                    </>
                    ,
                    document.getElementById("root"),
                )
            }
        </>
    )
}

export default Header