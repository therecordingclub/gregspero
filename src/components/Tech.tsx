"use client";

import { motion } from "framer-motion";
import { Cpu, Mic2, ArrowRight } from "lucide-react";
import Link from "next/link";

const techProjects = [
    {
        title: "Artist AI",
        desc: "The world's first AI artist manager. Streamlining logistics to empower pure creativity.",
        link: "https://www.joinartistai.com/",
        icon: <Cpu className="w-12 h-12 text-purple-400" />
    },
    {
        title: "The Recording Club",
        desc: "High-fidelity remote collaboration and live sessions. (formerly Tiny Room)",
        link: "https://therecording.club",
        icon: <Mic2 className="w-12 h-12 text-blue-400" />
    }
];

export default function Tech() {
    return (
        <section id="tech" className="section container py-20 border-t border-white/5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tighter">Technology</h2>
                <div className="h-1 w-24 bg-accent rounded-full mb-8" />
                <p className="text-xl text-muted max-w-2xl leading-relaxed">
                    Greg Spero builds tools that empower artists. Bridging the gap between creative expression and logistical efficiency.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {techProjects.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-card border border-white/5 p-10 rounded-xl hover:border-accent/40 transition-colors group"
                    >
                        <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-accent/10 transition-colors">
                            {p.icon}
                        </div>
                        <h3 className="text-3xl font-bold mb-4 font-heading">{p.title}</h3>
                        <p className="text-muted text-lg mb-8 leading-relaxed">
                            {p.desc}
                        </p>
                        <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white hover:text-accent transition-colors"
                        >
                            Visit Website <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
