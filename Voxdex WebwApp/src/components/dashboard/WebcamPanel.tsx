"use client";

import { motion } from "framer-motion";
import { Camera, Activity, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";

interface WebcamPanelProps {
  isActive: boolean;
  confidence: number;
}

export default function WebcamPanel({ isActive, confidence }: WebcamPanelProps) {
  const [fps, setFps] = useState(60);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Handle Webcam Stream
  useEffect(() => {
    if (isActive) {
      const startWebcam = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          streamRef.current = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } catch (error) {
          console.error("Error accessing webcam:", error);
        }
      };
      startWebcam();
    } else {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    }

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
    };
  }, [isActive]);

  // Mock FPS fluctuation
  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      setFps(Math.floor(Math.random() * (62 - 58 + 1) + 58));
    }, 1000);
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className="glass-panel w-full h-full rounded-3xl overflow-hidden relative flex flex-col items-center justify-center min-h-[400px] lg:min-h-full">
      {isActive ? (
        <>
          {/* Real Webcam Feed */}
          <div className="absolute inset-0 bg-[#0c0c1d] flex items-center justify-center -z-10">
            <video 
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover opacity-80"
            />
            {/* Optional overlay gradient for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c1d] via-transparent to-transparent opacity-60" />
          </div>

          {/* Fake Bounding Box Animation */}
          <motion.div 
            animate={{ 
              x: [-10, 10, -5, 10, -10],
              y: [-5, 5, -10, 5, -5],
              width: ["210px", "230px", "220px", "210px"]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute p-4 border-2 border-indigo-500/50 rounded-xl"
            style={{ width: 220, height: 280, top: "20%", left: "50%", marginLeft: -110 }}
          >
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-indigo-400" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-indigo-400" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-indigo-400" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-indigo-400" />
            
            <motion.div 
              initial={{ height: "0%" }}
              animate={{ height: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-full bg-indigo-400/10 border-b border-indigo-400/30"
            />
          </motion.div>

          {/* Overlays */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
            <div className="flex gap-2">
              <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-semibold text-white/90">LIVE REC</span>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2">
                <Activity className="w-3 h-3 text-indigo-400" />
                <span className="text-xs font-mono font-medium text-white/80">{fps} FPS</span>
              </div>
            </div>
            <button className="p-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:bg-black/60 transition-colors pointer-events-auto">
              <Maximize2 className="w-4 h-4 text-white/70" />
            </button>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
            <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2">
              <span className="text-xs font-medium text-white/80">AI CONFIDENCE:</span>
              <span className="text-sm font-bold text-emerald-400">{confidence}%</span>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
            <Camera className="w-8 h-8 text-white/30" />
          </div>
          <p className="text-white/50 text-sm">Camera inactive</p>
        </div>
      )}
    </div>
  );
}
