"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { label: 'Bio', href: '/#bio' },
        { label: 'Music', href: '/music' },
        { label: 'Spirit Fingers', href: '/spirit-fingers' },
        { label: 'Tech', href: '/#tech' },
        { label: 'Contact', href: '/#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'
                }`}
        >
            <div className="container flex justify-between items-center">
                <Link href="/" className="font-heading font-bold text-xl uppercase tracking-tighter hover:opacity-80 transition-opacity">
                    Greg Spero
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 items-center">
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium uppercase tracking-widest text-muted hover:text-accent transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                >
                    {isMobileOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Nav */}
                {isMobileOpen && (
                    <div className="absolute top-full left-0 w-full glass border-b border-white/10 p-6 flex flex-col gap-6 md:hidden h-screen bg-black/95">
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-2xl font-bold uppercase tracking-wider"
                                onClick={() => setIsMobileOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
