import React, { useEffect, useState }from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../CSS/Hover.css'
import Loading from './Loading';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

import { addItems,cardClick,cardGenre } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import { baseUrl } from '../utils/constant';
import '../App.css'

const base_url = baseUrl
const SciFi = (props) => {

const storeDispatch = useDispatch();

const watchLater = (value)=>{
  storeDispatch(addItems(value));
}

const getCard = (value,data) => {
  storeDispatch(cardClick(value))
  storeDispatch(cardGenre(data))

}
  const {url} = props;

  const [data, getData] = useState([]) //store the fetch data from api
  const [getLoad, loading] = useState(true)

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
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          partialVisibilityGutter: 40,
          items: 3
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
                <div  className="carousel mb-3 mx-3 my-2 rounded" id='card'>
                  <Link to={"/Home/"+ (value.name ||value.genre_ids[1] || value.genre_ids[0]) } onClick={()=>getCard(value,data)}>
                      <img src={`${base_url}${value.poster_path}`} className="card-img-top mb-md-3 rounded" alt="..."/>
                  </Link>
                  <button  type="button" class="btn btn-danger btn-sm position-absolute top-0 start-100 translate-middle my-4" onClick={()=>watchLater(value)} id='addCartBtn'>+</button>
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
