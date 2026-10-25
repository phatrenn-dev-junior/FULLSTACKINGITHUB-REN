import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  // UI ពេលកំពុង Loading
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-lg font-medium text-gray-600">⏳ កំពុងទាញព័ត៌មានលម្អិត...</span>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
        <h3 className="text-xl font-bold text-red-500">✕ រកមិនឃើញផលិតផលនេះទេ!</h3>
        <Link to="/" className="mt-4 text-blue-600 hover:underline">ត្រឡប់ទៅទំព័រដើមវិញ</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* ប៊ូតុងត្រឡប់ក្រោយ បែប Minimalist */}
        <Link 
          to="/" 
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors mb-6 group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform mr-1">⬅</span> 
          ត្រឡប់ទៅទំព័រដើម
        </Link>
        
        {/* ប្រអប់ព័ត៌មានលម្អិត (Product Card Container) */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* ផ្នែកខាងឆ្វេង៖ រូបភាពផលិតផល ធំច្បាស់ */}
            <div className="w-full flex justify-center items-center bg-white p-6 rounded-2xl border border-gray-50">
              <img 
                src={product.image} 
                alt={product.title} 
                className="max-h-80 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* ផ្នែកខាងស្តាំ៖ ព័ត៌មានអត្ថបទ និងប៊ូតុងកម្ម៉ង់ */}
            <div className="flex flex-col justify-between h-full">
              <div>
                {/* ប្រភេទផលិតផល (Category Badge) */}
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 capitalize mb-4 tracking-wide">
                  🏷️ {product.category}
                </span>

                {/* ចំណងជើងផលិតផល */}
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl leading-snug">
                  {product.title}
                </h2>

                {/* តម្លៃផលិតផល */}
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-black text-gray-900">${product.price}</span>
                  <span className="ml-2 text-sm text-gray-400 font-medium"> (រួមបញ្ចូលពន្ធរួចរាល់)</span>
                </div>

                {/* បន្ទាត់ខណ្ឌកាត់សាមញ្ញ */}
                <div className="my-6 border-t border-gray-100"></div>

                {/* ការពិពណ៌នាផលិតផល */}
                <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">ព័ត៌មានលម្អិត៖</h4>
                <p className="text-base text-gray-600 leading-relaxed text-justify">
                  {product.description}
                </p>
              </div>

              {/* ផ្នែកប៊ូតុងសកម្មភាព (Call to Action Buttons) */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 active:bg-gray-100 shadow-sm transition-all">
                  ❤️ ថែមចូលយករង្វាន់
                </button>
                <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow-md transition-all font-semibold">
                  🛒 ថែមចូលកន្ត្រកអីវ៉ាន់
                </button>
              </div>
              
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductDetail;
