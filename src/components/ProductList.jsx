import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({category, addToCart}) => {
// filter products based on the select category
  const filteredProducts = category === "all"
    ? sampleProducts
    : sampleProducts.filter((product) => {
      return product.category === category
    });
// If filtered list is empty, show message
  if (filteredProducts.length === 0) {
    return (
      <div>
        <h2>Available Products</h2>
        <p>No products available.</p>
      </div>
    )
  }
 //if it exists, loop through them and display each one
  return (
    <div>
      <h2>Available Products</h2>
      {/* Send product data to productCard and function to handle adding items to cart */}

      {filteredProducts.map((product) => (<ProductCard key = {product.id} product = {product} addToCart= {addToCart}/>))}


    </div>
  )
}

export default ProductList
