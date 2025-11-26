import React, { useState } from 'react';
import { Map, Zap } from 'lucide-react';
import ARCard from './ARCard';
import MissionDebrief from './MissionDebrief';
import { Station } from '../types';

const STATIONS: Station[] = [
  {
    id: 1,
    title: "Station 1: 誠溪 (The Lost River)",
    description: "流經校園的霧裡薛圳第二支線，昔日師生共同的親水記憶。",
    url: "https://history.lib.ntnu.edu.tw/wp/%E8%AA%A0%E6%BA%AA/",
    coordinates: "25.026°N, 121.528°E"
  },
  {
    id: 2,
    title: "Station 2: 舊圖書館 (The Old Library)",
    description: "保留著古典山牆與羅馬柱列，見證了師大建築的變遷與傳承。",
    url: "https://history.lib.ntnu.edu.tw/wp/%e8%88%8a%e5%9c%96%e6%9b%b8%e9%a4%a8/",
    coordinates: "25.027°N, 121.529°E"
  },
  {
    id: 3,
    title: "Station 3: 龍泉街師大路 (The Old Street)",
    description: "從彎曲的龍泉街到寬敞的師大路，探索圍牆邊的常民生活與地貌演變。",
    url: "https://history.lib.ntnu.edu.tw/wp/%e9%be%8d%e6%b3%89%e8%a1%97%e5%b8%ab%e5%a4%a7%e8%b7%af/",
    coordinates: "25.025°N, 121.530°E"
  }
];

const Dashboard: React.FC = () => {
  const [visitedStations, setVisitedStations] = useState<Set<number>>(new Set());

  const handleVisit = (id: number) => {
    setVisitedStations(prev => new Set(prev).add(id));
  };

  const progress = visitedStations.size;
  const total = STATIONS.length;

  return (
    <div className="pb-24 max-w-2xl mx-auto bg-slate-900 min-h-screen font-sans">
      {/* Header / Progress Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/90 border-b border-cyan-500/30 shadow-lg shadow-cyan-900/20">
        <div className="px-4 py-4">
          <div className="flex justify-between items-end mb-2">
            <h1 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <Map className="w-5 h-5 text-cyan-400" />
              任務地圖：記憶碎片
            </h1>
            <span className="font-mono text-cyan-400 text-sm font-bold">
              {progress} / {total} COLLECTED
            </span>
          </div>
          {/* Progress Bar */}
          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700">
            <div 
              className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-all duration-700 ease-out"
              style={{ width: `${(progress / total) * 100}%` }}
            />
          </div>
        </div>
      </header>

      <div className="p-6 space-y-8 relative min-h-[60vh]">
        {/* Route Line */}
        <div className="absolute left-[42px] top-10 bottom-20 w-1 bg-slate-800 border-x border-slate-700 pointer-events-none z-0">
          <div 
            className="w-full bg-gradient-to-b from-emerald-500 via-cyan-500 to-slate-800 transition-all duration-1000"
            style={{ height: `${(progress / total) * 100}%` }} 
          />
        </div>

        {/* Stations List */}
        <div className="space-y-6 relative z-10">
          {STATIONS.map((station, index) => {
            const isVisited = visitedStations.has(station.id);
            // Station is active if it's the first one, or if previous one is visited, or if itself is visited
            const isUnlocked = index === 0 || visitedStations.has(STATIONS[index - 1].id) || isVisited;

            return (
              <div key={station.id} className="relative pl-14">
                {/* Map Pin / Node */}
                <div className={`absolute left-0 top-6 w-12 h-12 -ml-1 rounded-full border-4 flex items-center justify-center bg-slate-900 transition-all duration-500 z-20
                  ${isVisited 
                    ? 'border-emerald-500 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.5)] scale-110' 
                    : isUnlocked 
                      ? 'border-cyan-500/50 text-cyan-400 animate-pulse shadow-[0_0_15px_rgba(6,182,212,0.3)]' 
                      : 'border-slate-700 text-slate-600 grayscale'}`}
                >
                  <span className="font-mono font-bold text-lg">{station.id}</span>
                </div>

                <ARCard 
                  station={station} 
                  isVisited={isVisited} 
                  isUnlocked={isUnlocked}
                  onVisit={() => handleVisit(station.id)}
                />
              </div>
            );
          })}
        </div>

        {/* Completion Message */}
        {progress === total && (
          <div className="text-center py-8 animate-pulse text-emerald-400 font-bold font-mono border-t border-emerald-900/50 mt-8">
            <Zap className="w-8 h-8 mx-auto mb-2" />
            <div>MISSION COMPLETE</div>
            <div className="text-xs text-emerald-600">ALL FRAGMENTS RESTORED</div>
          </div>
        )}
      </div>

      {/* Footer / Survey */}
      <div className="px-4 pb-8">
        <MissionDebrief visitedCount={progress} />
        
        <footer className="text-center text-slate-700 text-[10px] font-mono mt-8">
          <p>NTNU HISTORY DEPT. // CYBER-ARCHAEOLOGY UNIT</p>
          <p>TEMPORAL GPS: ACTIVE // MODE: TOUR</p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;