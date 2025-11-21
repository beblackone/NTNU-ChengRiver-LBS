import React from 'react';
import { MapPin } from 'lucide-react';
import ARCard from './ARCard';
import MapGallery from './MapGallery';
import ArchiveSection from './ArchiveSection';
import MissionDebrief from './MissionDebrief';

const Dashboard: React.FC = () => {
  return (
    <div className="pb-12 max-w-2xl mx-auto bg-slate-900 min-h-screen">
      {/* Header / Status Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/80 border-b border-cyan-500/30 px-4 py-4 shadow-lg shadow-cyan-900/20">
        <div className="flex items-center gap-2 text-cyan-400 animate-pulse">
          <MapPin className="w-5 h-5" />
          <span className="font-mono text-sm font-bold tracking-widest uppercase">Location Confirmed</span>
        </div>
        <h1 className="text-xl font-bold text-slate-100 mt-1">已抵達：霧裡薛圳第二支線遺址</h1>
      </header>

      <div className="p-4 space-y-8">
        {/* 1. Hero Card (AR Trigger) */}
        <section>
          <ARCard />
        </section>

        {/* 2. Historical Maps Gallery */}
        <section>
          <div className="flex items-center gap-2 mb-4 border-l-4 border-cyan-500 pl-3">
            <h2 className="text-xl font-bold text-slate-100">地圖圖層解碼</h2>
            <span className="text-xs px-2 py-0.5 rounded bg-cyan-900/50 text-cyan-300 border border-cyan-700">EVIDENCE</span>
          </div>
          <MapGallery />
        </section>

        {/* 3. The "Cheng River" Archives */}
        <section>
          <div className="flex items-center gap-2 mb-4 border-l-4 border-amber-500 pl-3">
            <h2 className="text-xl font-bold text-slate-100">機密檔案</h2>
            <span className="text-xs px-2 py-0.5 rounded bg-amber-900/50 text-amber-300 border border-amber-700">CLASSIFIED</span>
          </div>
          <ArchiveSection />
        </section>

        {/* 4. Survey CTA */}
        <section className="pt-4">
          <MissionDebrief />
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-600 text-xs font-mono mt-12 pb-8">
          <p>NTNU HISTORY DEPT. // CYBER-ARCHAEOLOGY UNIT</p>
          <p>SYS.VER.2.0.45 // TERMINAL: ACTIVE</p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;