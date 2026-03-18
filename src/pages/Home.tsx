import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="bg-background min-h-screen scroll-smooth">
      <section id="home">
        <Hero />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <Footer />
    </main>
  );
};

export default Home;
