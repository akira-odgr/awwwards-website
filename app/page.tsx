import Hero from "@/app/pageComponents/Hero";
import About from "./pageComponents/About";
import Works from "./pageComponents/Works";
import Projects from "./pageComponents/Projects";
import Process from "./pageComponents/Process";
import Awards from "./pageComponents/Awards";
import Testimonials from "./pageComponents/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Works />
      <Projects />
      <Process />
      <Awards />
      <Testimonials />
    </>
  );
}
