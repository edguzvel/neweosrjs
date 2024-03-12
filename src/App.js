import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </Layout>
    );
  }
}

// import './App.css';
// import { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: []
//     }
//   }

//   API_URL = "http://localhost:5026/";

//   componentDidMount(){
//     this.refreshUsers();
//   }

//   async refreshUsers(){
//     fetch(this.API_URL+"api/Values/GetUsers").then(response=>response.json())
//     .then(data=>{
//       this.setState({users:data});
//     })
//   }
//     render(){
//       const{users} = this.state;
//       return (
//       <div className="App">
//         <h2>New EOSR</h2>

//         {users.map(user=>
//           <p>
//             <b>
//               *{user.description}*
//             </b>
//           </p>
//         )}
//       </div>
//       );
//     }
//   }
// export default App;
