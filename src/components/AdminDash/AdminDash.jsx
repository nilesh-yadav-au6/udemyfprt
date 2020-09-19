import React, { Component } from 'react'
import { addCourse } from "../../redux/actions/courseAction"
import { connect } from "react-redux"

class AdminDash extends Component {

    state = {
        isCourseOpen : false,
        title:"",
        description:"",
        price:"",
        category:"",
        video:""
    }

    toggleCourse = () => this.setState({ isCourseOpen: !this.state.isCourseOpen });

    handelAddCourse = (e) => {
        e.preventDefault()
        const { title , description ,price,category,video } = this.state
        this.props.addCourse({title, description, price, category, video})
    }

    handelSingleFile = (e) => {
        const video = e.target.files
        this.setState({ video})
    }

    handelChange = e =>{
        this.setState({[e.target.name]:e.target.value})
    }

    render() {
        return (
            <div> 
                <h1>Welcome Admin</h1>
                <button className={"no-focusborder"} onClick={this.toggleCourse} style={{ marginBottom: '1rem' }}>Add Course</button>

                {this.state.isCourseOpen ? 
            <div style={{display: "flex", flexDirection: "row", flexWrap: 'wrap', justifyContent: 'space-around', width: "calc(100vw-20px)", margin: '10px'}} className="input-fields">
            <form encType='multipart/form-data' onSubmit={this.handelAddCourse} >
                <input type="text" name='title' onChange={this.handelChange} value={this.state.productName} className="input" placeholder="Title" />
                <input type="text" name='description' onChange={this.handelChange} value={this.state.brand} className="input" placeholder="Description" />
                <input type="text" name='price' onChange={this.handelChange} value={this.state.price} className="input" placeholder="Price" />
                <input type="text" name='category' onChange={this.handelChange} value={this.state.category} className="input" placeholder="Category" />
                <input type="file" name='video' multiple onChange={this.handelSingleFile}  />
                <button className={"no-focusborder"} type='submit' >Add</button>
            </form>
        </div> : null}
            </div>

            
        )
    }
}

export default connect(null , {addCourse})(AdminDash)
