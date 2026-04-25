"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mic, Waves } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubtitlePanelProps {
  isActive: boolean;
  isVoiceEnabled: boolean;
  currentWord: string;
  committedSentence: string;
}

export default function SubtitlePanel({ isActive, isVoiceEnabled, currentWord, committedSentence }: SubtitlePanelProps) {
  return (
    <div className="glass-panel w-full h-full rounded-3xl overflow-hidden relative flex flex-col p-6 min-h-[400px] lg:min-h-[600px]">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
        <h3 className="font-medium text-white/80 flex items-center gap-2">
          <Waves className="w-4 h-4 text-indigo-400" />
          Live Translation
        </h3>
        
        <div className="flex gap-2">
          {isActive && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-xs font-medium text-indigo-300">Listening AI</span>
            </div>
          )}
          {isVoiceEnabled && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
               <Mic className="w-3 h-3 text-purple-400" />
               <span className="text-xs font-medium text-purple-300">Voice Sync</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Subtitle Display */}
      <div className="flex-1 flex flex-col justify-end gap-6 relative z-10 pb-4">
        {!isActive ? (
          <div className="h-full flex items-center justify-center text-white/30 text-lg">
            Start the camera to begin translation.
          </div>
        ) : (
          <>
            <div className="min-h-[120px] flex items-end">
              <AnimatePresence mode="wait">
                <motion.p
                  key={committedSentence}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-3xl md:text-4xl font-semibold text-white leading-tight"
                >
                  {committedSentence}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="min-h-[40px] flex items-center gap-2">
              <span className="text-xl font-medium text-white/40">Current:</span>
              <span className="text-xl font-medium text-indigo-400">{currentWord}</span>
              <span className="flex gap-1 ml-2">
                <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
              </span>
            </div>
            
            {/* AI Listening Pulse background effect */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-indigo-500/20 to-transparent -z-10 pointer-events-none" />
            <motion.div 
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" 
            />
          </>
        )}
      </div>

    </div>
  );
}
