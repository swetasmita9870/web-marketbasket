import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { LOGO } from '@/Config';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <a>
              <img
              src={LOGO}
              width="250"
              />
            </a>
          </Link>
        </div>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/categories">
                <a>Categories</a>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <a>Product</a>
              </Link>
            </li>
            <li>
              <Link href="/cart">
                <a>
                  Cart <FaShoppingCart />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/myorders">
                <a>My Order</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <style jsx>{`
        .header {
          background-color: #343a40;
          color: #ffffff;
        }

        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .logo a {
          font-size: 24px;
          font-weight: bold;
          color: #ffffff;
          text-decoration: none;
        }

        .nav ul {
          list-style: none;
          display: flex;
          gap: 20px;
          margin: 0;
          padding: 0;
        }

        .nav ul li a {
          color: #ffffff;
          text-decoration: none;
          font-size: 16px;
          transition: color 0.3s ease;
        }

        .nav ul li a:hover {
          color: #007bff;
        }

        .menu-icon {
          display: none;
          font-size: 24px;
          cursor: pointer;
          z-index: 1001; /* Increased z-index */
        }

        @media (max-width: 767px) {
          .nav {
            position: fixed;
            top: 0;
            right: 0;
            background-color: #343a40;
            width: 100%;
            max-width: 250px;
            height: 100vh;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding-top: 60px;
            z-index: 1000; /* Increased z-index */
            box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
          }

          .nav.open {
            transform: translateX(0);
          }

          .nav ul {
            width: 100%;
            padding-left: 20px;
            flex-direction: column;
            gap: 20px;
          }

          .nav ul li {
            width: 100%;
          }

          .nav ul li a {
            display: block;
            width: 100%;
            padding: 10px 0;
          }

          .menu-icon {
            display: block;
            color: #ffffff;
            z-index: 1002; /* Ensures the icon is above the nav */
          }

          .container {
            position: relative;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
