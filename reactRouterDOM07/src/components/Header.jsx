import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='py-7 px-10 bg-emerald-600 text-white flex items-center justify-between'>
      <h2 className='text-2xl'>Bharats</h2>
      <div className='flex gap-10 text-lg underline'>
        {/* <a className='text-xl underline' href="/home">Home</a>
        <a className='text-xl underline' href="/about">About</a>
        <a className='text-xl underline' href="/contact">Contact</a>
        <a className='text-xl underline' href="/product">Product</a> */}
        {/* in this we can see that page is still refreshing, it is fast but not that much efficient */}
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>Product</Link>
        <Link to='/contact'>Contact</Link>
            {/* Now you can see that page is not reloading just the components are updating, its the special ability of react-router-DOM */}
{/* here only the page below the navbar is changing and the remaining is still the same */}
      </div>
    </div>
  )
}

export default Header
