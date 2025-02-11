import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = async () => {
        const request = await fetch("http://localhost:8080/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, pass})
        })
        const response = await request.json()
        console.log(response)
        if(response.token) {
            login()
            localStorage.setItem("accessToken", response.token)
            navigate('/')
        }
    }
    return (
        <>
            <h3>Already have an account? Login here</h3>
            <input type="text" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} value={username}/>
            <input type="password" placeholder="Enter desired password" onChange={(e) => setPass(e.target.value)} value={pass}/>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}