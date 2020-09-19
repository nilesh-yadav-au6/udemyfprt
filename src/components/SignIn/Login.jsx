import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userAction";
import style from "../SignIn/Login.module.css";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const loggedUser = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(loggedUser);
  };

  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit} className={style.mainDiv}>
          <input
            className={style.inDiv}
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleChange}
          />
          <input
            className={style.inDiv}
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChange}
          />
          <input className={style.btDiv} type="submit" value="Sing In" />
        </form>
        { this.props.propsUser !== null ? (
          <Redirect to="/" />
        ) : (
          <Redirect to="/login" />
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

export default connect(mapStateProp, { loginUser })(Login);
