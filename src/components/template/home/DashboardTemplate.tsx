
'use client';

import { useEffect, useState, useCallback, SetStateAction } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Button } from "../../atoms/home/Button";
import { MetricsCard } from "../../metrics-card";
import { VaultTable } from "../../organisms/home/VaultTable";
import { Card } from "../../ui/card";
import { ChevronDown } from "lucide-react";
import { getBinancePrice } from '@/services/binanceService';
import { PriceData } from '@/types/index';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export function DashboardTemplate() {
  const [symbol, setSymbol] = useState('BTCUSDT');
  const [priceData, setPriceData] = useState<PriceData[]>([]);
  const [investmentRecommendation, setInvestmentRecommendation] = useState<string | null>(null); // Para la recomendación
  const [updateCount, setUpdateCount] = useState(0); // Contador de actualizaciones

  // Llamada al servicio de Binance para obtener el precio
  const fetchBinancePrice = useCallback(async () => {
    try {
      const priceInfo = await getBinancePrice(symbol);
      const newPriceData = {
        id: Date.now(),
        symbol: priceInfo.symbol,
        price: parseFloat(priceInfo.price),
        timestamp: new Date().toISOString(),
      };
      setPriceData((prevData) => [...prevData, newPriceData]);

      setUpdateCount((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount % 10 === 0) {
          const marketData = priceData.map((data) => `Precio: ${data.price}, Timestamp: ${data.timestamp}`).join("\n");
          
          fetch("/api/openAi", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt: marketData }),
          })
            .then((response) => response.json())
            .then((data) => {
              setInvestmentRecommendation(data.reply); // Guardamos la recomendación
            })
            .catch((error) => {
              console.error('Error fetching market analysis:', error);
              setInvestmentRecommendation('Error al obtener recomendación.');
            });
        }
        return newCount;
      });

    } catch (error) {
      console.error('Error fetching Binance price:', error);
    }
  }, [symbol, priceData]);

  useEffect(() => {
    const interval = setInterval(fetchBinancePrice, 5000);
    return () => clearInterval(interval);
  }, [fetchBinancePrice]);

  const handleSymbolChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSymbol(event.target.value);
  };

  const chartData = priceData.map((data) => ({
    date: new Date(data.timestamp).toLocaleTimeString(),
    value: data.price
  }));

  const data = {
    labels: chartData.map(item => item.date),
    datasets: [
      {
        label: 'Price',
        data: chartData.map(item => item.value),
        borderColor: '#ff6b00',
        backgroundColor: 'rgba(255, 107, 0, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price',
        },
      },
    },
  };

  return (
    <main className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Overview</h1>
          <div className="text-sm text-muted-foreground">Aug 13, 2023 - Aug 18, 2023</div>
        </div>
        <Button variant="outline" className="gap-2">
          Ethereum Network
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      <select onChange={handleSymbolChange} value={symbol}>
        <option value="BTCUSDT">BTC/USDT</option>
        <option value="ETHUSDT">ETH/USDT</option>
      </select>

      <div className="grid gap-4 md:grid-cols-3">
        <MetricsCard
          title="Your Balance"
          value="$74,892"
          change={{ value: "$1,340", percentage: "-2.1%", isPositive: false }}
        />
        <MetricsCard
          title="Your Deposits"
          value="$54,892"
          change={{ value: "$1,340", percentage: "+13.2%", isPositive: true }}
        />
        <MetricsCard
          title="Accrued Yield"
          value="$20,892"
          change={{ value: "$1,340", percentage: "+1.2%", isPositive: true }}
        />
      </div>

      <Card className="mt-6 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">General Statistics</h2>
          <div className="flex gap-2">
            <Button size="sm" variant="ghost">Today</Button>
            <Button size="sm" variant="ghost">Last week</Button>
            <Button size="sm" variant="ghost">Last month</Button>
            <Button size="sm" variant="ghost">Last 6 month</Button>
            <Button size="sm" variant="ghost">Year</Button>
          </div>
        </div>
        <div className="relative w-full h-[500px]">
          <Line data={data} options={options} />
        </div>
      </Card>

      <div className="mt-6">
        <VaultTable />
      </div>

      {investmentRecommendation && (
        <div className="mt-6 text-lg font-semibold text-red-500">
          {investmentRecommendation}
        </div>
      )}
    </main>
  );
}
