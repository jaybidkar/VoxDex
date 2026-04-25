"use client";

import { motion } from "framer-motion";
import { Video, MessagesSquare, Laptop, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const integrations = [
  { name: "Zoom", icon: Video, color: "text-blue-400" },
  { name: "Google Meet", icon: Laptop, color: "text-emerald-400" },
  { name: "Microsoft Teams", icon: MessagesSquare, color: "text-indigo-400" },
  { name: "Browser Extension", icon: Globe, color: "text-orange-400" },
];

export default function IntegrationSection() {
  return (
    <div id="integrations" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Integrates With Your Workflow</h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            We are building native integrations with your favorite meeting platforms to make accessibility ubiquitous.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((app, i) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={cn(
                "relative p-6 rounded-2xl flex flex-col items-center justify-center gap-4 text-center",
                "bg-white/[0.01] border border-white/5 grayscale opacity-60",
                "backdrop-blur-sm"
              )}
            >
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-white/10 text-[10px] font-medium tracking-wider uppercase text-white/50">
                Coming Soon
              </div>
              <div className="p-4 rounded-full bg-white/5">
                <app.icon className={cn("w-8 h-8", app.color)} />
              </div>
              <h4 className="font-medium text-white/80">{app.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
