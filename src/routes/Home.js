import React from 'react'
import Navbar from '../Component/Navbar'
import  Heroimg  from '../Component/Heroimg'
import Footer from '../Component/Footer'
import ScrollTransition from '../Component/Scroll'

function Home() {
  return (
    <div>
      <ScrollTransition/>
        <Navbar/>
        <Heroimg />
        <Footer/>
    </div>
  )
}

export default Home