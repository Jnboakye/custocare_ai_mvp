// src/lib/vapiService.ts
import Vapi from "@vapi-ai/web";

type VapiHandlers = {
  onCallStart: () => void;
  onCallEnd: () => void;
  onSpeechStart: () => void;
  onSpeechEnd: () => void;
};

export { Vapi };

export function createVapi(
  apiKey: string, 
  assistantId: string, 
  handlers: VapiHandlers
): Vapi {
  const vapiInstance = new Vapi(apiKey);
  
  vapiInstance.on("call-start", handlers.onCallStart);
  vapiInstance.on("call-end", handlers.onCallEnd);
  vapiInstance.on("speech-start", handlers.onSpeechStart);
  vapiInstance.on("speech-end", handlers.onSpeechEnd);
  
  return vapiInstance;
}
