import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Collapsible from 'react-collapsible';
import Axios from 'axios';
import {NavLink} from  'react-router-dom';
let USN="";
export default class Homepage extends React.Component {
    state= {
    age:0,
    sem:0,
    todos:[]
    }
    componentWillMount()
    {
        USN=this.props.location.aboutProps.USN;
      console.log(USN);
      Axios.get('https://vjsy58cyhh.execute-api.us-east-2.amazonaws.com/test1/login/homepage',{params : {
        USN : USN
      }}).then((res) => {
        console.log(res.data[0]);
        this.setState({
          todos:res.data[0]
        })
      })
    }
    getLayout(){
    return(
        <div  className="image">
            <div className="image1">
            <p  style={{fontSize:50,fontWeight:"bold"}}>Welcome,{this.state.todos.name}</p>
               <br/><br/><br/>
               <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                <th>USN</th>
                <th>Age</th>
                <th>Sem</th>
                    </tr>
                </thead>
                <tbody>
                 <tr>
                <td>{this.state.todos.USN}</td>
                 <td>{this.state.todos.age}</td>
                <td>{this.state.todos.sem}</td>
                </tr>
                </tbody>
                </Table> 
            </div>
            <div>
                <center>
                <br/><br/>
            <Collapsible trigger='Click here to change the details'>
                <br/>
                <form>
            <label style={{fontSize:30,fontWeight:"bold"}}>Age:&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; <input type="text"placeholder="Age" name="age" id="age" onChange={e => this.setState({age: e.target.value})} /></label>
            <br/><br/>
            <label style={{fontSize:30,fontWeight:"bold"}}>Sem:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <input type="sem" placeholder="sem" name="sem" id="sem"  onChange={e => this.setState({sem: e.target.value})} /> </label>
            <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="success" type="Button"  onClick={this.verify.bind(this)}>Submit</Button> 
                </form>   
           </Collapsible>
           </center>
           </div>
           <center><br/><br/>
           <Button variant="Dark"><NavLink to={{
                      pathname:'/exam',
                     aboutProps:{
                         USN:USN
                     }
                    }}>Click Here to view your results </NavLink>  </Button>
           </center>    
           </div>
        );
    }
    render(){
        
        return(
            this.getLayout()
        );
    }
    verify()
    {
        if(document.getElementById("age").value=='')
                alert('Age field is empty');
         else if((document.getElementById("sem").value=='' )|| ((document.getElementById("sem").value)>8 || (document.getElementById("sem").value)<1))
            alert('Sem field is empty or value is invalid');
           else 
            this.postData();    
    }
    postData(){
    
        const age = this.state.age
        const sem = this.state.sem
        const USN=this.props.location.aboutProps.USN
        const data={
            age,
            sem,
            USN
        }
        Axios.post('https://vjsy58cyhh.execute-api.us-east-2.amazonaws.com/test1/login/homepage',data)
        .then(response=>
            {
                console.log(response);
                if(response)
                {
                    alert("success");
                }
                else
                {
                    alert("failure");
                }

            })
            .catch(err=>{
                console.log(err);
            })
    }

}