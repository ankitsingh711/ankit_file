import React, { Fragment, Component } from "react";
import './secondPage.css'
import Header from "../../Header";
import SecondDisplay from './secondDisplay';


const url="https://ankit-netflix.herokuapp.com/movies"

class secondPage extends Component{

    constructor(){
        super()

        this.state={
            movie_id:''
        }
    }


    render(){
        return(
            <Fragment>
    
                <Header/>

                    <div className="card bg-dark text-white">
                        <video playsInline src={"https://static.vecteezy.com/packs/media/components/home/masthead-videos/img/masthead-video-7043b08923518bcae9d70f33e415ef2c.mp4"} autoPlay={true} muted={false} loop={true} controls={false} preload="true" width="100%" height="100%">
                        </video>
                        <div className="card-img-overlay my-5">
                            <h1 className="card-title" style={{fontWeight:"bold"}}>Beautiful Desert</h1>
                            <h5 className="card-text my-3">
                                This is the Beautiful desert view watch movies, Tvshows, webseries and all on a click on the best OTT platform Netflix. 
                            </h5>
                            <h4 className="card-text my-3">Watch it Now</h4>
                        </div>
                    </div><br/>
                <SecondDisplay movieData={this.state.movie_id}/>
            </Fragment>
        )
    }

    // api calling 
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({movie_id:data})
        })
    }
}

export default secondPage;