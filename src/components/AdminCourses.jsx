import React , {useEffect , Component} from "react";
import { makeStyles } from "@material-ui/styles";
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { getadminCourses } from "../redux/actions/courseAction"
import { Link } from "react-router-dom"



class OutlinedCard extends Component{

    componentDidMount(){
        this.props.getadminCourses()
    }
    

render(){
    return (
        <div style={{display:"flex" , justifyContent:"space-around" , flexWrap:"wrap"}}>

            {
                this.props.courses !== null ? this.props.courses.map(course => <Card  key={course._id}  variant="outlined">
                <CardContent style={{marginTop:"15px"}}>
                  <Typography variant="h6" component="h2">
                    {`${course.title}`}
                  </Typography>
                  <video width="320" height="240" poster>
                    <source src={course.video[0]} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                    <div>
                    <Link to={`/viewcourse/${course._id}`}><button>View</button></Link>
                    {/* {user === null ? <Link to="/login"><button>BUY</button></Link> :  <Link to={`/courseDetaills/${course._id}`}><button>Detaiils</button></Link> } */}
                    </div>
                </CardContent>
                </Card> )  : null

            }
            {console.log(this.props.courses)}
        </div>


      );
}
}

const mapStateProp = (state) => {
  return {
        courses:state.courses.admincourses
  };
};


export default connect(mapStateProp ,{getadminCourses})(OutlinedCard)