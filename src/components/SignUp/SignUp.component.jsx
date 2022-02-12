import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import { auth } from '../../firebase'
import Footer from '../Footer/Footer.component'

const SignUp = ({ history }) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { name, email, password, confirmPassword } = data;

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setData({...data,[name]:value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password!==confirmPassword){
            console.log('Passwords dont match, please enter similar passwords !')
            
            return
        }else{
            try {
                await auth.createUserWithEmailAndPassword(email, password);
                
                history.push('/');
            } catch (error) {
                console.log("Error : ", error.message);
            }
        }
    }

    return (
        <div className="signUp">
            <div className="netflix__logo">
                <Link to='/'>
                    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix Home" />
                </Link>
            </div>

            <div className="login">
                <div className="login__card">
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" value={name} onChange={handleChange} placeholder="Full Name" />
                        <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email address" />
                        <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" />
                        <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
                        <input type="submit" value="Sign Up" />
                    </form>
                    <div className="helper">
                        <span>Go back to Login. </span>
                        <Link to='/login'>
                            <span className="highlight">Sign In</span>
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

export default withRouter(SignUp)
