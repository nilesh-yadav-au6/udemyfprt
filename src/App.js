import React from "react";
import "../src/styles.css";
import NavBar from "../src/components/NavBar/NavBar";
import { Route, Switch } from "react-router-dom";
import Login from "./components/SignIn/Login";
import SingUp from "./components/SignUp/SignUp";
import Dashbaord from "./components/UserDashboard/Dashboard";
import Home from "./components/HomePage/HomePage"
import CouerseDetaill from "./components/CourseDetaill/CourseDetaill"
import ViewCourse from "./components/Viewcourse/Viewcourse"
import Instructor from "./components/Instructor"
import AdminCourses from "./components/AdminCourses"

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        {/* <Route exact path="/private" component={PrivateUpload} /> */}
        <Route exact path="/dashboard" component={Dashbaord} />
        <Route exact path="/register" component={SingUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/courseDetaills/:courseId" component={CouerseDetaill} />
        <Route exact path="/viewcourse/:courseId" component={ViewCourse} />
        <Route exact path="/instrutor" component={Instructor} />
        <Route exact path="/admin/courses" component={AdminCourses} />
      </Switch>
    </div>
  );
}
