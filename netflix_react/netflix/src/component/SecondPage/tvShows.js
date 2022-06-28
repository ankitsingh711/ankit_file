import React, { Fragment, Component } from "react";
import './secondPage.css'
import Header from "../../Header";
import TvDisplay from './tvDisplay';

const url="https://ankit-netflix.herokuapp.com/tvshows"

class TvShows extends Component{

    constructor(){
        super()

        this.state={
            tvshows_id:''
        }
    }


    render(){
        return(
            <Fragment>
    
                <Header/>

                <div className="card bg-dark text-dark">
                        <video playsInline src={"https://storage.coverr.co/videos/Yn2jXSeZZ3rfedFzKdIhdDjPOIqTSf51?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjU1OTkyNjg3fQ.65kJ3tDM9LVH7ZWlAAj05_YJAQZ6XTN7bEb8Vn7CbqA"} autoPlay={true} muted={false} loop={true} controls={false} preload="true" width="100%" height="100%">
                        </video>
                        <div className="card-img-overlay my-5">
                            <h1 className="card-title" style={{fontWeight:"bold"}}>Wonderful Nature</h1>
                            <h5 className="card-text my-3">
                                This is the Beautiful nature view watch Movies on a click on the best OTT platform Netflix. 
                            </h5>
                            <h4 className="card-text my-3">Watch it Now</h4>
                        </div>
                    </div><br/>
                <TvDisplay TvData={this.state.tvshows_id}/>
            </Fragment>
        )
    }

    // api calling 
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({tvshows_id:data})
        })
    }
}

export default TvShows;