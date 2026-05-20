import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export default function Page() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
