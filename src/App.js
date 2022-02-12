import React, { useEffect } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'
import { auth } from './firebase'
import { firestore } from './firebase'
import { connect } from 'react-redux'
import { signInUser, signOutUser, addSubscription } from './redux/user/user.actions'
import { Redirect } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage.component'
import LandingPage from './pages/LandingPage/LandingPage.component'
import PlansPage from './pages/PlansPage/PlansPage.component'
import Login from './components/Login/Login.component'
import SignUp from './components/SignUp/SignUp.component'
import Profile from './components/Profile/Profile.component'


const App = ({ signIn, signOut, addSubscription, currentUser, subscription }) => {

    useEffect(() => {
      const unsubscribeFromAuth = auth.onAuthStateChanged((userAuth) => {
        if(!userAuth){
          signOut();
        }else{
          signIn(userAuth);
        }
      })

      if(currentUser){
          firestore.collection("customers")
          .doc(currentUser.uid)
          .collection("subscriptions")
          .get()
          .then((querySnapshot) => {
              querySnapshot.forEach(async (subscription) => {
                  addSubscription({
                      role: subscription.data().role,
                      current_period_end: subscription.data().current_period_end.seconds,
                      current_period_start: subscription.data().current_period_start.seconds
                  })
              })
          })
          console.log("User changed from null to something !");
      }

      return unsubscribeFromAuth;
    },[currentUser])

    return (
        <div className="App">
          <Switch>
            <Route exact path='/' render={() => subscription ? (
              <HomePage />
            ) : (
              <LandingPage />
            )} />

          <Route exact path='/login' component={Login} />
          
          <Route exact path='/signup' component={SignUp} />

          <Route exact path='/profile' component={Profile} />

          <Route exact path='/plans' component={PlansPage} />
              
          </Switch>
        </div>
    );
  
}

const mapStateToProps = state => ({
  currentUser: state.user.user,
  subscription: state.user.subscription
})

const mapDispatchToProps = dispatch => ({
  signIn: user => dispatch(signInUser(user)),
  signOut: () => dispatch(signOutUser()),
  addSubscription: (subscription) => dispatch(addSubscription(subscription))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);