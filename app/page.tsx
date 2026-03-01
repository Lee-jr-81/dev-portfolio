import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { MyFocus } from "./components/MyFocus";
import { TrustedBy } from "./components/TrustedBy";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <MyFocus />
        <TrustedBy />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
