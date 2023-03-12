import VerticalPanel from "../components/VerticalPanel"
import Login1Svg from "../../media/svg/Login1Svg"
import GetTextConstant from "../../modules/hooks/GetTextConstant"
import Button from "../../modules/components/Button"
import Material from "../../modules/components/Material"
import createMaterialColor from "../../modules/helpers/createMaterialColor"
import urlConstant from "../../constant/urlConstant"
import numberCorrection from "../../modules/helpers/numberCorrection"
import {useContext, useState} from "react"
import authActions from "../../context/auth/AuthActions"
import {AuthContext} from "../../context/auth/AuthReducer"
import MyLoader from "../../modules/components/MyLoader"

function OtpModal({close, phone, reSend, getOtpLoading})
{
    const {dispatch} = useContext(AuthContext)
    const {textConstant} = GetTextConstant()
    const [code, setCode] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    function onChange(e)
    {
        const value = numberCorrection(e.target.value.trim())
        setCode(value)
        if (value.length === 5)
        {
            setIsLoading(true)
            authActions.loginOrSignup({data: {phone_number: phone, code: value}, dispatch})
                .then(() =>
                {
                    setIsLoading(false)
                    window.history.replaceState("", "", urlConstant.home)
                })
                .catch(() =>
                {
                    setIsLoading(false)
                })
        }
    }

    return (
        <VerticalPanel close={close} className="opt-modal" contentClassName="otp">
            <Login1Svg className="otp-icon"/>
            <h1 className="login-content-title">{textConstant.enterOtp}</h1>
            <div className="login-content-desc">{textConstant.otpSentTo(phone)}</div>
            <div className="opt-box">
                <input className="opt-box-input" onChange={onChange} type="tel" maxLength={5} disabled={isLoading}/>
                <div className="opt-box-item">{code[0]}</div>
                <div className="opt-box-item">{code[1]}</div>
                <div className="opt-box-item">{code[2]}</div>
                <div className="opt-box-item">{code[3]}</div>
                <div className="opt-box-item">{code[4]}</div>
            </div>
            <Button className="login-content-btn" loading={isLoading}>
                {textConstant.send}
            </Button>
            <Material className="opt-retry" backgroundColor={createMaterialColor({variable: "--first-color"})} onClick={reSend}>
                {
                    getOtpLoading ?
                        <MyLoader width={20}/>
                        :
                        <>
                            <div className="opt-retry-first">{textConstant.dontGetCode}</div>
                            <div className="opt-retry-second">{textConstant.sendGain}</div>
                        </>
                }
            </Material>
        </VerticalPanel>
    )
}

export default OtpModal