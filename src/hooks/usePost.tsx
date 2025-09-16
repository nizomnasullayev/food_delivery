import { useEffect, useState, useCallback } from "react"
import { client } from "../utils"
import { type Post, type UsePostReturn } from "../types"

function usePost(selectedUser: number = 0): UsePostReturn {
    const [posts, setPosts] = useState<Post[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getPosts = useCallback((): void => {
        setIsLoading(true)
        const url = selectedUser === 0 ? "/posts" : `/posts?userId=${selectedUser}`;
        console.log(url);
        client.get(url).then(res => {
            setPosts(res.data)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [selectedUser])

    useEffect(() => {
        getPosts()
    }, [getPosts])

    return { posts, isLoading }
}

export default usePost