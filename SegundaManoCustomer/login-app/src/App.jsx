import { useState } from 'react'
import './App.css'

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedImage, setSelectedImage] = useState(null)

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen)
  }

  const closeMobileNav = () => {
    setMobileNavOpen(false)
  }

  const navigateTo = (page) => {
    setCurrentPage(page)
    closeMobileNav()
  }

  const openImageModal = (imageSrc, productName) => {
    setSelectedImage({ src: imageSrc, name: productName })
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <header className="site-header">
        <div className="container header-grid">
          <div className="brand">
            <span className="brand__mark"></span>
            <span className="brand__text">Segunda<br/>Mana</span>
          </div>
          <nav className={`main-nav ${mobileNavOpen ? 'active' : ''}`}>
            <a className={currentPage === 'home' ? 'active' : ''} href="#" onClick={(e) => { e.preventDefault(); navigateTo('home'); }}>Home</a>
            <a className={currentPage === 'shop' ? 'active' : ''} href="#" onClick={(e) => { e.preventDefault(); navigateTo('shop'); }}>Shop</a>
            <a className={currentPage === 'about' ? 'active' : ''} href="#" onClick={(e) => { e.preventDefault(); navigateTo('about'); }}>About</a>
            <a className={currentPage === 'contact' ? 'active' : ''} href="#" onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}>Contact Us</a>
            <button className="mobile-nav-close" aria-label="Close navigation" onClick={closeMobileNav}>✕</button>
          </nav>
          <div className="header-tools">
            <div className="search">
              <input 
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="icon icon-search" aria-hidden="true"></span>
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('cart'); }} aria-label="My Cart"><span className="icon icon-cart" aria-hidden="true"></span></a>
          </div>
          <button className="mobile-nav-toggle" aria-label="Toggle navigation" onClick={toggleMobileNav}>☰</button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${mobileNavOpen ? 'active' : ''}`} onClick={closeMobileNav}></div>

      <main>
        {currentPage === 'home' && (
          <>
            <section className="hero">
              <div className="container">
                <div className="hero__banner">
                  <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1800&auto=format&fit=crop" alt="Store banner" />
                  <h1 className="hero__title">Shop with Heart. Give with Purpose.</h1>
                  <p className="hero__subtitle">Segunda Mana turns donations into hope, shop today and be part of our mission.</p>
                </div>
              </div>
            </section>

            <section className="intro container">
              <div className="intro__title-wrap">
                <h2 className="intro__title">Segunda<br/>Mana</h2>
              </div>
              <div className="intro__copy-wrap">
                <hr className="intro__rule"/>
                <p className="intro__copy">Where every purchase makes an impact. By buying quality pre‑loved items, you're not just getting great finds — you're helping send underprivileged youth to school, support struggling families, and build a more sustainable, compassionate community.</p>
              </div>
            </section>

            <section className="metrics">
              <div className="container">
                <div className="metrics__header">
                  <h2 className="metrics__title">BY THE NUMBERS</h2>
                  <p className="metrics__subtitle">54 Segunda Mana Stores</p>
                </div>
                <div className="metrics__grid">
                  <div className="metric-card">
                    <div className="metric-card__content">
                      <div className="metric-card__value">40</div>
                      <div className="metric-card__label">Charity Outlets</div>
                    </div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-card__content">
                      <div className="metric-card__value">10</div>
                      <div className="metric-card__label">Parish Kiosks</div>
                    </div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-card__content">
                      <div className="metric-card__value">4</div>
                      <div className="metric-card__label">Long-Term Bazaars</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="container">
              <h3 className="section-title">Our Products:</h3>
              <div className="products">
                <article className="card">
                  <img src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=900&auto=format&fit=crop" alt="Product" />
                  <div className="card__body">
                    <p className="card__name">Half Zip Sweater<br/>Navy Blue</p>
                    <div className="card__price">₱200.00</div>
                  </div>
                </article>
                <article className="card">
                  <img src="https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=900&auto=format&fit=crop" alt="Product" />
                  <div className="card__body">
                    <p className="card__name">Half Zip Sweater<br/>Navy Blue</p>
                    <div className="card__price">₱200.00</div>
                  </div>
                </article>
                <article className="card">
                  <img src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=900&auto=format&fit=crop" alt="Product" />
                  <div className="card__body">
                    <p className="card__name">Half Zip Sweater<br/>Navy Blue</p>
                    <div className="card__price">₱200.00</div>
                  </div>
                </article>
              </div>
            </section>

            <section className="announcement container">
              <div className="announcement__box">
                <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop" alt="Announcement" />
                <div>
                  <span className="badge">ANNOUNCEMENT</span>
                  <p className="announce__title">Important Announcement Our Valued Segunda Mana Donors</p>
                  <p className="announce__text">Starting September 1, 2025: Segunda Mana Charity Outlets will NO LONGER ACCEPT in‑kind donations (such as clothes, shoes, household items, etc.).</p>
                </div>
              </div>
            </section>
          </>
        )}

        {currentPage === 'shop' && (
          <main className="shop-wrapper">
            <div className="shop-container">
              {/* Sidebar */}
              <aside className="shop-sidebar">
                <button className="sidebar-close" aria-label="Close sidebar">✕</button>
                <button className="filter-toggle">Filter</button>
                <div className="filter-block">
                  <div className="filter-title">Categories</div>
                  <ul className="filter-list">
                    <li><a href="#" onClick={(e) => e.preventDefault()}>Furniture</a></li>
                    <li className="is-active"><a href="#" onClick={(e) => e.preventDefault()}>Clothes</a></li>
                    <li><a href="#" onClick={(e) => e.preventDefault()}>Gadgets & Phones</a></li>
                    <li><a href="#" onClick={(e) => e.preventDefault()}>Bags</a></li>
                    <li><a href="#" onClick={(e) => e.preventDefault()}>Toys</a></li>
                    <li><a href="#" onClick={(e) => e.preventDefault()}>Dining</a></li>
                    <li><a href="#" onClick={(e) => e.preventDefault()}>Outdoor</a></li>
                  </ul>
                </div>

                <div className="filter-block">
                  <div className="filter-title">Price</div>
                  <p className="filter-note">Share your budget with us — we'll surprise you with items that support a scholar.</p>
                  <div className="price-inputs">
                    <input type="text" placeholder="₱ min" />
                    <span>–</span>
                    <input type="text" placeholder="₱ max" />
                  </div>
                  <ul className="filter-list small">
                    <li><label><input type="checkbox" defaultChecked /> ₱0 – ₱100.00</label></li>
                    <li><label><input type="checkbox" /> ₱100.00 – ₱199.99</label></li>
                    <li><label><input type="checkbox" /> ₱200.00 – ₱299.99</label></li>
                    <li><label><input type="checkbox" /> ₱300.00 – ₱399.99</label></li>
                    <li><label><input type="checkbox" /> ₱400.00+</label></li>
                  </ul>
                </div>
              </aside>

              {/* Main content */}
              <section className="shop-main">
                <h1 className="shop-title">Clothes</h1>
                <div className="shop-grid">
                  {/* Product cards with clickable images */}
                  <article className="p-card">
                    <a href="#" className="p-add" onClick={(e) => { e.preventDefault(); alert('Added to cart!'); }}>Add to cart</a>
                    <a href="#" className="p-link" onClick={(e) => { e.preventDefault(); alert('Viewing product details'); }}>
                      <figure className="p-thumb">
                        <img 
                          src="https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=800&auto=format&fit=crop" 
                          alt="Half Zip Sweater"
                          onClick={(e) => { 
                            e.preventDefault(); 
                            e.stopPropagation(); 
                            openImageModal(e.target.src, 'Half Zip Sweater - Navy Blue'); 
                          }}
                          style={{ cursor: 'pointer' }}
                        />
                      </figure>
                      <div className="p-info">
                        <div className="p-name">Half Zip Sweater</div>
                        <div className="p-variant">Navy Blue</div>
                        <div className="p-price">₱200.00</div>
                      </div>
                    </a>
                  </article>

                  <article className="p-card">
                    <a href="#" className="p-add" onClick={(e) => { e.preventDefault(); alert('Added to cart!'); }}>Add to cart</a>
                    <a href="#" className="p-link" onClick={(e) => { e.preventDefault(); alert('Viewing product details'); }}>
                      <figure className="p-thumb">
                        <img 
                          src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=800&auto=format&fit=crop" 
                          alt="Half Zip Sweater"
                          onClick={(e) => { 
                            e.preventDefault(); 
                            e.stopPropagation(); 
                            openImageModal(e.target.src, 'Half Zip Sweater - Navy Blue'); 
                          }}
                          style={{ cursor: 'pointer' }}
                        />
                      </figure>
                      <div className="p-info">
                        <div className="p-name">Half Zip Sweater</div>
                        <div className="p-variant">Navy Blue</div>
                        <div className="p-price">₱200.00</div>
                      </div>
                    </a>
                  </article>

                  <article className="p-card">
                    <a href="#" className="p-add" onClick={(e) => { e.preventDefault(); alert('Added to cart!'); }}>Add to cart</a>
                    <a href="#" className="p-link" onClick={(e) => { e.preventDefault(); alert('Viewing product details'); }}>
                      <figure className="p-thumb">
                        <img 
                          src="https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=800&auto=format&fit=crop" 
                          alt="Half Zip Sweater"
                          onClick={(e) => { 
                            e.preventDefault(); 
                            e.stopPropagation(); 
                            openImageModal(e.target.src, 'Half Zip Sweater - Navy Blue'); 
                          }}
                          style={{ cursor: 'pointer' }}
                        />
                      </figure>
                      <div className="p-info">
                        <div className="p-name">Half Zip Sweater</div>
                        <div className="p-variant">Navy Blue</div>
                        <div className="p-price">₱200.00</div>
                      </div>
                    </a>
                  </article>

                  <article className="p-card">
                    <a href="#" className="p-add" onClick={(e) => { e.preventDefault(); alert('Added to cart!'); }}>Add to cart</a>
                    <a href="#" className="p-link" onClick={(e) => { e.preventDefault(); alert('Viewing product details'); }}>
                      <figure className="p-thumb">
                        <img 
                          src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop" 
                          alt="Half Zip Sweater"
                          onClick={(e) => { 
                            e.preventDefault(); 
                            e.stopPropagation(); 
                            openImageModal(e.target.src, 'Half Zip Sweater - Navy Blue'); 
                          }}
                          style={{ cursor: 'pointer' }}
                        />
                      </figure>
                      <div className="p-info">
                        <div className="p-name">Half Zip Sweater</div>
                        <div className="p-variant">Navy Blue</div>
                        <div className="p-price">₱200.00</div>
                      </div>
                    </a>
                  </article>

                  <article className="p-card">
                    <a href="#" className="p-add" onClick={(e) => { e.preventDefault(); alert('Added to cart!'); }}>Add to cart</a>
                    <a href="#" className="p-link" onClick={(e) => { e.preventDefault(); alert('Viewing product details'); }}>
                      <figure className="p-thumb">
                        <img 
                          src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=800&auto=format&fit=crop" 
                          alt="Half Zip Sweater"
                          onClick={(e) => { 
                            e.preventDefault(); 
                            e.stopPropagation(); 
                            openImageModal(e.target.src, 'Half Zip Sweater - Navy Blue'); 
                          }}
                          style={{ cursor: 'pointer' }}
                        />
                      </figure>
                      <div className="p-info">
                        <div className="p-name">Half Zip Sweater</div>
                        <div className="p-variant">Navy Blue</div>
                        <div className="p-price">₱200.00</div>
                      </div>
                    </a>
                  </article>

                  <article className="p-card">
                    <a href="#" className="p-add" onClick={(e) => { e.preventDefault(); alert('Added to cart!'); }}>Add to cart</a>
                    <a href="#" className="p-link" onClick={(e) => { e.preventDefault(); alert('Viewing product details'); }}>
                      <figure className="p-thumb">
                        <img 
                          src="https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=800&auto=format&fit=crop" 
                          alt="Half Zip Sweater"
                          onClick={(e) => { 
                            e.preventDefault(); 
                            e.stopPropagation(); 
                            openImageModal(e.target.src, 'Half Zip Sweater - Navy Blue'); 
                          }}
                          style={{ cursor: 'pointer' }}
                        />
                      </figure>
                      <div className="p-info">
                        <div className="p-name">Half Zip Sweater</div>
                        <div className="p-variant">Navy Blue</div>
                        <div className="p-price">₱200.00</div>
                      </div>
                    </a>
                  </article>

                  <article className="p-card">
                    <a href="#" className="p-add" onClick={(e) => { e.preventDefault(); alert('Added to cart!'); }}>Add to cart</a>
                    <a href="#" className="p-link" onClick={(e) => { e.preventDefault(); alert('Viewing product details'); }}>
                      <figure className="p-thumb">
                        <img 
                          src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop" 
                          alt="Half Zip Sweater"
                          onClick={(e) => { 
                            e.preventDefault(); 
                            e.stopPropagation(); 
                            openImageModal(e.target.src, 'Half Zip Sweater - Navy Blue'); 
                          }}
                          style={{ cursor: 'pointer' }}
                        />
                      </figure>
                      <div className="p-info">
                        <div className="p-name">Half Zip Sweater</div>
                        <div className="p-variant">Navy Blue</div>
                        <div className="p-price">₱200.00</div>
                      </div>
                    </a>
                  </article>

                  <article className="p-card">
                    <a href="#" className="p-add" onClick={(e) => { e.preventDefault(); alert('Added to cart!'); }}>Add to cart</a>
                    <a href="#" className="p-link" onClick={(e) => { e.preventDefault(); alert('Viewing product details'); }}>
                      <figure className="p-thumb">
                        <img 
                          src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=800&auto=format&fit=crop" 
                          alt="Half Zip Sweater"
                          onClick={(e) => { 
                            e.preventDefault(); 
                            e.stopPropagation(); 
                            openImageModal(e.target.src, 'Half Zip Sweater - Navy Blue'); 
                          }}
                          style={{ cursor: 'pointer' }}
                        />
                      </figure>
                      <div className="p-info">
                        <div className="p-name">Half Zip Sweater</div>
                        <div className="p-variant">Navy Blue</div>
                        <div className="p-price">₱200.00</div>
                      </div>
                    </a>
                  </article>

                  <article className="p-card">
                    <a href="#" className="p-add" onClick={(e) => { e.preventDefault(); alert('Added to cart!'); }}>Add to cart</a>
                    <a href="#" className="p-link" onClick={(e) => { e.preventDefault(); alert('Viewing product details'); }}>
                      <figure className="p-thumb">
                        <img 
                          src="https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=800&auto=format&fit=crop" 
                          alt="Half Zip Sweater"
                          onClick={(e) => { 
                            e.preventDefault(); 
                            e.stopPropagation(); 
                            openImageModal(e.target.src, 'Half Zip Sweater - Navy Blue'); 
                          }}
                          style={{ cursor: 'pointer' }}
                        />
                      </figure>
                      <div className="p-info">
                        <div className="p-name">Half Zip Sweater</div>
                        <div className="p-variant">Navy Blue</div>
                        <div className="p-price">₱200.00</div>
                      </div>
                    </a>
                  </article>
                </div>
              </section>
            </div>
          </main>
        )}

        {currentPage === 'about' && (
          <>
            {/* Hero banner */}
            <section className="ab-hero">
              <div className="wrap">
                <img src="/image.png" alt="Segunda Mana"/>
                <div className="overlay"></div>
                <h1>Shop with heart.<br/>Give with Purpose.</h1>
                <p>Segunda Mana turns donations into hope, shop today and be part of our mission.</p>
              </div>
            </section>

            {/* Intro */}
            <div className="ab-wrap">
              <p><strong>Segunda Mana</strong> is the special donations‑in‑kind program of Caritas Manila.</p>
              <p className="ab-lead">Segunda Mana gives your pre‑loved items a second life — and someone else a second chance. Shop or donate today and help fund education, livelihoods, and hope for those who need it most.</p>

              {/* Vision */}
              <section className="ab-section">
                <h2>Our Vision</h2>
                <div className="ab-card">
                  A spirit‑led, community of love; <br/>
                  persons, committed to love; <br/>
                  charity for the common good.
                </div>
              </section>
              
              {/* Mission */}
              <section className="ab-section">
                <h2>Our Mission</h2>
                <div className="ab-card">
                  To uplift the social welfare and development <br/>
                  of the marginalized sectors across Metro Manila <br/>
                  by fostering sustainable micro‑enterprise and social impact; <br/>
                  to catalyze human development and <br/>
                  sustainable growth.
                </div>
              </section>

              {/* Values */}
              <section className="ab-section">
                <h2>Our Values</h2>
                <div className="ab-values">
                  <ul>
                    <li>Compassion & Faith</li>
                    <li>Service in Love</li>
                    <li>Empowering the Poor</li>
                  </ul>
                  <img className="ab-logo" src="/logo.png" alt="Caritas"/>
                </div>
              </section>
            </div>
          </>
        )}

        {currentPage === 'contact' && (
          <main className="contact-wrapper">
            <div className="container">
              <div className="contact-grid">
                {/* Contact Information */}
                <div className="contact-info">
                  <h1>We would love to hear from you!</h1>
                  <p>Questions, comments, or suggestions? Simply fill in the form and we'll be in touch shortly.</p>
                  
                  <div className="contact-details">
                    <div className="contact-item">
                      <div className="contact-icon address"></div>
                      <span>2002 Jesus St, Pandacan, Manila, 1011 Metro Manila</span>
                    </div>
                    <div className="contact-item">
                      <div className="contact-icon phone"></div>
                      <span>(02) 8562 0020</span>
                    </div>
                    <div className="contact-item">
                      <div className="contact-icon email"></div>
                      <span>donatedgoods@caritasmanila.org.ph</span>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form">
                  <h2>Send us a message</h2>
                  <form>
                    <div className="contact-field">
                      <label>First Name *</label>
                      <input type="text" placeholder="First name" />
                    </div>
                    <div className="contact-field">
                      <label>Last Name *</label>
                      <input type="text" placeholder="Last name" />
                    </div>
                    <div className="contact-field">
                      <label>Email *</label>
                      <input type="email" placeholder="Your email address" />
                    </div>
                    <div className="contact-field">
                      <label>Phone Number *</label>
                      <input type="tel" placeholder="Your phone number" />
                    </div>
                    <div className="contact-field">
                      <label>Your message...</label>
                      <textarea placeholder="Tell us how we can help you"></textarea>
                    </div>
                    <button type="submit" className="contact-submit">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </main>
        )}

        {currentPage === 'cart' && (
          <div className="container" style={{padding: '40px 0'}}>
            <h1 style={{fontSize: '48px', fontWeight: '900', textAlign: 'center', marginBottom: '40px'}}>Shopping Cart</h1>
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
              <div style={{backgroundColor: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 12px 28px rgba(0,0,0,.12)'}}>
                <p style={{textAlign: 'center', fontSize: '18px', color: '#666'}}>
                  Your cart is currently empty. Start shopping to add items!
                </p>
                <div style={{textAlign: 'center', marginTop: '30px'}}>
                  <button 
                    onClick={() => navigateTo('shop')}
                    style={{
                      padding: '15px 30px', 
                      backgroundColor: '#e31b23', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '8px', 
                      fontWeight: '700',
                      fontSize: '16px',
                      cursor: 'pointer'
                    }}
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">© 2025 Segunda Mana. Shop with purpose.</footer>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={closeImageModal}>✕</button>
            <img src={selectedImage.src} alt={selectedImage.name} className="image-modal-img" />
            <div className="image-modal-info">
              <h3>{selectedImage.name}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
