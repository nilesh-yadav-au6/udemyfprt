import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getReviewsReply, addReviewReply } from '../../redux/actions/reviewReplyAction'
import { connect } from 'react-redux'

export class Review extends Component {

    state = {
        reply: false,
        reviewReply: ""
    }

    handelChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handelSubmit = e =>{
        e.preventDefault()
        this.props.addReviewReply( this.state.reviewReply, this.props.review._id,this.props.commentId)
        setTimeout(()=>{
            this.props.getReviewsReply( this.props.review._id, this.props.commentId )
        }, 2000)
    }

    render() {
        return (
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}} >
            <p style={{color:"black" ,marginLeft:"20px"}}>{this.props.review.userName}: {this.props.review.review}</p>
            <Link style={{textDecoration: "none", color: "black"}} onClick={()=>{
                this.setState({reply: !this.state.reply})
                this.props.getReviewsReply( this.props.review._id, this.props.commentId )}} >Reply</Link>
            {
            this.state.reply &&
            <>
            <form onSubmit={this.handelSubmit} >
                <input type="text" name="reviewReply" onChange={this.handelChange} value={this.state.reviewReply} 
                style={{background: "transparent", border: "none", borderBottom: "2px solid black"}} placeholder="Add Reply"/>
                <button type="submit" className={"no-focusborder"} >Add </button>
            </form>
            {this.props.reviewReply!==null?
            this.props.reviewReply.map((obj)=>(
                <p>{obj.userName}: {obj.review}</p>
                ))
            :null}
            </>
            }
            </div>
        )
    }
}


const mapStateToProps = storeState => {
    return {
        reviewReply: storeState.reviewReplyState.reviews
    }
}
export default connect(mapStateToProps, {getReviewsReply, addReviewReply})(Review)
