import React, { useState } from "react";

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
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Калькулятор времени монтажа</h1>
      <div style={{ marginTop: "1rem" }}>
        <label>X₁ — Способ строповки: <input type="number" value={x1} onChange={(e) => setX1(parseFloat(e.target.value))} /></label><br />
        <label>X₂ — Метод наводки: <input type="number" value={x2} onChange={(e) => setX2(parseFloat(e.target.value))} /></label><br />
        <label>X₃ — Квалификация бригады: <input type="number" value={x3} onChange={(e) => setX3(parseFloat(e.target.value))} /></label><br />
        <button onClick={calculateTime} style={{ marginTop: "1rem" }}>Рассчитать</button>
        {result !== null && <div style={{ marginTop: "1rem", fontWeight: "bold" }}>⏱️ Время монтажа: {result} мин</div>}
      </div>
    </div>
  );
}