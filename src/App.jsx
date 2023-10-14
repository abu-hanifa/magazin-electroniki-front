import { Route, Routes } from "react-router-dom"
import Registor from "./components/Registor"
import Login from "./components/Login"
import User from "./components/User"


function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Registor/>} />
        <Route path="login" element={<Login/>}/>
        <Route path="user" element={<User/>}/>
      </Routes>
    </div>
  )
}

export default App
