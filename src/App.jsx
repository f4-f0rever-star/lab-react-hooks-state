import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import styles from './styles/DarkMode.module.css'

const App = () => {
  // TODO: Implement state for dark mode toggle

  const [darkMode, setTheme] = useState(false)
  // TODO: Implement state for cart management

  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  }
  // TODO: Implement state for category filtering

  const [category, setCategory] = useState("all")
  return (
    <div className = {darkMode ? styles.dark : ""}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle darkMode = {darkMode} setTheme = {setTheme}/>

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select value = {category} onChange = {(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList category =  {category} addToCart = {addToCart}/>
      
      {/* TODO: Implement and render Cart component */}
      <Cart cart = {cart}/>
    </div>
  )
}

export default App
