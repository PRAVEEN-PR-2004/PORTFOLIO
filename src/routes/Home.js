import React from 'react'
import Navbar from '../Component/Navbar'
import  Heroimg  from '../Component/Heroimg'
import Footer from '../Component/Footer'
import WorkCart from '../Component/WorkCart'


function Home() {
  return (
    <div>
    
        <Navbar/>
        <Heroimg />
        <WorkCart />

        <Footer/>
    </div>
  )
}

export default Home