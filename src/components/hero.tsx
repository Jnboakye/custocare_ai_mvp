"use client";
import VoiceAgentButton from "@/components/VoiceAgentButton";
import FeatureCard from "@/components/featureCard";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 text-white">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
      
      {/* GitHub Link - Top Right */}
      <div className="absolute top-6 right-6 z-10">
        <a
          href="https://github.com/Jnboakye/custocare_ai_mvp"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-200 transform hover:scale-105"
        >
          <svg
            className="w-5 h-5 fill-current group-hover:scale-110 transition-transform"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          <span className="text-sm font-medium hidden sm:inline">View Source</span>
        </a>
      </div>

      {/* Hero Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Custocare Ai MVP - Webcall kit
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Transform your customer support with our intelligent voice agent. 
          Natural conversations, instant responses, available 24/7 to serve your customers better.
        </p>
        
        {/* Voice Agent Button */}
        <div className="flex justify-center mb-16">
          <VoiceAgentButton />
        </div>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 blur opacity-60 group-hover:opacity-80 transition" />
            <div className="relative rounded-xl bg-white/10 backdrop-blur-lg shadow-xl p-6 border border-white/20">
              <FeatureCard
                iconColor="from-blue-400 to-cyan-400"
                title="24/7 Available"
                description="Always ready to help your customers"
                iconPath="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 blur opacity-60 group-hover:opacity-80 transition" />
            <div className="relative rounded-xl bg-white/10 backdrop-blur-lg shadow-xl p-6 border border-white/20">
              <FeatureCard
                iconColor="from-pink-400 to-rose-400"
                title="Natural Speech"
                description="Human-like conversations"
                iconPath="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 blur opacity-60 group-hover:opacity-80 transition" />
            <div className="relative rounded-xl bg-white/10 backdrop-blur-lg shadow-xl p-6 border border-white/20">
              <FeatureCard
                iconColor="from-purple-400 to-indigo-400"
                title="Instant Response"
                description="No waiting, immediate help"
                iconPath="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}