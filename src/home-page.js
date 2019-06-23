import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Collapsible from 'react-collapsible';
export default class Homepage extends React.Component {
    state= {
    age:0,
    sem:0,
    } 
render(){
    return(
        <div  className="image">
            <div className="image1">
               <p  style={{fontSize:50,fontWeight:"bold"}}>Welcome,name</p>
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
                <td>USN</td>
                 <td>Age</td>
                <td>Sem</td>
                </tr>
                </tbody>
                </Table> 
            </div>
            <div>
                <center>
                <br/><br/>
            <Collapsible trigger='Click here to change the details'>
                <br/>
            <label style={{fontSize:30,fontWeight:"bold"}}>Age:&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; <input type="text"placeholder="Age" name="age" id="age" onChange={e => this.setState({age: e.target.value})} /></label>
            <br/><br/>
            <label style={{fontSize:30,fontWeight:"bold"}}>Sem:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <input type="sem" placeholder="sem" name="sem" id="sem"  onChange={e => this.setState({sem: e.target.value})} /> </label>
            <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="success" onClick={() => this.verify()}>Submit</Button>    
           </Collapsible>
           </center>
           </div>
           <center><br/><br/>
           <Button variant="success" type="submit">Click here to view the marks</Button>
           </center>    
           </div>
        );
}
    verify()
    {
        if(document.getElementById("age").value=='')
                alert('Age field is empty');
         else if((document.getElementById("sem").value=='' )|| ((document.getElementById("sem").value)>8 || (document.getElementById("sem").value)<1))
            alert('Sem field is empty or value is invalid');
    }
}