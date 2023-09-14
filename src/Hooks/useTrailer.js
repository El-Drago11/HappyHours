import { useDispatch} from "react-redux";
import { addTrailerVedio } from "../store/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constant";

const useTrailer = (vedioId)=>{
    const dispatch = useDispatch();

    const fetchData = async ()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${vedioId}/videos?language=en-US`,options)
        const json = await data.json();
        const filterData = json?.results?.filter((video)=>video?.type === "Trailer");

        // if some movie doesn't have a trailer than take the first clip from the json data
        const trailer = filterData.length?filterData[0] : json.results[0];

        dispatch(addTrailerVedio(trailer))

    }

    useEffect(()=>{
        fetchData();
        // eslint-disable-next-line
    },[])
}

export default useTrailer;