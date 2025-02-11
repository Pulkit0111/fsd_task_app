import { useState } from 'react'

export const Signup = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleRegister = async () => {
        const request = await fetch("http://localhost:8080/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, username, email, pass})
        })
        const response = await request.json()
        console.log(response)
    }
    return (
        <>
            <h3>Please register to continue</h3>
            <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} value={name}/>
            <input type="text" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} value={username}/>
            <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <input type="password" placeholder="Enter desired password" onChange={(e) => setPass(e.target.value)} value={pass}/>
            <button onClick={handleRegister}>Signup</button>
        </>
    )
}