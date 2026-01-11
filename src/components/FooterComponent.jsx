import React from 'react'

export default function FooterComponent() {
  return (
    <div>
        <footer className="footer-container">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="footer-logo">SCENT & CO.</h2>
          <p>Crafting timeless fragrances since 2014. Every bottle tells a story of elegance and mystery.</p>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>All Perfumes</li>
            <li>Our Story</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Customer Care Section */}
        <div className="footer-links">
          <h3>Customer Care</h3>
          <ul>
            <li>Shipping Policy</li>
            <li>Returns & Exchanges</li>
            <li>Fragrance Guide</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Join our list for exclusive releases.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Email Address" />
            <button>Join</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 SCENT & CO. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
  )
}
