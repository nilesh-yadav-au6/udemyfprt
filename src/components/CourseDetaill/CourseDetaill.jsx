import React, { Component } from 'react'
import   { connect } from "react-redux"
import   { getSingleCOurse} from "../../redux/actions/courseAction"
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import axios from "axios"
import { Link } from "react-router-dom"
import  { getReviews ,addReview } from '../../redux/actions/reviewAction'
import Review from "../Review/Review"
import style from "../CourseDetaill/CourseDetaill.module.css";

class CourseDetaill extends Component {

    componentDidMount(){
        const courseId = this.props.match.params.courseId
        this.props.getSingleCOurse(courseId)
        this.props.getReviews(courseId)
    }

    state ={
      review:""
    }

    handelChange = e => {
      this.setState({ [e.target.name]: e.target.value })
    }

    handelReview = e => {
      try{
        e.preventDefault()
        console.log(this.state.review)
        this.props.addReview(this.state.review , this.props.match.params.courseId)
      } catch(err){
        console.log(err)
      }finally{
        setTimeout(()=> {
          this.props.getReviews(this.props.match.params.courseId)
        },1000)
      }
    }

    handleClick = async (e) =>{
        e.preventDefault();
        if(this.props.user!==null){
          const orderUrl = `https://udemyfprt.herokuapp.com/order/${this.props.match.params.courseId}`;
          const token = localStorage.getItem("token")
          const response = await axios.post(orderUrl, {},{
            headers:{
              Authorization : token
            }
          });
          const { data } = response;
          const a = data
          const options = {
            key: process.env.RAZORPAY_APT_KEY,
            order_id: data.orderId,
            amount:data.amount,
            handler: async (response) => {
              try {

                await axios.post(`https://udemyfprt.herokuapp.com/verify`, {...response , amount:a.amount , currency:"INR"},{
                  headers:{
                    Authorization : token
                  }
                });
                alert('Order placed successfully', 'Success')
                this.props.history.push(`/dashboard`)
              } catch (err) {
                console.log(err);
              }
            }
          }
          this.setState({"razorpay": new window.Razorpay(options)})
          this.state.razorpay.open();
        }else if(this.props.user===null){
          this.props.history.push('/signin')
        }
      }


    render() {
        return (
            <div> 
                <h1>detaills
                </h1>
                {
                    this.props.single !== null ? 
                    <Card  variant="outlined">
                    <CardContent style={{marginTop:"15px"}}>
                      <Typography variant="h6" component="h2">
                        {`${this.props.single.title}`}
                      </Typography>
                      <Typography variant="h6" component="h2">
                        {`${this.props.single.description}`}
                      </Typography>
                      <Typography variant="h6" component="h2">
                        {`${this.props.single.price}`}
                      </Typography>
                      <video width="320" height="240" poster>
                        <source src={this.props.single.video[0]} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                        <div>
                          { 
                              this.props.user === null ? <Link to="/login"><button>BUY</button></Link> : <button onClick={this.handleClick}>BUY</button>
                          }
                        
                        </div>
                    </CardContent>
                    <div className={style.reviewDiv}>
                      <h1 style={{color:"black" , marginTop:"50px"}}>Product Review</h1>
                      {this.props.user!==null && this.props.user.commenUser.role==='User'?
                      <div className="input-fields" >
                      <input type="text" name="review" onChange={this.handelChange} value={this.state.review} className="input" placeholder="Add Review"/>
                      <button className={"no-focusborder"} onClick={this.handelReview}>Add Review</button>
                      </div> :null}
                      {this.props.user == null ? <Link to="/login"><button className={"no-focusborder"} type='submit' >Add Review</button></Link> :null}
                      {this.props.review !== null? this.props.review.map(review =>
                        <div key={review._id}>
                          <Review key={review._id}  review={review}/> 
                        </div>
                        )  : null}
                    </div>
                    </Card> :null
                }
            </div>
        )
    }
}

const mapStateProps = (state) => {
    return {
        single:state.courses.single,
        user:state.user.user,
        review : state.reviews.reviews,
    }
}

export default connect(mapStateProps, { getSingleCOurse ,getReviews ,addReview})(CourseDetaill)
