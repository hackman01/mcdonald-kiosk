
import './front.css';
import { Link } from 'react-router-dom';

export default function Front() {
  return (
    <div className='front'>
      <div className="container">
        
        
        <img src="front.jpg" alt="front-img" className='front-img' />
        
        <Link to="/payment" style={{ textDecoration:'none',color:'black' }}>
        <div className="footer">
           <img src="pngegg.png" alt="M" className='m' />
           <p>Click here to order!</p>
        </div>
        </Link>
        
      </div>
    </div>
  )
}
