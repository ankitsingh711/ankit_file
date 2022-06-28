import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    
    return(
        <Fragment>
                    <div className="container-fluid p-5" style={{margin:"0%",padding:"0%"}} >

                    <section className="mb-5" style={{marginLeft:"400px"}}>
                        
                        <Link to="/" className="btn btn-outline-light btn-floating m-1"  role="button"
                        ><i className="fab fa-facebook-f"></i
                        ></Link>

                        
                        <Link to="/" className="btn btn-outline-light btn-floating m-1"  role="button"
                        ><i className="fab fa-twitter"></i
                        ></Link>

                        
                        <Link to="" className="btn btn-outline-light btn-floating m-1"  role="button"
                        ><i className="fa-brands fa-youtube"></i>
                        </Link>

                        
                        <Link to="/" className="btn btn-outline-light btn-floating m-1" role="button"
                        ><i className="fab fa-instagram"></i
                        ></Link>

                        
                        <Link to="/" className="btn btn-outline-light btn-floating m-1" role="button"
                        ><i className="fab fa-linkedin-in"></i
                        ></Link>

                    
                        <Link to="/" className="btn btn-outline-light btn-floating m-1"  role="button"
                        ><i className="fab fa-github"></i
                        ></Link>
                    </section>

                        </div>
                        
                        <form/>
                    <section/>


                    {/* <!-- Section: Text --> */}
                    
                    <div className="container-fluid"/>
                    <section className="mb-4">
                        <span className='mx-3' style={{color: "white"}}>
                        Questions? Call 000-800-040-1843
                        </span>
                    </section>
                        <div className="row "/>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 float-start" style={{}}>
                            <ul className="list-unstyled mb-0">
                            <li>
                                <Link to="/" style={{textDecorationLine: "none"}} className="text-white mx-3"><span style={{color:"#757575"}}>FAQ</span></Link>
                            </li>
                            <li>
                                <Link to="/" style={{textDecorationLine: "none"}} className="text-white mx-3"><span style={{color:"#757575"}}>Investor Relations</span></Link>
                            </li>
                            <li>
                                <Link to="/" style={{textDecorationLine: "none"}} className="text-white mx-3"><span style={{color:"#757575"}}>Privacy</span></Link>
                            </li>
                            <li>
                                <Link to="/" style={{textDecorationLine: "none"}}  className="text-white mx-3"><span style={{color:"#757575"}}>Speed Test</span></Link>
                            </li>
                            </ul>
                        </div>

                        
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 float-end">

                            <ul className="list-unstyled mb-0">
                            <li>
                                <Link to="/" style={{textDecorationLine: "none"}} className="text-white"><span style={{color:"#757575"}}>Help Center</span></Link>
                            </li>
                            <li>
                                <Link to="/" style={{textDecorationLine: "none"}}  className="text-white"><span style={{color:"#757575"}}>Jobs</span></Link>
                            </li>
                            <li>
                                <Link to="/" style={{textDecorationLine: "none"}} className="text-white"><span style={{color:"#757575"}}>Cookie Preferences</span></Link>
                            </li>
                            <li>
                                <Link to="/" style={{textDecorationLine: "none"}}  className="text-white"><span style={{color:"#757575"}}>Legal Notices</span></Link>
                            </li>
                            </ul>
                        </div>
                        

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 float-end">

                            <ul className="list-unstyled mb-0">
                            <li>
                                <Link to="/" style={{textDecorationLine: "none"}}  className="text-white"><span style={{color:"#757575"}}>Account</span></Link>
                            </li>
                            <li>
                                <Link to="/" style={{textDecorationLine: "none"}} className="text-white"><span style={{color:"#757575"}}>Ways to watch</span></Link>
                            </li>
                            <li>
                                <Link to="/" style={{textDecorationLine: "none"}} className="text-white"><span style={{color:"#757575"}}>Corporate Information</span></Link>
                            </li>
                            <li>
                                <Link to="/" style={{textDecorationLine: "none"}} className="text-white"><span style={{color:"#757575"}}>Only on Netflix</span></Link>
                            </li>
                            </ul>
                        </div>
                        

                        
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 float-end">

                            <ul className="list-unstyled mb-0">
                            <li>
                                <Link to="/" style={{textDecorationLine: "none",color: "#303030" }} className="text-white"><span style={{color:"#757575"}}> Media Center </span></Link>
                            </li>
                            <li>
                                <Link to="/" style={{textDecorationLine: "none"}} className="text-white"><span style={{color:"#757575"}}>Temrs of Use</span></Link>
                            </li>
                            <li>
                                <Link to="/" style={{textDecorationLine: "none",color: "#303030" }}  className="text-white"><span style={{color:"#757575"}}>Contact Us</span></Link>
                            </li>
                            </ul>
                        </div>
                        <div className="dropdown "/>
                            <button className="btn btn-outline-light dropdown-toggle my-5" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-globe"></i> English
                            </button>
                            <ul className="dropdown-menu float-start" aria-labelledby="dropdownMenu2">
                            <li><button className="dropdown-item" type="button">English</button></li>
                            <li><button className="dropdown-item" type="button">Hindi</button></li>
                            </ul> <br/><br/>
                        <div/>
                        <div/>
                        <section/>
                    <div/>
                    <div/>
        </Fragment>
    )
}

export default Footer;