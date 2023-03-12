import {createRoot} from "react-dom/client"
import "./styles/index.scss"
import App from "./App"
import registerSW from "./serviceWorkerRegistration"
import withRouter from "./modules/helpers/withRouter"
import ThemeProvider from "./modules/context/theme/ThemeReducer"
import AuthProvider from "./context/auth/AuthReducer"
import changeColorVariablesConstant from "./constant/changeColorVariablesConstant"
import request from "./modules/request/request"
import AuthActions from "./context/auth/AuthActions"
import changeFontVariablesConstant from "./constant/changeFontVariablesConstant"
import LanguageProvider from "./modules/context/language/LanguageReducer"
import TimelineProvider from "./context/timeline/timelineReducer"
import MovieProvider from "./context/movie/movieReducer"

const root = createRoot(document.getElementById("root"))

const WrappedApp = withRouter(App)

root.render(
    <LanguageProvider changeVariables={changeFontVariablesConstant}>
        <ThemeProvider changeVariables={changeColorVariablesConstant} disable={true}>
            <AuthProvider>
                <TimelineProvider>
                    <MovieProvider>
                        <WrappedApp/>
                    </MovieProvider>
                </TimelineProvider>
            </AuthProvider>
        </ThemeProvider>
    </LanguageProvider>,
)

request.init({
    refreshFunc: AuthActions.getTokenWithRefreshToken,
})

registerSW()