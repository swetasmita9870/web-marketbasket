// pages/[categoryname].js
import React, { useEffect, useState } from 'react';
import { getCategorieProducts } from '../api';
import Header from '@/components/Header';
import { PLACEHOLDER } from '@/Config';
import Footer from '@/components/Footer';

const CategoryProducts = ({ categoryname }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getCategorieProducts(categoryname);
        setProducts(response.categories?.[0]?.product || []);
      } catch (error) {
        console.error("Error fetching category products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryname]);

  return (
    <>
      <Header />
      <div className="container mt-2">
        <h1 className="mb-4 text-left">Products in {categoryname}</h1>
        {loading ? (
          <p className="text-center">Loading products...</p>
        ) : (
          <div className="row">
            {products.length > 0 ? (
              products.map((product) => (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={product.id}>
                  <div className="card product-card">
                    <img
                      src={product.productImage?.[0].url}
                      className="card-img-top object-fit-contain"
                      alt={product.name}
                      style={{ height: '150px' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.currency}{product.price}</p>
                      <a href={`/product/${product.slug}`} className="btn btn-primary text-white">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <img src={PLACEHOLDER}
                  width={'500'}
                  height={'500'}
                  className='object-fit-contain'
                />
                <p className="text-center">No products found in this category.</p>
              </div>
            )}
          </div>
        )}
        <style jsx>{`
  /* CategoryProducts.css */

/* Card Styling with Border, Shadow, and Gradient */
.product-card {
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  border-color: #007bff;
}

/* Image Styling with Hover Effect */
.product-card img {
  border-bottom: 1px solid #ddd;
  transition: transform 0.3s ease, filter 0.3s ease;
  width: 100%;
  height: auto;
}


/* Card Body with Hover Effects */
.product-card .card-body {
  padding: 15px;
  position: relative;
  z-index: 2;
}

/* Product Title Styling */
.product-card .card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
  transition: color 0.3s ease;
}

.product-card:hover .card-title {
  color: #007bff;
}

/* Product Price Styling */
.product-card .card-text {
  font-size: 1.125rem;
  font-weight: 500;
  color: #555;
  margin-bottom: 15px;
}

/* Button Styling with Gradient Background and Shadow */
.product-card .btn {
  background-image: linear-gradient(to right, #007bff, #0056b3);
  border: none;
  color: #fff;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 20px;
  transition: background-position 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  background-size: 200% 100%;
  background-position: left bottom;
  position: relative;
  z-index: 2;
}

.product-card .btn:hover {
  background-position: right bottom;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .product-card {
    margin-bottom: 20px;
  }
}

/* Text Centering and Margins */
h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

p {
  font-size: 1.2rem;
}

/* Loading Spinner */
.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

      `}</style>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const { categoryname } = context.params;

  return {
    props: {
      categoryname,
    },
  };
}

export default CategoryProducts;
