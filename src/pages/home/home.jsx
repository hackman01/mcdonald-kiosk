import React from 'react'
import './home.css';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className='home'>
      <div className="container">
        <div className='m'>
        <img src="pngegg.png" className='m-img' alt="M" />
        <p>Where are you eating today?</p>
        </div>
        <div className="options">
        <Link to="/select" style={{ textDecoration:'none',color:'black' }} >
        <div className="eat-in">
            <img src="meal.png" alt="meal" className='meal-img' />
            <p>Eat In</p>
        </div>
        </Link>
       <Link to="/select" style={{ textDecoration:'none',color:'black' }} >
       <div className="take-out">
            <img src="take-out.png" alt="meal-bag" className='take-out-img'/>
            <p>Take Out</p>
        </div>
       </Link>
       
        </div>
      </div>
    </div>
  )
}
