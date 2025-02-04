import { PrismaClient } from '@prisma/client';
import { PriceData } from '../types'; // Tipo compartido

const prisma = new PrismaClient();

export const savePriceData = async (symbol: string, priceData: Omit<PriceData, 'id'>[]) => {
  await prisma.priceHistory.createMany({
    data: priceData.map((data) => ({
      symbol,
      price: data.price,
      timestamp: new Date(data.timestamp), // Convierte string a Date para Prisma
    })),
  });
};

export const getPriceData = async (symbol: string): Promise<PriceData[]> => {
  const data = await prisma.priceHistory.findMany({
    where: { symbol },
    orderBy: { timestamp: 'asc' },
  });

  // Convierte Date a string ISO
  return data.map((item) => ({
    ...item,
    timestamp: item.timestamp.toISOString(),
  }));
};