import React from "react";
import { useSelector } from "react-redux";
import useTrailer from "../Hooks/useTrailer"; //User hook

const VedioPlay = ({ vedioId }) => {
    const trailerVedio = useSelector((store)=>store?.movie?.trailerVedio);
    useTrailer(vedioId);
  return (
  <div className="ratio ratio-16x9 rounded">
    {/* eslint-disable-next-line */}
    <iframe src={`https://www.youtube.com/embed/${trailerVedio?.key}?autoplay=1&mute=0&loop=1&playlist=${trailerVedio?.key}`} muted allow="autoplay; encrypted-media"frameBorder="0"></iframe>
  </div>
  )
};

export default VedioPlay;

