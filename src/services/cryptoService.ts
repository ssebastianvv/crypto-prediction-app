import { PrismaClient } from '@prisma/client';
import { getBinancePrice } from './binanceService';

const prisma = new PrismaClient();

// Define a type for the price data returned by Binance
interface PriceData {
  symbol: string;
  price: string;
}
export const savePriceData = async (symbol: string) => {
  try {
    console.log(`Obteniendo precio para ${symbol}...`);
    
    let binancePriceData: PriceData | undefined;
    try {
      binancePriceData = await getBinancePrice(symbol);
    } catch (binanceError) {
      console.error('Error obteniendo precio de Binance:', binanceError);
      return;
    }

    if (binancePriceData && binancePriceData.price) {
      console.log(`Precio obtenido: ${binancePriceData.price}`);

      const newPriceHistory = await prisma.priceHistory.create({
        data: {
          symbol: binancePriceData.symbol,
          price: parseFloat(binancePriceData.price),
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
