import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../features/userSlice'

function User() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.user.user)
  console.log(users);

  useEffect(() => {
dispatch(getUser())
  }, [])
  
  return (
    <div>
  {users.map((item) => {
    return <div>имя:{item.name}  фамилия:{item.lastname}</div>
  })}
    </div>
  )
}

export default User