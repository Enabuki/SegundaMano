import React, { useState, useEffect } from "react";


function OrderManagement() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Authentication check
  useEffect(() => {
    const isAuthed = sessionStorage.getItem("sg_admin_logged_in") === "true";
    if (!isAuthed) {
      window.location.replace("/login");
    }
  }, []);

  // Handle responsive resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      {/* Mobile Toggle Button */}
      <button
        className="mobile-menu-toggle"
        onClick={toggleSidebar}
        style={{ display: window.innerWidth <= 768 ? "block" : "none" }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      ></div>

      <div className="layout">
        {/* Sidebar */}
        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <div className="brand">
            <div
              className="logo"
              style={{ background: "#d32f2f", width: 18, height: 18, borderRadius: 4 }}
            ></div>
            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span>Segunda</span>
              <span>Mana</span>
            </span>
          </div>
          <nav className="nav">
            <div className="section-title">GENERAL</div>
            <a href="/dashboard">
              <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12l9-9 9 9" />
                <path d="M9 21V9h6v12" />
              </svg>
              Dashboard
            </a>
            <a href="/product">
              <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 7h18" />
                <path d="M6 3v4" />
                <path d="M6 7v14" />
                <rect x="6" y="11" width="12" height="10" rx="2" />
              </svg>
              Product
            </a>
            <a className="active" href="/orders">
              <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8" />
                <path d="M3 15l3.5-2 3.5 2 3.5-2 3.5 2 3.5-2V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              Order Management
            </a>
            <a href="/beneficiary">Beneficiary</a>
            <a href="/announcement">Announcement</a>
            <div className="section-title">TOOLS</div>
            <a href="/activity">Activity Log</a>
            <a href="/account-settings">Account Settings</a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="content">
          <div className="page-title">
            <h1>Segunda Mana</h1>
          </div>

          {/* Toolbar */}
          <div className="toolbar">
            <div className="search">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9aa4b2"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              <input placeholder="Search for id, name product" />
            </div>
            <button className="btn">Filter</button>
            <button className="btn">Export</button>
            <a href="/add-order" className="btn primary">
              + Add New Order
            </a>
          </div>

          {/* Orders Table */}
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th style={{ width: 36 }}></th>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Receipt</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Row */}
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div className="prod">
                      <div className="img"></div>
                      <div>
                        <div className="link">00231</div>
                        <div style={{ fontSize: 12, color: "#475569" }}>Albibas Blue</div>
                      </div>
                    </div>
                  </td>
                  <td>Kim Mingyu</td>
                  <td>
                    <button className="btn" style={{ height: 28 }}>
                      View Attachment
                    </button>
                  </td>
                  <td>
                    <div style={{ fontSize: 12, color: "#334155" }}>
                      August 22, 2025
                      <br /> 8:25 PM
                    </div>
                  </td>
                  <td>
                    <span className="pill green">Received</span>
                  </td>
                  <td className="actions">
                    <span>👁️</span>
                    <span>✏️</span>
                    <span>🗑️</span>
                  </td>
                </tr>
                {/* Repeat rows as needed */}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="pagination">
            <div className="page">‹</div>
            <div className="page active">1</div>
            <div className="page">2</div>
            <div className="page">3</div>
            <div className="page">›</div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default OrderManagement;
