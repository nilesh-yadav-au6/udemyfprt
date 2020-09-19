import { GET_RREVIEW ,TOGGLE_REVIEW } from "../actionTypes"
import axios from "axios"
// import { NotificationManager } from 'react-notifications';

export const getReviews = (productId) => async (dispatch) => {
    console.log(productId)
    try{
        dispatch({ type: GET_RREVIEW, payload: null })
        const { data } = await axios(
            `https://udemyfprt.herokuapp.com/getreview/${productId}`
        )
        dispatch({ type: GET_RREVIEW, payload: data.review.reverse()})
    }catch(err){
        console.error(err);
    } 
}

export const addReview = ( review ,productId ) => async (dispatch, getState) => {
    try{
        const token = `${localStorage.getItem("token")}`;
        console.log(review)
        const {data} = await axios.post(
            `https://udemyfprt.herokuapp.com/add/review/${productId}`,{review:review},{
                headers:{
                    Authorization : token
                }
            }
        )
        console.log(data)
    }catch(err){
        console.error(err.message);
    }
}