import React from 'react';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Шапка с логотипом */}
      <header style={{ display: 'flex', alignItems: 'center', padding: '10px 20px' }}>
        <img src="/логотип.png" alt="Логотип МонАрх" style={{ height: '100px' }} />
      </header>

      {/* Основной контент */}
      <main style={{ padding: '10px' }}>
        <h1>Добро пожаловать на калькулятор монтажа!</h1>
        <p>Здесь будет ваш основной функционал...</p>
      </main>
    </div>
  );
}
