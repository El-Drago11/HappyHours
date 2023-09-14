import React, { useEffect } from 'react'
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { Link, useNavigate} from 'react-router-dom';
// useSelector is used for suscribing the data from the store;
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../store/cartSlice';
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';// Importing auth from firbase.js file
import { toogleGptSearchView } from '../store/gptSlice';
import { Search } from '@mui/icons-material';
import { SUPPORTED_LANG } from '../utils/constant';
import { changeLanguage } from '../store/configSlice';

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showLang = useSelector((store)=>store.gpt.showGptSearch)

  const handleGpt =()=>{
    dispatch(toogleGptSearchView());
    navigate('/Home/Gpt')
  }

  const handleLanguageChange =(e)=>{
      dispatch(changeLanguage(e.target.value));
  }

  const handleHome =()=>{
    dispatch(toogleGptSearchView());
    navigate('/Home')
  }

  const logout=()=>{
    //--->Step1: Signing Out
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });

    //--->Step3: Re-rendered to landing page
    navigate('/');
    //--->Step4: Removing user from store
    dispatch(removeUser())
  }

  // Subscribing to cart item from store
  const cartItem = useSelector((store)=>store.cart.items)
  const userData = useSelector((store)=>store.cart.user)

  useEffect(() => {

    //--->Checking if the user is authenticated or not each time tehre is reload reload the app
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is authenticated than automatically authenticate it to the Home page
        dispatch(addUser(user))
        navigate('/Home')

      } else {
        // if user is not authenticated than automatically navigate it to login page
        dispatch(removeUser());
        navigate('/')
      }
    });

    // Unsubscribing to the onAuthSatteChanged because it was again and again checking for authentication when the header reload
    // it will happen when the Navbar unmount
    return ()=> unsubscribe();
    //  eslint-disable-next-line
  }, [])


  return (
  <div className='container-fluid'>
    <nav className="navbar navbar-expand-lg sticky-top"style={{lineHeight:'3rem'}}>
      <div className="container-fluid" >
        <Link to="/Home" className="navbar-brand text-light"style={{background:'red',WebkitBackgroundClip:'Text',WebkitTextFillColor:'transparent' , fontSize:'2.5rem',fontWeight:'500'}}>HappyHours</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="my-auto mx-3">
            {showLang && <select className='btn btn-secondary btn-sm bg-secondary text-light' style={{border:'none'}} onChange={handleLanguageChange}>
                {SUPPORTED_LANG.map(lang=><option className='text-light' key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
              </select>}
            </li>
          </ul> 
          {!showLang ? <div button type="button" className="btn btn-info mx-3 p-2" onClick={()=>handleGpt()}><b>GPT</b>{<Search/>}</div> : <div button type="button" className="btn btn-danger mx-3 p-2" onClick={()=>handleHome()}><b>Home</b></div>}
          <span className='text-light me-3'><b>{userData[0]?.email.slice(0,7)}..</b></span>
          <div button type="button" className="btn btn-danger mx-1 me-2" onClick={()=>logout()}>LogOut</div>
          <Link to="/Home/WatchLater" button type="button" className=" mx-md-3 text-light bg-dark" style={{border:'none',objectFit:'contain',mixBlendMode:'color-burn'}}><span className='position-relative p-2'><WatchLaterIcon/><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartItem.length}<span className="visually-hidden">WatchLater</span></span></span></Link>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default NavBar
