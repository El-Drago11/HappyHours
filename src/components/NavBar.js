import React from 'react'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { useStateValue } from './StateProvider';

const NavBar = () => {
  const[{basket}] = useStateValue();
  console.log(basket)
  return (
  <div>
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid" >
        <a className="navbar-brand text-light" href="Home"style={{background:'red',WebkitBackgroundClip:'Text',WebkitTextFillColor:'transparent' , fontSize:'40px',fontWeight:'700'}}>NETFLIX</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="Documentry" style={{fontSize:'20px'}}>Home</a>
            </li>
          </ul> 
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">search</button>
          </form>
          <button type="button" href='notify' className=" mx-md-3 text-light bg-dark" style={{border:'none', textDecoration:'none'}}><span className='position-relative'><CircleNotificationsIcon/><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">99+<span className="visually-hidden">unread messages</span></span></span></button>
          <button type="button" className="btn btn-danger mx-md-1">Sign-Up {basket?.length}</button>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default NavBar
