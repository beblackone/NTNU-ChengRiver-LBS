import React, { useState } from 'react';
import { Layers } from 'lucide-react';

const MAP_DATA = [
  {
    id: '1928',
    label: '1928 日治水利圖',
    url: 'https://www.artmuse.ntnu.edu.tw/wp-content/uploads/2025/07/333.png'
  },
  {
    id: '1945',
    label: '1945 美軍航照圖',
    url: 'https://www.artmuse.ntnu.edu.tw/wp-content/uploads/2025/07/02-2.jpg'
  }
];

const MapGallery: React.FC = () => {
  const [activeMapId, setActiveMapId] = useState(MAP_DATA[0].id);
  const activeMap = MAP_DATA.find(m => m.id === activeMapId) || MAP_DATA[0];

  return (
    <div className="bg-slate-800/40 rounded-lg border border-slate-700 overflow-hidden">
      {/* Tab Switcher */}
      <div className="flex border-b border-slate-700">
        {MAP_DATA.map((map) => (
          <button
            key={map.id}
            onClick={() => setActiveMapId(map.id)}
            className={`flex-1 py-3 text-sm font-mono font-bold transition-colors flex items-center justify-center gap-2
              ${activeMapId === map.id 
                ? 'bg-cyan-950/50 text-cyan-400 border-b-2 border-cyan-500' 
                : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'}`}
          >
            <Layers className="w-4 h-4" />
            {map.label}
          </button>
        ))}
      </div>

      {/* Image Viewport */}
      <div className="relative aspect-[4/3] w-full bg-black overflow-hidden group">
        
        {/* Scanline Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none opacity-20 bg-[length:100%_4px] bg-[linear-gradient(transparent_50%,_rgba(0,0,0,0.5)_50%)]" />
        <div className="absolute inset-0 z-20 pointer-events-none opacity-10 animate-pulse bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-full w-full" />

        {/* Image */}
        <img 
          src={activeMap.url} 
          alt={activeMap.label}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
        />

        {/* Tech Detail Text */}
        <div className="absolute bottom-2 right-2 z-30 text-[10px] font-mono text-cyan-500/70 bg-black/60 px-2 py-1 rounded border border-cyan-900">
          SRC: {activeMapId === '1928' ? 'G.GOV.JP.ARCHIVE' : 'US.AF.ARCHIVE'} // SCALE: 1:10000
        </div>
      </div>
    </div>
  );
};

export default MapGallery;