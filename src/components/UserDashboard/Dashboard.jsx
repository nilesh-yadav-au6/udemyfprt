import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvent, getEventUser} from "../../redux/actions/eventAction";
import { getUserOrder } from "../../redux/actions/userAction"
import Admin from"../AdminDash/AdminDash"
import Course from "../BuyOrder/BuyOrder"

class UserDashboard extends Component {

  componentDidMount() {
      this.props.getUserOrder()
  }

  state = {
    showPopup: false,
  };

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  render() {
    return (
      <div>
        {
          this.props.user.commenUser.role === "User" ?  <div style={{display:"flex" , justifyContent:"space-around" , flexWrap:"wrap"}}>
          {
            this.props.orders !== null ? 
              this.props.orders.map((course ,index) => <Course key = {index} course={course} />)
            :null
          }
          </div> : <Admin />
        }
       
      </div>
    );
  }
}

const mapStateProps = (storeState) => {
  return {
    user: storeState.user.user,
    eventTypes: storeState.events.event_types,
    userEvent: storeState.events.events,
    orders:storeState.user.orders
  };
};

export default connect(mapStateProps, { getEvent, getEventUser ,getUserOrder })(
  UserDashboard
);
