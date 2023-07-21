import React from 'react'
import '../CSS/Landing.css';

const Landing = () => {
  return (
    <div className='Container-fluid' id='Main'>
        <div className='Container-fluid'style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItem:'center',height:'40rem'}}>
            <div className="navbar-brand text-light"style={{background:'White',WebkitBackgroundClip:'Text',WebkitTextFillColor:'transparent' , fontSize:'3.5rem',fontWeight:'800',display:'flex', justifyContent:'center', alignItem:'center'}}>Unlimited movies, TV shows and more
            </div>
            <div className="navbar-brand text-light"style={{background:'White',WebkitBackgroundClip:'Text',WebkitTextFillColor:'transparent' , fontSize:'2rem',fontWeight:'700',display:'flex', justifyContent:'center', alignItem:'center'}}>Watch anywhere. Cancel anytime
            </div>
            <div className="navbar-brand text-light"style={{background:'White',WebkitBackgroundClip:'Text',WebkitTextFillColor:'transparent' , fontSize:'1.7rem',fontWeight:'700',display:'flex', justifyContent:'center', alignItem:'center'}}>Ready to watch? Enter your email to create or restart your membership.
            </div>
            <div class="constainer input-group input-group-lg my-md-5" style={{width:'50%',marginLeft:'25%'}}>
                <input type="email" class="form-control mx-md-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" va/>
                <span class="bg-danger btn" id="inputGroup-sizing-lg">Get Started </span>
            </div>
        </div>
        
        
    </div>
  )
}

export default Landing
