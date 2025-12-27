"use client";

import { motion } from "framer-motion";

export default function Bio() {
    return (
        <section id="bio" className="section container py-20 border-t border-white/5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-12"
            >
                <div className="md:col-span-1">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-muted mb-6 sticky top-24">About</h2>
                </div>

                <div className="md:col-span-2 grid gap-8 text-lg font-light leading-relaxed text-gray-300">
                    <p>
                        Greg Spero is a pianist, composer, and entrepreneur bridging the gap between organic creative expression and modern technology.
                    </p>
                    <p>
                        He leads the jazz-fusion supergroup <strong className="text-white font-semibold">Spirit Fingers</strong> and has toured with <strong className="text-white font-semibold">Halsey</strong> and the <strong className="text-white font-semibold">Miles Electric Band</strong>.
                    </p>
                    <p>
                        In the tech world, Greg is the founder of <strong className="text-white font-semibold">Artist AI</strong>, a platform capable of managing the logistical complexities of an artist&apos;s career, and <strong className="text-white font-semibold">The Recording Club</strong> (formerly Tiny Room), a hub for high-fidelity collaboration.
                    </p>
                    <p className="italic text-accent">
                        His work is unified by a single mission: to empower the human spirit through sound and innovation.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
