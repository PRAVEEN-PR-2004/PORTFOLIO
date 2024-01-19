import React from 'react'
import { NavLink } from 'react-router-dom'
const MainCart = (props) => {
  return (
<div className='project-card '>
    <img src={props.imgsrc} alt='img'/>
    <h2 className='project-title>'>{props.title}</h2>
    <div className='pro-details'>
        <p>{props.text}</p>
        <div className='pro-btns'>
            <NavLink to={props.view} className="btn">view</NavLink>
            <NavLink to={props.veiw} className="btn">source</NavLink>
        </div>
    </div>
</div>
  )
}

export default MainCart