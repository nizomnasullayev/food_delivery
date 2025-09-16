import { useEffect, useState, useCallback } from "react"
import { client } from "../utils"
import { type Todo, type UseTodoReturn } from "../types"

function useTodo(selectedUser: number = 0): UseTodoReturn {
    const [todos, setTodos] = useState<Todo[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getTodos = useCallback((): void => {
        setIsLoading(true)
        const url = selectedUser === 0 ? "/todos" : `/todos?userId=${selectedUser}`;
        client.get(url).then(res => {
            setTodos(res.data)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [selectedUser])

    useEffect(() => {
        getTodos()
    }, [getTodos])

    return { getTodos, todos, isLoading }
}

export default useTodo