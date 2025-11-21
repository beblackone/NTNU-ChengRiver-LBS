import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Scanner from './components/Scanner';
import Dashboard from './components/Dashboard';
import { ViewState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('scanner');

  return (
    <main className="min-h-screen w-full relative overflow-x-hidden font-sans text-slate-100 bg-slate-900 selection:bg-cyan-500 selection:text-white">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #0e7490 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      <AnimatePresence mode="wait">
        {view === 'scanner' && (
          <motion.div
            key="scanner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 0.8 }}
            className="w-full h-full absolute inset-0"
          >
            <Scanner onComplete={() => setView('dashboard')} />
          </motion.div>
        )}

        {view === 'dashboard' && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full min-h-screen relative z-10"
          >
            <Dashboard />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default App;