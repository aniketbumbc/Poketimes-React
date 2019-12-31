import React,{Component} from 'react';
//import axios from 'axios';
import  {connect} from 'react-redux';
class Info extends Component{
    t



    handleClick = () =>{
        let getValue = this.props.post.filter(function(value){
            return value;
   
   })
        this.props.deletePost(getValue[0].id);
        this.props.history.push('/');
        
    }

// componentDidMount(){
//     let id =this.props.match.params.post_id;
//     axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
//     .then(res=>{
//      this.setState({
//         data:res.data
//      })
//     })
// }



render(){    
   const tempData  = this.props.post.filter(function(value){
         return value;

});
      
     

    const post = tempData ?(
        <div className="post">
        <span className="center blue-text">{tempData[0].title}</span> <br/>
         <span className="articlebody">{tempData[0].body}</span>
         <div className="center">
             <button className="btn grey" onClick={this.handleClick}>
                 Delete Post
             </button>
         </div>
        </div>
    ):(<div className="center red-text">Loading.......</div>)

return(
    <div className="container">
        <span className="center green-text">{post}
        </span>
    </div>
)
}
}

const mapStateToProps = (state,ownProps) =>{
    let id = parseInt(ownProps.match.params.post_id);
    return{   
        post:state.posts.map(postid => {
               if(postid.id === id){
               return postid 
            }
        })
    }    
}

const mapDistpatchToProps = (dispatch) =>{    
    return{
        deletePost:(id)=>{dispatch({type:'DELETE_POST',id:id})}
    }
    
    
}
export default connect(mapStateToProps,mapDistpatchToProps)(Info);