import React from 'react';
import './select.css';
import { Link } from 'react-router-dom';

export default function Select() {

  

  return (
    <div className='select'>
    <div className="container">
      <div className='m'>
      
      <p>What are you eating today?</p>
      </div>
      <div className="options">
      <Link to="/placed" style={{ textDecoration:'none',color:'black' }}>
      <div className="eat-in" >
          <img src="food1.png" alt="meal" className='meal-img' />
          <p>Burger</p>
      </div>
      </Link>
      <Link to="/placed"  style={{ textDecoration:'none',color:'black' }}>
      <div className="take-out">
          <img src="food2.png" alt="meal-bag" className='take-out-img'/>
          <p>Pizza</p>
      </div>
      </Link>
      <Link to="/placed" style={{ textDecoration:'none',color:'black' }}>
      <div className="take-out">
          <img src="food3.png" alt="meal-bag" className='take-out-img'/>
          <p>French Fries</p>
      </div>
      </Link>
      <Link to="/placed" style={{ textDecoration:'none',color:'black' }}>
      <div className="take-out">
          <img src="food4.png" alt="meal-bag" className='take-out-img'/>
          <p>Cold Drink</p>
      </div>
      </Link>
      <Link to="/placed" style={{ textDecoration:'none',color:'black' }}>
      <div className="take-out">
          <img src="food5.png" alt="meal-bag" className='take-out-img'/>
          <p>Momos</p>
      </div>
      </Link>
      <Link to="/placed" style={{ textDecoration:'none',color:'black' }}>
      <div className="take-out">
          <img src="food6.png" alt="meal-bag" className='take-out-img'/>
          <p>Sandwich</p>
      </div>
      </Link>
     
      </div>
    </div>
  </div>
  )
}
