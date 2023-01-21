import GetTextConstant from "../../seyed-modules/hooks/GetTextConstant"
import Input from "../components/Input"
import Button from "../../seyed-modules/components/Button"
import {useState} from "react"
import parseQueryString from "../../seyed-modules/helpers/parseQueryString"
import urlConstant from "../../constant/urlConstant"
import CallSvg from "../../media/svg/CallSvg"

function LoginPhonePage()
{
    const {textConstant} = GetTextConstant()
    const [phone, setPhone] = useState(null)
    const isDisable = !phone

    function onPhoneChange({value})
    {
        setPhone(value)
    }

    function submit()
    {
        const {returnTo} = parseQueryString()
        window.history.pushState("", "", `${urlConstant.loginCode(phone)}${returnTo ? `?returnTo=${returnTo}` : ""}`)
    }

    return (
        <div className="login-page">
            <div className="login-page-box">
                <h1 className="login-page-title">{textConstant.loginTitle}</h1>
                <h2 className="login-page-desc">{textConstant.loginDesc}</h2>
                <Input className="login-page-input"
                       name="phone"
                       placeholder={textConstant.phonePlaceholder}
                       validation="phone"
                       ltr
                       onChange={onPhoneChange}
                       onSubmit={submit}
                       disableSubmit={isDisable}
                       focusOnMountDesktop
                       fixScroll
                       type="tel"
                       Icon={CallSvg}
                />
                <Button className="login-page-btn" disable={isDisable} onClick={submit}>
                    {textConstant.send}
                </Button>
            </div>
        </div>
    )
}

export default LoginPhonePage