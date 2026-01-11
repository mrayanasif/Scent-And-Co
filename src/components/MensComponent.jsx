import React from 'react'

export default function MensComponent() {
  return (
    <div>
     
      
      {/* --- MEN'S COLLECTION --- */}
      <h2 className="title">Men's Collection</h2>
      <div className="grid">
        
        {/* Card 1 */}
        <div className="card">
          <img src="/CreedMen.jpg" alt="Perfume 1" />
          <h3>Creed Aventus</h3>
          <p className="price">Rs 40,000</p>
          <ul className="product-features">
    <li>     24-Hour Long Lasting</li>
    <li> Natural Essential Oils</li>
    <li> Premium Glass Bottle</li>
  </ul>
          <button className="cart-btn">Add to Cart</button>
          
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src="/SauvageMen.jpg" alt="Perfume 2" />
          <h3>Dior Sauvage</h3>
          <p className="price">Rs 85,000</p>
          <ul className="product-features">
    <li>     24-Hour Long Lasting</li>
    <li> Natural Essential Oils</li>
    <li> Premium Glass Bottle</li>
  </ul>
          <button className="cart-btn">Add to Cart</button>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img src="/Valentino men.jpg" alt="Perfume 3"  />
          <h3>Valentino </h3>
          <p className="price">60,000</p>
          <ul className="product-features">
    <li>     24-Hour Long Lasting</li>
    <li> Natural Essential Oils</li>
    <li> Premium Glass Bottle</li>
  </ul>
          <button className="cart-btn">Add to Cart</button>
        </div>
      </div>
</div>
  )
}
