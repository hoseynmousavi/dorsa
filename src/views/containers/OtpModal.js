import VerticalPanel from "../components/VerticalPanel"
import Login1Svg from "../../media/svg/Login1Svg"
import GetTextConstant from "../../seyed-modules/hooks/GetTextConstant"
import Button from "../../seyed-modules/components/Button"
import Material from "../../seyed-modules/components/Material"
import createMaterialColor from "../../seyed-modules/helpers/createMaterialColor"
import urlConstant from "../../constant/urlConstant"

function OtpModal({close, phone})
{
    const {textConstant} = GetTextConstant()

    function onSubmit()
    {
        window.history.replaceState("", "", urlConstant.home)
    }

    return (
        <VerticalPanel close={close} className="opt-modal" contentClassName="otp">
            <Login1Svg className="otp-icon"/>
            <h1 className="login-content-title">{textConstant.enterOtp}</h1>
            <div className="login-content-desc">{textConstant.otpSentTo(phone)}</div>
            <div className="opt-box">
                <div className="opt-box-item"/>
                <div className="opt-box-item"/>
                <div className="opt-box-item"/>
                <div className="opt-box-item"/>
                <div className="opt-box-item"/>
            </div>
            <Button className="login-content-btn" onClick={onSubmit}>
                {textConstant.send}
            </Button>
            <Material className="opt-retry" backgroundColor={createMaterialColor({variable: "--first-color"})}>
                <div className="opt-retry-first">{textConstant.dontGetCode}</div>
                <div className="opt-retry-second">{textConstant.sendGain}</div>
            </Material>
        </VerticalPanel>
    )
}

export default OtpModal