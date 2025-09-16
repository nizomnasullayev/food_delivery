import { useEffect, useState } from "react"
import { client } from "../utils"
import { type User, type UseUsersReturn } from "../types"

function useUsers(): UseUsersReturn {
    const [users, setUsers] = useState<User[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = (): void => {
        setIsLoading(true)
        client.get("/users").then(res => {
            setUsers(res.data)
        }).finally(() => {
            setIsLoading(false)
        })
    }

    return { users, isLoading }
}

export default useUsers