import React from 'react';
import ThreeGraph from './ThreeGraph';
import { motion } from 'framer-motion';
import { personalData } from '../data/content';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <ThreeGraph />

            {/* Overlay Content */}
            <div className="relative z-10 text-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mb-6"
                >
                    <h2 className="text-accent text-sm tracking-[0.5em] mb-2 uppercase">System Architect</h2>
                    <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mix-blend-difference">
                        BLUEPRINT
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col items-center gap-4"
                >
                    <div className="h-px w-32 bg-accent/50"></div>
                    <p className="font-mono text-sm text-white/70 max-w-md mx-auto">
                        Initializing secure, scalable infrastructure...<br />
                        Loading modules: [Spring Boot, Microservices, AI]
                    </p>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-accent to-transparent animate-pulse"></div>
            </div>
        </section>
    );
};

export default Hero;
