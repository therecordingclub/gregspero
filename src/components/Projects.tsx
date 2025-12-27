"use client";

import { motion } from "framer-motion";
import { ArrowRight, Music, Mic2, Cpu } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        category: "Music",
        title: "Spirit Fingers",
        desc: "A jazz-fusion supergroup merging cerebral harmony with visceral rhythm.",
        link: "/spirit-fingers",
        icon: <Music className="w-8 h-8 text-accent" />
    },
    {
        category: "Compositions",
        title: "Solo Piano",
        desc: "Intimate, melodic, and harmonically rich solo piano works.",
        link: "/music",
        icon: <Music className="w-8 h-8 text-white" />
    }
];

export default function Projects() {
    return (
        <section id="works" className="section container py-20 border-t border-white/5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-muted mb-2 pl-2">Selected Works</h2>
                <div className="h-px w-full bg-white/10" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group bg-card border border-white/5 hover:border-accent/40 p-8 flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5 rounded-xl"
                    >
                        <div className="mb-6 flex justify-between items-start">
                            <span className="text-xs font-bold uppercase tracking-wider text-muted">{p.category}</span>
                            <div className="bg-white/5 p-2 rounded-lg group-hover:bg-accent/10 transition-colors">
                                {p.icon}
                            </div>
                        </div>

                        <h3 className="text-3xl font-bold mb-4 font-heading group-hover:text-accent transition-colors">
                            {p.title}
                        </h3>

                        <p className="text-muted text-lg mb-8 leading-relaxed flex-grow">
                            {p.desc}
                        </p>

                        <Link
                            href={p.link}
                            className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white hover:text-accent transition-colors pb-1 border-b border-transparent hover:border-accent w-fit"
                        >
                            Explore <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
