import {Signup} from '../components/Signup'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import { Dashboard } from "../components/Dashboard"
export const Home = () => {
    const {isLoggedIn} = useContext(AuthContext)
    return (
        <>
            {isLoggedIn ? <Dashboard/> : (
                <>
                    <Signup/>
                    <Link to="/login">Already have an account? Login here</Link>
                </>
            )}
        </>
    )
}