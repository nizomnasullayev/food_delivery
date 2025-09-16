import { useEffect, useState } from "react"
import { client } from "../utils"


function useTodo(selectedUser: number = 0) {

    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getTodos()
    }, [selectedUser])

    const getTodos = () => {
        setIsLoading(true)
        const url = selectedUser == 0 ? "/todos" : `/todos?userId=${selectedUser}`;
        client.get(url).then(res => {
            setTodos(res.data)
        }).finally(() => {
            setIsLoading(false)
        })
    }


    return { getTodos, todos, isLoading }
}

export default useTodo