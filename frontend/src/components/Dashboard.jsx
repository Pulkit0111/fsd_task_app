import { Input } from "./Input"
import { TodoContainer } from "./TodoContainer"
import { useContext } from 'react'
import { AuthContext } from '../AuthContext'
export const Dashboard = () => {
    const {logout} = useContext(AuthContext)
    return (
        <>
            <Input/>    
            <TodoContainer/>
            <button onClick={logout}>Logout</button>
        </>
    )
}