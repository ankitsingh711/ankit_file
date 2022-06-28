import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom';

const url = "https://netflix-logins.herokuapp.com/api/auth/userinfo"

class PremiumDisplay extends Component{

    constructor(){
        super()

        this.state = {
            userData:'',
            userName:''
        }
    }

    render(){
        return(
            <Fragment>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div style={{marginLeft:"370px"}} className="col">
                        <div className="card">
                        <img src="https://miro.medium.com/max/1400/0*3C6CUn1FEC_raM8c" className="card-img-top" alt="Hollywood Sign on The Hill"/>
                        <div className="card-body">
                            <h3 className="card-title text-light">Payment Success !</h3>
                            <h5 className="card-text text-light">
                            Now You can Watch Movies,Webseries and Tvshows 
                            </h5>
                            <Link style={{backgroundColor:"red",color:"white"}} to="/home" className='btn'>Let's Start</Link> 
                        </div>
                        </div>
                    </div>
                    </div>
            </Fragment>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
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

export default PremiumDisplay