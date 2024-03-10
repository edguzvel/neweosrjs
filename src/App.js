
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  API_URL = "http://localhost:5026/";

  componentDidMount(){
    this.refreshUsers();
  }

  async refreshUsers(){
    fetch(this.API_URL+"api/Values/GetUsers").then(response=>response.json())
    .then(data=>{
      this.setState({users:data});
    })
  }
    render(){
      const{users} = this.state;
      return (
      <div className="App">
        <h2>New EOSR</h2>

        {users.map(user=>
          <p>
            <b>
              *{user.description}*
            </b>
          </p>
        )}
      </div>
      );
    }
  }
export default App;
