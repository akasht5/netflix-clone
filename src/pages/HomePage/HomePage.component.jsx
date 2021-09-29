import React from 'react'

import Navbar from '../../components/Navbar/Navbar.component'
import Banner from '../../components/Banner/Banner.component'
import Row from '../../components/Row/Row.component'
import requests from '../../utilities/Requests'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            
            <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLarge />
            <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
            <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
            <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
        </div>
    )
}

export default HomePage
