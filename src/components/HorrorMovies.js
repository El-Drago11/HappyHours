import React, { useEffect, useState }from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../CSS/Hover.css'
import { Link } from 'react-router-dom';
import {useStateValue} from "./StateProvider" 

const base_url = "https://image.tmdb.org/t/p/original/"
const HorrorMovies = (props) => {

  const [data, getData] = useState([])

  const [{basket}, dispatch] = useStateValue();
  console.log(basket)

  const getCard = (value)=>{
    dispatch({
      type:"Card_Click",
      
      // transfering the data
      item:{
        key:`${value.id}`,
        image : `${base_url}${value.poster_path}`,
        data : `${value.name}`,
        summary : `${value.overview}`,
      },
      data:data
    })
  }
  
  const url= 'https://api.themoviedb.org/3/discover/movie?api_key=61921c21ceb0e087ac30d788cd569b79&with_genres=27'

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
 
  useEffect(()=>{
    fetchApi();
     // eslint-disable-next-line
  },[])

    const responsive = { //Genres Slide Show
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          partialVisibilityGutter: 40,
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          partialVisibilityGutter: 40,
          items: 7
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          partialVisibilityGutter: 30,
          items: 6
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          partialVisibilityGutter: 40,
          items: 5
        }
      };
  return (
    <div className='container-fluid mb-md-1 my-md-1'>
    <Carousel swipeable={true} draggable={true} responsive={responsive}ssr={true}infinite={true}autoPlay={true}
      autoPlaySpeed={3000} keyBoardControl={true} customTransition="all .5"transitionDuration={500} containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]} dotListClass="custom-dot-list-style"itemClass="carousel-item-padding-40-px">
        {data.map((value)=>{
        return(
        <div  className="carousel mb-md-3 mx-md-3" id='card'>
            <Link to="/CardData" onClick={()=>getCard(value,data)}>
                <img src={`${base_url}${value.poster_path}`} className="card-img-top mb-md-3" alt="..."/>
                <p className="card-title mb-md-5 my-md-2 text-light font-monospace">{value.name}</p>
            </Link>
        </div>
        );
    })}
      </Carousel>
    </div>
  )
}

export default HorrorMovies
