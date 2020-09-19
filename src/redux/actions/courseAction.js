import { GET_CODING,GET_COKING,GET_GRAPHIC_DESIGN , GET_SINGLE_COURSE, ADMIN_COURSES } from "../actionTypes";
import axios from "axios";


export const addCourse = (course) => async (dispatch) => {
    try{
        const { title , description ,price,category,video } = course
        console.log(video)
        const token = `${localStorage.getItem("token")}`;
        const fData = new FormData()
        fData.append('title', title)
        fData.append('description', description)
        fData.append('category', category)
        fData.append('price', price)
        // fData.append(`video`, video)
        for(let i=0 ; i<video.length ; i++){
            fData.append("video" , video[i])
        }
        const {data} = await axios.post(
            `https://udemyfprt.herokuapp.com/add/course`,fData,{
                headers:{
                    Authorization :token,
                    'content-type': 'multipart/form-data'
                }
            }
        )
        if(data.statusCode === 201){
            alert('Product added successfully')
        }
        else if(data.statusCode === 400){
            alert('Error')
        }
        console.log(data)
    }catch(err){
        console.error(err.message);
    }
};

export const getByCooking = (category) => async (dispatch) => {
    try{
        const {data} = await axios.get(
            `https://udemyfprt.herokuapp.com/category/${category}`)

        dispatch({type:GET_CODING ,payload:data.courses})
    }catch(err){
        console.error(err.message);
    }
};

export const getByCoding = (category) => async (dispatch) => {
    try{
        const {data} = await axios.get(
            `https://udemyfprt.herokuapp.com/category/${category}`)
        dispatch({type:GET_COKING ,payload:data.courses})
    }catch(err){
        console.error(err.message);
    }
};
export const getByGraphic = (category) => async (dispatch) => {
    try{
        const {data} = await axios.get(
            `https://udemyfprt.herokuapp.com/category/${category}`)
        dispatch({type:GET_GRAPHIC_DESIGN ,payload:data.courses})
    }catch(err){
        console.error(err.message);
    }
};

export const getSingleCOurse = (courseId) => async (dispatch) => {
    try{
        const {data} = await axios.get(
            `https://udemyfprt.herokuapp.com/single/course/${courseId}`)
            console.log(data)
        dispatch({type:GET_SINGLE_COURSE ,payload:data.course ,count:data.count})
    }catch(err){
        console.error(err.message);
    }
};

export const getadminCourses = () => async (dispatch) => {
    try{
        const token = `${localStorage.getItem("token")}`;
        const {data} = await axios.get(
            `https://udemyfprt.herokuapp.com/admin/courses`, 
            {
                headers: {
                  Authorization: token
                }
              }
            )
            console.log(data)
        dispatch({type:ADMIN_COURSES,payload:data.courses})
    }catch(err){
        console.error(err.message);
    }
};

