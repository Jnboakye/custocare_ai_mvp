"use client";

import VoiceAgentButton from "@/components/VoiceAgentButton";
import FeatureCard from "@/components/featureCard";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 text-white">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          AI Voice Customer Service
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
