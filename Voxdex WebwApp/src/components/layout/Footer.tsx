import Link from 'next/link';
import { Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#030014]/50 backdrop-blur-xl pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group inline-flex">
              <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 group-hover:border-indigo-500/50 transition-colors">
                <Sparkles className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white/90">
                Vox<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Dex</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm max-w-sm mb-6 leading-relaxed">
              Empowering accessibility through real-time AI translation. 
              Bridging the gap between sign language and spoken communication instantly.
            </p>
            <div className="flex gap-3">
              {['Next.js', 'React', 'Tailwind', 'Framer'].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-white/90 mb-4 text-sm">Product</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-white/50 hover:text-white transition-colors text-sm">Features</Link></li>
              <li><Link href="#" className="text-white/50 hover:text-white transition-colors text-sm">Integrations</Link></li>
              <li><Link href="#" className="text-white/50 hover:text-white transition-colors text-sm">Pricing</Link></li>
              <li><Link href="#" className="text-white/50 hover:text-white transition-colors text-sm">Changelog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white/90 mb-4 text-sm">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-white/50 hover:text-white transition-colors text-sm">Privacy</Link></li>
              <li><Link href="#" className="text-white/50 hover:text-white transition-colors text-sm">Terms</Link></li>
              <li><Link href="#" className="text-white/50 hover:text-white transition-colors text-sm">Security</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-indigo-400" /> for accessibility.
          </p>
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} VoxDex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
