import { savePriceData } from '../../../services/cryptoService';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { symbol } = await request.json(); 

  if (!symbol) {
    return NextResponse.json(
      { success: false, error: 'Symbol is required' },
      { status: 400 }
    );
  }

  try {
    await savePriceData(symbol); // Only pass symbol, priceData is fetched inside the function
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving price data:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save data' },
      { status: 500 }
    );
  }
}
