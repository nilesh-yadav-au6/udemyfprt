import React, { Component } from 'react'
import style from "./Review.module.css"

export class Review extends Component {
    render() {
        return (
            <div className={style.review_div}>
            <div className={style.reviewDiv}>
                <div style={{display:"flex" ,flexDirection:"column"}}>
                <p style={{color:"black" ,marginLeft:"20px"}}>{this.props.review.userName}</p>
                <p style={{color:"black" ,marginLeft:"20px"}}>{this.props.review.review}</p>
                </div>
            </div>
            </div>
        )
    }
}

export default Review
