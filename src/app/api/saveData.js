import { savePriceData } from '../../services/cryptoService';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { symbol, priceData } = req.body;

    try {
      await savePriceData(symbol, priceData);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error saving price data:', error);
      res.status(500).json({ success: false, error: 'Failed to save data' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}