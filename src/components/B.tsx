import { useContextApi } from "../hooks/useContextApi"

function B() {

    const {  } = useContextApi()


    return (
        <div>
            B
            <h1>{}</h1>
            <button>increment</button>
            <hr />
            <h1></h1>
        </div>
    )
}

export default B