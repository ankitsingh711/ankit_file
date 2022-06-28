import React, { Component } from "react";
import ReactPlayer from 'react-player/lazy'
import axios from 'axios'

const Url = "https://ankit-netflix.herokuapp.com/playweb"

class PlayerWeb extends Component{

    constructor(){
        super()

        this.state={
            details:""
        }
    }

    render(){
        let {details}=this.state
        return(
                <ReactPlayer controls={true} width="100%" height="100%" url='https://static.vecteezy.com/system/resources/previews/005/469/770/mp4/the-earth-on-a-small-tree-with-environment-ecology-sign-hologram-on-natural-background-free-video.mp4' />   
        )
    }

    async componentDidMount(){
        let WebId = this.props.location.search.split('=')[1];
        let response = await axios.get(`${Url}/${WebId}`)
        console.log(">>>response.data[0].movie_id",response.data[0].webseries_id)
    }
}

export default PlayerWeb



