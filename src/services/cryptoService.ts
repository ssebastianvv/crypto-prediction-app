import { PrismaClient } from '@prisma/client';
import { getBinancePrice } from './binanceService';

const prisma = new PrismaClient();
export const savePriceData = async (symbol: string) => {
  try {
    console.log(`Obteniendo precio para ${symbol}...`);
    let priceData;
    try {
      priceData = await getBinancePrice(symbol);
    } catch (binanceError) {
      console.error('Error obteniendo precio de Binance:', binanceError);
      return;
    }

    if (priceData && priceData.price) {
      console.log(`Precio obtenido: ${priceData.price}`);

      const newPriceHistory = await prisma.priceHistory.create({
        data: {
          symbol: priceData.symbol,
          price: parseFloat(priceData.price),
          timestamp: new Date(),
        },
      });

      console.log(`Precio de ${symbol} guardado exitosamente: ${newPriceHistory.price}`);
    } else {
      console.log(`No se obtuvo un precio para ${symbol}.`);
    }
  } catch (error) {
    console.error('Error guardando los datos del precio:', error);
  }
};
