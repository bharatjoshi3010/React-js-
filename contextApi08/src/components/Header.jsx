import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Header = () => {

    const {username} = useContext(DataContext)
    //so by this you can access teh context anywhere

  return (
    <div>
      <h1>Header {username}</h1>
    </div>
  )
}

export default Header
