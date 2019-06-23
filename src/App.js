import React from 'react';
import Homepage from './home-page';
import Axios from 'axios';
import uuid from 'node-uuid';
let USN="";
class App extends React.Component {
  state={
    todos:[],
  }
  componentDidMount()
      {
          })
        })
      }
      getLayout()
      {
            return(
              this.state.todos.map((todo)=>{
              return <Homepage {...todo} key={uuid.v1()}/>         
              })  
            )
      }
	   render()
	  {  
      return (
    this.getLayout()
		);
	}
}
export default App;

