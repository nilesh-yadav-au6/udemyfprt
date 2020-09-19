import React, { Component } from "react";
import { connect } from "react-redux";
import { userCreate } from "../../redux/actions/userAction";
import style from "../SignUp/SignUp.module.css";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name:""
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password,
      name:this.state.name
    };
    this.props.userCreate(newUser);
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit} className={style.mainDiv}>
          <input
            className={style.inDiv}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Name"
            onChange={this.handleChange}
          />
          <input
            className={style.inDiv}
            type="email"
            name="email"
            value={this.state.email}
            placeholder="   Enter Email"
            onChange={this.handleChange}
          />
          <input
            className={style.inDiv}
            type="password"
            name="password"
            value={this.state.password}
            placeholder="   Enter Password"
            onChange={this.handleChange}
          />
          <input className={style.btDiv} type="submit" value="Sing Up" />
        </form>
      </div>
    );
  }
}

export default connect(null, { userCreate })(SignUp);
