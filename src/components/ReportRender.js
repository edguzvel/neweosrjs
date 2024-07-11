//Renders all reports from api database
import React, { Component } from 'react';
import '../styles/ReportRender.css'; // Import CSS for styling the report feed

class ReportRender extends Component {
    constructor(props) {
        super(props);
        // Initialize state with an empty reports array
        this.state = {
            reports: []
        };
    }

    // Base URL for API requests
    API_URL = "http://localhost:5026";

    componentDidMount() {
        // Fetch reports data when the component mounts
        this.fetchReports();
    }

    fetchReports = async () => {
        // Fetch all reports from the API
        fetch(`${this.API_URL}/api/values/GetAllReports`)
            .then(response => response.json()) // Parse the JSON response
            .then(reports => this.setState({ reports })) // Update state with fetched reports
            .catch(error => console.error("Failed to fetch reports", error)); // Log errors to the console
    }

    render() {
        const { reports } = this.state;
        return (
            <div className="report-container"> {/* Container for the reports feed */}
                {reports.length > 0 ? (
                    reports.map((report, index) => (
                        <div key={index} className="report-card"> {/* Individual report card */}
                            <p>User ID: {report.userId}</p> {/* Display user ID */}
                            <p>Report Date: {report.reportDate}</p> {/* Display report date */}
                            <p>{report.reportContent}</p> {/* Display report content */}
                        </div>
                    ))
                ) : (
                    <p>No reports available.</p> // Message displayed if no reports are available
                )}
            </div>
        );
    }
}

export default ReportRender; // Export the component for use in other parts of the application