import React, {Component, Fragment} from "react";
import Header from '../../Header';

class Mylist extends Component{
    
    render(){
        return(
            <Fragment>
                <Header/>
                <center>
                    <video playsInline src="https://media.istockphoto.com/videos/motion-graphics-of-treasure-chest-opening-black-background-video-id1384753684" autoPlay={true} controls={false} style={{width:"50%"}} preload={true}/>
                <h5 className="text-light">Nothing to show add your Movies, Webseries, TvShows to watch it Later. </h5>
                </center>
            </Fragment>
        )
    }
}

export default Mylist;