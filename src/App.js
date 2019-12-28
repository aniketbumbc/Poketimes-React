import React,{Component} from 'react';
import Navbar from './componets/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import home from './componets/home';
import contact from './componets/contact';
import about from './componets/about';
import Info from './componets/Info';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={home}/>
          <Route path='/contact' component={contact}/>
          <Route path='/about' component={about}/>
          <Route path='/:post_id' component={Info}/>
        </Switch>
      </div>
      </BrowserRouter>

    )
  }
}


export default App;
