import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    const ADMIN_EMAIL = 'admin@segundamana.com'
    const ADMIN_PWD = 'Admin@123'
    
    if (email.toLowerCase() === ADMIN_EMAIL && password === ADMIN_PWD) {
      sessionStorage.setItem('sg_admin_logged_in', 'true')
      console.log('Login successful')
      // Redirect to dashboard.html
      window.location.href = '/dashboard.html'
    } else {
      setError('Invalid credentials. Try admin@segundamana.com / Admin@123')
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }


  return (
    <>
      <div className="bg-wrap" aria-hidden="true"></div>
      <main className="page">
        {/* Left hero copy */}
        <section className="hero">
          <h1>Welcome to Segunda Mana Admin Portal</h1>
          <p>
            Each action you take here strengthens Caritas Manila's work of compassion and service.
          </p>
        </section>

        {/* Right login card */}
        <section className="card" aria-label="Login">
          <h2>Login to your account</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <div className="label">Email</div>
              <input 
                className="input" 
                type="email" 
                id="email" 
                placeholder="caritas.manila@admin.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div>
              <div className="label">Password</div>
              <div className="password-wrap">
                <input 
                  className="input" 
                  type={showPassword ? "text" : "password"} 
                  id="password" 
                  placeholder="Enter your password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
                <button 
                  type="button" 
                  className="toggle-eye" 
                  aria-label="Toggle password" 
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {error && <div className="error">{error}</div>}
            <button className="btn" type="submit">Login</button>
          </form>
        </section>
      </main>
    </>
  )
}

export default App
