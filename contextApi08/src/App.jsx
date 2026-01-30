// Context API
// context API is a state management tool which is used to centralized the data.
// In props we can pass data only to the childrens but, in context api we put data in center and anybody can use the data from there.
import React, { useContext } from 'react'
import Header from './components/header'
import Section from './components/Section'
import Footer from './components/Footer'
import { DataContext } from './context/UserContext'

const App = () => {

  // using the data which is provided by ContextApi (DataContext)
  const {data} = useContext(DataContext)
  //this useContext() is a hook to receive data
  console.log(data)   //here we get the data which is spreaded by DataContext, so that everybody can directly use it

  return (
    <div>
      <h1>This is APP - here we get the DATA : {data}</h1>
      <Header/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default App
