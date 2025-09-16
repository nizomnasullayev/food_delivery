import { createContext, use, useState } from "react"
export const MyContext = createContext({});

function MyContextApi(props: { children: React.ReactNode }) {


    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const [arr, setArr] = useState([1,2,3,4])

    return (
        <MyContext.Provider value={{ count, setCount, count2, arr }} >
            {props.children}
        </MyContext.Provider>
    )
}

export default MyContextApi