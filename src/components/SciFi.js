import React, { useEffect, useState, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../CSS/Hover.css';
// import Loading from './Loading';
import { Link } from 'react-router-dom';
import { addItems, cardClick, cardGenre } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import { baseUrl } from '../utils/constant';
import '../App.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useSelector } from 'react-redux';

const base_url = baseUrl;

const SciFi = ({ url ,title}) => {
  const storeDispatch = useDispatch();
  const [data, getData] = useState([]);
  const [getLoad, loading] = useState(true);
  const [imageLoadStatus, setImageLoadStatus] = useState({});
  const containerRef = useRef(null);

  const titledata = useSelector((store)=>store.movie[`${title}_Store`])

  useEffect(() => {
    if (url) {
      if(titledata==null){
        fetchApi();
      }else{
        getData(titledata);
        loading(false);
      }
    }
  }, [url]);

  const fetchApi = async () => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        getData(result.results);
        localStorage.setItem(title,JSON.stringify(result.results))
        loading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      partialVisibilityGutter: 40,
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      partialVisibilityGutter: 40,
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      partialVisibilityGutter: 30,
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      partialVisibilityGutter: 40,
      items: 3,
    },
  };

  const handleImageLoad = (index) => {
    setImageLoadStatus(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className='container-fluid' ref={containerRef}>
      
      {getLoad ? (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {[...Array(5)].map((_, idx) => (
            <div key={idx} style={{ margin: '0 10px' }}>
              <Skeleton className="responsive-skeleton" height={100} />
            </div>
          ))}
        </div>
      ) : (
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {data.map((value, index) => (
            <div key={index} className="carousel mb-3 mx-3 my-2 rounded" id='card'>
              <Link
                to={`/Home/${value.name || value.genre_ids[1] || value.genre_ids[0]}`}
                onClick={() => {
                  storeDispatch(cardClick(value));
                  storeDispatch(cardGenre(data));
                }}
              >
                {!imageLoadStatus[index] && (
                  <Skeleton className="responsive-skeleton" height={100} />
                )}
                <img
                  src={`${base_url}${value.poster_path}`}
                  className="card-img-top mb-md-3 rounded"
                  alt={value.name || 'Image'}
                  onLoad={() => handleImageLoad(index)}
                  style={{ display: imageLoadStatus[index] ? 'block' : 'none' }}
                />
              </Link>
              <button
                type="button"
                className="btn btn-danger btn-sm position-absolute top-0 start-100 translate-middle my-4"
                onClick={() => storeDispatch(addItems(value))}
                id='addCartBtn'
              >
                +
              </button>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default SciFi;
