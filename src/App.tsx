import A from "./components/A"
import MyContextApi from "./hooks/MyContextApi"

function App() {


    return (
        <MyContextApi>
            <div className="container" >
                <A />
            </div>
        </MyContextApi>

    )
}

export default App