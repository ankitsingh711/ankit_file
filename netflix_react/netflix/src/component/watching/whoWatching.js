import React, { Component, Fragment } from "react";
import { Link,withRouter } from 'react-router-dom';
import './who.css'

const url = "https://netflix-logins.herokuapp.com/api/auth/userInfo"

class Watching extends Component {
    constructor(){
        super()

        this.state={
            userData:'',
            userName:''
        }

    }


    handleName = () => {
        if(this.state.userData.name || sessionStorage.getItem('uName') !==null ){
            if(sessionStorage.getItem('uName') !==null){
                let name = sessionStorage.getItem('uName')
                return(
                    <>
                        <span style={{marginLeft:"530px",marginTop:"100px"}}  className="text-light">{name}</span>
                    </>
                )
            }
        }else{
            let data = this.state.userData;
            let OutArray = [data.name, data.email, data.phone, data.role];
            sessionStorage.setItem('userInfo',OutArray)
            sessionStorage.setItem('loginStatus',true)
                    return(
                        <h3 style={{marginLeft:"520px"}}  className="text-light">Hi Ankit {data.name}</h3>
                    )
            }
    }

    render(){
        return(
            <Fragment>
                <div className="container-fluid mx-3 my-3">
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                height="30"
                alt=""
                loading="lazy"
                />
                </div>
    
                <div style={{color:"white",marginLeft:"500px",marginTop:"170px"}} className="container-fluid">
                <h1 style={{fontSize:"50px"}}>Who's watching?</h1>
                </div>
    
    
                <Link to="/home">
                <img
                src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"
                className="img1"
                height="140"
                alt=""
                loading="lazy"
                /><br/>

                <div className="container">
                    {this.handleName()}
                </div>
                

                </Link>
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

    
    export default withRouter(Watching);