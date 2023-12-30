import React,{ Fragment} from "react";
import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <Link to="/home" className="navbar-brand"style={{color:"white",fontWeight:"bold",textAlign:"center"}}>Ankit Singh Developer</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to="/" style={{color:"white",textDecoration:"none"}} className="mx-2">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/post" style={{color:"white",textDecoration:"none"}} className="mx-2">Posts</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <Link to="/profile" style={{color:"white",textDecoration:"none"}} className="mx-2">Profile</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </Fragment>
        
    )
}

export default Header;