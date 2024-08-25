import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Header />
      <div className="privacy-policy-page">
        <div className="container">
          <header className="headerp">
            <h1>Privacy Policy</h1>
            <p>Last updated: August 2024</p>
          </header>

          <section className="section">
            <h2>Introduction</h2>
            <p>
              We value your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, www.example.com. Please read this privacy policy carefully.
            </p>
          </section>

          <section className="section">
            <h2>Information We Collect</h2>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, etc.</li>
              <li><strong>Payment Information:</strong> Credit card details, billing address.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and other data collected through cookies.</li>
            </ul>
          </section>

          <section className="section">
            <h2>How We Use Your Information</h2>
            <p>
              We use your information to:
              <ul>
                <li>Process transactions and manage orders.</li>
                <li>Improve our website and services.</li>
                <li>Send promotional materials and updates with your consent.</li>
                <li>Respond to customer service requests.</li>
              </ul>
            </p>
          </section>

          <section className="section">
            <h2>Disclosure of Your Information</h2>
            <p>
              We may disclose your information to:
              <ul>
                <li>Service providers who perform services on our behalf.</li>
                <li>Legal authorities if required by law or to protect our rights.</li>
                <li>Third parties in connection with a business transfer, such as a merger or acquisition.</li>
              </ul>
            </p>
          </section>

          <section className="section">
            <h2>Security of Your Information</h2>
            <p>
              We implement reasonable security measures to protect your information from unauthorized access, use, or disclosure. However, no data transmission over the internet or electronic storage is completely secure.
            </p>
          </section>

          <section className="section">
            <h2>Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have the right to access, correct, or delete your personal information. You can also object to certain processing of your data or withdraw your consent.
            </p>
          </section>

          <section className="section">
            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to track user activity and improve our website. You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section className="section">
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and your continued use of our website constitutes acceptance of those changes.
            </p>
          </section>

          <section className="section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <ul>
                <li><strong>Email:</strong> support@example.com</li>
                <li><strong>Phone:</strong> +123 456 7890</li>
              </ul>
            </p>
          </section>
        </div>

        <style jsx>{`
        .privacy-policy-page {
          padding: 30px 20px;
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

        .headerp {
          text-align: center;
          margin-bottom: 40px;
        }

        .headerp h1 {
          font-size: 36px;
          margin-bottom: 10px;
          color: #333;
        }

        .header p {
          font-size: 18px;
          color: #666;
        }

        .section {
          margin-bottom: 40px;
        }

        .section h2 {
          font-size: 28px;
          color: #007bff;
          margin-bottom: 20px;
        }

        .section p, .section ul {
          font-size: 16px;
          color: #333;
          line-height: 1.6;
        }

        .section ul {
          list-style-type: disc;
          margin-left: 20px;
        }

        .section li {
          margin-bottom: 10px;
        }

        @media (max-width: 768px) {
          .container {
            padding: 20px;
          }

          .headerp h1 {
            font-size: 28px;
          }

          .section h2 {
            font-size: 24px;
          }
        }
      `}</style>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
