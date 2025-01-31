import React from 'react'
import products from '../products.js'
import Product from '../components/Product.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { Link } from 'react-router-dom'

const H_Products = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
        <div className='gap-8 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              className="block h-full" 
            >
              <ProductCard
                key={product.id}
                price={product.price}
                name={product.name}
                imgURL={product.images[0]}
                rating={product.rating}
                // className="h-full" // Ensure ProductCard takes full height
              />
            </Link>
          ))}
        </div>
        
    </div>
  )
}

export default H_Products