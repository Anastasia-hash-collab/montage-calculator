
'use client'
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Калькулятор времени монтажа</h1>
      <Card className="w-full max-w-xl shadow-lg">
        <CardContent className="grid gap-4 p-6">
          <label>
            <span className="block mb-1 font-medium">X₁ — Способ строповки (от -1 до +1)</span>
            <Input type="number" value={x1} onChange={(e) => setX1(parseFloat(e.target.value))} step="0.1" />
          </label>
          <label>
            <span className="block mb-1 font-medium">X₂ — Метод наводки (от -1 до +1)</span>
            <Input type="number" value={x2} onChange={(e) => setX2(parseFloat(e.target.value))} step="0.1" />
          </label>
          <label>
            <span className="block mb-1 font-medium">X₃ — Квалификация бригады (от -1 до +1)</span>
            <Input type="number" value={x3} onChange={(e) => setX3(parseFloat(e.target.value))} step="0.1" />
          </label>
          <Button onClick={calculateTime} className="mt-4">Рассчитать</Button>
          {result !== null && (
            <div className="text-xl font-semibold text-center mt-4">
              ⏱️ Прогноз времени монтажа: {result} мин
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
