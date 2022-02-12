import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './LandingPage.styles.css'
import StoryCard from '../../components/Storycard/StoryCard.component'
import Accordion from '../../components/Accordion/Accordion.component'
import Footer from '../../components/Footer/Footer.component'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { auth } from '../../firebase'

const LandingPage = ({ currentUser, subscription }) => {
    const accordionData = [
        {   
            qno: 1,
            question: "What is Netflix?",
            answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
        },
        {
            qno: 2,
            question: "How much does Netflix cost?",
            answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts."
        },
        {
            qno: 3,
            question: "Where can I watch?",
            answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
        },
        {
            qno: 4,
            question: "How do I cancel?",
            answer: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        },
        {
            qno: 5,
            question: "What can I watch on Netflix?",
            answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        },
        {
            qno: 6,
            question: "Is Netflix good for kids?",
            answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
        }
    ]

    return (
        <div className="landingPage">
            <div className="hero__banner">
                <div className="banner__header">
                    <div className="header__container">
                        <div className="header__logo">
                            <Link to='/'>
                                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix" />
                            </Link>
                        </div>
                        <div className="header_links">
                            {
                                currentUser ? (
                                    <button onClick={() => auth.signOut()} className="signIn">Sign Out</button>
                                ) : (
                                    <Link to='/login'>
                                        <button className="signIn">Sign In</button>
                                    </Link>
                                )
                            }
                            
                        </div>
                    </div>
                </div>

                <div className="hero__banner__contents">
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h4>Watch anywhere, Cancel anytime</h4>
                    <p>Ready to watch, enter your email to create ro restart your membership.</p>
                    
                    <Link to='/plans'>
                        <div className="startMembership">
                            <span>Start Your Membership</span>
                            <ChevronRightIcon style={{ position: 'absolute', bottom: '8px'}}/>
                        </div>
                    </Link> 
                </div>

                <div className="fadedOverlay" />
            </div>
            <StoryCard title="Create profiles for childrens."
            description="Send children on adventures with their favourite characters in a space made just for them, free with your membership."
            imageURL="https://occ-0-1973-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
            flipped
            />
            <StoryCard title="Download your shows to watch offline." description="Save your favourites easily and always have something to watch."
            imageURL="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            />
            <StoryCard title="Watch everywhere." description="Stream unlimited movies and TV shows on your phone, tablet, laptop and TV."
            imageURL="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" 
            />
            <div className="faqs">
                <div className="faqs__container">
                    <h1>Frequently Asked Questions</h1>

                    <div className="questions">
                        {
                            accordionData.map(({ qno, question, answer }) => (
                                <Accordion key={qno} question={question} answer={answer} />
                            ))
                        }
                    </div>

                    <div className="faq-signUp">
                        <p>Ready to watch, enter your email to create ro restart your membership.</p>
                        <div className="bannerInputs">
                            <form>
                                <input type="email" name="email" className="emailInput" placeholder="Email address" />
                                <input type="submit" className="buttonInput" value="Get Started" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.user,
    subscription: state.user.subscription
})

export default connect(mapStateToProps)(LandingPage)
