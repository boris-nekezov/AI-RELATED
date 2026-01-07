import React, { useState } from 'react';
import './App.css';

const ChildWihoutMemo = ({ name }: { name: string }) => {
  console.log('🔴 ChildWithoutMemo rendered');

  return (
    <div>
      <h3 className="font-bold text-red-800">БЕЗ React.memo</h3>
      <p>Здравей, {name}!</p>
    </div>
  );
};

const ChildWithMemo = React.memo(({ name }: { name: string }) => {
  console.log('🟢 ChildWithMemo rendered');

  return (
    <div>
      <h3 className="font-bold text-green-800">СЪС React.memo</h3>
      <p>Здравей, {name}!</p>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Иван');

  console.log(`App component rendered!`);

  return (
    <div className="container">
      <h1>Пример 1: BASIC - Прост Counter с Child Component</h1>

      <div>
        <p>
          <strong>Counter:</strong> {count}
        </p>
        <button onClick={() => setCount(count + 1)}>Увеличи Counter</button>
        <button onClick={() => setName(name === 'Борко' ? 'Борис' : 'Борко')}>
          Смени Име
        </button>
      </div>

      <div>
        <p>
          ℹ️ <strong>Отвори Console</strong> и натисни "Увеличи Counter":
          <br />
          - Червеният компонент ще се render-ва ВИНАГИ
          <br />- Зеленият компонент ще се render-ва САМО когато името се
          промени
        </p>
      </div>

      <ChildWihoutMemo name={name} />
      <ChildWithMemo name={name} />
    </div>
  );
}

export default App;
