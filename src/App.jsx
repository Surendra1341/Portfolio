import React from 'react';
import HUD from './components/HUD';
import Hero from './components/Hero';
import LogStream from './components/LogStream';
import TechSkills from './components/TechSkills';
import Organization from './components/Organization';

function App() {
  return (
    <HUD>
      <Hero />
      <TechSkills />
      <Organization />
      <LogStream />

      <footer className="py-20 text-center border-t border-white/10 relative z-10 bg-black">
        <p className="text-white/30 text-xs font-mono">
          SYSTEM SHUTDOWN SEQUENCE INITIATED...<br />
          © {new Date().getFullYear()} ARCHITECT_BLUEPRINT_V1.0
        </p>
      </footer>
    </HUD>
  );
}

export default App;
