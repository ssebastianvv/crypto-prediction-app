import { getPriceData } from '../../services/cryptoService';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { symbol } = req.query;

    try {
      const data = await getPriceData(symbol);
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching price data:', error);
      res.status(500).json({ success: false, error: 'Failed to fetch data' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}