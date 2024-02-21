import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddProductForm.css'; // Import CSS for styling

const AddProductForm = ({ updateProducts }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [costPrice, setCostPrice] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');
    const [rating, setRating] = useState('');
    const [error, setError] = useState('');

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/products/');
                setProducts(response.data);
            } catch (error) {
                setError('Error fetching products. Please try again later.');
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();

        // Cleanup function
        return () => {
            // Any cleanup code here, if necessary
        };
    }, []); // Empty dependency array to ensure this effect runs only once


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/products/', {
                name,
                category,
                costPrice,
                sellingPrice,
                rating
            });

            console.log('Product added successfully:', response.data);
            // Reset form fields
            setName('');
            setCategory('');
            setCostPrice('');
            setSellingPrice('');
            setRating('');
            setError('');
            // Update products list
            updateProducts();
        } catch (error) {
            setError('Error adding product. Please try again.');
            console.error('Error adding product:', error);
        }
    };

    return (
        <>        <div className="add-product-form-container">
            <h1>All Products</h1>
            {/* {error && <p className="error-message">{error}</p>} */}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Cost Price</th>
                        <th>Selling Price</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>₹{product.costPrice}</td>
                            <td>₹{product.sellingPrice}</td>
                            <td>{product.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
            <div className="add-product-form-container">

                <h2>Add Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category:</label>
                        <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="costPrice">Cost Price:</label>
                        <input type="number" id="costPrice" value={costPrice} onChange={(e) => setCostPrice(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sellingPrice">Selling Price:</label>
                        <input type="number" id="sellingPrice" value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rating">Rating:</label>
                        <input type="number" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} required />
                    </div>
                    <button type="submit" className="submit-button">Add Product</button>
                </form>
                {/* {error && <p className="error-message">{error}</p>} */}
            </div></>
    );
};

export default AddProductForm;
