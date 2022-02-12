import React from 'react'
import { auth } from '../../firebase'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import './Profile.styles.css'
import Navbar from '../Navbar/Navbar.component'

const Profile = ({ currentUser, subscription, history }) => {
    const handleSignOut = () => {
        try{
            auth.signOut();
            history.push('/');
        }catch(err){
            console.log(err.message);
        }
    }

    return (
        <div className="profile__wrapper">
            <Navbar reversed />
            <div className="profile">
                <div className="profile__container">
                    <h1>Account</h1>
                    <hr />
                    <div className="profile__details">
                        <div className="info__title">
                            <span>MEMBERSHIP & BILLING</span>
                            <input type="button" className="cancelButton" value="Cancel Membership" />
                        </div>
                        <div className="profile__info">
                            <div className="profile__email">
                                <span className="bold">{currentUser ? currentUser.email : 'No User'}</span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="profile__details">
                            <div className="info__title">
                                <span>PLAN DETAILS</span>
                            </div>
                            <div className="profile__info planInfo">
                                <div>
                                    <span className="bold">{subscription ? subscription.role : "Not Subscribed"}</span><br />
                                    {
                                        subscription && (
                                            <div className="renewalDate">Renewal Date : {new Date(subscription.current_period_end*1000).toLocaleDateString()}</div>
                                        )
                                    }
                                    
                                </div> 
                                <Link to='/plans'> 
                                <span className="rightButton">Change plan</span>
                                </Link>
                            </div>
                    </div>
                    <button className="signOut" onClick={handleSignOut}>Sign Out</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.user,
    subscription: state.user.subscription
})

export default withRouter(connect(mapStateToProps)(Profile))
