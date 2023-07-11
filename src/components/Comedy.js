import React, { useEffect, useState }from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../CSS/Hover.css'

const base_url = "https://image.tmdb.org/t/p/original/"
const Comedy = (props) => {

  const [data, getData] = useState([])
  
  const url= 'https://api.themoviedb.org/3/discover/movie?api_key=61921c21ceb0e087ac30d788cd569b79&with_genres=35'

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
    <div className='container-fluid mb-md-2 my-md-3'>
    <Carousel swipeable={true} draggable={true} responsive={responsive}ssr={true}infinite={true}autoPlay={true}
      autoPlaySpeed={3000} keyBoardControl={true} customTransition="all .5"transitionDuration={500} containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]} dotListClass="custom-dot-list-style"itemClass="carousel-item-padding-40-px">
        {data.map((value)=>{
        return(
        <>
            <div className="carousel mb-md-3 mx-md-3" id='card'>
                <img src={`${base_url}${value.poster_path}`} className="card-img-top mb-md-3" alt="..."/>
                <p className="card-title mb-md-5 my-md-2 text-light font-monospace">{value.name}</p>
            </div>
        </>
        );
    })}
      </Carousel>
    </div>
  )
}

export default Comedy
