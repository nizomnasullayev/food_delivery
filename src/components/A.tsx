import { useContextApi } from "../hooks/useContextApi"
import { type ReactElement } from "react"

function A(): ReactElement {
    const { state, dispatch } = useContextApi()

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })} >increment</button>
            <hr />
            <h1>{state.user.name}</h1>
            <button onClick={() => dispatch({ type: "SET_NAME" })} >change username</button>
        </div>
    )
}

export default A