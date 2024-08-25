import React, { useState, useEffect, useRef } from 'react';
import { getPopularProducts } from '@/pages/api'; // Adjust the import based on your project structure
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import arrow icons

const PopularProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getPopularProducts();
        setProducts(data.products || []);
      } catch (err) {
        setError('Failed to fetch popular products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300; // Adjust scroll amount as needed
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (!originalPrice || !discountedPrice) return 0;
    return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
  };

  if (loading) return (
    <div className="popular-products">
      <h2 className="text-center mb-4">Popular Products</h2>
      <div className="carousel">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="product-card shimmer-effect">
            <div className="product-image"></div>
            <div className="product-info">
              <div className="product-name"></div>
              <div className="product-price"></div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .popular-products {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .text-center {
          text-align: center;
        }

        .carousel {
          display: flex;
          overflow-x: auto;
          padding: 10px 0;
        }

        .product-card {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
          width: 200px; /* Adjust width as needed */
          margin-right: 15px;
        }

        .shimmer-effect {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }

        .product-image {
          width: 100%;
          height: 200px;
          background-color: #ddd;
        }

        .product-info {
          padding: 15px;
        }

        .product-name, .product-price {
          height: 20px;
          background-color: #ddd;
          margin-bottom: 10px;
        }

        .product-name {
          width: 60%;
        }

        .product-price {
          width: 40%;
        }

        @media (max-width: 768px) {
          .product-image {
            height: 150px;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );

  if (error) return <p>{error}</p>;

  return (
    <div className="popular-products">
      <h2 className="text-left mb-4">Popular Products</h2>
      <div className="carousel-container ">
      <button className="carousel-button prev" onClick={() => scroll('left')}>
          <FaChevronLeft />
        </button>
        <div className="carousel scroll-hide" ref={carouselRef}>
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.productImage?.[0].url} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                {product?.discountedPrice ? <p className="product-price">{product.currency}{product?.discountedPrice} <span className='text-decoration-line-through text-muted'>{product.currency}{product.price}</span>
                {calculateDiscountPercentage(product.price,product?.discountedPrice) > 0 && (
                <span className="ms-2 pl-3 text-success font-weight-bold">
                  ({calculateDiscountPercentage(product.price,product?.discountedPrice)}% off)
                </span>
              )}
                </p> : <p className="product-price">{product.currency}{product?.price} </p> }
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={() => scroll('right')}>
          <FaChevronRight />
        </button>      </div>
      <style jsx>{`
        .popular-products {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .text-center {
          text-align: center;
        }

        .carousel-container {
          display: flex;
          align-items: center;
        }

        .carousel {
          display: flex;
          overflow-x: auto;
          padding: 10px 0;
          scroll-snap-type: x mandatory;
          flex-grow: 1;
          scroll-behavior: smooth;
        }

        .product-card {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
          width: 200px; /* Adjust width as needed */
          margin-right: 15px;
          flex-shrink: 0;
          scroll-snap-align: start;
        }

        .product-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
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

         .carousel-button {
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 50%;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .carousel-button:hover {
          background-color: #0056b3;
        }

        @media (max-width: 768px) {
          .product-image {
            height: 150px;
          }
        }
      `}</style>
    </div>
  );
};

export default PopularProducts;
