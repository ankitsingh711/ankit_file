import React, { Component, Fragment } from "react";
import ReactPlayer from 'react-player/lazy'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './play.css';

const Url = "https://ankit-netflix.herokuapp.com/playtv"

class PlayerTv extends Component{

    constructor(){
        super()

        this.state={
            detail:""
        }
    }

    render(){
        let {detail}=this.state
        return(
            <Fragment>
            <div id="conatin" className="container">
            <Link style={{fontSize:"30px",color:"white"}} to="/tvshows" className="btn"><i className="fa-solid fa-arrow-left"></i><span style={{fontSize:"15px"}} className="text-light mx-2">Go Back</span></Link>
                <div style={{fontSize:"20px",fontWeight:"bold",color:"white",textAlign:"center",backgroundColor:"balck",opacity:"0.8"}} className=" position-absolute my-3">
                Now You are Watching <span style={{fontSize:"20px",color:"red"}}>{detail.name}</span> 
                </div>
                <ReactPlayer key={detail.tvshows_id}
                controls={true}
                width="100%"
                height="100%"
                url={detail.tvshows_video}
                />
            </div>
        </Fragment>  
        )
    }

    async componentDidMount(){
        let TvId = this.props.location.search.split('=')[1];
        let response = await axios.get(`${Url}/${TvId}`)
        console.log(">>>response.data[0].tvshows_id",response.data[0].tvshows_id)
        this.setState({detail:response.data[0]})
    }
}

export default PlayerTv



