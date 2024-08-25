import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getCart, removeCart } from './api';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartData = async () => {
      const res = await getCart();
      setCartItems(res.userCarts);
    };

    fetchCartData();
  }, []);

  const handleQuantityChange = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
            ...item,
            quantity: action === 'increase' ? item.quantity + 1 : item.quantity - 1 > 0 ? item.quantity - 1 : 1,
          }
          : item
      )
    );
  };

  const removeCartProduct = async (id) => {
    try {
      const res = await removeCart(id);
      if (res.deleteUserCart.id) {
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.id !== id)
        );
      }
    } catch (error) {
      console.error('An error occurred while removing the product:', error);
    }
  };


  return (
    <>
      <Header />
      <div className="container mt-5">
        <h2 className="mb-4">Shopping Cart</h2>

        {cartItems?.map((item) => (
          <div key={item.id} className="row align-items-center border-bottom py-4 shadow-sm rounded bg-light mb-4">
            <div className="col-3 col-md-2">
              <Image
                src={item?.productImage}
                width={100}
                height={100}
                className="img-fluid rounded shadow-sm object-fit-contain"
                alt={item.productName}
              />
            </div>
            <div className="col-6 col-md-7">
              <h5 className="mb-1">{item.productName}</h5>
              <p className="text-muted small mb-2">{item.productDescription}</p>
              <p className="mb-1">
                <strong>{item.currency}{item.price}</strong>
              </p>
              <button onClick={() => removeCartProduct(item.id)} className="btn btn-link text-danger p-0">Remove</button>
            </div>
            <div className="col-3 col-md-3 text-end">
              {/* Quantity Selector with Increase/Decrease Buttons */}
              <div className="d-flex align-items-center justify-content-end">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => handleQuantityChange(item.id, 'decrease')}
                >
                  -
                </button>
                <input
                  type="number"
                  className="form-control w-25 mx-2 text-center border-0 shadow-sm rounded"
                  value={item.quantity}
                  readOnly
                />
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => handleQuantityChange(item.id, 'increase')}
                >
                  +
                </button>
              </div>
              <p className="mt-2">
                <strong>Total: {item.currency}{item.price * item.quantity}</strong>
              </p>
            </div>
          </div>
        ))}

        {/* Cart Summary Section */}
        <div className="row">
          <div className="col-md-6 offset-md-6">
            <div className="border p-4 rounded shadow-sm bg-white">
              <h5>Order Summary</h5>
              <p className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>
                  <strong>
                    {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
                  </strong>
                </span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Shipping</span>
                <span><strong>₹50</strong></span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Discount</span>
                <span><strong>-₹20</strong></span>
              </p>
              <hr />
              <p className="d-flex justify-content-between">
                <span>Grand Total</span>
                <span>
                  <strong>
                    ₹
                    {cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + 50 - 20}
                  </strong>
                </span>
              </p>
              <button className="btn btn-primary btn-block mt-3 shadow-sm rounded-pill">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-5 text-center">
          <a href="/" className="btn btn-outline-primary rounded-pill px-4 py-2 shadow-sm">
            Continue Shopping
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;
