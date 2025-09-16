import { useReducer, type ReactNode } from "react"
import { type AppState, type Action } from "../types"
import { MyContext } from "../context/AppContext"

function Reducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case "INCREMENT":
            return {...state, count: state.count + action.payload };
        case "SET_NAME":
            return {...state, user: { ...state.user, name: "Nizom" } };
        default:
            return state;
    }    
}

interface MyContextApiProps {
    children: ReactNode;
}

function MyContextApi({ children }: MyContextApiProps) {
    const [state, dispatch] = useReducer(Reducer, {
        count: 0,
        user: { name: "Hasan", age: 20 },
        theme: "dark"
    })

    return (
        <MyContext.Provider value={{ state, dispatch }} >
            {children}
        </MyContext.Provider>
    )
}

export default MyContextApi