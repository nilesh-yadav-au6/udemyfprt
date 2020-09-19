import React, { Component } from 'react'
import { getByCoding ,getByCooking ,getByGraphic } from "../../redux/actions/courseAction"
import { connect } from "react-redux"
import Course from "../Eventcard/EventCard"

class HomePage extends Component {

  componentDidMount(){
      this.props.getByCoding("coding")
      this.props.getByCooking("cooking")
      this.props.getByGraphic("graphic design")
  }

  render() {
    return (
      <div>
        <h1>Cooking</h1>
        <div style={{display:"flex" , justifyContent:"space-around" , flexWrap:"wrap"}}>
        {
          this.props.cooking !== null ? this.props.cooking.map(course => <Course key={course._id} course={course} />) :null
        }
        </div>
        <h1>Coding</h1>
        <div style={{display:"flex" , justifyContent:"space-around" , flexWrap:"wrap"}}>

        {
          this.props.coding !== null ? this.props.coding.map(course => <Course key={course._id} course={course} />) :null
        }
        </div>
        <h1>Graphic Design</h1>
        <div style={{display:"flex" , justifyContent:"space-around" , flexWrap:"wrap"}}>

        {
          this.props.graphic !== null ? this.props.graphic.map(course => <Course key={course._id} course={course} />) :null
        }
        </div>
      </div>
    )
  }
}


const mapStateProp = (state) => {
  return {
        cooking:state.courses.cooking,
        coding:state.courses.coding,
        graphic:state.courses.graphic,
        user:state.user.user
  };
};

export default connect(mapStateProp , {getByCoding , getByCooking,getByGraphic})(HomePage)
