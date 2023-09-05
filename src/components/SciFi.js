import React, { useEffect, useState }from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {useStateValue} from "./StateProvider" 
import { Link } from 'react-router-dom';
import '../CSS/Hover.css'
import Loading from './Loading';
import { SkeletonTheme } from 'react-loading-skeleton';

const base_url = "https://image.tmdb.org/t/p/original/"
const SciFi = (props) => {

  const {url} = props;

  const [data, getData] = useState([])
  const [getLoad, loading] = useState(true)

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
  const fetchApi = async() =>{
      try {
          const response = await fetch(url);
          const result = await response.json();
          getData(result.results)
          loading(false)
         
      } catch (error) {
          console.error(error);
      }
  }
 
  useEffect(()=>{
    setTimeout(()=>{
      fetchApi();
    },2000)
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
    <>
    <div className='container-fluid'>
      <SkeletonTheme highlightColor='rgb(115, 115, 123)'>
      {getLoad ?<div style={{display: 'flex'}}><Loading/> <Loading/> <Loading/> <Loading/>  <Loading/></div>
      :<Carousel swipeable={true} draggable={true} responsive={responsive}ssr={true}infinite={true}autoPlay={true}
          autoPlaySpeed={2000} keyBoardControl={true} customTransition="all .5"transitionDuration={500} containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]} dotListClass="custom-dot-list-style"itemClass="carousel-item-padding-40-px">
            {data.map((value)=>{
              return(
                <div  className="carousel mb-md-3 mx-md-3 rounded" id='card'>
                  <Link to={"/Home/"+ (value.name ||value.genre_ids[1] || value.genre_ids[0]) } onClick={()=>getCard(value,data)}>
                      <img src={`${base_url}${value.poster_path}`} className="card-img-top mb-md-3 rounded" alt="..."/>
                      <p className="card-title mb-md-5 my-md-2 text-dark font-monospace"></p>
                  </Link>
                </div>


              );
            })}
        </Carousel>
      }
      </SkeletonTheme>
      </div>
  </>
  )
}

export default SciFi
