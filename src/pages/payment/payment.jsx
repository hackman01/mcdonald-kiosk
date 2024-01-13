import React from 'react'
import './payment.css';
import { Link } from 'react-router-dom';

export default function Payment() {
  return (
    <div className='payment'>
      <div className="container">
        <div className='m'>
  
        <p>Whats your payment method?</p>
        </div>
        <div className="options">
          <Link to="/home"><button className='btn' >Cash On Counter</button></Link>
           <Link to="/home"><button className='btn' >Card/NETS</button></Link>
        </div>
      </div>
    </div>
  )
}
