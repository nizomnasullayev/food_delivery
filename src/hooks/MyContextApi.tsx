import { createContext, useReducer } from "react"
export const MyContext = createContext({});


function Reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            state = {...state, count: state.count + action.payload }
            break;
        case "SET_NAME":
            state = {...state, user: { ...state.user, name: "Nizom" } }
            break;
    }    
    return state;
}

function MyContextApi(props: { children: React.ReactNode }) {


    const [state, dispatch] = useReducer(Reducer, {
        count: 0,
        user: { name: "Hasan", age: 20 },
        theme: "dark"
    })



    return (
        <MyContext.Provider value={{ state, dispatch }} >
            {props.children}
        </MyContext.Provider>
    )
}

export default MyContextApi