import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <h4>About Us</h4>
            <p>
              We are committed to providing you with the best shopping experience. Explore our wide range of products and enjoy top-notch customer service.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><Link href="/about-us"><a>About Us</a></Link></li>
              <li><Link href="/shop"><a>Shop</a></Link></li>
              <li><Link href="/faq"><a>FAQ</a></Link></li>
              <li><Link href="/contact-us"><a>Contact Us</a></Link></li>
              <li><Link href="/terms-conditions"><a>Terms & Conditions</a></Link></li>
              <li><Link href="/privacy-policy"><a>Privacy Policy</a></Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li><strong>Email:</strong> swetasmita987@gmail.com</li>
              <li><strong>Phone:</strong> +91 93371 27197</li>
              <li><strong>Address:</strong> 123 Street Name, City, Country</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-4">
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #343a40;
          color: #ffffff;
          padding: 40px 0;
        }

        .footer h4 {
          font-size: 18px;
          margin-bottom: 20px;
        }

        .footer p, .footer li {
          font-size: 14px;
          margin-bottom: 10px;
          line-height: 1.6;
        }

        .footer a {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer a:hover {
          color: #007bff;
        }

        .social-icons {
          display: flex;
          gap: 15px;
        }

        .social-icon {
          color: #ffffff;
          font-size: 18px;
          transition: color 0.3s ease;
        }

        .social-icon:hover {
          color: #007bff;
        }

        @media (max-width: 767px) {
          .footer {
            text-align: center;
          }

          .social-icons {
            justify-content: center;
          }

          .footer h4 {
            margin-top: 20px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
