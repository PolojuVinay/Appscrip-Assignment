import React, {useEffect, useState} from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  const addToCart = product => {
    setCart([...cart, product])
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo">LOGO</div>
        <nav className="nav">
          <a href="#shop">Shop</a>
          <a href="#skills">Skills</a>
          <a href="#stories">Stories</a>
          <a href="#about">About</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <div className="cart-icon">🛒 Cart ({cart.length})</div>
      </header>
      <main className="main">
        <div className="intro">
          <h1>Discover Our Products</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
        <div className="content">
          <aside className="sidebar">
            <h3>Filters</h3>
            <ul>
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
            </ul>
          </aside>
          <div className="products">
            {products.map(product => (
              <div key={product.id} className="card">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-image"
                />
                <div className="details">
                  <h2>{product.title}</h2>
                  <p>Sign in or create an account to see pricing</p>
                  <button onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="footer">
        <div>
          <p>&copy; 2024 Your Store. All rights reserved.</p>
        </div>
        <div>
          <p>Follow us on:</p>
          <p>Social Media Links</p>
        </div>
      </footer>
    </div>
  )
}

export default App
