import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useState } from 'react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I place an order?',
      answer: 'To place an order, browse our products, add items to your cart, and proceed to checkout. Follow the instructions to complete your order.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including credit/debit cards, PayPal, and other secure payment options.'
    },
    {
      question: 'Can I track my order?',
      answer: 'Yes, once your order is shipped, you will receive a tracking number via email to monitor the delivery status of your order.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy. You can return items within 30 days of receipt for a full refund or exchange, subject to our return conditions.'
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can contact our customer support team via email at support@example.com or through our contact form on the website.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping to many countries. Shipping fees and delivery times vary based on the destination.'
    },
    {
      question: 'Can I change or cancel my order?',
      answer: 'Orders can be changed or canceled within 24 hours of placing them. Please contact our support team as soon as possible if you need to make any changes.'
    },
    {
      question: 'What should I do if I receive a damaged or incorrect item?',
      answer: 'If you receive a damaged or incorrect item, please contact our customer support team immediately with your order number and details about the issue. We will assist you in resolving the problem.'
    },
    {
      question: 'How do I use a discount code?',
      answer: 'To use a discount code, enter it at checkout in the provided field. The discount will be applied to your order total before you complete the purchase.'
    },
    {
      question: 'Are my personal details secure?',
      answer: 'Yes, we take your privacy and security seriously. Our website uses secure encryption to protect your personal and payment information.'
    },
    {
      question: 'How can I update my account information?',
      answer: 'You can update your account information by logging into your account and navigating to the profile settings. From there, you can edit your personal details and save the changes.'
    },
    {
      question: 'What is your policy on out-of-stock items?',
      answer: 'If an item is out of stock, we will notify you via email and provide options for either waiting for the item to be restocked or choosing an alternative product.'
    },
    {
      question: 'Do you offer gift cards?',
      answer: 'Yes, we offer gift cards that can be purchased online and used towards any purchase on our website. Check our gift card section for more details.'
    },
    {
      question: 'Can I return a sale item?',
      answer: 'Sale items can be returned only if they are in accordance with our return policy. Please review our return policy for specific details regarding sale items.'
    },
    {
      question: 'How can I track my refund?',
      answer: 'Once your return is processed, you will receive an email confirmation with details about your refund. Refunds are typically processed within 5-7 business days.'
    }
  ];


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <div className="faq-container">
        <header className="headerfaq">
          <h1>Frequently Asked Questions</h1>
        </header>

        <div className="accordion">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item">
              <div
                className="accordion-header"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                <span className={`dropdown-icon ${openIndex === index ? 'open' : ''}`}>▼</span>
              </div>
              <div className={`accordion-body ${openIndex === index ? 'active' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
        .faq-container {
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
          border-radius: 8px;
        }

        .headerfaq {
          text-align: center;
          margin-bottom: 30px;
        }

        .headerfaq h1 {
          font-size: 36px;
          color: #333;
          margin: 0;
          font-weight: 600;
        }

        .accordion {
          display: flex;
          flex-direction: column;
        }

        .accordion-item {
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 10px;
          transition: box-shadow 0.3s ease;
        }

        .accordion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px;
          cursor: pointer;
          background-color: #fff;
          transition: background-color 0.3s ease;
        }

        .accordion-header:hover {
          background-color: #f8f9fa;
        }

        .question-label {
          margin-right: 10px;
          color: #007bff;
          font-weight: 600;
        }

        .accordion-header h3 {
          margin: 0;
          font-size: 18px;
          color: #333;
        }

        .dropdown-icon {
          font-size: 16px;
          transition: transform 0.3s ease;
        }

        .dropdown-icon.open {
          transform: rotate(180deg);
        }

        .accordion-body {
          padding: 15px;
          background-color: #fff;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
          display:none;
        }

        .accordion-body.active {
          max-height: 200px;
          padding: 15px;
          display:flex;
        }

        .accordion-body p {
          margin: 0;
          font-size: 16px;
          color: #555;
        }

        @media (max-width: 767px) {
          .headerfaq h1 {
            font-size: 28px;
          }

          .accordion-header h3 {
            font-size: 16px;
          }

          .accordion-body p {
            font-size: 14px;
          }
        }
      `}</style>
      </div>
      <Footer />
    </>
  );
};

export default FAQPage;
