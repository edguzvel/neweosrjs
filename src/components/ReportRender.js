import React, { Component } from 'react';
import '../styles/ReportRender.css'; // Ensure this path is correct

class ReportRender extends Component {
    constructor(props) {
        super(props);
        this.state = { reports: [] };
    }

    API_URL = "http://localhost:5026";

    componentDidMount() {
        this.fetchReports();
    }

    fetchReports = async () => {
        fetch(`${this.API_URL}/api/values/GetAllReports`)
            .then(response => response.json())
            .then(reports => {
                // Assuming reportDate is in a format that can be sorted directly
                reports.sort((a, b) => new Date(b.reportDate) - new Date(a.reportDate));
                this.setState({ reports });
            })
            .catch(error => console.error("Failed to fetch reports", error));
    }

    render() {
        const { reports } = this.state;
        return (
            <div className="report-container">
                {reports.length > 0 ? (
                    reports.map((report, index) => (
                        <div key={index} className="report-card">
                            <p>Report Date: {report.reportDate}</p>
                            <p>{report.reportContent}</p>
                        </div>
                    ))
                ) : (
                    <p>No reports available.</p>
                )}
            </div>
        );
    }
}

export default ReportRender;