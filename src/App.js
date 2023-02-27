import ThemeColorBar from "./seyed-modules/components/ThemeColorBar"
import Switch from "./seyed-modules/components/Switch"
import urlConstant from "./constant/urlConstant"
import Route from "./seyed-modules/components/Route"
import ToastContainer from "./seyed-modules/components/ToastContainer"
import HomePage from "./views/pages/HomePage"
import NavbarContainer from "./views/containers/NavbarContainer"
import LoginPage from "./views/pages/LoginPage"
import MovieProfilePage from "./views/pages/MovieProfilePage"

function App()
{
    return (
        <div id="index-temp" className="index-temp">

            <Switch>
                <Route path={urlConstant.movieProfile} render={() => <MovieProfilePage/>}/>
                <Route path={urlConstant.account} render={() => <LoginPage/>}/>
                <Route path={urlConstant.home} render={() => <HomePage/>}/>
            </Switch>
            <NavbarContainer/>

            <ThemeColorBar/>
            <ToastContainer/>
        </div>
    )
}

export default App