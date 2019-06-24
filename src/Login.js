import React from 'react';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import Axios from 'axios';
import {NavLink} from 'react-router-dom'; 
var nam=null;
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
            <div>
                <div className="route" id="n3">
                 <Button variant="Dark"><NavLink to={{
                      pathname:'/homepage',
                     aboutProps:{
                         USN:this.state.USN
                     }
                    }}>Click here to go to Homepage </NavLink></Button>  
               </div>
            </div>
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
        const USN= this.state.USN
        const password=this.state.password
        const data = {
            USN,
            password
        }
        Axios.post('https://vjsy58cyhh.execute-api.us-east-2.amazonaws.com/test4/login',data).then(response => {
           console.log(response);
           if(response.data[0]!=null)
           {
               alert("success");
               console.log(response.data[0].name);
               nam=response.data[0].USN;
               document.getElementById("n3").style.visibility="visible";
              
             }
           else
           {
               alert("failure");
           }
        }).catch(err =>{
              console.log(err);
            })
    }
}