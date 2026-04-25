"use client";

import { motion } from "framer-motion";
import { Camera, CameraOff, Mic, MicOff, Users, Download, Trash2, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface ControlBarProps {
  isActive: boolean;
  isVoiceEnabled: boolean;
  isMeetingMode: boolean;
  onToggleCamera: () => void;
  onToggleVoice: () => void;
  onToggleMeetingMode: () => void;
  onExport: () => void;
  onClear: () => void;
}

export default function ControlBar({
  isActive,
  isVoiceEnabled,
  isMeetingMode,
  onToggleCamera,
  onToggleVoice,
  onToggleMeetingMode,
  onExport,
  onClear
}: ControlBarProps) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-card px-4 py-3 rounded-2xl flex items-center gap-2 sm:gap-4 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
      >
        <button
          onClick={onToggleCamera}
          className={cn(
            "p-3 rounded-xl flex items-center justify-center transition-all duration-300",
            isActive 
              ? "bg-red-500/20 text-red-400 hover:bg-red-500/30" 
              : "bg-indigo-600 text-white hover:bg-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.4)]"
          )}
          title={isActive ? "Stop Camera" : "Start Camera"}
        >
          {isActive ? <CameraOff className="w-5 h-5" /> : <Camera className="w-5 h-5" />}
        </button>

        <div className="w-px h-8 bg-white/10 mx-1 hidden sm:block" />

        <button
          onClick={onToggleVoice}
          className={cn(
            "flex items-center gap-2 px-4 py-2.5 rounded-xl transition-colors",
            isVoiceEnabled
              ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
              : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-transparent"
          )}
        >
          {isVoiceEnabled ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
          <span className="text-sm font-medium hidden sm:block">Voice Output</span>
        </button>

        <button
          onClick={onToggleMeetingMode}
          className={cn(
            "flex items-center gap-2 px-4 py-2.5 rounded-xl transition-colors",
            isMeetingMode
              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
              : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-transparent"
          )}
        >
          <Users className="w-4 h-4" />
          <span className="text-sm font-medium hidden sm:block">Meeting Mode</span>
        </button>

        <div className="w-px h-8 bg-white/10 mx-1 hidden sm:block" />

        <button
          onClick={onExport}
          className="p-2.5 rounded-xl bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors border border-transparent hover:border-white/10"
          title="Export Transcript"
        >
          <Download className="w-4 h-4" />
        </button>

        <button
          onClick={onClear}
          className="p-2.5 rounded-xl bg-white/5 text-white/70 hover:bg-red-500/20 hover:text-red-400 transition-colors border border-transparent hover:border-red-500/20"
          title="Clear History"
        >
          <Trash2 className="w-4 h-4" />
        </button>

        <button
          className="p-2.5 rounded-xl bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors border border-transparent hover:border-white/10"
          title="Settings"
        >
          <Settings className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  );
}
