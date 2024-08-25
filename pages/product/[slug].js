import React, { useEffect, useState } from 'react';
import { addToCart, getProduct } from '../api';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProductDetail = ({ productname }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showMoreOffers, setShowMoreOffers] = useState(false);
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(productname);
        setProduct(data?.products?.[0]);
        if (data?.products?.[0]?.offerEnds) {
          updateCountdown(data.products[0].offerEnds);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productname]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (product?.offerEnds) {
        updateCountdown(product.offerEnds);
      }
    }, 100); // Update countdown every second

    return () => clearInterval(interval);
  }, [product?.offerEnds]);

  const updateCountdown = (endDate) => {
    const now = new Date();
    const end = new Date(endDate);
    const diff = end - now;

    if (diff <= 0) {
      setCountdown('Offer has ended');
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  };


  const toggleShowMoreOffers = () => {
    setShowMoreOffers(!showMoreOffers);
  };
  const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (!originalPrice || !discountedPrice) return 0;
    return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
  };
  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-danger">Error: {error}</p>;
  if (!product) return <p className="text-center">Product not found.</p>;

  const discountPercentage = calculateDiscountPercentage(product.price, product.discountedPrice);

  const cartProduct = async () => {
    let payload = {
      'productName': product?.name,
      'price': product?.discountedPrice?.toFixed(2),
      'productImage': product?.productImage?.[0]?.url,
      'productDescription': product?.description,
      'currency': product?.currency,
      'quantity': 1
    }
    console.log(payload, "payload")
    // return
    try {
      const data = await addToCart(payload);
      console.log(data, "ggggggggggggggggggggggg")
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <Header />
      <div className="container mt-2">
        <div className="row">
          {/* Product Image */}
          <div className="col-md-6">
            <div className="product-image-container">
              <img
                src={product.productImage[0].url}
                alt={product.name}
                className="product-image w-100"
              />
            </div>
          </div>
          {/* Product Details */}
          <div className="col-md-6">
            <h1 className="mb-3">
              {product.name} <span className='text-muted'>({product.quantity})</span>
            </h1>
            <p>
              <span className="ms-2 fs-6">
                {product.currency}{product?.discountedPrice} <span className='text-decoration-line-through text-muted'>{product.currency}{product.price}</span>
              </span>
              {discountPercentage > 0 && (
                <span className="ms-2 pl-3 text-success font-weight-bold">
                  ({discountPercentage}% off)
                </span>
              )}
            </p>
            <div className="d-flex align-items-center mb-3">
              <span className="rating-badge">
                {product.rating} ★
              </span>
            </div>

            <p className="mb-4">{product.description}</p>
            <div className="offers-section">
              <p className='font-weight-bold' >Available offers</p>
              {product.offers.slice(0, showMoreOffers ? product.offers.length : 3).map((offer, index) => (
                <ul key={index}>
                  <li>🏷️ {offer}</li>
                </ul>
              ))}
              <button onClick={toggleShowMoreOffers} className="btn btn-link">
                {showMoreOffers ? 'Show Less' : 'Show More'}
              </button>
            </div>
            <div className="countdown-timer">
              {product.offerEnds ? `Offer ends in: ${countdown}` : 'No active offers'}
            </div>
            <button onClick={cartProduct} className="add-to-cart-button mb-3">
              Add to Cart
            </button>
          </div>
        </div>

        <style jsx>{`
          .product-image-container {
            position: relative;
            overflow: hidden;
            border: 1px solid #ddd;
            border-radius: 8px;
          }
          .product-image {
            border: 1px solid #ddd;
            border-radius: 8px;
            object-fit: contain;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .product-image:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          }
          .rating-badge {
            font-size: 0.9rem;
            padding: 0.1rem 0.9rem;
            border-radius: 12px;
            background-color: #28a745;
            color: white;
          }
          .add-to-cart-button {
            background-color: #ff9900;
            border-color: #ff9900;
            color: white;
            padding: 0.75rem 1.5rem;
            font-size: 1.125rem;
            border-radius: 8px;
            transition: background-color 0.3s ease, border-color 0.3s ease;
          }
          .add-to-cart-button:hover {
            background-color: #e68a00;
            border-color: #e68a00;
          }
          .btn-secondary {
            background-color: #007bff;
            border-color: #007bff;
            color: white;
            padding: 0.75rem 1.5rem;
            font-size: 1.125rem;
            border-radius: 8px;
          }
          .btn-secondary:hover {
            background-color: #0056b3;
            border-color: #004494;
          }
          .quantity-controls {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .quantity-button {
            background-color: #007bff;
            border: none;
            color: white;
            padding: 10px;
            font-size: 1.5rem;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          .quantity-button:hover {
            background-color: #0056b3;
          }
          .quantity-input {
            width: 60px;
            text-align: center;
            font-size: 1.25rem;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 5px;
          }
          .offers-section {
            margin-bottom: 1.5rem;
          }
          .offers-section ul {
            list-style-type: none;
            padding-left: 0;
          }
          .offers-section li {
            margin-bottom: 0.5rem;
          }
          .countdown-timer {
            font-size: 1rem;
            color: #ff0000;
            margin-bottom: 1rem;
          }
          @media (max-width: 768px) {
            .product-image {
              max-width: 100%;
              height: auto;
            }
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;

  console.log(context, "context");

  return {
    props: {
      productname: slug,
    },
  };
}

export default ProductDetail;
