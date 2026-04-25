"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import WebcamPanel from "@/components/dashboard/WebcamPanel";
import SubtitlePanel from "@/components/dashboard/SubtitlePanel";
import TranscriptSidebar from "@/components/dashboard/TranscriptSidebar";
import ControlBar from "@/components/dashboard/ControlBar";

// Fake Live Data Setup
const mockSentences = [
  "Hello. Welcome to the VoxDex demo.",
  "I am signing right now, and the AI is translating it.",
  "How are you doing today?",
  "This technology can break down communication barriers.",
  "I need help with this project.",
  "Thank you for watching this presentation.",
  "Please wait a moment.",
  "Let's integrate this with Google Meet later."
];

export default function DashboardPage() {
  const [isActive, setIsActive] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
  const [isMeetingMode, setIsMeetingMode] = useState(false);
  const [confidence, setConfidence] = useState(98);
  
  const [currentWord, setCurrentWord] = useState('');
  const [committedSentence, setCommittedSentence] = useState('');
  const [history, setHistory] = useState<string[]>([]);

  // Simulation Logic
  useEffect(() => {
    if (!isActive) {
      setCurrentWord('');
      setCommittedSentence('');
      return;
    }

    let sentenceIndex = 0;
    
    const simulateTranslation = () => {
      const sentence = mockSentences[sentenceIndex];
      const words = sentence.split(' ');
      let wordIndex = 0;
      
      setCommittedSentence(""); // Reset before typing new sentence

      // Word by word generation
      const wordInterval = setInterval(() => {
        if (wordIndex < words.length) {
          const word = words[wordIndex];
          setCurrentWord(word);
          
          // Random slight confidence dip
          setConfidence(prev => Math.max(85, Math.min(99, prev + (Math.random() > 0.5 ? 1 : -2))));

          setCommittedSentence(prev => (prev ? prev + " " + word : word));
          wordIndex++;
        } else {
          clearInterval(wordInterval);
          setCurrentWord('');
          
          // Add to history
          setHistory(prev => [...prev, sentence]);
          
          // Next sentence delay
          setTimeout(() => {
            sentenceIndex = (sentenceIndex + 1) % mockSentences.length;
            if (isActive) simulateTranslation();
          }, 2000);
        }
      }, 400); // 400ms per word

      return () => clearInterval(wordInterval);
    };

    const cleanup = simulateTranslation();
    return () => {
      if (typeof cleanup === 'function') cleanup();
    };
  }, [isActive]);


  const handleExport = () => {
    // Fake export
    alert("Transcript exported successfully! (Mock Action)");
  };

  const handleClear = () => {
    setHistory([]);
    setCommittedSentence('');
    setCurrentWord('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Background glowing effects for dashboard */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10 bg-indigo-600 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-10 bg-purple-600 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Simplified Navbar for App */}
      <nav className="h-16 border-b border-white/5 glass-panel flex items-center justify-between px-4 sm:px-6 z-40">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 rounded-lg hover:bg-white/5 transition-colors text-white/60 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="w-px h-6 bg-white/10" />
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <span className="font-bold tracking-tight">VoxDex</span>
            <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-indigo-500/20 text-indigo-300 ml-2">Beta</span>
          </div>
        </div>
      </nav>

      {/* Main App Grid */}
      <main className="flex-1 p-4 sm:p-6 pb-28">
        <div className="max-w-[1600px] mx-auto h-full grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left: Webcam Placeholder */}
          <div className="lg:col-span-3 xl:col-span-3">
            <WebcamPanel isActive={isActive} confidence={confidence} />
          </div>

          {/* Center: Live Subtitles */}
          <div className="lg:col-span-6 xl:col-span-6">
            <SubtitlePanel 
              isActive={isActive} 
              isVoiceEnabled={isVoiceEnabled} 
              currentWord={currentWord} 
              committedSentence={committedSentence} 
            />
          </div>

          {/* Right: Transcript History */}
          <div className="lg:col-span-3 xl:col-span-3">
            <TranscriptSidebar history={history} />
          </div>

        </div>
      </main>

      {/* Bottom Sticky Control Bar */}
      <ControlBar 
        isActive={isActive}
        isVoiceEnabled={isVoiceEnabled}
        isMeetingMode={isMeetingMode}
        onToggleCamera={() => setIsActive(!isActive)}
        onToggleVoice={() => setIsVoiceEnabled(!isVoiceEnabled)}
        onToggleMeetingMode={() => setIsMeetingMode(!isMeetingMode)}
        onExport={handleExport}
        onClear={handleClear}
      />
    </div>
  );
}
