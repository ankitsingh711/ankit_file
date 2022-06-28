import React, { Component } from "react";
import ReactPlayer from 'react-player/lazy';
import axios from 'axios';

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
            <ReactPlayer
            controls={true} width="100%" height="100%"
            url="https://static.vecteezy.com/system/resources/previews/007/536/781/mp4/aerial-view-of-white-sand-beach-and-water-surface-texture-foamy-waves-with-sky-beautiful-tropical-beach-amazing-sandy-coastline-with-white-sea-waves-nature-seascape-and-summer-concept-free-video.mp4"
            />
        )
    }

    async componentDidMount(){
        let movieId = this.props.location.search.split('=')[1];
        let response = await axios.get(`${url}/${movieId}`)
        console.log(">>>response.data[0].movie_id",response.data[0].movie_id)
    }
}

export default PlayerMovie



