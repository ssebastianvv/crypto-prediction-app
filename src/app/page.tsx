'use client';

import { useState, useEffect } from 'react';
import CryptoChart from './components/chart';
import { getBinancePrice } from '../../src/services/binanceService';
import { PriceData } from '../types';

export default function Home() {
  const [symbol, setSymbol] = useState('BTCUSDT');
  const [priceData, setPriceData] = useState<PriceData[]>([]);

  // Función para obtener el precio actual de Binance
  const fetchBinancePrice = async () => {
    try {
      const priceInfo = await getBinancePrice(symbol);
      const newPriceData = {
        id: Date.now(), // Usamos el timestamp como ID
        symbol: priceInfo.symbol,
        price: parseFloat(priceInfo.price), // Convertimos el precio a número
        timestamp: new Date().toISOString(), // Fecha actual en formato ISO
      };

      // Actualizamos el estado con el nuevo dato
      setPriceData((prevData) => [...prevData, newPriceData]);
    } catch (error) {
      console.error('Error fetching Binance price:', error);
    }
  };

  // Usamos useEffect para obtener el precio cada 5 segundos
  useEffect(() => {
    const interval = setInterval(fetchBinancePrice, 5000); // 5000 ms = 5 segundos
    return () => clearInterval(interval); // Limpiamos el intervalo al desmontar el componente
  }, [symbol]);

  // Manejar el cambio de símbolo
  const handleSymbolChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSymbol(event.target.value);
  };

  return (
    <div>
      <h1>Gráfica de Criptomonedas</h1>
      <select value={symbol} onChange={handleSymbolChange}>
        <option value="BTCUSDT">BTC/USDT</option>
        <option value="ETHUSDT">ETH/USDT</option>
        <option value="ADAUSDT">ADA/USDT</option>
      </select>
      <CryptoChart data={priceData} />
    </div>
  );
}