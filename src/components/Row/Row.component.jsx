import React,{ useState, useEffect } from 'react'

import axios from '../../utilities/axios';
import './Row.styles.css'

const Row = (props) => {
    const [data, setData] = useState([]);
    const { title, fetchURL, isLarge } = props;

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(fetchURL);

            setData(res.data.results);

            return res;
        }

        fetchData();
    },[])
    
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters list__items">
                {
                    data.map((movie) => (
                        ((isLarge && movie.poster_path) || 
                         (!isLarge && movie.backdrop_path)) && (
                            <div className="list__item" key={movie.id}>
                                <img className={!isLarge ? 'isImage' : null} src={`https://image.tmdb.org/t/p/original/${isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                            </div>
                        )
                    )
                    )  
                }
            </div>
        </div>
    )
}

export default Row
