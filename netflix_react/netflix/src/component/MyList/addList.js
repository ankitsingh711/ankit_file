import React,{Component} from 'react';
import './placeOrder.css'
import Header from '../../header'

const url = "https://ankit-netflix.herokuapp.com/movies/id";
const purl = "https://ankit-netflix.herokuapp.com/addList";

class AddList extends Component {
    constructor(props){
        super(props)

        this.state={
            Movies:''
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    renderItem = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className='row-cols-3'>
                        <div className='col'>
                            <div className='card'>
                                <img src={item.movie_thumbnail} width="30%"/>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }


    render(){
        if(!sessionStorage.getItem('loginStatus')){
            return(
                <div>
                    <Header/>
                    <center>
                        <h2>Login First To Show MyList</h2>    
                    </center>
                </div>
            )
        }
    }

    //call api 
    componentDidMount(){
        let Movies = sessionStorage.getItem('movies');
        let VideoId = [];
        Movies.split(',').map((item) => {
            VideoId.push(parseInt(item));
            return 'ok'
        })
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(VideoId)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            this.setState({Movies:data})
        })
    }
}


export default AddList