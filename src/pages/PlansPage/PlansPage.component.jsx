import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../firebase'
import { firestore } from '../../firebase'
import { loadStripe } from '@stripe/stripe-js'

import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import TabletIcon from '@material-ui/icons/Tablet';
import ComputerIcon from '@material-ui/icons/Computer';
import TvIcon from '@material-ui/icons/Tv';
import CheckIcon from '@material-ui/icons/Check';

import './PlansPage.styles.css'

const PlansPage = ({ currentUser }) => {
    const [plan, setPlan] = useState({
        planName: 'basic',
        planPriceId: 'price_1Jk5mrDVXQX9nqQCezgpBxib'
    });

    const handleChange = (e) => {
        const value = e.target.value;
        const priceId = e.target.dataset.priceid;
        
        setPlan({
            planName: value,
            planPriceId: priceId
        });
    }

    const handleSubscribe = async () => {
        const docRef = await firestore.collection("customers")
            .doc(currentUser.uid)
            .collection("checkout_sessions")
            .add({
                price: plan.planPriceId,
                success_url: window.location.origin,
                cancel_url: window.location.origin
            })

        docRef.onSnapshot(async (snap) => {
            const { error, sessionId } = snap.data();

            if(error){
                alert(`An error occured : ${error.message}`);
            }

            if(sessionId){
                const stripe = await loadStripe('pk_test_51HxtSXDVXQX9nqQCcVPm2uFPTcbb67PmIw3MnlFB1cQekY88ypAbp2MELPzor0XTDPWtO6br9rxBio3PCERf3NhG005ISi9fFi');

                stripe.redirectToCheckout({ sessionId });
            }
        }) 
    }

    return (
        <div className="plansPage">
            <nav className="plansNav">
                <Link to='/'>
                    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix" />
                </Link>
                <div className="signInLink">
                    {
                        currentUser ? (
                            <span style={{ fontWeight: '600'}} onClick={() => auth.signOut()}>Sign Out</span>
                        ) : (
                            <Link to='/login'>
                                <span>Sign In</span>
                            </Link>
                        )
                    }
                </div>
            </nav>
            <div className="plans__container">
                <div className="choosePlan">
                    <h4 className="chooseTitle">Choose the plan that's right for you</h4>
                    <span style={{ position: 'relative' }}><CheckIcon style={{ fontSize: '25px', color : 'red', position: 'absolute', bottom:'-3px', left: '-32px'}} />Watch all you want. Ad-free.</span><br />
                    <span style={{ position: 'relative' }}><CheckIcon style={{ fontSize: '25px', color : 'red', position: 'absolute', bottom:'-3px', left: '-32px'}} />Recommendations just for you.</span><br />
                    <span style={{ position: 'relative' }}><CheckIcon style={{ fontSize: '25px', color : 'red', position: 'absolute', bottom:'-3px', left: '-32px'}} />Change or cancel your plan anytime.</span>
                </div>
                <form>
                    <div className="planInputs">
                        <div className="planInput">
                            <input type="radio" name="planInput" checked={plan.planName === 'basic'} value="basic" data-priceid='price_1Jk5mrDVXQX9nqQCezgpBxib' id="basicInput" onChange={handleChange} />
                            <label htmlFor="basicInput" id="basicLabel"><div className="planOption">Basic</div></label>
                        </div>
                        <div className="planInput">
                            <input type="radio" name="planInput" checked={plan.planName === 'standard'} value="standard" data-priceid='price_1Jk5nZDVXQX9nqQCiAnVZHRb' id="standardInput" onChange={handleChange} />
                            <label htmlFor="standardInput" id="standardLabel"><div className="planOption">Standard</div></label>
                        </div>
                        <div className="planInput">
                            <input type="radio" name="planInput" checked={plan.planName === 'premium'} value="premium" data-priceid='price_1Jk5okDVXQX9nqQC6b6RnYQj' id="premiumInput" onChange={handleChange} />
                            <label htmlFor="premiumInput" id="premiumLabel"><div className="planOption">Premium</div></label>
                        </div>
                    </div>
                    <table className="planDetails">
                        <thead>
                            <tr className="row">
                                <th>Monthly price</th>
                                <td className="column">Rs 499</td>
                                <td className="column">Rs 649</td>
                                <td className="column">Rs 799</td>
                            </tr>
                        </thead>
                        <tbody> 
                            <tr className="row">
                                <th>Video Quality</th>
                                <td>Good</td>
                                <td>Better</td>
                                <td>Best</td>
                            </tr>
                            <tr className="row">
                                <th>Resolution</th>
                                <td>720p</td>
                                <td>1080p</td>
                                <td>4K+HDR</td>
                            </tr>
                            <tr className="devices">
                                <th>Devices you can use to watch</th>
                                <td><PhoneAndroidIcon /><br /><span>Phone</span></td>
                                <td><PhoneAndroidIcon /><br /><span>Phone</span></td>
                                <td><PhoneAndroidIcon /><br /><span>Phone</span></td>
                            </tr>
                            <tr className="devices">
                                <th></th>
                                <td><TabletIcon /><br /><span>Tablet</span></td>
                                <td><TabletIcon /><br /><span>Tablet</span></td>
                                <td><TabletIcon /><br /><span>Tablet</span></td>
                            </tr>
                            <tr className="devices">
                                <th></th>
                                <td></td>
                                <td><ComputerIcon /><br /><span>Computer</span></td>
                                <td><ComputerIcon /><br /><span>Computer</span></td>
                            </tr>
                            <tr className="devices">
                                <th></th>
                                <td></td>
                                <td><TvIcon /><br /><span>Tv</span></td>
                                <td><TvIcon /><br /><span>Tv</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <p>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.</p>
                    <p>Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic.</p>
                    <input type="button" value="Subscribe" className="subscribeButton" onClick={handleSubscribe} />
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user.user
})

export default connect(mapStateToProps)(PlansPage)
