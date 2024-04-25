import React from 'react'
import { Slide } from 'react-awesome-reveal'
import { NavLink } from 'react-router-dom'
const MainCart = (props) => {
  return (
    <Slide triggerOnce duration={1000}>
<div className='project-card '>
    <img src={props.imgsrc} alt='img'/>
    <h2 className='project-title>'>{props.title}</h2>
    <div className='pro-details'>
        <p>{props.text}</p>
        <div className='pro-btns'>
            <NavLink to={props.view} className="homebtn">view</NavLink>
            <NavLink to={props.source} className="homebtn">source</NavLink>
        </div>
    </div>
</div>
</Slide>
  )
}

export default MainCart