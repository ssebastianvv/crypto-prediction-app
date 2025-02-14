'use client'; // Indica que este es un componente del lado del cliente

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { PriceData } from '../types'; // Tipo compartido

interface CryptoChartProps {
  data: PriceData[];
}

const CryptoChart = ({ data }: CryptoChartProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null); // Referencia para la instancia del gráfico

  useEffect(() => {
    if (chartRef.current && data.length > 0) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        // Destruye el gráfico anterior si existe
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        // Crea una nueva instancia del gráfico y la almacena en la referencia
        chartInstanceRef.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: data.map((d) => new Date(d.timestamp).toLocaleTimeString()),
            datasets: [
              {
                label: 'Precio',
                data: data.map((d) => d.price),
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: { position: 'top' },
              title: { display: true, text: 'Historial de Precios' },
            },
          },
        });
      }
    }

    // Limpia el gráfico cuando el componente se desmonta
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default CryptoChart;