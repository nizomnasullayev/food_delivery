import { useEffect, useState } from "react"
import { client } from "../utils"


function usePost(selectedUser: number = 0) {

    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    

    useEffect(() => {
        getPosts()
    }, [selectedUser])

    const getPosts = () => {
        setIsLoading(true)
        const url = selectedUser == 0 ? "/posts" : `/posts?userId=${selectedUser}`;
        console.log(url);
        client.get(url).then(res => {
            setPosts(res.data)
        }).finally(() => {
            setIsLoading(false)
        })
    }


    return { posts, isLoading }
}

export default usePost