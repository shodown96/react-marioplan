import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) =>{
    return(
        <ul className="navbar-nav">
            <li className="nav-item"><NavLink to="/create" className="nav-link">New Project</NavLink></li>
            <li className="nav-item"><a onClick={props.signOut} className="nav-link">Logout</a></li>
            <li className="nav-item"><NavLink to="#" className="nav-link text-center warning-color avatar">{props.profile.initials}</NavLink></li>
        </ul>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }
  
  export default connect(null, mapDispatchToProps)(SignedInLinks)