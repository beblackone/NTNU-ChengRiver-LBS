import React from 'react';
import { Smartphone, ArrowRight, Aperture } from 'lucide-react';

const ARCard: React.FC = () => {
  return (
    <div className="relative group overflow-hidden rounded-xl border border-cyan-500/50 bg-slate-800/50 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)]">
      {/* Background Gradient Pulse */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="bg-cyan-500/20 p-3 rounded-lg border border-cyan-500/30">
            <Aperture className="w-8 h-8 text-cyan-400 animate-spin-slow" />
          </div>
          <span className="px-3 py-1 text-xs font-mono font-bold text-cyan-300 bg-cyan-950 rounded-full border border-cyan-800">
            AR READY
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">AR 時光之窗</h3>
        <p className="text-slate-300 mb-6 text-sm leading-relaxed">
          偵測到孔子像周邊的時空裂縫。系統已準備好重疊歷史影像，點擊下方按鈕開啟視覺同步。
        </p>

        <a 
          href="https://history.lib.ntnu.edu.tw/wp/%E8%AA%A0%E6%BA%AA/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full group/btn"
        >
          <button className="w-full py-4 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-bold text-white shadow-lg flex items-center justify-center gap-3 transform transition-all hover:scale-[1.02] hover:shadow-cyan-500/25 border border-cyan-400/30">
            <Smartphone className="w-5 h-5" />
            開啟 AR 今昔對比 (圖書館系統)
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ARCard;