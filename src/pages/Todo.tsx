import { toast } from "react-toastify"
import useTodo from "../hooks/useTodo"
import { client } from "../utils"
import SelectBox from "../components/SelectBox"
import { useState } from "react"
import useUsers from "../hooks/useUsers"

function Todo() {

    const [selectedUser, setSelectedUser] = useState(0)
    const { getTodos, todos, isLoading } = useTodo(selectedUser)
    const { users } = useUsers()

    if (isLoading) {
        return <div>Loading...</div>
    }

    const editTodo = async (todo) => {
        await client.patch(`/todos/${todo.id}`, { completed: !todo.completed })
        toast.success("Todo updated")
        getTodos()
    }

    return (
        <div>
            <h1>Todo List</h1>
            <SelectBox selectedUser={selectedUser} setSelectedUser={setSelectedUser} users={users} />
            {todos.map(todo => (
                <div key={todo.id} style={{ marginBottom: "10px", padding: "10px", border: "1px solid #ccc" }}>
                    <h3>{todo.title}</h3>
                    <input onChange={() => editTodo(todo)} checked={todo.completed} type="checkbox" />
                </div>
            ))}
        </div>
    )
}

export default Todo