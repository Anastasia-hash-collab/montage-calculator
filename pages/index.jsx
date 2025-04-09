import React, { useState } from 'react';

export default function Home() {
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);
  const [x3, setX3] = useState(0);
  const [result, setResult] = useState(null);

  const calculateTime = () => {
    const b0 = 14.5;
    const b1 = -1.5;
    const b2 = -2.0;
    const b3 = -3.0;
    const y = b0 + b1 * x1 + b2 * x2 + b3 * x3;
    setResult(y.toFixed(2));
  };

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Шапка с логотипом */}
      <header style={{ display: 'flex', alignItems: 'center', padding: '10px 20px' }}>
        <img src="/логотип.png" alt="Логотип МонАрх" style={{ height: '50px' }} />
      </header>

      {/* Основной контент */}
     <main style={{ padding: '20px' }}>
        <h1>Добро пожаловать на калькулятор монтажа!</h1>
        <p>Калькулятор времени монтажа. Выберите по каждому пункту (фактору) значения -1 или 1:</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
          <label>
            X₁ — способ строповки (1 - если строповка осуществляется с применением строповочной подмости или -1 - если строповка осуществляется с вышки-туры):
            <input
              type="number"
              value={x1}
              onChange={(e) => setX1(parseFloat(e.target.value))}
              style={{ marginLeft: '10px', width: '100%' }}
            />
          </label>
          <label>
            X₂ — метод наводки в проектное положение (1 - если монтаж модуля осуществляется с применением траверсы или -1 - если монтаж осуществляется с помощью строп СТПК):
            <input
              type="number"
              value={x2}
              onChange={(e) => setX2(parseFloat(e.target.value))}
              style={{ marginLeft: '10px', width: '100%' }}
            />
          </label>
          <label>
            X₃ — квалификация бригады (1 - если монтаж осуществляют опытные монтажники КГМ (средний опыт от 2 лет) или -1 - если монтаж осуществляют неопытные монтажники ЖБИ (средний опыт менее 2 лет)):
            <input
              type="number"
              value={x3}
              onChange={(e) => setX3(parseFloat(e.target.value))}
              style={{ marginLeft: '10px', width: '100%' }}
            />
          </label>
          <button onClick={calculateTime} style={{ marginTop: '10px', padding: '10px' }}>
            Рассчитать
          </button>
          {result !== null && (
            <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
              ⏱️ Прогноз времени монтажа: {result} минут
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
