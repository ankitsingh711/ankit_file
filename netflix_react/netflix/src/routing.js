import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../src/component/Home/Home';
import SecondHome from '../src/component/SecondPage/secondHome';
import Login from '../src/component/login/loginComponent';
import Register from '../src/component/login/registerComponent';
import PlayMovie from '../src/component/Play/playMovie'
import PlayTv from '../src/component/Play/playTv'
import PlayWeb from '../src/component/Play/playWeb'
import Movie from '../src/component/SecondPage/movies'
import WebSeries from '../src/component/SecondPage/webseries';
import TvShows from '../src/component/SecondPage/tvShows';
import MyList from './component/MyList/mylist';
import Watch from '../src/component/watching/whoWatching';
import Error from './Error';
import Account from './component/Account/account'
import Membership from '../src/component/Membership/membership'
import ViewPremium from '../src/component/Membership/viewPremium';



const Routing = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ Home }/>
                <Route path="/login" component={ Login }/>
                <Route path="/register" component={ Register }/>
                <Route path="/home" component={ SecondHome }/>
                <Route path="/playmovie" component={PlayMovie}/>
                <Route path="/playtv" component={PlayTv}/>
                <Route path="/playweb" component={PlayWeb}/>
                <Route path="/movies" component={Movie}/>
                <Route path="/webseries" component={WebSeries}/>
                <Route path="/tvshows" component={TvShows}/>
                <Route path="/mylist" component={MyList}/>
                <Route path="/whoseWatching" component={Watch}/>
                <Route path="/account" component={Account}/>
                <Route path="/membership" component={Membership}/>
                <Route path="/viewPremium" component={ViewPremium}/>
                <Route path="*" component={Error}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routing;
