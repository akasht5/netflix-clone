import React,{ useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import './Navbar.styles.css'

const Navbar = ({ history, reversed }) => {
    const [show, handleShow] = useState(false);
    
    const transitionNavbar = () => {
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",transitionNavbar);
        return () => window.removeEventListener("scroll",transitionNavbar);

    },[])

    return (
        <div className={`nav ${(show || reversed) && "nav__black"}`}>
            <div className="nav__contents">
                <img className="nav__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                onClick={() => history.push('/')}
                alt="Netflix" />
                <img className="nav__avatar" src="https://i.pinimg.com/originals/33/e4/07/33e407bc4b74d5d7d56eb4dc78c29164.png"
                onClick={() => history.push('/profile')}
                alt="Profile" />
            </div>
            
        </div>
    )
}

export default withRouter(Navbar)