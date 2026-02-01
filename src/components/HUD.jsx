import React, { useState, useEffect } from 'react';
import { personalData } from '../data/content';
import { Battery, Wifi, Cpu, Activity } from 'lucide-react';

const HUD = ({ children }) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative min-h-screen bg-background text-white font-mono selection:bg-accent selection:text-black">
            {/* Background Grid */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            {/* Top Left - Identity */}
            <div className="fixed top-6 left-6 z-50 border-l-2 border-accent pl-4">
                <h1 className="text-xl font-bold tracking-tight text-accent">[ {personalData.name} ]</h1>
                <p className="text-xs text-white/70">System Architect // {personalData.role.split('|')[0]}</p>
            </div>

            {/* Top Right - Status */}
            <div className="fixed top-6 right-6 z-50 flex flex-col items-end">
                <div className="flex items-center gap-4 text-xs text-accent">
                    <span className="flex items-center gap-2"><Cpu size={14} /> CORE: ONLINE</span>
                    <span className="flex items-center gap-2"><Wifi size={14} /> NET: SECURE</span>
                    <span className="flex items-center gap-2 text-white">{time}</span>
                </div>
                <div className="w-32 h-1 bg-white/20 mt-2 rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[85%] animate-pulse"></div>
                </div>
            </div>

            {/* Bottom Left - Navigation/Links */}
            <div className="fixed bottom-6 left-6 z-50 flex gap-6 text-xs">
                {personalData.links.map((link) => (
                    <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-2 group">
                        <span className="opacity-50 group-hover:opacity-100">{`>`}</span>
                        {link.label}
                    </a>
                ))}
            </div>

            {/* Bottom Right - Metrics */}
            <div className="fixed bottom-6 right-6 z-50 text-right text-[10px] text-white/40 leading-tight">
                <p>MEM_USAGE: 4096MB</p>
                <p>RENDER: THREE.JS_R160</p>
                <p>LATENCY: 12ms</p>
            </div>

            {/* Main Content Area */}
            <main className="relative z-10 w-full min-h-screen flex flex-col">
                {children}
            </main>
        </div>
    );
};

export default HUD;
