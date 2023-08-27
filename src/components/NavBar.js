import React from 'react'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { useStateValue } from './StateProvider';
import { Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  // Auth0 built in function
  const {loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

  const[{basket}] = useStateValue();
  console.log(basket)
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
          <button type="button" href='notify' className=" mx-md-3 text-light bg-dark" style={{border:'none'}}><span className='position-relative'><CircleNotificationsIcon/><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">9+<span className="visually-hidden">unread messages</span></span></span></button>  
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
