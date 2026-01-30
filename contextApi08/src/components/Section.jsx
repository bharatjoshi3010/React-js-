import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Section = () => {

    const {userData} = useContext(DataContext)
 
  return (
    <div>
      <h1>Section</h1>
      <p>{userData.username}</p>
      <p>{userData.age}</p>
    </div>
  )
}

export default Section
