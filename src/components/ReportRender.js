import React, { Component } from 'react';
import './Login.css';
import './ReportRender.css'; // Import the ReportRender.css file

class ReportRender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            reports: []
        }
    }

    API_URL = "http://localhost:5026";

    componentDidMount() {
        this.fetchUserAndReports();
    }

    fetchUserAndReports = async () => {
        // Fetch user details for userId = 1
        fetch(`${this.API_URL}/api/values/GetUserById?userId=1`)
            .then(response => response.json())
            .then(user => this.setState({ user: user[0] })) // Assuming the endpoint returns an array
            .catch(error => console.error("Failed to fetch user", error));
        
        // Fetch reports for userId = 1
        fetch(`${this.API_URL}/api/values/GetReportsByUser?userId=1`)
            .then(response => response.json())
            .then(reports => this.setState({ reports }))
            .catch(error => console.error("Failed to fetch reports", error));
    }

    addClick = async () => {
        var newUsers = document.getElementById("newUsers").value;
        fetch(`${this.API_URL}/api/Values/AddUsers`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newUsers }) // Assuming your API is expecting a JSON body
        })
        .then(res => res.json())
        .then(result => {
            alert(JSON.stringify(result)); // Directly use result if it's already JSON
            this.fetchUserAndReports(); // Refresh to see new data
        })
        .catch(error => console.error("Failed to add user", error));
    }

    deleteUser = async (id) => {
        fetch(`${this.API_URL}/api/Values/DeleteUsers/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            alert(JSON.stringify(result));
            this.fetchUserAndReports(); // Refresh to see updated data
        })
        .catch(error => console.error("Failed to delete user", error));
    }

    render() {
        const { user, reports } = this.state;
        return (
            <div className="report-container"> {/* Apply the report-container class */}
                {user ? (
                    <>
                    <div className="nameTag">
                        <p>Name: {user.description}</p>
                        <p>ID: {user.id}</p>
                    </div>
                        
                        {reports.map((report, index) => (
                            <div key={index} className="report-card"> {/* Apply the report-card class */}
                                <p>Shift Date: {report.reportDate}</p>
                                <p> {report.reportContent}</p>
                    
                            </div>
                        ))}
                    </>
                ) : (
                    <p>No user details available.</p>
                )}
            </div>
        );
    }
}

export default ReportRender;
