import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <div className='flex justify-center py-4'>
                <Link to='/product/men'>Men</Link>
            </div>
            <h1>Product Page</h1>
        </div>
    )
}

export default Product
