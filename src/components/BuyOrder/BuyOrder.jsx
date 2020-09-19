import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { Link } from "react-router-dom"

const useStyles = makeStyles({
  root: {
    width: "400px",
    textAlign: "justify",
    marginTop:"15px",
    boxShadow: "0 0 5px #888"
   },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: "10px"
  },
  pos: {
    marginBottom: 12
  }
});

function OutlinedCard({ course ,user }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent style={{marginTop:"15px"}}>
        <Typography variant="h6" component="h2">
          {`Title : ${course.title}`}
        </Typography>
        <Typography variant="h6" component="h2">
          {`Description : ${course.description}`}
        </Typography>
        <video width="320" height="240" poster>
          <source src={course.video[0]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
          <div>
          <Link to={`/viewcourse/${course._id}`}><button>View</button></Link>
          </div>
      </CardContent>
    </Card>
  );
}

const mapStateProp = (state) => {
  return {
        user:state.user.user
  };
};


export default connect(mapStateProp)(OutlinedCard)