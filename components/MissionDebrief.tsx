import React from 'react';
import { ClipboardList, ExternalLink, AlertCircle } from 'lucide-react';

interface MissionDebriefProps {
  visitedCount: number;
}

const MissionDebrief: React.FC<MissionDebriefProps> = ({ visitedCount }) => {
  // Highlight only if at least 1 station is visited
  const isActive = visitedCount >= 1;

  return (
    <div className={`relative mt-8 overflow-hidden rounded-xl border transition-all duration-700
      ${isActive 
        ? 'border-rose-500 bg-slate-900 opacity-100 translate-y-0 shadow-[0_0_30px_rgba(244,63,94,0.15)]' 
        : 'border-slate-800 bg-slate-900/50 opacity-60 grayscale'}`}
    >
      {/* Striped Warning Background - Only active if tasks started */}
      {isActive && (
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #f43f5e 0, #f43f5e 10px, transparent 10px, transparent 20px)' }} 
        />
      )}

      <div className="relative p-6 flex flex-col items-center text-center">
        <div className={`flex items-center gap-2 mb-2 transition-colors ${isActive ? 'text-rose-400' : 'text-slate-500'}`}>
          <AlertCircle className="w-5 h-5" />
          <span className={`text-xs font-mono font-bold uppercase tracking-widest border px-2 py-0.5 rounded
            ${isActive ? 'border-rose-500/50 bg-rose-950/30' : 'border-slate-700'}`}>
            {isActive ? 'Mission Debrief' : 'Locked'}
          </span>
        </div>

        <h3 className={`text-xl font-bold mb-2 ${isActive ? 'text-white' : 'text-slate-500'}`}>
          📝 任務回報：體驗回饋
        </h3>
        <p className="text-slate-400 text-sm mb-6 max-w-sm">
          {isActive 
            ? "您的數據將決定這套系統能否被學校採用。請花 30 秒填寫回饋，協助歷史解碼。" 
            : "請先探索至少一個歷史節點以解鎖回饋表單。"}
        </p>

        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSd8lF56eNTdbBAlAIsQMf2AvGiszU6_tPXQ4USqxSEFa3wEEw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full sm:w-auto transition-all duration-500 ${isActive ? 'pointer-events-auto' : 'pointer-events-none opacity-50'}`}
        >
          <button className={`w-full sm:w-auto relative px-8 py-3 font-bold rounded-lg transition-all flex items-center justify-center gap-2 group
            ${isActive 
              ? 'bg-rose-600 text-white shadow-[0_0_15px_rgba(244,63,94,0.4)] hover:bg-rose-500 hover:shadow-[0_0_25px_rgba(244,63,94,0.6)] animate-pulse-fast' 
              : 'bg-slate-800 text-slate-500 cursor-not-allowed'}`}
          >
            <ClipboardList className="w-5 h-5" />
            前往填寫回饋表單
            <ExternalLink className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default MissionDebrief;