import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b-0 border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 group-hover:border-indigo-500/50 transition-colors">
                <Sparkles className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white/90 group-hover:text-white transition-colors">
                Vox<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Dex</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Features</Link>
            <Link href="#integrations" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Integrations</Link>
            <Link 
              href="/dashboard"
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                "bg-white/5 border border-white/10 hover:bg-white/10",
                "hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:border-indigo-500/50"
              )}
            >
              Sign In
            </Link>
            <Link 
              href="/dashboard"
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                "bg-indigo-600 hover:bg-indigo-500 text-white",
                "shadow-[0_0_15px_rgba(79,70,229,0.4)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)]",
                "border border-indigo-400/50"
              )}
            >
              Launch Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
