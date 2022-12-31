import ToastContainer from "./seyed-modules/components/ToastContainer"
import ThemeColorBar from "./seyed-modules/components/ThemeColorBar"
import MyPlayer from "./views/components/MyPlayer"

function App()
{
    return (
        <div id="index-temp" className="index-temp">
            <ThemeColorBar/>
            <div style={{margin: "var(--mobile-second-solid-padding)"}}>
                <MyPlayer url="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8"/>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default App