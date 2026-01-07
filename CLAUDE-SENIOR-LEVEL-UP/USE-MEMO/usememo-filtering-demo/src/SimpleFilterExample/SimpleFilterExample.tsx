import { useMemo, useState } from 'react';
import { products } from './SimpleFilterExample.data';

const SimpleFilterExample = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [count, setCount] = useState(0);

  // БЕЗ useMemo - това ще се изпълнява при ВСЯКО re-render (дори при промяна на count)
  // const filteredProducts = products.filter((product) => {
  //   console.log(`INSIDE filteredProducts`); // logs 1000 times huge perfomanse issue
  //   return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  // С useMemo - филтрацията се изпълнява САМО когато searchTerm се промени
  const filteredProducts = useMemo(() => {
    console.log('🔄 Филтрирам продуктите...');

    return products.filter((product) => {
      console.log(`INSIDE filteredProducts`);
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [searchTerm]); // Dependency array - преизчислява само при промяна на searchTerm

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-10 text-gray-200 font-roboto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-blue-300 mb-8 text-2xl font-semibold">
          🔍 Прост Пример: useMemo за Филтриране
        </h1>

        {/* Информационен панел */}
        <div className="bg-gray-700 p-5 rounded-lg mb-8 border-l-4 border-blue-300">
          <p className="mb-2 text-gray-400">
            📊 Общо продукти:{' '}
            <strong className="text-blue-300">{products.length}</strong>
          </p>
          <p className="text-gray-400">
            ✅ Филтрирани:{' '}
            <strong className="text-green-400">
              {filteredProducts.length}
            </strong>
          </p>
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Търси продукт..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 text-base bg-gray-800 border-2 border-gray-600 rounded-lg text-white mb-5 outline-none focus:border-blue-300 transition-colors"
        />

        {/* Counter бутон за демонстрация */}
        <div className="mb-8">
          <button
            onClick={() => setCount(count + 1)}
            className="px-6 py-3 text-base bg-purple-600 text-white border-none rounded-lg cursor-pointer transition-all duration-300 shadow-lg hover:bg-purple-500"
          >
            🔄 Re-render (Count: {count})
          </button>
          <p className="mt-3 text-sm text-gray-400">
            💡 Натисни бутона и виж console - филтрацията НЕ се случва!
          </p>
        </div>

        {/* Резултати */}
        <div className="bg-gray-800 rounded-lg max-h-96 overflow-y-auto p-3">
          {filteredProducts.slice(0, 50).map((product) => (
            <div
              key={product.id}
              className="p-3 bg-gray-700 mb-2 rounded-lg flex justify-between items-center"
            >
              <span className="text-gray-200">{product.name}</span>
              <span className="px-3 py-1 bg-gray-600 rounded-full text-xs text-white">
                {product.category}
              </span>
            </div>
          ))}
          {filteredProducts.length > 50 && (
            <p className="text-center text-gray-400 py-3">
              ... и още {filteredProducts.length - 50} продукта
            </p>
          )}
        </div>

        {/* Key Takeaways */}
        <div className="mt-8 bg-blue-900 p-5 rounded-lg border-l-4 border-indigo-400">
          <h3 className="text-blue-300 mt-0 font-semibold">🎯 Key Points:</h3>
          <ul className="text-gray-300 leading-loose list-disc pl-5">
            <li>
              Филтрацията се изпълнява САМО при промяна на{' '}
              <code className="bg-gray-800 px-2 py-1 rounded">searchTerm</code>
            </li>
            <li>
              При натискане на Re-render бутона, филтрацията НЕ се случва отново
            </li>
            <li>Виж browser console - ще видиш кога се извиква филтрацията</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SimpleFilterExample;
