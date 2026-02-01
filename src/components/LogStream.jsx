import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { personalData } from '../data/content';
import { Terminal, Clock, AlertCircle, Github, ExternalLink } from 'lucide-react';

const LogItem = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-12 relative pl-8 border-l border-white/10"
        >
            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-accent rounded-full shadow-[0_0_10px_#00f0ff]" />
            <div className="flex items-center gap-4 mb-2 text-xs text-accent/80 font-mono">
                <span className="flex items-center gap-1"><Clock size={12} /> {item.period || "TIMESTAMP_UNKNOWN"}</span>
                <span className="text-white/30">:: LOG_ID_{index + 101}</span>
            </div>

            <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-white tracking-tight group cursor-pointer">
                    <span className="text-accent mr-2">{`>`}</span>
                    {item.title}
                </h3>
                <div className="flex gap-3">
                    {item.repo && (
                        <a href={item.repo} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-accent transition-colors" title="View Source">
                            <Github size={18} />
                        </a>
                    )}
                    {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-accent transition-colors" title="Live Demo">
                            <ExternalLink size={18} />
                        </a>
                    )}
                </div>
            </div>

            <div className="bg-white/5 p-4 rounded-sm border border-white/10 backdrop-blur-sm hover:border-accent/50 transition-colors">
                <code className="text-sm text-white/70 block mb-4">
                    {`// SYSTEM_ANALYSIS:`}
                </code>
                <ul className="space-y-2 text-sm text-gray-300 font-mono">
                    {item.description.map((desc, i) => (
                        <li key={i} className="flex gap-2">
                            <span className="text-accent/50">[{i}]</span>
                            {desc}
                        </li>
                    ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                    {item.tech.map(t => (
                        <span key={t} className="px-2 py-1 text-[10px] border border-accent/20 text-accent rounded bg-accent/5">
                            {t.toUpperCase()}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const LogStream = () => {
    return (
        <section className="min-h-screen py-32 px-6 md:px-20 relative z-10">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-16 border-b border-white/10 pb-4">
                    <Terminal className="text-accent animate-pulse" />
                    <h2 className="text-3xl font-bold text-white tracking-widest">SYSTEM_LOGS</h2>
                    <div className="flex-1 bg-white/5 h-px"></div>
                    <span className="text-xs text-white/40">SCROLL_TO_DECRYPT</span>
                </div>

                <div className="space-y-4">
                    {personalData.projects.map((project, index) => (
                        <LogItem key={index} item={project} index={index} />
                    ))}
                </div>

                <div className="mt-20 text-center text-xs text-white/30 animate-pulse">
                    END_OF_STREAM
                </div>
            </div>
        </section>
    );
};

export default LogStream;
