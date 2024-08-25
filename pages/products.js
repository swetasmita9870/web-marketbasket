import React, { useState, useEffect } from 'react';
import { getCategorieProducts, getCategories } from './api';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const ProductsPage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchCategories = async () => {
      let number = 30;
      try {
        const res = await getCategories(number);
        setCategories(res?.categories || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getCategorieProducts(selectedCategory);
        setProducts(response.categories?.[0]?.product || []);
      } catch (error) {
        console.error("Error fetching category products:", error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (!originalPrice || !discountedPrice) return 0;
    return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
  };

  return (
    <>
      <Header />
      <div className="products-page">
        {/* Dropdown for mobile */}
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="category-select"
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>

        {/* Category section for desktop */}
        <div className="category-section">
          <h2>Categories</h2>
          <ul>
            {categories.map((category) => (
              <li
                key={category.id}
                className={selectedCategory === category.slug ? 'active' : ''}
                onClick={() => setSelectedCategory(category.slug)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="products-section">
          <div className="products-grid">
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className="product-card">
                  <img src={product.productImage?.[0].url} alt={product.name} className="product-image" />
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    {product?.discountedPrice ? (
                      <p className="product-price">
                        {product.currency}{product?.discountedPrice}
                        <span className='text-decoration-line-through text-muted'>{product.currency}{product.price}</span>
                        {calculateDiscountPercentage(product.price, product?.discountedPrice) > 0 && (
                          <span className="discount-info">
                            ({calculateDiscountPercentage(product.price, product?.discountedPrice)}% off)
                          </span>
                        )}
                      </p>
                    ) : (
                      <p className="product-price">{product.currency}{product?.price}</p>
                    )}
                    <div className='w-100 d-flex align-items-center justify-content-between pt-2 flex-column'>
                      <button className="buy-now-button col-8">Buy Now</button>
                      <button className="details-button col-8">Details</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
        <style jsx>{`
          .products-page {
            display: flex;
            flex-direction: row;
            padding: 20px;
            gap: 20px;
            background-color: #f4f4f4;
            height: 100vh;
            overflow: hidden;
          }

          .category-select {
            display: none; /* Hide by default */
          }

          .category-section {
            flex: 1;
            min-width: 200px;
            background-color: #ffffff;
            border-radius: 8px;
            padding: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            height: calc(100vh - 40px);
            overflow-y: auto;
          }

          .category-section h2 {
            font-size: 20px;
            margin-bottom: 15px;
            color: #333;
          }

          .category-section ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .category-section li {
            padding: 10px;
            cursor: pointer;
            border-radius: 4px;
            transition: background-color 0.3s ease;
            color: #333;
          }

          .category-section li:hover,
          .category-section li.active {
            background-color: #e0e0e0;
          }

          .products-section {
            flex: 5;
            background-color: #ffffff;
            border-radius: 8px;
            padding: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            height: calc(100vh - 40px);
            overflow-y: auto;
          }

          .products-section h2 {
            font-size: 20px;
            margin-bottom: 15px;
            color: #333;
          }

          .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 15px;
          }

          .product-card {
            background-color: #ffffff;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 15px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            overflow: hidden;
          }

          .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
          }

          .product-image {
            width: 100%;
            height: 200px;
            object-fit: contain;
          }

          .product-info {
            padding: 15px;
          }

          .product-name {
            font-size: 18px;
            font-weight: bold;
            margin: 0;
          }

          .product-price {
            font-size: 16px;
            color: #007bff;
            margin: 5px 0 0;
          }

          .discount-info {
            color: #2ecc71;
            font-weight: bold;
            margin-left: 10px;
          }

          .buy-now-button,
          .details-button {
            background-color: #3498db;
            color: #fff;
            border: none;
            border-radius: 4px;
            padding: 8px 15px;
            font-size: 12px;
            cursor: pointer;
            margin: 5px;
            transition: background-color 0.3s ease, transform 0.2s ease;
          }

          .buy-now-button:hover,
          .details-button:hover {
            background-color: #2980b9;
            transform: scale(1.05);
          }

          .details-button {
            background-color: #2ecc71;
          }

          .details-button:hover {
            background-color: #27ae60;
          }

          @media (max-width: 768px) {
            .category-select {
              display: block; /* Show on mobile */
            }

            .category-section {
              display: none; /* Hide on mobile */
            }

            .products-page {
              flex-direction: column;
            }

            .product-image {
              height: 150px;
            }
              .category-select {
            width: 100%;
            padding: 10px;
            border-radius: 4px;
            border: 1px solid #ddd;
            background-color: #fff;
            font-size: 16px;
            cursor: pointer;
          }
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
