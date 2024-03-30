import {Component} from 'react';
import './Login.css';
import { Form } from 'reactstrap';

class AuthDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[]
        }
    }

    API_URL = "http://localhost:5026";

    componentDidMount() {
        this.refreshUsers();
    }

    async refreshUsers() {
        fetch(this.API_URL + "/api/Values/GetUsers")
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.text();  // convert to plain text
        })
        .then(data => {
            if (data) {
                const jsonData = JSON.parse(data);  // parse text to JSON
                this.setState({users:jsonData});
            }
        })
        .catch(function() {
            console.log("Fetch operation failed");
        });
    }

    async addClick() {
        var newUsers = document.getElementById("newUsers").value;
        const data = new FormData();
        data.append('newUsers', newUsers);

        fetch(this.API_URL + "/api/Values/AddUsers", {
            method: 'POST',
            body: data
        })
        .then(res => res.text())  // convert to plain text
        .then((result) => {
            if (result) {
                alert(JSON.stringify(JSON.parse(result)));  // parse text to JSON and then stringify it
                this.refreshUsers();
            }
        })
    }

    async deleteUser(id){
        fetch(this.API_URL + "/api/Values/DeleteUsers" + id, {
            method: 'DELETE'
        })
        .then(res => res.text())  // convert to plain text
        .then((result) => {
            if (result) {
                alert(JSON.parse(result));  // parse text to JSON
                this.refreshUsers();
            }
        })
    }

    render(){
        const {users} = this.state;
        return(
                <>
                <h2>Hello</h2>
                <input id="newUsers"/>&nbsp;
                <button onClick={()=>this.addClick()}>Add</button>
                {users.map(user=>
                        <p>
                            <b>*{user.description}</b>&nbsp;
                            <button onClick={()=>this.deleteUser(user.id)}>Delete</button>
                        </p>
                        )}
                </>
        );
    }
}

export default AuthDisplay;