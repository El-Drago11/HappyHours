import React from 'react'

const Footer = () => {
  return (
    <div>
        <nav className="container-fluid" >
            <ul class="nav nav-pills nav-justified" style={{border: '1px solid',paddingTop:'10px'}}>
                <li class="nav-item">
                    <a className="navbar-brand text-light" href="Home"style={{background:'red',WebkitBackgroundClip:'Text',WebkitTextFillColor:'transparent' , fontSize:'40px',fontWeight:'600'}}>NETFLIX</a>
                    <li class="nav-item my-md-1" style={{display:'flex'}}>
                        <a class="nav-link text-light" aria-current="page" href="/"><span className="navbar-toggler-icon"><i class="fa-xs bi bi-instagram" style={{fontSize:'1.5rem'}}></i></span></a>
                        <a class="nav-link text-light" aria-current="page" href="/"><span className="navbar-toggler-icon"><i class="bi bi-github" style={{fontSize:'1.5rem'}}></i></span></a>
                        <a class="nav-link text-light" aria-current="page" href="/"><span className="navbar-toggler-icon"><i class="bi bi-twitter"  style={{fontSize:'1.5rem'}}></i></span></a>
                    </li>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" aria-current="page" href="/">FAQ</a>
                    <a class="nav-link text-light" aria-current="page" href="/">Media Centre</a>
                    <a class="nav-link text-light" aria-current="page" href="/">Ways to Watch</a>
                    <a class="nav-link text-light" aria-current="page" href="/">Cookie Preferences</a>
                    <a class="nav-link text-light" aria-current="page" href="/">Speed Test</a>
                </li>
                <li class="nav-item flex-column">
                    <a class="nav-link text-light" href="/">Help Centre</a>
                    <a class="nav-link text-light" href="/">Investor Relation</a>
                    <a class="nav-link text-light" href="/">Terms of Use</a>
                    <a class="nav-link text-light" href="/">Corporate Information</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="/">Account</a>
                    <a class="nav-link text-light" href="/">Jobs</a>
                    <a class="nav-link text-light" href="/">Privacy</a>
                    <a class="nav-link text-light" href="/">Contact Us</a>
                    <a class="nav-link text-light" href="/">Only on Netflix</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Footer
