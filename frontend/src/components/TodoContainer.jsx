import { useEffect, useState } from 'react'

export const TodoContainer = () => {
    const [todos, setTodos] = useState([])

    const fetchTodos = async (url) => {
        const request = await fetch(url, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
        const response = await request.json()
        setTodos(response.todos)
    }

    useEffect(() => {
        fetchTodos("http://localhost:8080/todos")
    }, [todos])
    return (
        <>
            {todos.length > 0 ? (
                <>
                    <h3>{`Welcome ${todos[0].username}`}</h3>
                    {todos.map((todo)=>(
                        <div key={todo._id} style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
                            <h3>{todo.title}</h3>
                            <p>{todo.des}</p>
                            <p>{todo.status}</p>
                            <button>Toggle Status</button>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    ))}
                </>
            ):(
                <>
                    <h3>No todos found!</h3>
                </>
            )}
        </>
    )
}       