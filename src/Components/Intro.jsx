import React from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Intro() {
    const { user } = useContext(UserContext)

    if (!user) {
      return <div>Please log in</div>
    }

  return (
    <div className="flex gap-4 items-center">
       <img src={user.img} alt={user.name} className="h-10 w-10 rounded-full object-cover" />
       <div className="">
        <div className="">{user.name}</div>
        <div className="">{user.email}</div>
       </div>
    </div>
  )
}

export default Intro;
