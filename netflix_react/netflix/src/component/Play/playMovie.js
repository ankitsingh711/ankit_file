import React, { Component, Fragment } from "react";
import ReactPlayer from 'react-player/lazy';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './play.css';

const url = "https://ankit-netflix.herokuapp.com/playmovie"

class PlayerMovie extends Component{

    constructor(){
        super()

        this.state={
            detail:''
        }
    }

    render(){
        let {detail}=this.state
        return(
            <Fragment>
                <div id="conatin" className="container">
                <Link style={{fontSize:"30px",color:"white"}} to="/movies" className="btn"><i className="fa-solid fa-arrow-left"></i> <span style={{fontSize:"15px"}} className="text-light mx-2">Go Back</span></Link>
                <div style={{fontSize:"20px",fontWeight:"bold",color:"white",textAlign:"center",backgroundColor:"black",opacity:"0.8"}} className=" position-absolute my-2">
                Now You are Watching <span style={{fontSize:"20px",color:"red"}}>{detail.name}</span> 
                </div>
                <ReactPlayer key={detail.movie_id}
                controls={true}
                width="100%"
                height="100%"
                url={detail.movie_video}
                />
                </div>
            </Fragment>    
        )
    }

    async componentDidMount(){
        let movieId = this.props.location.search.split('=')[1];
        let response = await axios.get(`${url}/${movieId}`)
        console.log(">>>response.data[0].movie_id",response.data[0].movie_id)
        this.setState({detail:response.data[0]})
    }
}

export default PlayerMovie



