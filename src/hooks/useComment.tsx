import { useEffect, useState, useCallback } from "react"
import { client } from "../utils"
import { useParams } from "react-router-dom"
import { type Comment, type UseCommentReturn } from "../types"

function useComment(): UseCommentReturn {
    const [comments, setComments] = useState<Comment[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { postId } = useParams<{ postId: string }>()

    const getComments = useCallback((): void => {
        setIsLoading(true)
        client.get(`/comments?postId=${postId}`).then(res => {
            setComments(res.data)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [postId])

    useEffect(() => {
        getComments()
    }, [getComments])

    return { comments, isLoading }
}

export default useComment