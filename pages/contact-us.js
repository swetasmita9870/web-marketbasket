import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUsPage = () => {
  return (
    <>
      <Header />
      <div className="contact-us-page">
        <div className="container">
          <div className="contact-header">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Reach out to us for any queries or support.</p>
          </div>
          <div className="contact-info">
            <div className="info-item">
              <FaPhoneAlt className="icon" />
              <div className="info-text">
                <h3>Phone</h3>
                <p>+123 456 7890</p>
              </div>
            </div>
            <div className="info-item">
              <FaEnvelope className="icon" />
              <div className="info-text">
                <h3>Email</h3>
                <p>support@example.com</p>
              </div>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <div className="info-text">
                <h3>Address</h3>
                <p>123 Street Name, City, Country</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form action="#" method="post">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>

        <style jsx>{`
        .contact-us-page {
          padding: 60px 20px;
          background: #f4f4f9;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 8px;
          padding: 40px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .contact-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .contact-header h1 {
          font-size: 36px;
          margin-bottom: 10px;
          color: #333;
        }

        .contact-header p {
          font-size: 18px;
          color: #666;
        }

        .contact-info {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .info-item {
          flex: 1 1 30%;
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          background: #ffffff;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .info-item .icon {
          font-size: 24px;
          color: #007bff;
          margin-right: 15px;
        }

        .info-text {
          display: flex;
          flex-direction: column;
        }

        .info-text h3 {
          font-size: 18px;
          margin: 0 0 5px;
          color: #333;
        }

        .info-text p {
          font-size: 16px;
          margin: 0;
          color: #666;
        }

        .contact-form h2 {
          font-size: 28px;
          margin-bottom: 20px;
          color: #007bff;
          text-align: center;
        }

        .contact-form form {
          display: flex;
          flex-direction: column;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          font-size: 16px;
          color: #333;
          margin-bottom: 5px;
          display: block;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 16px;
          color: #333;
        }

        .form-group textarea {
          resize: vertical;
        }

        .submit-button {
          background-color: #007bff;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          padding: 12px;
          font-size: 18px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .submit-button:hover {
          background-color: #0056b3;
        }

        @media (max-width: 768px) {
          .contact-info {
            flex-direction: column;
          }

          .info-item {
            flex: 1 1 auto;
            margin-bottom: 20px;
          }
        }
      `}</style>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
