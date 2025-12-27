import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export const metadata = {
    title: 'Spirit Fingers | Greg Spero',
    description: 'The official landing page for Spirit Fingers, led by pianist Greg Spero.',
};

export default function SpiritFingersPage() {
    return (
        <div className="bg-background min-h-screen">
            <Navbar />

            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                >
                    {/* Placeholder video - Ideally utilize a local asset if available or keep external */}
                    <source src="https://video.wixstatic.com/video/92ceff_ee4060aca62d461eac66459a35e9d944/1080p/mp4/file.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                <div className="relative z-10 flex flex-col items-center text-center p-4">
                    <h1 className="text-7xl md:text-9xl font-bold font-heading uppercase tracking-tighter mb-4 text-white drop-shadow-2xl">
                        Spirit<br />Fingers
                    </h1>
                    <div className="flex gap-6 mt-8">
                        <a href="https://open.spotify.com/album/2hnXyiBgYmjKm773tj7qm9?si=PXCkPlNJQ1mC_MvP914dhw" target="_blank" rel="noopener noreferrer" className="btn btn-primary bg-white text-black hover:bg-accent hover:text-white border-transparent px-8 py-4">
                            Listen to Spirit Fingers
                        </a>
                    </div>
                </div>
            </section>

            <section className="container section py-24">
                {/* The Quartet */}
                <div className="grid md:grid-cols-2 gap-16 items-start mb-32">
                    <div>
                        <h2 className="text-4xl font-bold font-heading mb-6">The Quartet</h2>
                        <p className="text-xl text-muted leading-relaxed mb-6">
                            Spirit Fingers is a quartet that is redefining modern jazz. Blending complex rhythms with soaring melodies, Spirit Fingers creates a sonic landscape that is both intellectually stimulating and viscerally exciting.
                        </p>
                        <a
                            href="https://www.youtube.com/watch?v=b3J0sS_XLAA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline border-white text-white hover:bg-white hover:text-black"
                        >
                            Watch Performance
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { name: 'Greg Spero', role: 'Piano' },
                            { name: 'Hadrien Feraud', role: 'Bass' },
                            { name: 'Mike Mitchell', role: 'Drums' },
                            { name: 'Dario Chiazzolino', role: 'Guitar' }
                        ].map((member) => (
                            <div key={member.name} className="aspect-square bg-white/5 rounded-lg border border-white/10 flex flex-col items-center justify-center p-4 text-center hover:bg-white/10 transition-colors group">
                                <span className="text-accent text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </span>
                                <h3 className="font-bold text-lg leading-tight mb-1">{member.name}</h3>
                                <p className="text-xs text-muted uppercase tracking-widest">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* London Crew */}
                <div className="grid md:grid-cols-2 gap-16 items-start mb-32">
                    <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
                        {[
                            { name: 'Greg Spero', role: 'Piano' },
                            { name: 'Matt May', role: 'Bass' },
                            { name: 'Lox', role: 'Drums' },
                            { name: 'Ben Glasser', role: 'Guitar' }
                        ].map((member) => (
                            <div key={member.name} className="aspect-square bg-white/5 rounded-lg border border-white/10 flex flex-col items-center justify-center p-4 text-center hover:bg-white/10 transition-colors group">
                                <span className="text-blue-400 text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </span>
                                <h3 className="font-bold text-lg leading-tight mb-1">{member.name}</h3>
                                <p className="text-xs text-muted uppercase tracking-widest">{member.role}</p>
                            </div>
                        ))}
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-4xl font-bold font-heading mb-6">London Crew</h2>
                        <p className="text-xl text-muted leading-relaxed mb-8">
                            The UK chapter of the Spirit Fingers legacy. A distinct energetic interpretation of the project's complex rhythmic architecture, featuring some of London's finest musicians.
                        </p>
                        <a
                            href="https://ukjazznews.com/greg-speros-spirit-fingers-london-crew-at-91-living-room/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline border-white text-white hover:bg-white hover:text-black"
                        >
                            Read Review
                        </a>
                    </div>
                </div>

                {/* The Trio */}
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl font-bold font-heading mb-6">The Trio</h2>
                        <p className="text-xl text-muted leading-relaxed mb-8">
                            A powerhouse trio formation stripping the music down to its most raw and explosive core. Featuring the virtuoso talents of Mohini Dey and Mike Mitchell.
                        </p>
                        <a
                            href="https://www.instagram.com/reel/DQM-jpIkpOt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-400 font-bold tracking-wider uppercase"
                        >
                            Watch on Instagram &rarr;
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { name: 'Greg Spero', role: 'Piano' },
                            { name: 'Mohini Dey', role: 'Bass' },
                            { name: 'Mike Mitchell', role: 'Drums' },
                        ].map((member) => (
                            <div key={member.name} className="aspect-square bg-white/5 rounded-lg border border-white/10 flex flex-col items-center justify-center p-4 text-center hover:bg-white/10 transition-colors group">
                                <span className="text-pink-500 text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </span>
                                <h3 className="font-bold text-lg leading-tight mb-1">{member.name}</h3>
                                <p className="text-xs text-muted uppercase tracking-widest">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
