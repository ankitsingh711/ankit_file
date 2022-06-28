import React, { Component, Fragment } from "react";
import './login.css';
import { Link } from 'react-router-dom';
import Footer from "../../Footer";

const url="https://netflix-logins.herokuapp.com/api/auth/login"

class Login extends Component{


    constructor(props){
        super(props)

        this.state={
            email:'',
            password:'',
            message:''
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    login = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message:data.token})
            }else{
                sessionStorage.setItem('Secret Code',data.token)
                this.props.history.push('/whoseWatching')
            }
        })
    }

    render(){
        return(
            <Fragment>

                
                <div id="bg" className="container-fluid" />

                    <div style={{position:"absolute"}} className="container-fluid">
                    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/bffa76da-b175-43bc-b7ef-e47a5095b535/IN-en-20220613-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="img"/>
                    <Footer style={{position:"absolute"}}/>
                    </div>
                    <div style={{position:"absolute"}}  clasName="container">
                        <img  src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix" width="150px" />
                    </div>
                    <section className="vh-100 gradient-custom">
                        <div className="container py-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div id="log" className="card text-white">
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                    <div className="form-outline form-white mb-4">
                                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} id="typeEmailX" className="form-control form-control-lg" />
                                        <label className="form-label" for="typeEmailX">Email</label>
                                    </div>

                                    <div className="form-outline form-white mb-4">
                                        <h5 style={{color:"red"}}>{this.state.message}</h5>
                                        <input type="password" value={this.state.password} name="password" onChange={this.handleChange} id="typePasswordX" className="form-control form-control-lg" />
                                        <label className="form-label" for="typePasswordX">Password</label>
                                    </div>

                                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                    <Link onClick={this.login} className="btn btn-outline-light btn-lg px-5" type="submit">Login</Link>

                                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                        <Link to="/" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></Link>
                                        <Link to="/" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></Link>
                                        <Link to="/" className="text-white"><i className="fab fa-google fa-lg"></i></Link>
                                    </div>

                                    </div>

                                    <div>
                                    <p className="mb-0">Don't have an account? <Link to="/register"  className="text-white-50 fw-bold">Sign Up</Link>
                                    </p>
                                    </div>

                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                <div/><br/>

            </Fragment>
        )
    }
}

export default Login;