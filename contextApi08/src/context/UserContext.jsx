import React, { createContext } from 'react'

export const DataContext = createContext()   //it helps to provide the data

const UserContext = ({children}) => {
    //we destructured children from the props
    // console.log(props.children)
    const username = "Bharat" //we want to send this data to all the compenets of our website
    //so at first we wrap our <App/> in main.jsx with <UserContext>

    const userData = {
      username: "Bharat joshi",
      age: 23,
      city: "Almora"
    }

  return (
    <div>
      {/* <DataContext.Provider value={username}>  ... if we want to pass only one value*/}
      <DataContext.Provider value={{username, userData}}>
        {/* so from here we paseed username for everyone, with the help of DataContext */}
          {children} 
      </DataContext.Provider>
        
      {/* so we passed childern in usercontext so here , <App /> the child of <UserContext> comes here. */}
    </div>
  )
}

export default UserContext
