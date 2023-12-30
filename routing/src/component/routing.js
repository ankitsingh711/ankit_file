import React from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Posts from './Posts';
import Header from './Header';
import Footer from './Footer';



const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>} exact />
                        <Route path="/post" element={<Posts/>} exact />
                        <Route path="/profile" element={<Profile/>} exact />
                    </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;