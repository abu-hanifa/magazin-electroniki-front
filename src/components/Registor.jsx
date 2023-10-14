import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../features/applicationSlice'

function Registor() {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()


    function handleRegister(){
        dispatch(register({name, lastname, email, age, login, password}))

    }

  return (
    <div>
        <form action="">
       <div> <input value={name} onChange={(e) => setName(e.target.value)} placeholder='name' type="text" /></div>
       <div> <input value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder='lastname' type="text" /></div>
       <div> <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' type="email" /></div>
       <div> <input value={age} onChange={(e) => setAge(e.target.value)} placeholder='age' type="text" /></div>
       <div> <input value={login} onChange={(e) => setLogin(e.target.value)} placeholder='login' type="text" /></div>
       <div> <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' type="password" /></div>
        <button onClick={handleRegister}>Зарегестрироваться</button>






        </form>
    </div>
  )
}

export default Registor