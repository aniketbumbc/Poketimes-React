const initState ={
    posts:[
        {
            
            "id": 1,
            "title": "Article 1",
            "body": "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
          },
          {
           
            "id": 2,
            "title": "asperiores ea ipsam voluptatibus modi minima quia sint",
            "body": "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
          },
          {
            
            "id": 3,
            "title": "dolor sint quo a velit explicabo quia nam",
            "body": "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
          },
          {
            
            "id": 4,
            "title": "maxime id vitae nihil numquam",
            "body": "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
          }
    ]
}


const rootReducer = (state = initState,action) =>{
 if(action.type==='DELETE_POST'){
   let newPost = state.posts.filter(post=>{
     return action.id!== post.id
   });
   return{
     ...state,
     posts:newPost
   }
 }
 return state;
} 

export default rootReducer;