import React from 'react'

export default function WomensComponent() {
  return (
    <div>
        <h2 className="title">Women's Collection</h2>
      <div className="grid">
        
        {/* Card 4 */}
        <div className="card">
          <img src="/coco chanel paris women.jpg" alt="Perfume 4" />
          <h3>Coco Chanel Paris</h3>
          <p className="price">Rs 20,000</p>
          <ul className="product-features">
    <li> 24-Hour Long Lasting</li>
    <li> Natural Essential Oils</li>
    <li> Premium Glass Bottle</li>
  </ul>
          <button className="cart-btn">Add to Cart</button>
        </div>

        {/* Card 5 */}
        <div className="card">
          <img src="/jadore women.jpg" alt="Perfume 5" />
          <h3>Dior Jadore</h3>
          <p className="price">$80,000</p>
          <ul className="product-features">
    <li> 24-Hour Long Lasting</li>
    <li> Natural Essential Oils</li>
    <li> Premium Glass Bottle</li>
  </ul>
          <button className="cart-btn">Add to Cart</button>
        </div>

        {/* Card 6 */}
        <div className="card">
          <img src="/GucciWomen.jpg" alt="Perfume 6" />
          <h3>Gucci Flora</h3>
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
