import { useState } from 'react'

export const Input = () => {
    const [title, setTitle] = useState('')
    const [des, setDes] = useState('')

    const handleAddTodo = async () => {
        const request = await fetch("http://localhost:8080/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({title, des, status: false})
        })
        const response = await request.json()
        console.log(response)
    }
    return (
        <>
            <input type="text" placeholder="Enter the todo" onChange={(e) => setTitle(e.target.value)} value={title}/>
            <textarea placeholder="Enter the description" onChange={(e) => setDes(e.target.value)} value={des}/>
            <button onClick={handleAddTodo}>Add</button>
        </>
    )
}