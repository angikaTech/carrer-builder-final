import React from 'react';

const SidebarDashboard = () => {
    return (
        <>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">

                    <li className="nav-item">
                        <a className="nav-link" href="/dashboard">
                            <span className="menu-title">Dashboard</span>
                            <i className="fa fa-home  menu-icon"></i>
                            
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/list">
                            <span className="menu-title">Applications</span>
                            <i className="fa fa-user  menu-icon"></i>
                        </a>
                    </li>

                </ul>
            </nav>
        </>
    );
}

export default SidebarDashboard;