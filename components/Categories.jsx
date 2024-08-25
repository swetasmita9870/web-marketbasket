import { getCategories } from '@/pages/api';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Categories = (props) => {
  const router = useRouter();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getCategoriesData();
  }, []);

  const getCategoriesData = async () => {
    let number = props.fromHome ? 8 : 30;
    try {
      const res = await getCategories(number);
      setData(res?.categories || []);
    } catch (error) {
      console.error("Error fetching about card data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-3">
      <div className="categories-header d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-center mb-0"> {props.fromHome ? 'Top Categories' :'All Categories'}</h2>
        {props.fromHome ? (
          <Link href="/categories">
            <a>View All</a>
          </Link>
        ) : null}
      </div>
      <div className="row justify-content-center">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="col-md-3 col-sm-6 d-flex justify-content-center mb-4">
                <div className="category-card shimmer-effect">
                  {/* Shimmer placeholder */}
                </div>
              </div>
            ))
          : data.map((item, index) => (
              <div key={index} className="col-md-3 col-sm-6 col-6 d-flex justify-content-center mb-4">
                <div onClick={() => router.push(`category/${item.slug}`)} className="category-card text-center p-3">
                  <img
                    src={item?.icon?.url}
                    alt={item?.name}
                    className="img-fluid mb-3"
                  />
                  <p className="font-weight-bold">{item?.name}</p>
                </div>
              </div>
            ))}
      </div>
      <style jsx>{`
        .categories-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .category-card {
          width: 100%;
          max-width: 200px;
          height: 220px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px solid #ddd;
          border-radius: 8px;
          transition: all 0.3s ease;
          background-color: #fff;
        }

        .category-card img {
          max-height: 120px;
          object-fit: contain;
        }

        .category-card:hover {
          background-color: #f8f9fa;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
          transform: translateY(-5px);
          color: orange;
          cursor: pointer;
        }

        .category-card p {
          margin-top: auto;
          font-weight: 600;
        }

        /* Shimmer Effect Styles */
        .shimmer-effect {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }

        /* View All Button Styles */
        .view-all-btn {
          display: inline-block;
          padding: 10px 20px;
          background-color: #007bff;
          color: #fff;
          border-radius: 5px;
          text-decoration: none;
          font-weight: 600;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }

        .view-all-btn:hover {
          background-color: #0056b3;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 767px) {
          .category-card {
            max-width: 150px;
            height: 180px;
          }

          .category-card img {
            max-height: 100px;
          }
        }
      `}</style>
    </div>
  );
};

export default Categories;
