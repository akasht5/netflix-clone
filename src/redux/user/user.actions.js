export const signInUser = (user) => ({
    type: 'SIGN_IN_USER',
    payload: user
})

export const signOutUser = () => ({
    type: 'SIGN_OUT_USER'
})

export const addSubscription = (subscription) => ({
    type: 'SET_SUBSCRIPTION',
    payload: subscription
})