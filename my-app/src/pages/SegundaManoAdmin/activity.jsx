import React, { useState, useEffect } from "react";


const ActivityLog = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // mimic your old JS toggle
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // sample rows for the log
  const rows = [
    {
      date: "06/11/2025",
      time: "7:00",
      user: "Caritas.Admin1",
      activity: "Added a new product",
      changes: "Added a new product",
    },
    {
      date: "06/11/2025",
      time: "7:10",
      user: "Caritas.Admin2",
      activity: "Edited product",
      changes: "Changed price from 200 → 180",
    },
  ];

  return (
    <div className="layout">
      {/* Toggle button (mobile only) */}
      <button className="mobile-menu-toggle" onClick={toggleSidebar}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="brand">
          <div
            className="logo"
            style={{ background: "#d32f2f", width: "18px", height: "18px", borderRadius: "4px" }}
          ></div>
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span>Segunda</span>
            <span>Mana</span>
          </span>
        </div>
        <nav className="nav">
          <div className="section-title">GENERAL</div>
          <a href="/dashboard">Dashboard</a>
          <a href="/product">Product</a>
          <a href="/orders">Order Management</a>
          <a href="/beneficiary">Beneficiary</a>
          <a href="/announcement">Announcement</a>
          <div className="section-title">TOOLS</div>
          <a href="/activity" className="active">
            Activity Log
          </a>
          <a href="/account-settings">Account Settings</a>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      {/* Main Content */}
      <main className="content">
        <div className="page-title">
          <h1>Segunda Mana</h1>
        </div>

        {/* Toolbar */}
        <div className="toolbar">
          <div className="search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9aa4b2" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            <input placeholder="Search" />
          </div>
          <button className="btn">Filter</button>
          <button className="btn">Export</button>
        </div>

        {/* Table */}
        <div className="table">
          <table>
            <thead>
              <tr>
                <th style={{ width: "36px" }}></th>
                <th>Date</th>
                <th>Time</th>
                <th>User</th>
                <th>Activity Type</th>
                <th>Changes</th>
                <th style={{ width: "80px" }}></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{row.date}</td>
                  <td>{row.time}</td>
                  <td>{row.user}</td>
                  <td>{row.activity}</td>
                  <td>{row.changes}</td>
                  <td>
                    <span className="link">View</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ActivityLog;