import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../features/applicationSlice'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    

    function handleLogin(e){
e.preventDefault()
        dispatch(auth({login, password}))
        setLogin('')
        setPassword('')
        navigate('/user')

    }

  return (
    <div>
        <form action="">
        <div><input value={login} onChange={(e) => setLogin(e.target.value)} placeholder='login' type="text" /></div>
        <div><input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' type="text" /></div>
        <button onClick={handleLogin}>Войти</button>

        </form>
    </div>
  )
}

export default Login