import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
    state = {
        title:"",
        content:""
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(this.props);
        this.props.createProject(this.state)
        this.props.history.push('/');
    }
    render() {
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to="/signin"/>
        return (
            <div className="container"> <br/>
                <h4 className="text-center">Create Project</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" className="form-control" placeholder="" onChange={this.handleChange}/>
                        <small id="helpId" className="text-muted">Type in a valid title please</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" cols="30" rows="10" className="form-control" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        auth:state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        createProject: (project)=>dispatch(createProject(project))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
