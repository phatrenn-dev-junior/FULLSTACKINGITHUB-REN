import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  // UI ពេលកំពុង Loading បែបទំនើប
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-lg font-medium text-gray-600">⏳ កំពុងទាញទិន្នន័យ...</span>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      {/* Header section */}
      <div className="max-w-7xl mx-auto mb-10 text-center sm:text-left">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          🛍️ ផលិតផលពេញនិយម
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          ជ្រើសរើសផលិតផលដែលមានគុណភាពខ្ពស់ និងតម្លៃសមរម្យបំផុតសម្រាប់អ្នក។
        </p>
      </div>
      
      {/* Product Grid - Responsive ខ្លាំង (កុំព្យូទ័រឡើង ៣ជួរ, ថេប្លេត ២ជួរ, ទូរស័ព្ទ ១ជួរ) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="group relative bg-white border border-gray-200 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* រូបភាពផលិតផល មាន Hover Effect ព្រង្រីកធំបន្តិច */}
            <div className="w-full min-h-60 bg-white aspect-w-1 aspect-h-1 rounded-xl overflow-hidden group-hover:opacity-90 flex justify-center items-center p-4">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-40 h-40 object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* ព័ត៌មានលម្អិតផលិតផល */}
            <div className="mt-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 h-10 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h4>
                <p className="mt-1 text-xs text-gray-400 capitalize bg-gray-100 px-2 py-0.5 rounded inline-block">
                  {product.category}
                </p>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-black text-gray-900">${product.price}</span>
                
                {/* ប៊ូតុងមើលលម្អិត បែប Modern Button */}
                <Link 
                  to={`/product/${product.id}`} 
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow transition-all"
                >
                  មើលលម្អិត
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
