import React, { Component } from "react";
import style from "../NavBar/NavBar.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/userAction"
import { withRouter } from "react-router-dom";

class NavBar extends Component {

  // logoutUser = () =>{
  //     this.props.logout()
  // }

  render() {
    return (
      <div className={style.navBar}>
        {console.log(this.props.propsUser ,5615)}
        {this.props.propsUser === null ? (
          < div className={style.mainHeader}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            Udemy
          </Link>
          <Link to="/instrutor" style={{ textDecoration: 'none' }}>Become Instructor</Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>Sign In</Link>
          <Link to="/register" style={{ textDecoration: 'none' }}>Sign Up</Link>
        </div>
          
        ) : (
          <div className={style.mainHeader}>
            <Link to="/" style={{ textDecoration: 'none' }}>Udemy</Link>
            {
              this.props.propsUser.commenUser.role === "Admin" ? <Link to="/admin/courses" style={{ textDecoration: 'none' }}>Courses</Link> : null
            }
            <Link to="/dashboard" style={{ textDecoration: 'none' }}>Dashboard</Link>
            <Link to="/" onClick={() => {this.props.logout()}} style={{ textDecoration: 'none' }}>Logout</Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStateProp = (state) => {
  return {
    propsUser: state.user.user
  };
};

export default withRouter(connect(mapStateProp , {logout})(NavBar));
