import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LocationStrip } from "./components/LocationStrip";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { TrustedBy } from "./components/TrustedBy";
import { FAQ } from "./components/FAQ";
import { Blog } from "./components/Blog";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LocationStrip />
        <Work />
        <About />
        <TrustedBy />
        <FAQ />
        <Blog />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
