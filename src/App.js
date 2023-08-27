import React, { useEffect, useState} from 'react'
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./App.css";

import NavBar from './components/NavBar';
import Landing from './components/Landing';
import CardData from './components/CardData';
import SlideFull from './components/SlideFull';
import TrendingNow from './components/TrendingNow';
import Comedy from './components/Comedy';
import Documentry from './components/Documentry';
import HorrorMovies from './components/HorrorMovies';
import Romance from './components/Romance';
import SciFi from './components/SciFi';
import Footer from './components/Footer';

const base_url = "https://image.tmdb.org/t/p/original/" //-->PosterPath

const App = () => {
  const [data, getData] = useState([])
  const url= 'https://api.themoviedb.org/3/discover/tv?api_key=61921c21ceb0e087ac30d788cd569b79&with_networks=213'

  const fetchApi = async() =>{
      try {
          const response = await fetch(url);
          const result = await response.json();
          getData(result.results)
          console.log(result.results)
      } catch (error) {
          console.error(error);
      }
  }
  const responsive1 = { //HomePage 1-SlideShow
    desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
    }
  };

  useEffect(()=>{
    fetchApi();
     // eslint-disable-next-line
  },[])
  return (
  <>
      <Router>
        <div className='container-fluid'>
          <NavBar/>
        </div>
        <Routes>
              <Route exact path='/' element={<Landing/>}></Route>
              <Route exact path='/Home' element={
                <>
                   <div className='container-fluid my-md-3' style={{height: '150%'}}>
                      <Carousel swipeable={true} draggable={true}responsive={responsive1}ssr={true}infinite={true}autoPlay={true}
                      autoPlaySpeed={2000} keyBoardControl={true} customTransition="all .5"transitionDuration={500} showArrows={false} removeArrowOnDeviceType={["tablet", "mobile","desktop"]} >
                          {data.map((value)=>{
                            return(
                              <SlideFull  key={value.id} image={`${base_url}${value.poster_path}`} title={value.name} summary={value.overview} release={value.first_air_date} />
                            )
                          })}
                      </Carousel>
                    </div> 
                    <div className="container-fluid my-md-5" id='MoreImage'>
                      <h2 className='text-uppercase fw-bold text-light font-monospace text-start mb-md-4 mx-md-5'>Trending Now </h2>
                      <TrendingNow/>
                    </div>

                    <div  className="container-fluid my-md-5" id='SciFi'>
                      <h2 className='text-uppercase fw-bold font-monospace text-light text-start mb-md-4 mx-md-5'>Sci-Fi</h2>
                        <SciFi/>
                    </div>

                    <div  className="container-fluid my-md-3" id='SciFi'>
                      <h2 className='text-uppercase fw-bold font-monospace text-light text-start mb-md-4 mx-md-5'>Comedy</h2>
                        <Comedy/>
                    </div>

                    <div  className="container-fluid my-md-3" id='SciFi'>
                      <h2 className='text-uppercase fw-bold font-monospace text-light text-start mb-md-4 mx-md-5'>Horror</h2>
                        <HorrorMovies/>
                    </div>

                    <div  className="container-fluid my-md-3" id='SciFi'>
                      <h2 className='text-uppercase fw-bold font-monospace text-light text-start mb-md-4 mx-md-5'>Romance</h2>
                        <Romance/>
                    </div>

                    <div  className="container-fluid my-md-3" id='SciFi'>
                      <h2 className='text-uppercase fw-bold font-monospace text-light text-start mb-md-4 mx-md-5'>Documentry</h2>
                        <Documentry/>
                    </div>
                  </>}>
              </Route> 
              {/* Getting Card details clicked By user*/}
              <Route path='/Home/:CardData' element={<CardData/>}></Route>
        </Routes>
        <div  className="container-fluid my-md-3" id='Footer'>
          <Footer/>
        </div>
      </Router>
  </>
  )
}

export default App
