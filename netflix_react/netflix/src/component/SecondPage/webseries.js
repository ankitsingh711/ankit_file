import React, { Fragment, Component } from "react";
import './secondPage.css'
import Header from "../../Header";
import WebDisplay from './webDisplay';

const url="https://ankit-netflix.herokuapp.com/webseries"

class Webseries extends Component{

    constructor(){
        super()

        this.state={
            webseries_id:''
        }
    }


    render(){
        return(
            <Fragment>
    
                <Header/>


                <div className="card bg-dark text-white">
                        <video playsInline src={"https://resources.videvo.net/wp-content/themes/ViDEVO/home-videos/11.mp4"} autoPlay={true} muted={false} loop={true} controls={false} preload="true" width="100%" height="100%">
                        </video>
                        <div className="card-img-overlay my-5">
                            <h1 className="card-title" style={{fontWeight:"bold"}}>Wonderful Nature</h1>
                            <h5 className="card-text my-3">
                                This is the Beautiful nature view watch Movies on a click on the best OTT platform Netflix. 
                            </h5>
                            <h4 className="card-text my-3">Watch it Now</h4>
                        </div>
                    </div><br/>
                <WebDisplay webData={this.state.webseries_id}/>
            </Fragment>
        )
    }

    // api calling 
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({webseries_id:data})
        })
    }
}

export default Webseries;