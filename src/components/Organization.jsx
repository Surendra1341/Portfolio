import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/content';
import { Users, Globe, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

const Organization = () => {
    const { organization } = personalData;

    return (
        <section className="py-32 px-6 md:px-20 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <Users className="text-accent animate-pulse" />
                    <h2 className="text-3xl font-bold text-white tracking-widest leading-none">
                        AFFILIATION <span className="block text-sm text-accent tracking-normal mt-2 opacity-50">PARTNER_NETWORK</span>
                    </h2>
                    <div className="h-px bg-white/10 flex-1"></div>
                </div>

                <div className="relative group">
                    {/* Decorative Background */}
                    <div className="absolute inset-0 bg-accent/5 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full"></div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative bg-black/40 border border-white/10 p-8 md:p-12 overflow-hidden backdrop-blur-sm"
                    >
                        {/* Dynamic Grid Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-5xl font-bold text-white mb-2 tracking-tighter">
                                    {organization.title.toUpperCase()}
                                </h3>
                                <p className="text-accent text-sm font-mono mb-6 border-l-2 border-accent pl-4">
                                    {organization.role}
                                </p>

                                <p className="text-white/70 mb-8 leading-relaxed max-w-lg">
                                    {organization.description}
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    {organization.links.map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 border border-white/20 bg-white/5 hover:bg-accent hover:border-accent hover:text-black transition-all flex items-center gap-2 group/btn"
                                        >
                                            {link.label === 'Website' ? <Globe size={18} /> : <ExternalLink size={18} />}
                                            <span className="text-sm font-bold tracking-wider">{link.label.toUpperCase()}</span>
                                            <ExternalLink size={14} className="opacity-50 group-hover/btn:opacity-100" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="p-6 border border-white/10 bg-black/20 hover:border-accent/40 transition-colors">
                                    <h4 className="flex items-center gap-2 text-white font-bold mb-2">
                                        <Zap size={16} className="text-accent" /> SYSTEM_MISSION
                                    </h4>
                                    <p className="text-sm text-white/50 italic">"{organization.mission}"</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {organization.stats.map((stat, i) => (
                                        <div key={i} className="p-4 border border-white/10 bg-black/20">
                                            <div className="text-3xl font-mono text-white mb-1">{stat.value}</div>
                                            <div className="text-[10px] text-accent tracking-widest">{stat.label.toUpperCase()}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Organization;
