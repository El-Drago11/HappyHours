import React from 'react'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const[{basket}] = useStateValue();
  console.log(basket)
  return (
  <div>
    <nav className="navbar navbar-expand-lg sticky-top"style={{lineHeight:'3rem'}}>
      <div className="container-fluid" >
        <Link to="/" className="navbar-brand text-light"style={{background:'red',WebkitBackgroundClip:'Text',WebkitTextFillColor:'transparent' , fontSize:'3rem',fontWeight:'700'}}>NETFLIX</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active text-light" aria-current="page" style={{fontSize:'1.5rem', alignItems:'center'}}>Home</Link>
            </li>
          </ul> 
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">search</button>
          </form>
          <button type="button" href='notify' className=" mx-md-3 text-light bg-dark" style={{border:'none'}}><span className='position-relative'><CircleNotificationsIcon/><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">9+<span className="visually-hidden">unread messages</span></span></span></button>
          <button type="button" className="btn btn-danger mx-md-1">Sign-Up </button>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default NavBar
