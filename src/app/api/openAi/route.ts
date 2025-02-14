// src/app/api/openai/route.ts
import { NextRequest, NextResponse } from 'next/server';
import openAiService from '@/app/api/services/openAi.service';

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();
  if (!prompt) {
    return NextResponse.json({
      message: 'Prompt parameter is required',
      status: 400,
    });
  }

  try {
    const result = await openAiService.analyzeMarket(prompt);
    return NextResponse.json({
      message: 'Successfully',
      reply: result.reply,
    });
  } catch (error) {
    console.error('Error processing OpenAI request:', error);
    return NextResponse.json({
      message: 'Error',
      reply: '500',
    });
  }
}
