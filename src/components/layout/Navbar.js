import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = (props) =>{
  const { auth, profile } = props;
//   console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
    return(
        <nav className="navbar navbar-expand-lg navbar-dark elegant-color">
            <Link className="navbar-brand" to="/">MarioPlan</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="basicExampleNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active"><Link to="#" className="nav-link">Home</Link></li>
                {links}
            </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) =>{
    console.log(state)
    return{
        auth: state.firebase.auth,
        profile:state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);