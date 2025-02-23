
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
};

export default Index;
