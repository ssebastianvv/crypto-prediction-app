import { savePriceData } from '../../../services/cryptoService';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { symbol, priceData } = await request.json();

  if (!symbol || !priceData) {
    return NextResponse.json(
      { success: false, error: 'Symbol and priceData are required' },
      { status: 400 }
    );
  }

  try {
    await savePriceData(symbol, priceData);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving price data:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save data' },
      { status: 500 }
    );
  }
}