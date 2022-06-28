import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Footer from '../../Footer'


class Home extends Component{
    

    render(){
    

        return(
            <Fragment>
                <div id="backgroundimage" className="container-fluid d-flex" style={{ borderBottom:" 8px solid #222",position:"absolute" }} />
                <div id="netfliximage" className="container my-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix" width="150px" />
                <div/>
                <div id="sign_in" className='container'>
                        <Link to="/"  style={{width: "7rem"}} type="button" className="btn btn-outline-light dropdown-toggle mx-3" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-globe"></i>English
                        </Link>
                        <ul class="dropdown-menu">
                        <li><Link to="/" class="dropdown-item" >English</Link></li>
                        <li><Link to="/" class="dropdown-item" href="#">Hindi</Link></li>
                        </ul>
                        <Link to="/login" type="button" className="btn btn-danger" style={{backgroundColor:"red",fontSize:"16px"}}>Sign In</Link>
                    </div>
                    <div id="imagetext" className="container-fluid ">
                        <span>Unlimited Movies,TV </span><br/>
                            <span style={{marginLeft: "70px"}}>shows and more.</span><br/>
                            <span style={{fontSize :"23px",marginLeft: "70px"}}>Watch anywhere. Cancel anytime.</span><br/><br/>
                            <p style={{color:"white"}}>Ready to watch? Enter your email to create or restart your membership.</p>
                            <form id="search" className="d-flex" noValidate >
                            <input id="email" for="validate" class="form-control" style={{width: "500px",height: "60px"}} type="search" placeholder="Email address" aria-label="Search" required />
                            <Link to="/register" className="btn btn-outline-danger text-light" type="submit" style={{backgroundColor: "red",width: "14rem",height: "60px",fontSize: "24px"}}><Link to="/register" style={{textDecoration:"none", color: "white"}} >Get Started</Link></Link>
                            </form>
                    </div>
            
                </div><br/><br/><br/>

                {/* 2nd part start */}

                <div className='container-fluid my-5' style={{borderBottom:"8px solid #222",height:"31rem"}}>
                    <div className="row mx-5">
                        <div className="col" style={{marginTop:"100px"}}>
                            <h1 style={{color: "white",fontSize:"50px",fontWeight: "bold"}}>Enjoy on your TV.</h1><br/>
                            <span style={{color:"white",fontSize: "25px"}}>Watch on smart TVs, PlayStation, Xbox,</span><br/>
                            <span style={{color:"white",fontSize: "25px"}}>Chromecast, Apple TV, Blu-ray players and</span><br/>
                            <span style={{color:"white",fontSize: "25px"}}>more.</span><br/>
                        </div>
                        <div className="col">
                            <div id="myvideo" className="container float-end my-5">
                                <video style={{height: "220px",width: "420px"}}  className="our-story-card-video mx-5 my-5" autoPlay="True" playsInline="True" muted="True" loop="True"><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" /></video>
                            </div>
                            <div id="mytv" className="container-fluid mx-1" />
                                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" className="img-fluid" data-uia="our-story-card-img" alt="photu" width="560px" />
                            <div/>
                        </div>
                    </div>
                </div>


                {/* 3rd part starting  */}

                <div className='container-fluid' style={{borderBottom:"8px solid #222",height:"33rem"}}>
                    <div className="row mx-5">
                        <div className="col">
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"  alt="stranger" width="470px" />
                                <div className="container mx-5" style={{border: "2px solid #404040",display:"inline-flex",width: "27rem",borderRadius: "6%"}}>
                                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" className="img-fluid" alt="im" width="50px" />
                                    <div className="container my-3">
                                    <span style={{color: "white",fontSize: "15px",fontweight: "bold"}}>Stranger Things</span><br/>
                                    <span style={{color: "#005feb",fontSize: "13px"}}>Downloading...    </span>
                                    </div>
                                    <div className="container float-end my-3">
                                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="download" width="50px" />
                                </div>
                            </div>
                            
                        </div>
                        <div className="col my-5">
                            <span style={{fontSize: "50px",color: "white",fontweight:" bold"}}>Download your shows to watch offline.</span><br/>
                            <span style={{fontSize: "25px",color: "white"}}>Save your favourites easily and always have something to watch.</span>
                        </div>
                    </div>
                </div>

                {/* 4th part starting  */}

                <div className="container-fluid" style={{height:"28rem",borderBottom:"8px solid #222"}}>
                    <div className="row my-5 mx-5">
                        <div className='col' style={{marginTop:"100px"}}>
                            <span style={{color: "white",fontSize: "50px",fontWeight: "bold"}}>Watch everywhere.</span><br/>
                            <span style={{color: "white",fontsize: "23px"}}>Stream unlimited movies and TV shows on</span><br/>
                            <span style={{color:" white",fontSize: "23px"}}>your phone, tablet, laptop, and TV.</span>
                        </div>
                        <div className='col'>
                            <div className="container float-end">
                                <video style={{height:"260px",width: "330px"}} id="myvideo2" className="our-story-card-video my-2 mx-5" autoPlay="True" playsInline="True" muted="" loop="True"><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" /></video>
                            </div>
                            <div className="container float-end mx-5">  
                                <img id="animationimage" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" className="img-fluid " alt="tv" width="540px" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5th part starting */}

                <div className="container-fluid" style={{height:"28rem",borderBottom:"8px solid #222"}}>
                    <div className="row my-5 mx-5">
                        <div className='col'>
                            <img src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf" className="img-fluid" alt="cartoon" width="500px"/>
                        </div>
                        <div className='col my-5'>
                            <span style={{color: "white" ,fontSize: "45px",fontWeight: "bold"}}>Create profiles for children.</span><br/>
                            <span style={{color: "white",fontSize: "25px"}}>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</span>
                        </div>
                    </div>
                </div>



            {/* <!-- 6th part starts  --> */}
    

                <div className='container-fluid' style={{color: "white",fontweight:" bold",marginTop:"150px"}}>
                <span style={{fontSize:"45px",marginLeft:"300px"}} >Frequently Asked Questions</span>
                </div>

                <div className='container-fluid'/>
                    <div className="row my-5"/>
                        <div className="col mx-5">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item" style={{backgroundColor: "#303030",color: "white"}}>
                                <h2 class="accordion-header" id="flush-headingOne">
                                <button style={{backgroundColor: "#303030",color: "white"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    What is Netflix?
                                </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

                                    You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{backgroundColor: "#303030",color: "white"}} >
                                <h2 class="accordion-header" id="flush-headingTwo">
                                <button style={{backgroundColor: "#303030",color: "white"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    How much does Netflix cost?
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{backgroundColor: "#303030",color: "white"}} >
                                <h2 className="accordion-header" id="flush-headingThree">
                                <button style={{backgroundColor: "#303030",color: "white"}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Where can i watch?
                                </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                                    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</div>
                                </div>
                            </div>
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item" style={{backgroundColor: "#303030",color: "white"}} >
                                <h2 className="accordion-header" id="flush-headingFourth">
                                    <button style={{backgroundColor: "#303030",color: "white"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourth" aria-expanded="false" aria-controls="flush-collapseFourth">
                                    How do i cancel?
                                    </button>
                                </h2>
                                <div id="flush-collapseFourth" className="accordion-collapse collapse" aria-labelledby="flush-headingFourth" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</div>
                                </div>
                                </div>
                                <div className="accordion-item" style={{backgroundColor: "#303030",color: "white"}} >
                                <h2 className="accordion-header" id="flush-headingFifth">
                                    <button style={{backgroundColor: "#303030",color: "white"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFifth" aria-expanded="false" aria-controls="flush-collapseFifth">
                                    What can i watch on Netflix?
                                    </button>
                                </h2>
                                <div id="flush-collapseFifth" className="accordion-collapse collapse" aria-labelledby="flush-headingFifth" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</div>
                                </div>
                                </div>
                                <div className="accordion-item" style={{backgroundColor: "#303030",color: "white"}} >
                                <h2 className="accordion-header" id="flush-headingSixth">
                                    <button style={{backgroundColor: "#303030",color: "white"}}  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSixth" aria-expanded="false" aria-controls="flush-collapseSixth">
                                    Is Netflix good for kids?
                                    </button>
                                </h2>
                                <div id="flush-collapseSixth" className="accordion-collapse collapse" aria-labelledby="flush-headingSixth" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

                                    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</div>
                                </div>
                                </div>
                            </div>
                        </div>
    </div>

                <div className="row my-5" />
                    <div className="container text-center">
                        <span style={{color:"white",fontSize: "20px"}}>Ready to watch? Enter your email to create or restart your membership.
                        </span>
                    <div className="cotainer-fluid">
                        <form id="search2" className="d-flex my-4" onValidate>
                        <input className="form-control" style={{width: "500px",height: "60px"}} type="search" placeholder="Email Address" aria-label="Search" required />
                        <Link to="/register" className="btn btn-outline-danger text-light" type="submit" style={{backgroundColor: "red",width:" 14rem",height: "60px",fontSize: "24px"}}>Get Started</Link>
                        </form>
                    </div>
                </div>
                <div/>
                <Footer/>
        </Fragment>
        )
    }
}


export default Home;