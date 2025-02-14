import { openAi_api_key } from "../../core/aplication/config/loadEnv";
import OpenAI from "openai";

class OpenAiService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: openAi_api_key,  // Tu clave API de OpenAI
    });
  }

  public async analyzeMarket(prompt: string): Promise<{ message: string; reply: string }> {
    if (!this.openai) return { message: "openAi", reply: "" };
  
    try {
      const response = await this.openai.chat.completions.create({
        model: "gpt-4", // O el modelo que prefieras
        messages: [
          {
            role: "system",
            content:
              "Eres un analista profesional de criptomonedas con experiencia en el análisis de gráficos de mercado, tendencias y patrones de precios. Tu tarea es evaluar los datos del mercado y proporcionar recomendaciones sobre si es un buen momento para invertir o no en una criptomoneda. Basado en las tendencias, movimientos y análisis de datos, debes indicar si la criptomoneda es una buena inversión a corto y largo plazo.",
          },
          { role: "user", content: prompt },  // El prompt recibido
        ],
      });
  
      console.log('API Response:', response); // Agregar un log aquí
  
      const reply = response.choices[0]?.message?.content || "Sin respuesta";
  
      return {
        message: "Successfully",
        reply,
      };
    } catch (error) {
      console.error("Error to get chats:", error);
      return {
        message: "chats",
        reply: "500",
      };
    }
  }
  
}

const openAiService = new OpenAiService();
export default openAiService;
