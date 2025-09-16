import A from "./components/A"
import MyContextApi from "./hooks/MyContextApi"
import { type ReactElement } from "react"

function App(): ReactElement {
    return (
        <MyContextApi>
            <div className="container" >
                <A />
            </div>
        </MyContextApi>
    )
}

export default App