import React from 'react'
import "./Skill.css"
import { Slide } from "react-awesome-reveal";

const Skill = () => {
  return (
    <Slide triggerOnce duration={1000}>
    <div className='skill'>
            <h1 className='skillheading'>SKILLS</h1>
        <div className='card-container'>
            <div className='card'>
                <h3>- FRONTEND -</h3>
                <span className='bar'></span>
                <p>- HTML -</p>
                <p>- CSS -</p>
                <p>- BOOSTRAP -</p>
                <p>- JAVA SCRIPT -</p>
                <p>- REACT JS -</p>

            </div>
            <div className='card'>
                <h3>- BACKEND -</h3>
                <span className='bar'></span>
                <p>- PHP -</p>
                <p>- MYSQL -</p>
                <p>- MANGODB -</p>
                
            </div>
            <div className='card'>
                <h3>- PROGRAMMIG -</h3>
                <span className='bar'></span>
                <p>- JAVA -</p>
                <p>- C -</p>
               

            </div>
        </div>
    </div>
    </Slide>
  )
}

export default Skill