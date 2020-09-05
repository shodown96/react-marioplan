import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
    state = {
        email:"",
        password:"",
        firstName:"",
        lastName:"",
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(this.state)
        this.props.signUp(this.state);
    }
    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' /> 
        return (
            <div className="container"> <br/>
                <h4 className="text-center">SignUp</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" className="form-control" placeholder="" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" className="form-control" placeholder="" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control" placeholder="" onChange={this.handleChange}/>
                        <small id="helpId" className="text-muted">Type in a valid email please</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-control" placeholder="" onChange={this.handleChange}/>
                        <small id="helpId" className="text-muted">Let no one see you</small>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">SignUp</button>
                    </div>
                    { authError ? <p className="text-danger">{authError}</p> : null }
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
      auth: state.firebase.auth,
      authError: state.auth.authError
    }
  }

const mapDispatchToProps = (dispatch) =>{
    return{
        signUp: (creds) => dispatch(signUp(creds))
    }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
