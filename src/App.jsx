import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <nav>
    <img src="/vite.svg" alt=""/>
    <ul>
    <li>Home</li>
      <li>About Us</li>
        <li>Categories</li>
          <li>Checkout</li>
          </ul>
          <div className="act-btns">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
      </nav>
      
      <section>
        <div className="banner">
          <img src="/Car Bannerr.avif " alt="" />
        </div>
      </section>
    </>
  )
}

export default App
