import React,{Component} from 'react';
import axios from 'axios';
class Info extends Component{
    state = {
        data:null
    }
componentDidMount(){
    let id =this.props.match.params.post_id;
    axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
    .then(res=>{
     this.setState({
        data:res.data
     })
    })
}
render(){
    const post = this.state.data ?(
        <div className="post">
        <h4 className="center">{this.state.data.title}</h4>
         <p>{this.state.data.body}</p>
        </div>
    ):(<div className="center red-text">Loading.......</div>)

return(
    <div className="container">
        {/* <h4> {this.state.id} </h4> */}
        <p className="center green-text">{post}</p>
    </div>
)
}
}

export default Info;