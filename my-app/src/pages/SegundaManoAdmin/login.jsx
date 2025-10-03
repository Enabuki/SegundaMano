import React, { useState, useEffect } from "react";
import "../../css/styles.css";  

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const ADMIN_EMAIL = "admin@segundamana.com";
  const ADMIN_PWD = "Admin@123";

  useEffect(() => {
    if (sessionStorage.getItem("sg_admin_logged_in") === "true") {
      window.location.replace("/dashboard");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.toLowerCase() === ADMIN_EMAIL && password === ADMIN_PWD) {
      sessionStorage.setItem("sg_admin_logged_in", "true");
      setError(false);
      window.location.replace("/dashboard");
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className="admin-login-bg-wrap" aria-hidden="true"></div>

      <main className="admin-login-page">
        {/* Left hero section */}
        <section className="admin-login-hero">
          <h1>Welcome to Segunda Mana Admin Portal</h1>
          <p>
            Each action you take here strengthens Caritas Manila’s work of
            compassion and service.
          </p>
        </section>

        {/* Right login card */}
        <section className="admin-login-card" aria-label="Login">
          <h2>Login to your account</h2>
          <form className="admin-login-form" onSubmit={handleSubmit}>
            <div>
              <div className="admin-login-label">Email</div>
              <input
                className="admin-login-input"
                type="email"
                placeholder="caritas.manila@admin.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <div className="admin-login-label">Password</div>
              <div className="admin-login-password-wrap">
                <input
                  className="admin-login-input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="admin-login-toggle-eye"
                  aria-label="Toggle password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    // Eye-off SVG
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    // Eye SVG
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="admin-login-error">
                Invalid credentials. Try admin@segundamana.com / Admin@123
              </div>
            )}

            <button className="admin-login-btn" type="submit">
              Login
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Login;
