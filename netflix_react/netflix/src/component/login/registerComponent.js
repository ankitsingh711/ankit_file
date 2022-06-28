import React,{Component, Fragment} from 'react';
import './login.css';
import {Link} from 'react-router-dom';



const url = "https://netflix-logins.herokuapp.com/api/auth/register"

class Register extends Component {
    constructor(props){
        super(props)

        this.state={
            name:'',
            email:'',
            password:'',
            phone:''
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    register = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/membership'))
    }

    render(){
        return(
            <Fragment>
                <div style={{margin:"0%",width:"100%",marginBottom:"355px"}} className='container-fluid'>
                <img style={{position:"absolute"}} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix" width="150px" />
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/bffa76da-b175-43bc-b7ef-e47a5095b535/IN-en-20220613-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="img"/>


                <div className="container-fluid">
                    <section className="vh-100" style={{marginTop:"-1000px",backgroundColor:"black"}}>
                        <div className="container h-100">
                            <div  className="row d-flex justify-content-center align-items-center h-100">
                            <div  className="col-lg-12 col-xl-11">
                                <div className="card text-light" style={{borderRadius: "25px",backgroundColor:"black",width:"100%"}}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                        <form className="mx-1 mx-md-4">

                                        <div  className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} id="form3Example1c" className="form-control" />
                                            <label className="form-label" for="form3Example1c">Your Name</label>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                            <input value={this.state.email} onChange={this.handleChange}  type="email" name="email" id="form3Example3c" className="form-control" />
                                            <label className="form-label" for="form3Example3c">Your Email</label>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                            <input name="password" value={this.state.password} onChange={this.handleChange}  type="password" id="form3Example4c" className="form-control" />
                                            <label className="form-label" for="form3Example4c">Password</label>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                            <input value={this.state.phone} onChange={this.handleChange}  type="phone" name="phone" id="form3Example4cd" className="form-control" />
                                            <label className="form-label" for="form3Example4cd">Phone Number</label>
                                            </div>
                                        </div>

                                        <div className="form-check d-flex justify-content-center mb-5">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                            <label className="form-check-label" for="form2Example3">
                                            I agree all statements in <Link to="/">Terms of service</Link>
                                            </label>
                                        </div>

                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button onClick={this.register} type="button" className="btn btn-primary btn-lg">Register</button>
                                        </div>

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png"
                                        className="img-fluid mx-5" alt="Sample img" width="35%"/>

                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                </div>
                </div>

            </Fragment>
        )
    }

}

export default Register;