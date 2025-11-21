import React from 'react';
import { ClipboardList, ExternalLink, AlertCircle } from 'lucide-react';

const MissionDebrief: React.FC = () => {
  return (
    <div className="relative mt-6 overflow-hidden rounded-xl border border-rose-500/50 bg-slate-900">
      {/* Striped Warning Background */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #f43f5e 0, #f43f5e 10px, transparent 10px, transparent 20px)' }} 
      />

      <div className="relative p-6 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 text-rose-400 mb-2">
          <AlertCircle className="w-5 h-5" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest border border-rose-500/50 px-2 py-0.5 rounded">Priority Alpha</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">📝 任務回報：體驗回饋</h3>
        <p className="text-slate-300 text-sm mb-6 max-w-sm">
          您的數據將決定這套系統能否被學校採用。<br/>
          請花 30 秒填寫回饋，協助歷史解碼。
        </p>

        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSfy5oYI_b49iuBIdmSD4Q6aHb2gaKWDOHTY-xl1XmiHVeBD9Q/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto relative px-8 py-3 bg-rose-600 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(244,63,94,0.4)] hover:bg-rose-500 hover:shadow-[0_0_25px_rgba(244,63,94,0.6)] transition-all flex items-center justify-center gap-2 group">
            <span className="absolute inset-0 rounded-lg border-2 border-white/20 animate-pulse-fast"></span>
            <ClipboardList className="w-5 h-5" />
            前往填寫回饋表單 (Google Form)
            <ExternalLink className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default MissionDebrief;