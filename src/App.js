import React,{Component} from 'react';
import Navbar from './componets/Navbar';
import {BrowserRouter,Route} from 'react-router-dom';
import home from './componets/home';
import contact from './componets/contact';
import about from './componets/about';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path='/' component={home}/>
        <Route path='/contact' component={contact}/>
        <Route path='/about' component={about}/>
      </div>
      </BrowserRouter>



    )
  }
}


export default App;
