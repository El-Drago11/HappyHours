import React from 'react'
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { Link, useNavigate} from 'react-router-dom';
// useSelector is used for suscribing the data from the store;
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../store/cartSlice';
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';// Importing auth from firbase.js file

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout=()=>{
    //--->Step1: Signing Out
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });

    //--->Step3: Re-rendered to landing page
    navigate('/');
    //--->Step4: Removing user from store
    dispatch(removeUser())
  }

  // Subscribing to cart item from store
  const cartItem = useSelector((store)=>store.cart.items)
  console.log(cartItem)
  const userData = useSelector((store)=>store.cart.user)

  return (
  <div className='container-fluid'>
    <nav className="navbar navbar-expand-lg sticky-top"style={{lineHeight:'3rem'}}>
      <div className="container-fluid" >
        <Link to="/" className="navbar-brand text-light"style={{background:'red',WebkitBackgroundClip:'Text',WebkitTextFillColor:'transparent' , fontSize:'2.5rem',fontWeight:'500'}}>HappyHours</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/Home" className="nav-link active text-light" aria-current="page" style={{fontSize:'1.5rem', alignItems:'center'}}>Home</Link>
            </li>
          </ul> 
          <span className='text-light'><b>{userData[0].email}</b></span>
          <Link to="/Home/WatchLater" button type="button" className=" mx-md-3 text-light bg-dark" style={{border:'none',objectFit:'contain',mixBlendMode:'color-burn'}}><span className='position-relative p-2'><WatchLaterIcon/><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartItem.length}<span className="visually-hidden">WatchLater</span></span></span></Link>
          <div button type="button" className="btn btn-danger mx-md-1 me-md-5" onClick={()=>logout()}>LogOut</div>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default NavBar
