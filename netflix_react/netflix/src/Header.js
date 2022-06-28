import React, { Component, Fragment } from 'react';
import { Link,withRouter} from 'react-router-dom';
import './Header.css';


class Header extends Component{

    constructor(){
        super()

        this.sate={
            userData:'',
        }
    }


    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userInfo')
        sessionStorage.setItem('loginStatus',false)
        this.setState({userData:''})
        this.props.history.push('/')
    }


    render(){
        return(

            <Fragment>

                            <nav className="navbar navbar-expand-lg navbar-light">
                                {/* <!-- Container wrapper --> */}
                                <div className="container-fluid">
                                    {/* <!-- Toggle button --> */}
                                    <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                    >
                                    <i className="fas fa-bars"></i>
                                    </button>

                                    {/* <!-- Collapsible wrapper --> */}
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    {/* <!-- Navbar brand --> */}
                                    <Link to="/home" className="navbar-brand mt-2 mt-lg-0" >
                                        <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                                        height="30"
                                        alt=""
                                        loading="lazy"
                                        />
                                    </Link>
                                    {/* <!-- Left links --> */}
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                        <Link to="/home" className="nav-link text-light" >Home</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link to="/tvshows" className="nav-link text-light">TV Shows</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link to="/movies" className="nav-link text-light" style={{color:"white"}}>Movies</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link to="/webseries" className="nav-link text-light" style={{color:"white"}}>Webseries</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link to="/mylist" className="nav-link text-light" style={{color:"white"}}>My List</Link>
                                        </li>
                                    </ul>
                                    {/* <!-- Left links --> */}
                                    </div>
                                    {/* <!-- Collapsible wrapper --> */}

                                    {/* <!-- Right elements --> */}
                                    <div className="d-flex align-items-center">

                                        {/* Search icon */}
                                        
                                        <form className="back mx-4 text-dark">
                                            <span className="fa fa-search searchicon" aria-hidden="true"> 
                                            </span>
                                            <input type="text" name="search" class="extand float-end"/>
                                        </form>

                                    
                                        


                                    {/* <!-- Notifications --> */}
                                    <Link to=""
                                        className="text-reset me-3 dropdown-toggle hidden-arrow"
                                        id="navbarDropdownMenuLink"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="fas fa-bell" style={{color:"white"}}></i>
                                        <span className="badge rounded-pill badge-notification bg-danger">1</span>
                                    </Link>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownMenuButton1"
                                        style={{backgroundColor:"black",marginLeft:"1100px"}}
                                    >
                                        <li>
                                        <Link to="/movies" className="dropdown-item" >Trending Movies</Link>
                                        </li>
                                        <li>
                                        <Link to="/tvshows" className="dropdown-item" >TV Shows Trending</Link>
                                        </li>
                                        <li>
                                        <Link to="/home" className="dropdown-item" >Latest Collections</Link>
                                        </li>
                                    </ul>

                                    {/* <!-- Avatar --> */}
                                    <Link to=""
                                        className="dropdown-toggle d-flex align-items-center hidden-arrow"
                                        id="navbarDropdownMenuLink"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img
                                        src="https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
                                        className=""
                                        height="25"
                                        alt=""
                                        loading="lazy"
                                        />
                                    </Link>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownMenuButton1"
                                        style={{backgroundColor:"black",marginLeft:"1160px"}}
                                    >
                                        <li>
                                        <Link to="/account" className="dropdown-item"><i className="fa-duotone fa-pen"></i>Manage profile</Link>
                                        </li>
                                        <li>
                                        <Link to="/account" className="dropdown-item"><i className="fa-solid fa-user-gear"></i> 
                                        Account</Link>
                                        </li>
                                        <li>
                                        <Link to="" className="dropdown-item"><i className="fa-light fa-question"></i>Help Center</Link>
                                        </li>
                                        <li>
                                        <button onClick={this.handleLogout} className="dropdown-item"><i className="fa-light fa-right-from-bracket"></i>Sign out of Netflix</button>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </nav>
            </Fragment>
        )
    }
}

export default withRouter(Header);