import { useEffect, useState } from "react"
import { client } from "../utils"
import { useParams } from "react-router-dom"

function useComment() {

    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { postId } = useParams()



    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = () => {
        setIsLoading(true)
        client.get(`/comments?postId=${postId}`).then(res => {
            setComments(res.data)
        }).finally(() => {
            setIsLoading(false)
        })
    }


    return { comments, isLoading }
}

export default useComment