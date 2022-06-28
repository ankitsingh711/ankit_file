import React, { Component, Fragment } from 'react';
import './member.css'
import MemberDisplay from './memberDisplay';

const url = "https://ankit-netflix.herokuapp.com/premium"
const purl = "https://ankit-netflix.herokuapp.com/addPremium"

class Membership extends Component{

    constructor(props){
        super(props)

        this.state={
            premium_id:''
        }
    }

    render(){
        return(
            <Fragment>
                <div className='container-fluid'>
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" width="10%" />
                </div>
                <div id="head" className='container-fluid'>
                    <h2 id="heads">Buy Your Favourite Membership Plan to Proceed</h2>
                </div>
                <MemberDisplay DataPrem={this.state.premium_id} />

            </Fragment>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) =>{
            this.setState({premium_id:data})
        })
    }
}


export default Membership;