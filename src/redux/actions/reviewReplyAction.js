import { GET_RREVIEWREPLY ,TOGGLE_REVIEW_REPLY } from "../actionTypes"
import axios from "axios"


export const getReviewsReply = (productId, commentId) => async (dispatch) => {
    console.log(productId)
    try{
        dispatch({ type: GET_RREVIEWREPLY, payload: null })
        dispatch({ type:  TOGGLE_REVIEW_REPLY })
        const { data } = await axios(
            `https://udemyfprt.herokuapp.com/getreply?productId=${productId}&commentId=${commentId}`
        )
        console.log(data)
        dispatch({ type: GET_RREVIEWREPLY, payload: data.review.reverse()})
    }catch(err){
        console.error(err);
    } finally {
        dispatch({ type:  TOGGLE_REVIEW_REPLY })
    }
}

export const addReviewReply = ( review , productId, commentId ) => async (_, getState) => {
    try{
        const token = `${localStorage.getItem("token")}`;
        const {data} = await axios.post(
            `https://udemyfprt.herokuapp.com/add/reply?productId=${productId}&commentId=${commentId}`,{review:review},{
                headers:{
                    Authorization : token
                }
            }
        )
        console.log(data, 1234)
    }catch(err){
        console.error(err.message);
    }
}