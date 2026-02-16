import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { HowItWorks } from "@/components/how-it-works";
import { ChakraGrid } from "@/components/chakra-grid";
import { Preview } from "@/components/preview";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { EmailSignup } from "@/components/email-signup";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Index() {
  return (
    <div className="min-h-screen selection:bg-chakra-crown/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <ChakraGrid />
        <Preview />
        <Testimonials />
        <Pricing />
        <EmailSignup />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
