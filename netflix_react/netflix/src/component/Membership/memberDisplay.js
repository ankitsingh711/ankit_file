import React, { Fragment } from "react";
import './member.css';

const PremDisplay = (props) => {
    const Premlist = ({ DataPrem }) => {
        if (DataPrem) {
        return DataPrem.map((item) => {
            return (
                    <Fragment>
                        <div id="cards" className="card w-75 my-3">
                            <div className="card-body">
                                <h5 id="title" className="card-title">{item.premium_type}</h5><br/>
                                <span className="card-text">Price Rs  <h4 id="h4">{item.price}</h4></span><br/>
                                <span className="card-text">Numbers of Screen Watch   <h4 id="h4">   {item.number_of_screens_you_can_watch_on_at_same_time}</h4></span><br/>
                                <span className="card-text">Unlimited movies,tvshows and mobile games  <h4 id="h4">{item.unlimited_movies_tvshows_mobile_games}</h4></span><br/>
                                <span className="card-text">Watch on your laptop and Tv  <h4 id="h4">{item.hd_available}</h4></span><br/>
                                <span className="card-text">HD Available  <h4 id="h4">{item.ultra_hd_available}</h4>  </span><br/>
                                <span className="card-text">Ultra HD Available  <h4 id="h4">{item.hd_available}</h4>  </span><br/>
                                <a href="https://netflixpaytm.herokuapp.com/" method="GET"  id="btn" style={{backgroundColor:"red",color:"white"}} className="btn float-end">Buy</a>
                            </div>
                        </div>
                    </Fragment>
            );
        });
        }
        else{
            return(
                <div style={{marginTop:"200px"}} class="loader"></div>
            )
        }
    };
    
    return <div id="mainContainer">{Premlist(props)}</div>;
    };

    export default PremDisplay