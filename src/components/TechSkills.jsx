import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/content';
import { Cpu, Database, Server, Code, Terminal } from 'lucide-react';

const CategoryCard = ({ title, skills, icon: Icon, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="bg-black/40 border border-white/10 p-6 backdrop-blur-sm hover:border-accent/40 transition-colors group"
        >
            <div className="flex items-center gap-3 mb-6">
                <Icon className="text-accent" size={20} />
                <h3 className="text-lg font-bold text-white tracking-widest uppercase">{title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                    <div key={i} className="relative group/skill cursor-default">
                        <div className="px-3 py-1.5 bg-white/5 border border-white/10 text-xs text-white/70 font-mono hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all">
                            {skill}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/5 flex justify-between text-[10px] text-white/30 font-mono">
                <span>MEM_ALLOC: {Math.floor(Math.random() * 512 + 128)}MB</span>
                <span className="group-hover:text-accent transition-colors">STATUS: ACTIVE</span>
            </div>
        </motion.div>
    );
};

const TechSkills = () => {
    return (
        <section className="min-h-screen py-32 px-6 md:px-20 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <Cpu className="text-accent animate-spin-slow" />
                    <h2 className="text-3xl font-bold text-white tracking-widest">KERNEL_CAPABILITIES</h2>
                    <div className="h-px bg-white/10 flex-1"></div>
                    <span className="text-xs text-white/40">SYS_DIAGNOSTICS</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <CategoryCard
                        title="Languages"
                        skills={personalData.skills.languages}
                        icon={Code}
                        delay={0.1}
                    />
                    <CategoryCard
                        title="Frameworks & Tools"
                        skills={personalData.skills.frameworks}
                        icon={Server}
                        delay={0.2}
                    />
                    <CategoryCard
                        title="Databases"
                        skills={personalData.skills.databases}
                        icon={Database}
                        delay={0.3}
                    />
                    <CategoryCard
                        title="Core Concepts"
                        skills={personalData.skills.concepts}
                        icon={Terminal}
                        delay={0.4}
                    />
                </div>

                <div className="mt-12 p-4 bg-accent/5 border border-accent/20 rounded text-xs font-mono text-accent/80">
                    <p>{`> SYSTEM_NOTE: Continuous integration of new modules in progress...`}</p>
                </div>
            </div>
        </section>
    );
};

export default TechSkills;
