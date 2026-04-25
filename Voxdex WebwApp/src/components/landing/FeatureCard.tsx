"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export default function FeatureCard({ title, description, icon: Icon, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={cn(
        "group relative p-8 rounded-3xl overflow-hidden cursor-default",
        "bg-white/[0.02] border border-white/5",
        "hover:bg-white/[0.04] hover:border-indigo-500/20 transition-all duration-500"
      )}
    >
      {/* Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      
      <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-indigo-400/50 transition-all duration-500">
        <Icon className="w-7 h-7 text-indigo-400 group-hover:text-indigo-300" />
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-200 transition-colors">
        {title}
      </h3>
      <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
        {description}
      </p>
    </motion.div>
  );
}
