import React, { Component, Fragment } from "react";
import Header from '../../Header'
import './account.css'
import { Link } from 'react-router-dom';

const url = "https://netflix-logins.herokuapp.com/api/auth/userInfo"

class Account extends Component{

    constructor(){
        super()

        this.state={
            userData:'',
            userName:'',
            userEmail:'',
            userRole:''
        }
    }


    handleName = () => {
        if(this.state.userData.name || sessionStorage.getItem('uName') !==null ){
            if(sessionStorage.getItem('uName') !==null){
                let name = sessionStorage.getItem('uName')
                let email = sessionStorage.getItem('uEmail')
                let role = sessionStorage.getItem('uRole')
                let phone = sessionStorage.getItem('uPhone')
                return(
                    <>
                        <h5 className="my-2 mx-2">Name: <span style={{color:"red",fontSize:"17px",fontWeight:"bold"}}>Ankit Singh</span></h5>
                        <h5 className="my-2 mx-2">Email: <span style={{color:"red",fontSize:"17px",fontWeight:"bold"}}>ankit@gmail.com</span></h5>
                        <h5 className="my-2 mx-2">Phone Number: <span style={{color:"red",fontSize:"17px",fontWeight:"bold"}}>8473747</span></h5>
                        <h5 className="my-2 mx-2">Role: <span style={{color:"red",fontSize:"17px",fontWeight:"bold"}}>Admin</span></h5>
                    </>
                )
            }
        }else{
            let data = this.state.userData;
            let OutArray = [data.name, data.email, data.phone, data.role];
            sessionStorage.setItem('userInfo',OutArray)
            sessionStorage.setItem('loginStatus',true)
                    return(
                        <Fragment>
                        <h5 className="my-2 mx-2">Name:  <span style={{color:"red",fontSize:"17px",fontWeight:"bold"}}>Ankit Singh</span> </h5>
                        <h5 className="my-2 mx-2">Email: <span style={{color:"red",fontSize:"17px",fontWeight:"bold"}}>ankit@gmail.com</span></h5>
                        <h5 className="my-2 mx-2">Phone Number: <span style={{color:"red",fontSize:"17px",fontWeight:"bold"}}>8473747</span></h5>
                        <h5 className="my-2 mx-2">Role: <span style={{color:"red",fontSize:"17px",fontWeight:"bold"}}>Admin</span></h5>
                        </Fragment>
                    )
            }
    }

    render(){
        return(
            <Fragment>
                <Header/>
                <div style={{height:"100%",width:"100%"}} className="container-fluid bg-light">
                    <h1 className="text-dark">Account Membership
                    <Link to="/membership" className="btn mx-3" style={{color:"white",backgroundColor:"red"}}>Add Membership<i className="fa-solid fa-add"></i></Link></h1><hr style={{color:"black"}}/>
                    {this.handleName()}

                    <img src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg" className="img-fluid" style={{marginLeft:"550px",marginBottom:"300px"}}  width="10%"/>
                    <h5 style={{marginLeft:"530px",fontWeight:"bold",fontFamily:"serif"}} className="text-dark"> &copy; Ankit Singh Dveloper 2022 </h5>
                </div>
            </Fragment>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('Some data')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
    }
}

export default Account