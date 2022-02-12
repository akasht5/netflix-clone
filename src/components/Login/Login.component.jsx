import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { auth } from '../../firebase'

import './Login.styles.css'
import Footer from '../Footer/Footer.component'

const Login = ({ history }) => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const {  email, password } = data;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData({...data,[name]:value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);

            history.push('/');

        } catch (error) {
            console.log(error.message);
        }
    }
    
    return (
        <div>
            <div className="netflix__logo">
                <Link to='/'>
                    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix Home" />
                </Link>
            </div>

            <div className="login">
                <div className="login__card">
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email address" />
                        <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" />
                        <input type="submit" value="Sign In" />
                    </form>
                    <span className="facebookLogin">Login with Facebook</span>
                    <div className="helper">
                        <span>New to Netflix? </span>
                        <Link to='/signup'>
                            <span className="highlight">Sign up now</span>
                        </Link>
                    </div>
                </div>

                <div className="fadedOverlay" />
            </div>

            <div className="login__footer">
                <Footer />
            </div>

        </div>
    )
}

export default withRouter(Login)
