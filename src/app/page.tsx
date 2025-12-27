import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Bio from '../components/Bio';
import Projects from '../components/Projects';
import Tech from '../components/Tech';
import Contact from '../components/Contact';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-accent selection:text-black">
      <Navbar />
      <Hero />
      <Bio />
      <Projects />
      <Tech />
      <Contact />
      <div className="container pb-20">
        <Newsletter />
      </div>
    </main>
  );
}
