import React, { useState, useEffect } from "react";
import "../../css/styles.css";  

const AccountSettings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      if (!isMobile) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const isAuthed = sessionStorage.getItem("sg_admin_logged_in") === "true";
    if (!isAuthed) {
      window.location.replace("login.html");
    }
  }, []);

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        className="admin-settings-mobile-menu-toggle"
        style={{ display: window.innerWidth <= 768 && !sidebarOpen ? "block" : "none" }}
        onClick={toggleSidebar}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>

      {/* Overlay */}
      <div
        className={`admin-settings-sidebar-overlay ${sidebarOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      ></div>

      <div className="admin-settings-layout">
        {/* Sidebar */}
        <aside className={`admin-settings-sidebar ${sidebarOpen ? "open" : ""}`}>
          <div className="admin-settings-brand">
            <div className="admin-settings-logo"></div>
            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span>Segunda</span>
              <span>Mana</span>
            </span>
          </div>

          <nav className="admin-settings-nav">
            <div className="admin-settings-section-title">GENERAL</div>
            <a href="dashboard.html">
              <svg className="admin-settings-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12l9-9 9 9" />
                <path d="M9 21V9h6v12" />
              </svg>
              Dashboard
            </a>
            <a href="product.html">
              <svg className="admin-settings-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 7h18" />
                <path d="M6 3v4" />
                <path d="M6 7v14" />
                <rect x="6" y="11" width="12" height="10" rx="2" />
              </svg>
              Product
            </a>
            <a href="orders.html">
              <svg className="admin-settings-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8" />
                <path d="M3 15l3.5-2 3.5 2 3.5-2 3.5 2 3.5-2V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              Order Management
            </a>
            <a href="beneficiary.html">
              <svg className="admin-settings-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Beneficiary
            </a>
            <a href="announcement.html">
              <svg className="admin-settings-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 4h18v16H3z" />
                <path d="M7 8h10" />
                <path d="M7 12h6" />
              </svg>
              Announcement
            </a>

            <div className="admin-settings-section-title">TOOLS</div>
            <a href="activity.html">
              <svg className="admin-settings-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 5h6v6H3z" />
                <path d="M15 5h6v6h-6z" />
                <path d="M9 13h6v6H9z" />
              </svg>
              Activity Log
            </a>
            <a className="active" href="account-settings.html">
              <svg className="admin-settings-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 3 16.6a1.65 1.65 0 0 0-1.51-1H1a2 2 0 1 1 0-4h.09c.66 0 1.26-.39 1.51-1 .25-.6.11-1.3-.33-1.78" />
              </svg>
              Account Settings
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="admin-settings-content">
          <div className="admin-settings-page-title">
            <h1>Account Settings</h1>
          </div>

          <div className="admin-settings-settings-content">
            <div className="admin-settings-main-settings">
              {/* Profile Information */}
              <div className="admin-settings-settings-card">
                <div className="admin-settings-card-title">Profile Information</div>

                <div className="admin-settings-avatar-section">
                  <div className="admin-settings-avatar">A</div>
                  <div className="admin-settings-avatar-upload">
                    <button className="admin-settings-upload-btn">Change Photo</button>
                    <div className="admin-settings-small">JPG, PNG or GIF. Max size 2MB.</div>
                  </div>
                </div>

                <div className="admin-settings-form-group">
                  <label className="admin-settings-form-label">Full Name</label>
                  <input type="text" className="admin-settings-form-input" defaultValue="Admin User" />
                </div>

                <div className="admin-settings-form-group">
                  <label className="admin-settings-form-label">Email Address</label>
                  <input type="email" className="admin-settings-form-input" defaultValue="admin@segundamana.com" />
                </div>

                <div className="admin-settings-form-group">
                  <label className="admin-settings-form-label">Phone Number</label>
                  <input type="tel" className="admin-settings-form-input" defaultValue="+1 (555) 123-4567" />
                </div>

                <div className="admin-settings-form-group">
                  <label className="admin-settings-form-label">Role</label>
                  <select className="admin-settings-form-select" defaultValue="Administrator">
                    <option>Administrator</option>
                    <option>Manager</option>
                    <option>Staff</option>
                  </select>
                </div>

                <div className="admin-settings-form-group">
                  <label className="admin-settings-form-label">Bio</label>
                  <textarea
                    className="admin-settings-form-textarea"
                    defaultValue="Experienced administrator with expertise in e-commerce management and customer service."
                  />
                </div>
              </div>

              {/* Security Settings */}
              <div className="admin-settings-settings-card">
                <div className="admin-settings-card-title">Security Settings</div>

                <div className="admin-settings-form-group">
                  <label className="admin-settings-form-label">Current Password</label>
                  <input type="password" className="admin-settings-form-input" placeholder="Enter current password" />
                </div>

                <div className="admin-settings-form-group">
                  <label className="admin-settings-form-label">New Password</label>
                  <input type="password" className="admin-settings-form-input" placeholder="Enter new password" />
                </div>

                <div className="admin-settings-form-group">
                  <label className="admin-settings-form-label">Confirm New Password</label>
                  <input type="password" className="admin-settings-form-input" placeholder="Confirm new password" />
                </div>

                <div className="admin-settings-form-group">
                  <label className="admin-settings-form-label">Two-Factor Authentication</label>
                  <select className="admin-settings-form-select" defaultValue="Enabled">
                    <option>Enabled</option>
                    <option>Disabled</option>
                  </select>
                </div>
              </div>

              {/* Preferences */}
              <div className="admin-settings-settings-card">
                <div className="admin-settings-card-title">Preferences</div>

                <div className="admin-settings-form-group">
                  <label className="admin-settings-form-label">Language</label>
                  <select className="admin-settings-form-select" defaultValue="English">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>

                <div className="admin-settings-form-group">
                  <label className="admin-settings-form-label">Time Zone</label>
                  <select className="admin-settings-form-select" defaultValue="UTC-5 (Eastern Time)">
                    <option>UTC-5 (Eastern Time)</option>
                    <option>UTC-8 (Pacific Time)</option>
                    <option>UTC+0 (GMT)</option>
                  </select>
                </div>

                <div className="admin-settings-form-group">
                  <label className="admin-settings-form-label">Email Notifications</label>
                  <select className="admin-settings-form-select" defaultValue="All notifications">
                    <option>All notifications</option>
                    <option>Important only</option>
                    <option>None</option>
                  </select>
                </div>
              </div>

              {/* Actions */}
              <div className="admin-settings-actions">
                <button className="admin-settings-btn admin-settings-btn-secondary">Cancel</button>
                <button className="admin-settings-btn admin-settings-btn-primary">Save Changes</button>
              </div>
            </div>

            {/* Aside Panels */}
            <aside className="admin-settings-aside">
              <div className="admin-settings-panel">
                <div style={{ fontWeight: 700, marginBottom: "8px" }}>Account Status</div>
                <div className="admin-settings-list">
                  <div className="admin-settings-item">
                    <span className="admin-settings-dot" style={{ background: "#10b981" }}></span>
                    <div>
                      <div>Account Active</div>
                      <div className="admin-settings-small">Verified</div>
                    </div>
                  </div>
                  <div className="admin-settings-item">
                    <span className="admin-settings-dot" style={{ background: "#3b82f6" }}></span>
                    <div>
                      <div>Last Login</div>
                      <div className="admin-settings-small">2 hours ago</div>
                    </div>
                  </div>
                  <div className="admin-settings-item">
                    <span className="admin-settings-dot" style={{ background: "#f59e0b" }}></span>
                    <div>
                      <div>Security Level</div>
                      <div className="admin-settings-small">High</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="admin-settings-panel">
                <div style={{ fontWeight: 700, marginBottom: "8px" }}>Quick Actions</div>
                <div className="admin-settings-list">
                  <div className="admin-settings-item">
                    <span className="admin-settings-dot"></span>
                    <div>
                      <div>Export Data</div>
                      <div className="admin-settings-small">Download your data</div>
                    </div>
                  </div>
                  <div className="admin-settings-item">
                    <span className="admin-settings-dot"></span>
                    <div>
                      <div>Delete Account</div>
                      <div className="admin-settings-small">Permanent action</div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
};

export default AccountSettings;
