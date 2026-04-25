"use client";

import { motion } from "framer-motion";
import { MessageSquare, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface TranscriptSidebarProps {
  history: string[];
}

export default function TranscriptSidebar({ history }: TranscriptSidebarProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="glass-panel w-full h-full rounded-3xl overflow-hidden flex flex-col min-h-[400px] lg:min-h-full">
      <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
        <h3 className="font-medium text-white/80 flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-purple-400" />
          History
        </h3>
        <span className="text-xs text-white/40">{history.length} Lines</span>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar scroll-smooth"
      >
        {history.length === 0 ? (
          <div className="h-full flex items-center justify-center text-white/30 text-sm text-center px-4">
            Conversation history will appear here once you start signing.
          </div>
        ) : (
          history.map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-sm text-white/80"
            >
              <div className="text-[10px] text-white/30 font-medium mb-1 uppercase tracking-wider">
                User • Just now
              </div>
              {line}
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
