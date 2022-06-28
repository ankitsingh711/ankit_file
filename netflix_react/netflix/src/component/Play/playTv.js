import React, { Component } from "react";
import ReactPlayer from 'react-player/lazy'
import axios from 'axios'

const Url = "https://ankit-netflix.herokuapp.com/playtv"

class PlayerTv extends Component{

    constructor(){
        super()

        this.state={
            details:""
        }
    }

    render(){
        let {details}=this.state
        return(
                    <ReactPlayer controls={true} width="100%" height="100%" url="https://cdn.videvo.net/videvo_files/video/premium/getty_189/large_watermarked/istock-1189769150_preview.mp4" />   
        )
    }

    async componentDidMount(){
        let TvId = this.props.location.search.split('=')[1];
        let response = axios.get(`${Url}/${TvId}`)
        console.log(">>>response.data[0].tvshows_id",response.data[0].tvshows_id)
    }
}

export default PlayerTv



