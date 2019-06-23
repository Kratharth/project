import React from 'react';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import { verify } from 'crypto';
import App from './App';
import Axios from 'axios';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'; 
var nam=null;
var x="hidden";
export default class Login extends React.Component {
    state = {
       USN :'',
       password:'', 
    }
    render() {
        return(
            <div className="image">
            <Nav className="justify-content-center">
            <Nav.Item>
            </Nav.Item>
            <Nav.Item>
        <Nav.Link href="http://www.bmsce.ac.in/"  target="_blank"><img src='https://upload.wikimedia.org/wikipedia/en/thumb/8/87/BMS_College_of_Engineering.svg/1033px-BMS_College_of_Engineering.svg.png' style={{width:200,height:200}}/></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            </Nav.Item>
            <Nav.Item>
            </Nav.Item>
          </Nav>
            <br/><br/>
            <div className="image1">
            <p style={{fontSize:50,fontWeight:"bold"}}>SIGN UP</p>
            <form onSubmit={this.verify.bind(this)}><br/><br/>
         <label style={{fontSize:30,fontWeight:"bold"}}>USN:&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; <input type="text"placeholder="USN" name="USN" id="USN" onChange={e => this.setState({USN: e.target.value})} /></label>
            <br/><br/>
            <label style={{fontSize:30,fontWeight:"bold"}}>Password:  <input type="password" placeholder="password" name="password" id="password"  onChange={e => this.setState({password: e.target.value})} /> </label>
           <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button  variant="success" type="submit" >
                Submit
             </Button>
             <br/>
            </form>
            <br/>
        </div>
    </div>
        );
    }
    verify(ev)
    {
        ev.preventDefault()
        if(document.getElementById("USN").value=='')
                alert('USN field is empty');
         else if(document.getElementById("password").value=='')
            alert('password field is empty');
           else 
            this.submit();
    }
    submit(){
       
        }).catch(err =>{
              console.log(err);
            })
    }
}