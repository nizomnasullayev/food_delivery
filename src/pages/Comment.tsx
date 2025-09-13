import useComment from "../hooks/useComment"

function Comment() {


    const { comments, isLoading } = useComment()

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {comments.map((comment: any) => (
                <div key={comment.id} style={{ border: "1px solid black", marginBottom: "10px", padding: "10px" }}>
                    <h5>{comment.name}</h5>
                    <p>{comment.body}</p>
                    <p><b>Email:</b> {comment.email}</p>
                </div>
            ))}
        </div>
    )
}

export default Comment