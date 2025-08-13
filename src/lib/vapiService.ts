// src/services/vapiService.ts
import Vapi from "@vapi-ai/web";

export function createVapi(apiKey: string, assistantId: string, handlers: any) {
  const vapiInstance = new Vapi(apiKey);

  vapiInstance.on("call-start", handlers.onCallStart);
  vapiInstance.on("call-end", handlers.onCallEnd);
  vapiInstance.on("speech-start", handlers.onSpeechStart);
  vapiInstance.on("speech-end", handlers.onSpeechEnd);

  return vapiInstance;
}
