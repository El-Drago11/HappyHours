import React from 'react'
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

// useSelector is used for suscribing the data from the store;
import { useSelector } from 'react-redux';


const NavBar = () => {
  // Auth0 built in function
  const {loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

  // Subscribing to cart item from store
  const cartItem = useSelector((store)=>store.cart.items)
  console.log(cartItem)

  return (
  <div>
    <nav className="navbar navbar-expand-lg sticky-top"style={{lineHeight:'3rem'}}>
      <div className="container-fluid" >
        <Link to="/" className="navbar-brand text-light"style={{background:'red',WebkitBackgroundClip:'Text',WebkitTextFillColor:'transparent' , fontSize:'2.5rem',fontWeight:'500'}}>NETFLIX</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            {isAuthenticated?
            <li className="nav-item">
              <Link to="/Home" className="nav-link active text-light" aria-current="page" style={{fontSize:'1.5rem', alignItems:'center'}}>Home</Link>
            </li>
            :''}  
          </ul> 
          {isAuthenticated?
          <Link to="/Home/WatchLater" button type="button" className=" mx-md-3 text-light bg-dark" style={{border:'none',objectFit:'contain',mixBlendMode:'color-burn'}}><span className='position-relative p-2'><WatchLaterIcon/><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartItem.length}<span className="visually-hidden">WatchLater</span></span></span></Link>  
          :''} 
          {
          //user isAuthenticated(when user has been loged-in) than show LogOut button else if user not Authenticated than show login button
          isAuthenticated ?<div button type="button" className="btn btn-danger mx-md-1 me-md-5" onClick={()=>logout()}>LogOut</div>
          :<button type="button" className="btn btn-danger mx-md-1" onClick={()=>loginWithRedirect().then(window.location.href = "/Home")}>LogIn</button>
          }
          {isAuthenticated?
          <img src={user.picture} height='40px' width='40px' alt='err'/>
          :''} 
        </div>
      </div>
    </nav>
  </div>
  )
}

export default NavBar
