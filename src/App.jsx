import { useState } from 'react'
import './App.css'
import NavbarComponent from './components/NavbarComponent'
import AboutUsComponent from './components/AboutUsComponent'
import FooterComponent from './components/FooterComponent'
import MensComponent from './components/MensComponent'
import WomensComponent from './components/WomensComponent'

function App() {
  return (
    <>
  {/* navbar start */}

      <NavbarComponent/>

   {/* navbar end */}

   {/* About us start */}
      
      <AboutUsComponent/>

    {/* about us end  */}

<br></br>

     {/* mrn collection startt */}

      <MensComponent/>

    {/* men collection end */}

<br></br>

      {/* women collection startt */}

      <WomensComponent/>

      {/* women collection end */}

<br></br>

      {/* footer start */}

      <FooterComponent/>

      {/* footer end */}
    </>
  )
}

export default App
