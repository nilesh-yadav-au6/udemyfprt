import React , {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { getSingleCOurse } from "../../redux/actions/courseAction"




class OutlinedCard extends Component{

    componentDidMount(){
        this.props.getSingleCOurse(this.props.match.params.courseId)
    }
    

render(){
    return (
        <Card  variant="outlined">
          {this.props.single !== null ?
            <CardContent style={{marginTop:"15px"}}>
            <Typography variant="h6" component="h2">
              {`Title : ${this.props.single.title}`}
            </Typography>
            <Typography variant="h6" component="h2">
              {`Number of Buys : ${this.props.single.description}`}
            </Typography>

            {
              this.props.user.commenUser.role === "Admin" ? <Typography variant="h6" component="h2">
              {`Description : ${this.props.count}`}
            </Typography> : null
            }

            <div style={{display:"flex" , justifyContent:"space-around" , flexWrap:"wrap"}}>
                {
                    this.props.single !== null ? 
                        this.props.single.video.map( (video,index) => <div key={index}>
                             <video width="320" height="240" controls>
                     <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                        </div>)
                    : null
                }
            </div>
          </CardContent>:null
        }
        </Card>
      );
}
}

const mapStateProp = (state) => {
  return {
        single:state.courses.single,
        count:state.courses.count,
        user:state.user.user
  };
};


export default connect(mapStateProp ,{getSingleCOurse})(OutlinedCard)