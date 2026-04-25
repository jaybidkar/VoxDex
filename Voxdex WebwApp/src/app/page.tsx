"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import FeatureCard from "@/components/landing/FeatureCard";
import IntegrationSection from "@/components/landing/IntegrationSection";
import { Camera, Type, Volume2, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Global Background UI Elements */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none" />
      
      <Navbar />
      
      <div className="flex-grow">
        <HeroSection />
        
        {/* Features Section */}
        <section id="features" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Powered by Advanced AI</h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                VoxDex leverages state-of-the-art vision and language models to provide instantaneous, accurate translations tailored for accessibility.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10 bg-indigo-500 rounded-full blur-[100px] -z-10" />

              <FeatureCard 
                title="Live Detection" 
                description="Detects continuous sign language fluidly at 60fps utilizing hardware-accelerated computer vision models."
                icon={Camera}
                delay={0}
              />
              <FeatureCard 
                title="Subtitle Generation" 
                description="Converts detected gestures into readable, context-aware subtitles in real-time."
                icon={Type}
                delay={0.1}
              />
              <FeatureCard 
                title="Voice Output" 
                description="Transforms generated text into natural-sounding speech with customizable voice profiles."
                icon={Volume2}
                delay={0.2}
              />
              <FeatureCard 
                title="Meeting Mode" 
                description="Seamlessly overlays translations onto your screen so you can engage in any digital meeting space."
                icon={Users}
                delay={0.3}
              />
            </div>
          </div>
        </section>

        <IntegrationSection />
      </div>

      <Footer />
    </main>
  );
}
