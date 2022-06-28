import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./secondPage.css";
import Footer from '../../Footer'
import HoverVideoPlayer from 'react-hover-video-player';

const WebDisplay = (props) => {
const listWeb = ({ webData }) => {
    if (webData) {
    return webData.map((item) => {
        return (
            <Fragment>
                <div className="container-fluid mx-5">
                <div className="card">
                    <div className="row g-0">
                        <div class="col-md-4">
                        <HoverVideoPlayer videoSrc={item.webseries_video} 
                        pausedOverlay={
                            <img
                            src={item.webseries_thumbnail}
                            alt=""
                            width="100%"
                            height="100%"
                            />
                        }
                        />

                        </div>

                        <div class="col-md-8">
                            <div className="card-body">
                                <h3 style={{color:"white"}} class="card-title mx-5">Name: <span className="text-light">{item.name}</span></h3>
                                <h4 style={{color:"white"}} class="card-title mx-5">Rating: <span className="text-light">{item.rated}</span></h4>
                                <h4 style={{color:"white"}} class="card-title mx-5">Language: <span className="text-light">{item.language}</span></h4>
                                <h4 style={{color:"white"}} class="card-title mx-5">Type: <span className="text-light">{item.webseries_type}</span></h4>   
                                <h5 style={{color:"white"}} class="card-title mx-5">Season: <span className="text-light">{item.season}</span></h5>
                                <h5 style={{color:"white"}} class="card-title mx-5">Episodes: <span className="text-light">{item.episodes}</span></h5>                       
                                <div className="overlay">
                                <Link
                                to="/mylist" className="btn" type="button" id="over2">
                                <i 
                                className="fa-solid fa-add" 
                                style={{ fontSize: "20px" }}>
                                </i> 
                                Add To Mylist</Link>  

                                <Link
                                to={`playweb?WebId=${item.webseries_id}`} type="button" className="btn" id="over1">
                                <i
                                className="fa-solid fa-circle-play"
                                style={{ fontSize: "50px" }}
                                ></i>
                                </Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div><hr className="text-light"/>
                </div>
                </Fragment>
        );
    });
    }else{
        return(
            <div class="loader"></div>
        )
    }
};

return <div id="mainContainer">
    <h4 className="mx-5 text-light">Watch Webseries On a Click</h4>
    {listWeb(props)}
    <Footer/></div>;
};

export default WebDisplay;
