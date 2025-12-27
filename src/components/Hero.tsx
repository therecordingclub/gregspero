"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-20">
            {/* Background Video Placeholder - Replacing static src with local or reliable one if possible, keeping wix link for now but refactoring style */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
                src="https://video.wixstatic.com/video/92ceff_ee4060aca62d461eac66459a35e9d944/1080p/mp4/file.mp4"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background z-10" />

            <div className="container relative z-20 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-4 text-white">
                        Greg Spero
                    </h1>
                    <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl font-light uppercase tracking-[0.2em] text-gray-300 mb-12 max-w-2xl"
                >
                    Visionary Pianist & Tech Entrepreneur
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <Link href="#bio" className="btn btn-primary group">
                        Experience
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
