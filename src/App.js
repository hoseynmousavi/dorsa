import ThemeColorBar from "./modules/components/ThemeColorBar"
import Switch from "./modules/components/Switch"
import urlConstant from "./constant/urlConstant"
import Route from "./modules/components/Route"
import ToastContainer from "./modules/components/ToastContainer"
import HomePage from "./views/pages/HomePage"
import NavbarContainer from "./views/containers/NavbarContainer"
import MovieProfilePage from "./views/pages/MovieProfilePage"

function App()
{
    return (
        <div id="index-temp" className="index-temp">
            <Switch>
                <Route path={urlConstant.movieProfile(":id")} render={route => <MovieProfilePage route={route}/>}/>
                <Route path={urlConstant.home} render={route => <HomePage route={route}/>}/>
            </Switch>

            <NavbarContainer/>
            <ThemeColorBar/>
            <ToastContainer/>
        </div>
    )
}

export default App