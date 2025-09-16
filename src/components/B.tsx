import { useContextApi } from "../hooks/useContextApi"
import { type ReactElement } from "react"

function B(): ReactElement {
    const { state, dispatch } = useContextApi()

    return (
        <div>
            B
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>increment</button>
            <hr />
            <h1>{state.user.name}</h1>
        </div>
    )
}

export default B