'use client'; // Indica que este es un componente del lado del cliente

import { useEffect, useState } from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

interface DataPoint {
  date: string;
  value: number;
}

interface StatsChartProps {
  data: DataPoint[];
}

export function StatsChart({ data }: StatsChartProps) {
  const [chartData, setChartData] = useState<DataPoint[]>([]);

  useEffect(() => {
    // Al recibir nuevos datos, actualizamos el gráfico.
    // Puedes agregar un callback aquí para manejar otros efectos secundarios si es necesario.
    if (data && data.length > 0) {
      setChartData(data);
    }
  }, [data]); // El gráfico se actualizará siempre que cambien los datos

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">Value</span>
                        <span className="font-bold text-muted-foreground">{payload[0].value}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">Date</span>
                        <span className="font-bold">{payload[0].payload.date}</span>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Line type="monotone" dataKey="value" stroke="#ff6b00" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
