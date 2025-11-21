import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileText } from 'lucide-react';
import { ArchiveItem } from '../types';

const ARCHIVES: ArchiveItem[] = [
  {
    title: "比瑠公圳更老",
    content: "這不是水溝，是『霧裡薛圳』。完工於 1724 年，比瑠公圳還早 20 年。三百年前，這裡是台北西區的農業命脈，灌溉了古亭庄、公館一帶的農田。"
  },
  {
    title: "誠溪的由來",
    content: "師大校訓為『誠正勤樸』。這條流經校園的水圳因此被暱稱為『誠溪』。它見證了從日治時期高校、戰後接收，到發展為師範大學的百年變遷。"
  },
  {
    title: "消失的音樂學院湖",
    content: "現在的音樂學院位置，以前曾是一個調節池（埤塘）。隨著都市發展，水路被加蓋填平，成為現在的樣子，但地下的水脈依然緩緩流動。"
  }
];

const ArchiveSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {ARCHIVES.map((item, index) => {
        const isOpen = expandedIndex === index;
        return (
          <div 
            key={index}
            className={`rounded-lg border transition-all duration-300 overflow-hidden
              ${isOpen ? 'bg-slate-800/80 border-amber-500/50 shadow-[0_0_10px_rgba(245,158,11,0.1)]' : 'bg-slate-800/30 border-slate-700 hover:border-slate-600'}`}
          >
            <button
              onClick={() => setExpandedIndex(isOpen ? null : index)}
              className="w-full px-4 py-4 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-3">
                <FileText className={`w-5 h-5 ${isOpen ? 'text-amber-400' : 'text-slate-500'}`} />
                <span className={`font-bold ${isOpen ? 'text-slate-100' : 'text-slate-400'}`}>
                  {item.title}
                </span>
              </div>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-300 text-slate-500 ${isOpen ? 'rotate-180 text-amber-400' : ''}`} 
              />
            </button>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-4 pb-4 pt-0 pl-12 text-slate-300 text-sm leading-relaxed border-t border-slate-700/50 mt-1 pt-3">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default ArchiveSection;