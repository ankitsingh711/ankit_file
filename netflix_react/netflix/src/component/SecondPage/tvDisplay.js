import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./secondPage.css";
import Footer from '../../Footer'
import HoverVideoPlayer from 'react-hover-video-player';


const TvDisplay = (props) => {
const listTv = ({ TvData }) => {
    if (TvData) {
    return TvData.map((item) => {
        return (
            <Fragment>
            <div className="card mx-4 my-4">
            <div className="row g-0">
                <div class="col-md-4">
                    <HoverVideoPlayer videoSrc={item.tvshows_video} 
                    pausedOverlay={
                    <img
                    src={item.tvshows_thumbnail}
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
                        <h4 style={{color:"white"}} class="card-title mx-5">Type: <span className="text-light">{item.tvshows_type}</span></h4>               
                        <div className="overlay">
                                <Link
                                to="/mylist" className="btn" type="button" id="over2">
                                <i 
                                className="fa-solid fa-add" 
                                style={{ fontSize: "20px" }}>
                                </i> 
                                Add To Mylist</Link>  

                                <Link
                                to={`/playtv?TvId=${item.tvshows_id}`} type="button" className="btn" id="over1">
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
    <h4 className="mx-5 text-light">Watch TvShows On a Click</h4>
    {listTv(props)}
    <Footer/></div>;
};
export default TvDisplay;
