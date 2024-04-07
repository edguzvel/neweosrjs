import React from 'react';
import Header from './Header.js';
import Sidebar from './SideBar.js';
import ReportRender from './ReportRender.js';

function ReportsScreen() {
    return (
        <div>
            <Header />
            <Sidebar />
            <ReportRender />
            <ReportRender />
            {/* Your remaining code for the ReportsScreen component */}
        </div>
    );
}

export default ReportsScreen;
