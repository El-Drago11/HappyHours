import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
        <nav className="container-fluid" >
            <ul class="nav nav-pills nav-justified" style={{border: '1px solid',paddingTop:'10px'}}>
                <li class="nav-item">
                    <Link className="navbar-brand text-light" to="Home"style={{background:'red',WebkitBackgroundClip:'Text',WebkitTextFillColor:'transparent' , fontSize:'40px',fontWeight:'600'}}>NETFLIX</Link>
                    <li class="nav-item my-md-1" style={{display:'flex'}}>
                        <Link class="nav-link text-light" aria-current="page" to="/Home"><span className="navbar-toggler-icon"><i class="fa-xs bi bi-instagram" style={{fontSize:'1.5rem'}}></i></span></Link>
                        <Link class="nav-link text-light" aria-current="page" to="/Home"><span className="navbar-toggler-icon"><i class="bi bi-github" style={{fontSize:'1.5rem'}}></i></span></Link>
                        <Link class="nav-link text-light" aria-current="page" to="/Home"><span className="navbar-toggler-icon"><i class="bi bi-twitter"  style={{fontSize:'1.5rem'}}></i></span></Link>
                    </li>
                </li>
                <li class="nav-item">
                    <Link class="nav-link text-light" aria-current="page" to="/Home">FAQ</Link>
                    <Link class="nav-link text-light" aria-current="page" to="/Home">Media Centre</Link>
                    <Link class="nav-link text-light" aria-current="page" to="/Home">Ways to Watch</Link>
                    <Link class="nav-link text-light" aria-current="page" to="/Home">Cookie Preferences</Link>
                    <Link class="nav-link text-light" aria-current="page" to="/Home">Speed Test</Link>
                </li>
                <li class="nav-item flex-column">
                    <Link class="nav-link text-light" to="/Home">Help Centre</Link>
                    <Link class="nav-link text-light" to="/Home">Investor Relation</Link>
                    <Link class="nav-link text-light" to="/Home">Terms of Use</Link>
                    <Link class="nav-link text-light" to="/Home">Corporate Information</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link text-light" to="/Home">Account</Link>
                    <Link class="nav-link text-light" to="/Home">Jobs</Link>
                    <Link class="nav-link text-light" to="/Home">Privacy</Link>
                    <Link class="nav-link text-light" to="/Home">Contact Us</Link>
                    <Link class="nav-link text-light" to="/Home">Only on Netflix</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Footer
