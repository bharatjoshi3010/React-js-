// npm i react-router-dom   //installing react-router-DOM
// cover App.jsx inside browser router in main.jsx
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Home from './pages/Home'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>     
        {/* <Routes> is a container of different type of routes */}
        {/* Syntax */}
        {/* <Route path='/routePath' element={<componentsName/>} /> */}
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
