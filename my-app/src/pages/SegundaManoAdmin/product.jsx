import React, { useState, useEffect } from "react";
import "../css/products.css"; // move styles here

const Products = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ✅ Auth guard
  useEffect(() => {
    const isAuthed = sessionStorage.getItem("sg_admin_logged_in") === "true";
    if (!isAuthed) {
      window.location.replace("/login");
    }
  }, []);

  // ✅ Resize listener
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
      {/* Mobile Toggle */}
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
            <a href="/dashboard">Dashboard</a>
            <a className="active" href="/product">Product</a>
            <a href="/orders">Order Management</a>
            <a href="/beneficiary">Beneficiary</a>
            <a href="/announcement">Announcement</a>
            <div className="section-title">TOOLS</div>
            <a href="/activity">Activity Log</a>
            <a href="/account-settings">Account Settings</a>
          </nav>
        </aside>

        {/* Content */}
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
            <a className="btn primary" href="/add-product">
              + Add New Product
            </a>
          </div>

          {/* Products Table */}
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th style={{ width: 36 }}></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Size</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Row 1 */}
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div className="prod">
                      <div className="img"></div>
                      <div>
                        <div
                          style={{
                            fontWeight: 700,
                            color: "#2563eb",
                            fontSize: 12,
                            cursor: "pointer",
                          }}
                        >
                          00231
                        </div>
                        <div style={{ fontSize: 12, color: "#475569" }}>
                          Albibas Blue
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>300</td>
                  <td>40</td>
                  <td>
                    <div style={{ fontSize: 12, color: "#334155" }}>
                      August 22, 2025
                      <br /> 8:25 PM
                    </div>
                  </td>
                  <td>
                    <span className="pill green">Available</span>
                  </td>
                  <td className="actions">
                    <span title="View">👁️</span>
                    <span title="Edit">✏️</span>
                    <span title="Delete">🗑️</span>
                  </td>
                </tr>

                {/* Example Row 2 */}
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div className="prod">
                      <div className="img"></div>
                      <div>
                        <div
                          style={{
                            fontWeight: 700,
                            color: "#2563eb",
                            fontSize: 12,
                            cursor: "pointer",
                          }}
                        >
                          00232
                        </div>
                        <div style={{ fontSize: 12, color: "#475569" }}>
                          Albibas Blue
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>300</td>
                  <td>40</td>
                  <td>
                    <div style={{ fontSize: 12, color: "#334155" }}>
                      August 22, 2025
                      <br /> 8:25 PM
                    </div>
                  </td>
                  <td>
                    <span className="pill red">Out of Stock</span>
                  </td>
                  <td className="actions">
                    <span>👁️</span>
                    <span>✏️</span>
                    <span>🗑️</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="pagination">
            <div className="page">‹</div>
            <div className="page active">1</div>
            <div className="page">2</div>
            <div className="page">3</div>
            <div className="page">4</div>
            <div className="page">5</div>
            <div className="page">›</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Products;
