import React from 'react'

export default function AboutUsComponent() {
  return (
    <div>
        <section>
        <div className="banner">
          <img src="/perfume.jpg " alt="" />
        </div><br></br>
        <span className="hero-subtitle">Since 2014</span>
        <h1 className="hero-title">A Symphony of Scents</h1>
        <p className="hero-description">
          Experience the art of fine perfumery. Hand-crafted bottles 
          filled with the world's rarest essences.Every bottle of <strong>SCENT & CO</strong> is a masterpiece of high-concentration 
        oils. We use a 25% fragrance concentration (Parfum grade), ensuring that 
        our scents stay vibrant on your skin for over 24 hours. Our ingredients are 
        sourced from the world's most prestigious botanical gardens.Our support goes beyond basic service. We offer 24/7 dedicated assistance 
        to help you find your "Signature Scent." Whether you have questions about 
        notes, shipping, or returns, our experts are here to ensure your 
        olfactory journey is seamless and luxurious.
        </p>
        <div className="hero-btns">
          <button className="btn-primary">Shop Perfumes</button>
          <button className="btn-outline">Discover the Notes</button>
        </div>
      </section>
    </div>
  )
}
