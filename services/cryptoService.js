import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Función para guardar datos de precios
export const savePriceData = async (symbol, priceData) => {
  await prisma.priceHistory.createMany({
    data: priceData.map((data) => ({
      symbol,
      price: data.price,
      timestamp: data.timestamp,
    })),
  });
};

// Función para obtener datos históricos
export const getPriceData = async (symbol) => {
  return await prisma.priceHistory.findMany({
    where: { symbol },
    orderBy: { timestamp: 'asc' },
  });
};