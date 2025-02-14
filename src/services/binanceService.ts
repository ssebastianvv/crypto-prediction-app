import axios from 'axios';

interface BinancePriceResponse {
  symbol: string;
  price: string;
}

export const getBinancePrice = async (symbol: string): Promise<BinancePriceResponse> => {
  try {
    const response = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Binance price:', error);
    throw error;
  }
};
