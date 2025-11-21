import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Radar, Terminal, MapPin } from 'lucide-react';
import { LogEntry } from '../types';

interface ScannerProps {
  onComplete: () => void;
}

const Scanner: React.FC<ScannerProps> = ({ onComplete }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const logContainerRef = useRef<HTMLDivElement>(null);

  const startScan = async () => {
    setIsScanning(true);
    
    const messages = [
      "Initializing temporal sensors...",
      "Connecting to satellite (GPS-III)...",
      "Triangulating NTNU Campus grid...",
      "Analyzing soil composition...",
      "Signal Detected: Wulixue Canal Branch 2 (1724 A.D.)",
      "Location Confirmed: The Lost 'Cheng River'."
    ];

    for (let i = 0; i < messages.length; i++) {
      await new Promise(r => setTimeout(r, i === messages.length - 1 ? 1000 : 600));
      setLogs(prev => [...prev, { id: Date.now(), text: messages[i] }]);
    }

    await new Promise(r => setTimeout(r, 800));
    onComplete();
  };

  // Auto-scroll logs
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full p-6 bg-slate-900 text-cyan-400 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}>
      </div>

      <div className="z-10 flex flex-col items-center max-w-md w-full space-y-8">
        
        {/* Radar Visual */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-cyan-500/30 border-t-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.2)]"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-4 rounded-full border border-dashed border-cyan-500/20"
          />
          
          {!isScanning ? (
            <Radar className="w-16 h-16 text-cyan-400" />
          ) : (
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              <MapPin className="w-16 h-16 text-amber-500" />
            </motion.div>
          )}

          {/* Scanning Line */}
          {isScanning && (
            <motion.div 
              className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
              animate={{ top: ['0%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          )}
        </div>

        {/* Main Text */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold font-mono tracking-wider text-slate-100 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
            {isScanning ? "掃描中..." : "SYSTEM READY"}
          </h1>
          <p className="text-cyan-300/80 text-sm font-mono">
            {isScanning ? "正在搜尋歷史訊號..." : "等待啟動指令"}
          </p>
        </div>

        {/* Terminal Output */}
        {isScanning && (
          <div 
            ref={logContainerRef}
            className="w-full h-32 bg-black/50 border border-cyan-500/30 rounded p-3 font-mono text-xs overflow-y-auto custom-scrollbar backdrop-blur-sm"
          >
            {logs.map((log) => (
              <div key={log.id} className="mb-1 text-emerald-400">
                <span className="text-cyan-600 mr-2">{`>`}</span>
                {log.text}
              </div>
            ))}
            <div className="animate-pulse text-emerald-400">_</div>
          </div>
        )}

        {/* Action Button */}
        {!isScanning && (
          <button
            onClick={startScan}
            className="group relative px-8 py-4 bg-cyan-500/10 border border-cyan-500 text-cyan-400 font-bold tracking-widest uppercase rounded hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]"
          >
            <span className="flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              啟動時光定位
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Scanner;