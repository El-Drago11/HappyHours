import { useDispatch} from "react-redux";
import { addTrailerVedio } from "../store/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constant";

const useTrailer = (vedioId)=>{
    const dispatch = useDispatch();

    const fetchData = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${vedioId}/videos?language=en-US`, options);
        const json = await data?.json();
        const filterData = json?.results?.filter((video) => video?.type === "Trailer");
    
        console.log(filterData);
    
        // Generate a random index for filterData or json.results
        const randomIndex = filterData?.length ? Math.floor(Math.random() * filterData.length) : Math.floor(Math.random() * json.results.length);

        // If some movie doesn't have a trailer, take a random clip from the json data
        const trailer = filterData?.length ? filterData[randomIndex] : json.results[randomIndex];
    
        dispatch(addTrailerVedio(trailer));
    };
    

    useEffect(()=>{
        fetchData();
        // eslint-disable-next-line
    },[])
}

export default useTrailer;