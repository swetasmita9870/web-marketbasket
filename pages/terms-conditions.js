import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const TermsConditionsPage = () => {
  return (
    <>
      <Header />
      <div className="terms-conditions-page">
        <div className="container">
          <header className="headert">
            <h1>Terms and Conditions</h1>
            <p>Last updated: August 2024</p>
          </header>

          <section className="section">
            <h2>Introduction</h2>
            <p>
              Welcome to our website. These terms and conditions outline the rules and regulations for the use of Our Company’s Website, located at www.example.com.
            </p>
          </section>

          <section className="section">
            <h2>Intellectual Property Rights</h2>
            <p>
              Other than the content you own, under these Terms, Our Company and/or its licensors own all the intellectual property rights and materials contained in this Website.
            </p>
          </section>

          <section className="section">
            <h2>Restrictions</h2>
            <ul>
              <li>You are specifically restricted from all of the following: publishing any Website material in any other media; selling, sublicensing, and/or otherwise commercializing any Website material.</li>
              <li>Using this Website in any way that is or may be damaging to this Website.</li>
              <li>Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this Website.</li>
            </ul>
          </section>

          <section className="section">
            <h2>Your Content</h2>
            <p>
              In these Website Standard Terms and Conditions, "Your Content" shall mean any audio, video text, images, or other material you choose to display on this Website. By displaying Your Content, you grant Our Company a non-exclusive, worldwide, irrevocable, royalty-free license to use, reproduce, adapt, publish, and distribute it in any and all media.
            </p>
          </section>

          <section className="section">
            <h2>No warranties</h2>
            <p>
              This Website is provided “as is,” with all faults, and Our Company expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website.
            </p>
          </section>

          <section className="section">
            <h2>Limitation of liability</h2>
            <p>
              In no event shall Our Company, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.
            </p>
          </section>

          <section className="section">
            <h2>Indemnification</h2>
            <p>
              You hereby indemnify to the fullest extent Our Company from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.
            </p>
          </section>

          <section className="section">
            <h2>Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
            </p>
          </section>

          <section className="section">
            <h2>Variation of Terms</h2>
            <p>
              Our Company is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review such Terms on a regular basis.
            </p>
          </section>

          <section className="section">
            <h2>Governing Law & Jurisdiction</h2>
            <p>
              These Terms will be governed by and interpreted in accordance with the laws of the State/Country, and you submit to the non-exclusive jurisdiction of the state and federal courts located in that State/Country for the resolution of any disputes.
            </p>
          </section>
        </div>

        <style jsx>{`
        .terms-conditions-page {
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

        .headert {
          text-align: center;
          margin-bottom: 40px;
        }

        .headert h1 {
          font-size: 36px;
          margin-bottom: 10px;
          color: #333;
        }

        .headert p {
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

        .section p {
          font-size: 16px;
          color: #333;
          line-height: 1.6;
        }

        .section ul {
          list-style-type: disc;
          margin-left: 20px;
        }

        .section li {
          font-size: 16px;
          color: #333;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .container {
            padding: 20px;
          }

          .headert h1 {
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

export default TermsConditionsPage;
