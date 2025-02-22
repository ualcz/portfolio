
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navigation  from "@/components/Navigation";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navigation/>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
};

export default Index;
