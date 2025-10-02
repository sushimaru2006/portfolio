import Hero from '@/components/Hero';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import Works from '@/components/Works';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Timeline />
      <Works />
      <Skills />
    </main>
  );
}
