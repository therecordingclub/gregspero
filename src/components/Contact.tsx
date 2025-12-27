"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, Youtube, Twitter, Disc } from "lucide-react";

export default function Contact() {
    const socials = [
        { name: 'Instagram', icon: <Instagram />, href: 'https://instagram.com/gregspero' },
        { name: 'YouTube', icon: <Youtube />, href: 'https://youtube.com/gregspero' },
        { name: 'Spotify', icon: <Disc />, href: 'https://open.spotify.com/artist/2vVjFwWd2Q4Q4Q4Q4Q4Q4Q' },
        { name: 'Twitter', icon: <Twitter />, href: 'https://twitter.com/gregspero' },
    ];

    return (
        <section id="contact" className="section container py-32 text-center border-t border-white/5">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Get in Touch</h2>
                <p className="text-xl text-muted mb-12 max-w-xl mx-auto">
                    For booking, collaboration, or press inquiries, please reach out via email.
                </p>

                <a
                    href="mailto:info@gregspero.com"
                    className="btn btn-primary bg-white text-black hover:bg-white/90 hover:text-black border-transparent rounded-full px-12 py-4 text-lg inline-flex"
                >
                    <Mail className="mr-3" />
                    Say Hello
                </a>

                <div className="mt-20 flex justify-center gap-8 flex-wrap">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-accent transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                <footer className="mt-20 text-sm text-white/20">
                    &copy; {new Date().getFullYear()} Greg Spero. All rights reserved.
                </footer>
            </motion.div>
        </section>
    );
}
