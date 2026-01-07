import React, { useState } from 'react';
import './App.css';

// Компонент БЕЗ React.memo - ще се render-ва ВИНАГИ
const ChildWithoutMemo = ({ name }: { name: string }) => {
  console.log('🔴 ChildWithoutMemo rendered');
  return (
    <div className="p-4 bg-red-100 rounded mb-4">
      <h3 className="font-bold text-red-800">БЕЗ React.memo</h3>
      <p>Здравей, {name}!</p>
    </div>
  );
};

// Компонент СЪС React.memo - ще се render-ва САМО ако name се промени
const ChildWithMemo = React.memo(({ name }: { name: string }) => {
  console.log('🟢 ChildWithMemo rendered');
  return (
    <div className="p-4 bg-green-100 rounded">
      <h3 className="font-bold text-green-800">СЪС React.memo</h3>
      <p>Здравей, {name}!</p>
    </div>
  );
});

function BasicMemoExample() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState('Иван');

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">React.memo - Basic Example</h1>

      <div className="mb-6 p-4 bg-blue-50 rounded">
        <p className="mb-2">
          <strong>Counter:</strong> {count}
        </p>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
        >
          Увеличи Counter
        </button>
        <button
          onClick={() => setName(name === 'Иван' ? 'Мария' : 'Иван')}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Смени Име
        </button>
      </div>

      <div className="mb-4 p-4 bg-yellow-50 rounded">
        <p className="text-sm">
          ℹ️ <strong>Отвори Console</strong> и натисни "Увеличи Counter":
          <br />
          - Червеният компонент ще се render-ва ВИНАГИ
          <br />- Зеленият компонент ще се render-ва САМО когато името се
          промени
        </p>
      </div>

      <ChildWithoutMemo name={name} />
      <ChildWithMemo name={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <BasicMemoExample />
    </div>
  );
}

export default App;
