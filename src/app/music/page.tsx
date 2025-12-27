import Link from 'next/link';
import Navbar from '../../components/Navbar';

export const metadata = {
    title: 'Music | Greg Spero',
    description: 'The musical career of Greg Spero: Spirit Fingers, Halsey, Miles Electric Band, and The Recording Club.',
};

export default function MusicPage() {
    return (
        <div className="bg-background min-h-screen">
            <Navbar />

            {/* Hero */}
            <header className="h-[50vh] flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-black/90 to-background border-b border-white/5 pt-20">
                <h1 className="text-6xl md:text-8xl font-bold font-heading mb-4 tracking-tighter">Music</h1>
                <p className="text-xl md:text-2xl text-muted tracking-widest uppercase">Pianist • Composer • Producer</p>
            </header>

            {/* Spotify Embed */}
            <section className="container section py-20">
                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1 border-l-2 border-accent pl-6">
                        <h2 className="text-3xl font-bold font-heading mb-4">Latest Releases</h2>
                        <p className="text-muted leading-relaxed mb-8">
                            Stream the latest tracks from Greg Spero, Spirit Fingers, solo piano works, and collaborations.
                            Included here are the brand new 2025 releases <strong>POP-OLOGY</strong> and <strong>Journeys</strong>.
                        </p>
                    </div>
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                        <iframe
                            className="rounded-xl w-full hover:shadow-2xl hover:shadow-accent/5 transition-all"
                            src="https://open.spotify.com/embed/album/0gLBOn5Qq3BlzgyzF9SDcJ?utm_source=generator&theme=0"
                            height="380"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                        <iframe
                            className="rounded-xl w-full hover:shadow-2xl hover:shadow-accent/5 transition-all"
                            src="https://open.spotify.com/embed/album/6UbOXgzwEvCW12WHDwSqr3?utm_source=generator&theme=0"
                            height="380"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Spirit Fingers Feature */}
            <section id="spirit-fingers" className="relative h-[80vh] flex items-center overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
                >
                    <source src="https://video.wixstatic.com/video/92ceff_ee4060aca62d461eac66459a35e9d944/1080p/mp4/file.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

                <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-6xl md:text-8xl font-bold font-heading mb-6 text-white leading-none">
                            Spirit<br />Fingers
                        </h2>
                        <p className="text-xl text-gray-200 mb-8 max-w-lg leading-relaxed shadow-black drop-shadow-md">
                            A jazz-fusion supergroup merging cerebral harmony with visceral rhythm.
                            Featuring Dario Chiazzolino, Hadrien Feraud, and Mike Mitchell.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://open.spotify.com/album/6UbOXgzwEvCW12WHDwSqr3" target="_blank" rel="noopener noreferrer" className="btn btn-primary bg-white text-black hover:bg-accent hover:text-white border-transparent">
                                Listen to PEACE
                            </a>
                            <a href="/spirit-fingers" className="btn btn-primary bg-transparent border-white text-white hover:bg-white hover:text-black">
                                Explore Band
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Collaborations */}
            <section className="container section py-20">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-muted mb-12 text-center">Collaborations</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-card p-10 border border-white/5 rounded-xl flex flex-col items-center text-center group hover:border-accent/40 transition-colors">
                        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                            <span className="text-3xl font-bold text-accent">H</span>
                        </div>
                        <h3 className="text-3xl font-bold font-heading mb-4">Halsey</h3>
                        <p className="text-muted leading-relaxed">
                            Served as Halsey&apos;s pianist, keyboardist, and sound designer for 4 years (2014-2018).
                            Performed at Madison Square Garden, The Forum, and on SNL, designing the sonic landscape for her live shows.
                        </p>
                    </div>
                    <div className="bg-card p-10 border border-white/5 rounded-xl flex flex-col items-center text-center group hover:border-accent/40 transition-colors">
                        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                            <span className="text-3xl font-bold text-white">M</span>
                        </div>
                        <h3 className="text-3xl font-bold font-heading mb-4">Miles Electric Band</h3>
                        <p className="text-muted leading-relaxed">
                            Touring keyboardist for the official Miles Davis estate project.
                            Performing the electric era music of Miles Davis alongside alumni and modern jazz legends.
                        </p>
                    </div>
                </div>
            </section>

            {/* The Recording Club */}
            <section className="bg-black/50 py-20 border-t border-white/5">
                <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <h2 className="text-4xl font-bold font-heading mb-2">The Recording Club</h2>
                        <p className="text-muted text-lg">High-fidelity live sessions and remote collaboration hub in Los Angeles.</p>
                    </div>
                    <a href="https://therecording.club" target="_blank" className="btn btn-outline border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 rounded-full transition-all">
                        Visit The Recording Club
                    </a>
                </div>
            </section>

            {/* Tiny Room Sessions */}
            <section className="container section py-20">
                <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <h2 className="text-3xl font-bold font-heading mb-4">Tiny Room Sessions</h2>
                        <p className="text-muted">Intimate performances captured in high definition from the Tiny Room.</p>
                    </div>
                    <a
                        href="https://open.spotify.com/playlist/5EaGpmKbo0bZmHlXJ8bJFL?si=a140f06618894f32"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline border-white text-white hover:bg-white hover:text-black transition-all"
                    >
                        Listen on Spotify
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="aspect-video bg-card rounded-lg overflow-hidden border border-white/5 group">
                        <iframe
                            src="https://www.youtube.com/embed/C8m1wyOSPGA"
                            title="Greg Spero - The Tip"
                            className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="aspect-video bg-card rounded-lg overflow-hidden border border-white/5 group">
                        <iframe
                            src="https://www.youtube.com/embed/T5mtXgN7xGU"
                            title="Spirit Fingers - Find"
                            className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="aspect-video bg-card rounded-lg overflow-hidden border border-white/5 group">
                        <iframe
                            src="https://www.youtube.com/embed/8oJNBRhmWJ8"
                            title="MonoNeon & Spero"
                            className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}
