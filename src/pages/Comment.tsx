import useComment from "../hooks/useComment"
import { type Comment as CommentType } from "../types"
import { type ReactElement } from "react"

function Comment(): ReactElement {
    const { comments, isLoading } = useComment()

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {comments.map((comment: CommentType) => (
                <div key={comment.name} style={{ border: "1px solid black", marginBottom: "10px", padding: "10px" }}>
                    <h5>{comment.name}</h5>
                    <p>{comment.body}</p>
                    <p><b>Email:</b> {comment.email}</p>
                </div>
            ))}
        </div>
    )
}

export default Comment