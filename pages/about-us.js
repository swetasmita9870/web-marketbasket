import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="about-us-container">
        <header className="text-center">
          <h1>About Us</h1>
        </header>

        <section className="company-info">
          <h2>Our Company</h2>
          <p>
            Welcome to our eCommerce website. We are dedicated to providing high-quality products and exceptional service. Our mission is to make shopping easy and enjoyable for everyone.
          </p>
          <p>
            Founded in [Year], we have been committed to delivering the best products and services to our customers. Our team works hard to ensure your satisfaction and is always here to help with any questions or concerns.
          </p>
        </section>

        <section className="team">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="/path/to/team-member1.jpg" alt="Team Member 1" />
              <h3>Jane Doe</h3>
              <p>Founder & CEO</p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              </div>
            </div>
            <div className="team-member">
              <img src="/path/to/team-member2.jpg" alt="Team Member 2" />
              <h3>John Smith</h3>
              <p>Head of Marketing</p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              </div>
            </div>
            {/* Add more team members as needed */}
          </div>
        </section>

        <section className="cta">
          <h2>Get In Touch</h2>
          <p>
            Have any questions or want to learn more about us? Feel free to reach out to us through our contact page.
          </p>
          <a href="/contact" className="cta-button">Contact Us</a>
        </section>

        <style jsx>{`
        .about-us-container {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .company-info {
          margin-bottom: 40px;
        }

        .company-info h2 {
          font-size: 28px;
          color: #007bff;
          margin-bottom: 10px;
        }

        .company-info p {
          font-size: 18px;
          line-height: 1.6;
          color: #555;
        }

        .team {
          margin-bottom: 40px;
        }

        .team h2 {
          font-size: 28px;
          color: #007bff;
          margin-bottom: 20px;
        }

        .team-members {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }

        .team-member {
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          padding: 20px;
          width: 300px;
          text-align: center;
        }

        .team-member img {
          border-radius: 50%;
          width: 100px;
          height: 100px;
          object-fit: cover;
          margin-bottom: 10px;
        }

        .team-member h3 {
          font-size: 20px;
          color: #333;
          margin: 10px 0;
        }

        .team-member p {
          font-size: 16px;
          color: #777;
        }

        .social-links a {
          color: #333;
          font-size: 18px;
          margin: 0 10px;
          transition: color 0.3s ease;
        }

        .social-links a:hover {
          color: #007bff;
        }

        .cta {
          text-align: center;
          margin-top: 40px;
        }

        .cta h2 {
          font-size: 28px;
          color: #007bff;
          margin-bottom: 10px;
        }

        .cta p {
          font-size: 18px;
          margin-bottom: 20px;
          color: #555;
        }

        .cta-button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #007bff;
          color: #fff;
          border-radius: 5px;
          text-decoration: none;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }

        .cta-button:hover {
          background-color: #0056b3;
        }
      `}</style>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
