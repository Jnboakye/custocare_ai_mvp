// src/services/vapiService.ts
import Vapi from "@vapi-ai/web";

type VapiHandlers = {
  onCallStart: (...args: any[]) => void;
  onCallEnd: (...args: any[]) => void;
  onSpeechStart: (...args: any[]) => void;
  onSpeechEnd: (...args: any[]) => void;
};

export function createVapi(apiKey: string, assistantId: string, handlers: VapiHandlers) {
  const vapiInstance = new Vapi(apiKey);

  vapiInstance.on("call-start", handlers.onCallStart);
  vapiInstance.on("call-end", handlers.onCallEnd);
  vapiInstance.on("speech-start", handlers.onSpeechStart);
  vapiInstance.on("speech-end", handlers.onSpeechEnd);

  return vapiInstance;
}
