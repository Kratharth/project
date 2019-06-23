import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Collapsible from 'react-collapsible';
export default class Exam extends React.Component {
    state= {
    cie1:0,
    cie2:0,
    }
    render(){
        return(
    <div  className="image">
            <div className="image1">
               <p  style={{fontSize:50,fontWeight:"bold"}}>Here is the result</p>
               <br/><br/><br/>
               <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                <th>Course</th>
                <th>CIE 1</th>
                <th>CIE 2</th>
                    </tr>
                </thead>
                <tbody>
                 <tr>
                <td>DBMS</td>
                 <td>42</td>
                <td>78</td>
                </tr>
                </tbody>
                </Table> 
            </div>
        <div>
                <center>
                <br/><br/>
            <Collapsible trigger='Click here to add/update the marks'>
                <br/>
            <label style={{fontSize:30,fontWeight:"bold"}}>CIE 1:&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; <input type="text"placeholder="CIE1 marks" name="cie1" id="cie1" onChange={e => this.setState({cie1: e.target.value})} /></label>
            <br/><br/>
            <label style={{fontSize:30,fontWeight:"bold"}}>CIE 2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <input type="text" placeholder="CIE2 marks" name="cie2" id="cie2"  onChange={e => this.setState({cie2: e.target.value})} /> </label>
            <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="success" onClick={ ()=> this.verify()}>Submit</Button>    
           </Collapsible>
           </center>
        </div>
    </div>
           );
}
verify()
{
        if(document.getElementById("cie1").value=='')
            alert('CIE1 field is empty');
        else if((document.getElementById("cie1").value)<0 || (document.getElementById("cie1").value)>100)
            alert('CIE1 field value is invalid')        
        else if(document.getElementById("cie2").value=='')
            alert('CIE2 field is empty');
        else if((document.getElementById("cie2").value)<0 || (document.getElementById("cie2").value)>100)
            alert('CIE2 field value is invalid') 
}
}   