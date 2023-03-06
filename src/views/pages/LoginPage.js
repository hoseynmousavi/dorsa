import Login1Svg from "../../media/svg/Login1Svg"
import GetTextConstant from "../../seyed-modules/hooks/GetTextConstant"
import Input from "../components/Input"
import Button from "../../seyed-modules/components/Button"
import {useState} from "react"
import OtpModal from "../containers/OtpModal"
import authActions from "../../context/auth/AuthActions"

function LoginPage()
{
    const {textConstant} = GetTextConstant()
    const [phone, setPhone] = useState(null)
    const [getOtpLoading, setGetOtpLoading] = useState(false)
    const [isOtpVisible, setIsOtpVisible] = useState(false)
    const isDisable = !phone

    function onPhoneChange({value})
    {
        setPhone(value)
    }

    function closeOtp()
    {
        setIsOtpVisible(false)
    }

    function onSubmit()
    {
        setGetOtpLoading(true)
        authActions.sendOtp({data: {phone_number: phone}})
            .then(() =>
            {
                setGetOtpLoading(false)
                setIsOtpVisible(true)
            })
            .catch(() =>
            {
                setGetOtpLoading(false)
            })
    }

    return (
        <div className="login">
            <Login1Svg className="login-icon"/>
            <div className="login-content">
                <h1 className="login-content-title">{textConstant.enterPhone}</h1>
                <Input className="login-content-input"
                       placeholder={textConstant.phoneHolder}
                       name="phone"
                       ltr
                       validation="phone"
                       focusOnMountDesktop
                       onChange={onPhoneChange}
                       onSubmit={onSubmit}
                       disableSubmit={isDisable}
                />
                <Button className="login-content-btn" disable={isDisable} loading={getOtpLoading} onClick={onSubmit}>
                    {textConstant.send}
                </Button>
            </div>

            {
                isOtpVisible &&
                <OtpModal close={closeOtp} phone={phone} reSend={onSubmit} getOtpLoading={getOtpLoading}/>
            }
        </div>
    )
}

export default LoginPage