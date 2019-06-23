import React ,{Component} from 'react';
import Homepage from './home-page';
import Login from './Login';
import Exam from './exam';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/homepage" component={Homepage}/>
      <Route exact path="/exam" component={Exam}/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

