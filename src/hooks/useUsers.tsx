import { useEffect, useState } from "react"
import { client } from "../utils"


function useUsers() {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = () => {
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