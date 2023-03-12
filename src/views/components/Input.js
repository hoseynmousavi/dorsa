import {useEffect, useRef, useState, memo, forwardRef} from "react"
import regexConstant from "../../constant/regexConstant"
import checkNationalCode from "../../helpers/checkNationalCode"
import numberCorrection from "../../modules/helpers/numberCorrection"
import inputKeyDownEnter from "../../helpers/inputKeyDownEnter"
import AuthActions from "../../context/auth/AuthActions"
import validationConstant from "../../constant/validationConstant"
import MyLoader from "../../modules/components/MyLoader"
import CheckSvg from "../../modules/media/svg/CheckSvg"
import CloseSvg from "../../modules/media/svg/CloseSvg"
import {REQUEST_CANCEL} from "../../modules/constant/toastTypes"
import onScroll from "../../modules/helpers/onScroll"
import showPhoneNumber from "../../modules/helpers/showPhoneNumber"
import ShowValidationError from "./ShowValidationError"
import fixInputScroll from "../../helpers/fixInputScroll"
import GetTextConstant from "../../modules/hooks/GetTextConstant"

const Input = forwardRef(({
                              className, name, autoComplete = "off", focusOnMountDesktop, label, type = "text", validation, placeholder = "", onIconClick, disableOnScroll, fixScroll, isArea,
                              defaultValue, onChange, disabled, ltr, ltrPlaceHolder, Icon, required, onSubmit, onSubmitDisable, disableSubmit, labelClassName, iconClassName, noSpace,
                          }, ref) =>
{
    const Tag = isArea ? "textarea" : "input"
    const {language} = GetTextConstant()
    const tempRef = useRef(null)
    const inputRef = ref || tempRef
    const [validationLoading, setValidationLoading] = useState("")
    const [value, setValue] = useState("")
    const [error, setError] = useState("")
    const validationTimer = useRef(null)
    const validationIconTimer = useRef(null)
    const validationCancel = useRef(null)
    const timerFixScroll = useRef(null)

    useEffect(() =>
    {
        let scrollListener = null
        if (disableOnScroll) scrollListener = onScroll({callback: () => inputRef.current?.blur?.()})
        if (focusOnMountDesktop && window.innerWidth > 480) setTimeout(() => inputRef?.current?.focus(), 300)
        if (defaultValue)
        {
            if (validation)
            {
                if (validation === "email" || validation === "url")
                {
                    const value = numberCorrection(defaultValue.trim())
                    setValue(value)
                }
                else if (validation === "national_code")
                {
                    const value = numberCorrection(defaultValue.trim())
                    if (!isNaN(value) && value.length <= 10) setValue(value)
                }
                else if (validation === "phone")
                {
                    const value = numberCorrection(defaultValue.trim())
                    if (!isNaN(value) && value.length <= 11) setValue(value)
                }
            }
            else setValue(defaultValue.trim())
        }

        return () =>
        {
            scrollListener?.()
            clearTimeout(validationTimer.current)
            clearTimeout(validationIconTimer.current)
            clearTimeout(timerFixScroll.current)
        }
        // eslint-disable-next-line
    }, [])

    function resetInput()
    {
        onInputChange({target: {value: ""}})
    }

    function onInputChange(e)
    {
        if (validation)
        {
            if (validation === "email")
            {
                const value = numberCorrection(e.target.value.replace(/ /g, ""))
                setValue(value)
                setValidationLoading("")
                clearTimeout(validationIconTimer.current)
                clearTimeout(validationTimer.current)
                if (regexConstant.EMAIL_REGEX.test(value))
                {
                    if (value !== defaultValue)
                    {
                        onChange({name, value: value || required ? null : "", reset: resetInput})
                        if (validationCancel?.current?.cancel) validationCancel.current.cancel(REQUEST_CANCEL)
                        validationTimer.current = setTimeout(() =>
                        {
                            setValidationLoading("loading")
                            AuthActions.checkEmail({email: value, cancel: cancelSource => validationCancel.current = cancelSource})
                                .then(() =>
                                {
                                    setValidationLoading("NOK")
                                    setError(validationConstant[language].repeatedEmail)
                                })
                                .catch(err =>
                                {
                                    if (err?.response?.status === 404)
                                    {
                                        setValidationLoading("OK")
                                        validationIconTimer.current = setTimeout(() => setValidationLoading(""), 1000)
                                        onChange({name, value, reset: resetInput})
                                    }
                                    else setValidationLoading("NOK")
                                })
                        }, 250)
                    }
                    else onChange({name, value, reset: resetInput})
                }
                else
                {
                    onChange({name, value: value || required ? null : "", reset: resetInput})
                    checkErrTimer()
                }
            }
            else if (validation === "national_code")
            {
                const value = numberCorrection(e.target.value.replace(/ /g, "").slice(0, 10))
                if (!isNaN(value) && value.length <= 10) setValue(value)
                if (checkNationalCode(value)) onChange({name, value, reset: resetInput})
                else onChange({name, value: value || required ? null : "", reset: resetInput})
                checkErrTimer()
            }
            else if (validation === "phone")
            {
                const value = numberCorrection(showPhoneNumber.fixToNumber(e.target.value))
                if (!isNaN(value) && value.length <= 11) setValue(value)
                if (regexConstant.PHONE_REGEX.test(value)) onChange({name, value, reset: resetInput})
                else onChange({name, value: value || required ? null : "", reset: resetInput})
                checkErrTimer()
            }
            else if (validation === "url")
            {
                const value = numberCorrection(e.target.value.replace(/ /g, ""))
                setValue(value)
                if (regexConstant.URL_REGEX.test(value)) onChange({name, value, reset: resetInput})
                else onChange({name, value: value || required ? null : "", reset: resetInput})
                checkErrTimer()
            }
        }
        else
        {
            const value = numberCorrection(e.target.value)
            setValue(value)
            onChange({name, value: value.trim() ? value.trim() : required ? null : "", reset: resetInput})
            checkErrTimer()
        }
        setError("")
    }

    function checkErrTimer()
    {
        clearTimeout(validationTimer.current)
        validationTimer.current = setTimeout(onInputBlur, 800)
    }

    function onInputBlur()
    {
        clearTimeout(timerFixScroll.current)
        let tempValue = inputRef.current.value.trim()
        if (validation === "phone") tempValue = showPhoneNumber.fixToNumber(tempValue)
        let tempErr = ""
        if (!tempValue)
        {
            if (required) tempErr = validationConstant[language].requiredField
        }
        else
        {
            if (validation)
            {
                if (validation === "email")
                {
                    if (!regexConstant.EMAIL_REGEX.test(tempValue)) tempErr = validationConstant[language].unValidEmail
                }
                else if (validation === "national_code")
                {
                    if (!checkNationalCode(tempValue)) tempErr = validationConstant[language].unValidNationalCode
                }
                else if (validation === "phone")
                {
                    if (!regexConstant.PHONE_REGEX.test(tempValue)) tempErr = validationConstant[language].unValidPhone
                }
                else if (validation === "url")
                {
                    if (!regexConstant.URL_REGEX.test(tempValue)) tempErr = validationConstant[language].unValidUrl
                }
            }
        }
        setError(tempErr)
    }

    function onFocusClick()
    {
        if (fixScroll)
        {
            clearTimeout(timerFixScroll.current)
            timerFixScroll.current = fixInputScroll({inputRef})
        }
    }

    return (
        <label className={`input-label ${className}`}>
            <p className={`input-label-text ${labelClassName}`}>{label}</p>
            <div className="input-label-relative">
                <Tag autoComplete={autoComplete}
                     name={name}
                     className={`input-main ${isArea ? "area" : ""} ${ltrPlaceHolder ? "ltr-placeholder" : ""} ${Icon || (validation === "email" && value) ? "have-icon" : ""} ${error ? "err" : ""} ${ltr ? "ltr" : ""}`}
                     rows={5}
                     disabled={disabled}
                     ref={inputRef}
                     type={type}
                     placeholder={placeholder}
                     value={validation === "phone" ? showPhoneNumber.showPhone(value) : value}
                     onChange={onInputChange}
                     onBlur={onInputBlur}
                     onKeyDown={onSubmit || onSubmitDisable ? inputKeyDownEnter({onSubmit, onSubmitDisable, disableSubmit, checkValidation: onInputBlur}) : undefined}
                     onFocus={onFocusClick}
                     onClick={onFocusClick}
                />
                {
                    Icon ?
                        <Icon className={`input-icon ${iconClassName} ${ltr ? "" : "rtl"}`} onClick={onIconClick}/>
                        :
                        <>
                            <MyLoader width={24} className={`input-icon validation ${iconClassName} ${validationLoading === "loading" ? "show" : ""} ${ltr ? "" : "rtl"}`}/>
                            <CheckSvg className={`input-icon validation ${iconClassName} ${validationLoading === "OK" ? "show" : ""} ${ltr ? "" : "rtl"}`}/>
                            <CloseSvg className={`input-icon validation ${iconClassName} ${validationLoading === "NOK" ? "show" : ""} ${ltr ? "" : "rtl"}`}/>
                        </>
                }
            </div>
            <ShowValidationError error={error} noSpace={noSpace}/>
        </label>
    )
})

export default memo(Input)