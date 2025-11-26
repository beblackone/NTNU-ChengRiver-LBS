import React, { useState } from 'react';
import { Smartphone, ExternalLink, CheckCircle, Lock, ChevronDown, MapPin } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Station } from '../types';

interface ARCardProps {
  station: Station;
  isVisited: boolean;
  isUnlocked: boolean;
  onVisit: () => void;
}

const ARCard: React.FC<ARCardProps> = ({ station, isVisited, isUnlocked, onVisit }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAction = () => {
    if (!isVisited) onVisit();
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative group rounded-xl border transition-all duration-500
      ${isVisited 
        ? 'border-emerald-500/50 bg-emerald-950/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
        : isUnlocked
          ? isOpen 
            ? 'border-cyan-500/50 bg-slate-800/80 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
            : 'border-slate-700 bg-slate-900/50 hover:border-cyan-500/30'
          : 'border-slate-800 bg-slate-900/30 opacity-70 grayscale'
      }`}
    >
      {/* Header (Always Visible) - Acts as the Trigger */}
      <button 
        onClick={toggleOpen}
        className="w-full text-left p-4 flex items-center justify-between outline-none"
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className={`text-[10px] font-mono font-bold uppercase border px-1.5 py-0.5 rounded flex items-center gap-1
              ${isVisited 
                ? 'bg-emerald-900/50 text-emerald-400 border-emerald-700' 
                : isUnlocked
                  ? 'bg-slate-800 text-slate-400 border-slate-600'
                  : 'bg-slate-900 text-slate-600 border-slate-800'}`}
            >
              {isVisited ? <CheckCircle className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
              {isVisited ? 'VISITED' : 'LOCKED'}
            </div>
          </div>
          <h3 className={`text-base font-bold transition-colors
            ${isVisited ? 'text-emerald-300' : isUnlocked ? 'text-slate-200' : 'text-slate-500'}`}>
            {station.title}
          </h3>
        </div>
        
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} ${isVisited ? 'text-emerald-500' : 'text-slate-600'}`} />
      </button>

      {/* Expandable Content */}
      <AnimatePresence>
        {(isOpen || isVisited) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pb-5 pt-0">
              <div className={`h-px w-full mb-4 ${isVisited ? 'bg-emerald-500/20' : 'bg-slate-700'}`} />
              
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                {station.description}
              </p>

              <a 
                href={station.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleAction}
                className={`block w-full transition-all duration-300 ${!isUnlocked ? 'pointer-events-none opacity-50' : ''}`}
              >
                <button className={`w-full py-3 px-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transform transition-all
                  ${isVisited 
                    ? 'bg-emerald-900/30 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-900/50' 
                    : 'bg-cyan-600/10 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500 hover:text-slate-900 shadow-[0_0_10px_rgba(6,182,212,0.1)]'}`}
                >
                  {isVisited ? (
                    <>
                      <ExternalLink className="w-4 h-4" />
                      再次檢視
                    </>
                  ) : (
                    <>
                      <Smartphone className="w-4 h-4" />
                      開啟 AR 今昔對比
                    </>
                  )}
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ARCard;