const INITIAL_STATE = {
    user: null,
    subscription: null
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case 'SIGN_IN_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'SIGN_OUT_USER':
            return {
                ...state,
                user: null,
                subscription: null
            }
        case 'SET_SUBSCRIPTION':
            return {
                ...state,
                subscription: action.payload
            }
        default :
            return state
    }
}

export default userReducer