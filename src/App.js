import Home from './pages/home/home';
import './App.css';
import Payment from './pages/payment/payment';
import Front from './pages/front/front';
import Select from './pages/select/select';
import Placed from './pages/placed/placed';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
<BrowserRouter>
      <div className='main'>
        <Routes>
          <Route exact path='/' element={<Front />} />
          <Route exact path='/payment' element={<Payment/>} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/select' element={<Select />} />
          <Route exact path='/placed' element={<Placed />} />
        </Routes>
      </div>
    </BrowserRouter>
  
  );
}

export default App;
