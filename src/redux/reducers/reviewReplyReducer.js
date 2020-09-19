import {GET_RREVIEWREPLY, TOGGLE_REVIEW_REPLY} from '../actionTypes'

const initialState = {
    reviews: [],
    isAuthenticating: false,
}

const reviewReplyReducers = (state = initialState, action) => {
    const { type, payload } = action
    switch(type){
        case GET_RREVIEWREPLY:
            console.log(payload)
            return {...state, reviews: payload}
        case TOGGLE_REVIEW_REPLY:
            return { ...state, isAuthenticating: !state.isAuthenticating }
        default:
            return state
    }
}

export default reviewReplyReducers