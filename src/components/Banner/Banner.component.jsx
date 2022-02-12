import React,{ useState, useEffect } from 'react'

import './Banner.styles.css'
import axios from '../../utilities/axios'
import requests from '../../utilities/Requests'

const Banner = () => {
    const [movie, setMovie] = useState('');
    
    const truncate = (string, n) => {
        return string ? string.length > n ? string.substr(0,n-1) + ' ...' : string : 'No description'
    }
    
    useEffect(() => {
        const fetchMovie = async () => {
            const res = await axios.get(requests.fetchTrending);

            setMovie(res.data.results[
                Math.floor(Math.random()*res.data.results.length-1)
            ]);
            
            return res
        }
        fetchMovie();
    },[])

    if(movie){
        return (
            <header className="banner" style={{
                backgroundSize:"cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                backgroundPosition:"center center",
            }}>
                <div className="banner__contents">
                    <h1 className="banner__title">{movie.title || movie.name || movie.original_name}</h1>
                    <div className="banner__buttons">
                        <button className="banner__button">Play</button>
                        <button className="banner__button">My List</button>
                    </div>
                    <h1 className="banner__description">{truncate(`${movie.overview}`,150)}</h1>
                </div>
                
                <div className="banner--fadeBottom" />
            </header>
        )
    }else{
        return null
    }
}

export default Banner