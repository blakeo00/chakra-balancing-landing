import { motion } from "framer-motion";
import { 
  Check, 
  ChevronRight, 
  Sparkles, 
  Zap, 
  Shield, 
  Heart, 
  MessageCircle, 
  Eye, 
  Crown as CrownIcon, 
  ArrowRight,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const chakras = [
  {
    name: "Root",
    sanskrit: "Muladhara",
    color: "bg-chakra-root",
    textColor: "text-chakra-root",
    description: "The foundation of the entire chakra system, representing stability, security, and our basic needs.",
    focus: "Grounding & Survival",
    icon: Shield,
  },
  {
    name: "Sacral",
    sanskrit: "Svadhisthana",
    color: "bg-chakra-sacral",
    textColor: "text-chakra-sacral",
    description: "The center of our creativity, emotional intelligence, and sexual energy.",
    focus: "Creativity & Emotion",
    icon: Sparkles,
  },
  {
    name: "Solar Plexus",
    sanskrit: "Manipura",
    color: "bg-chakra-solar",
    textColor: "text-chakra-solar",
    description: "Your source of personal power, self-esteem, and the ability to be confident and in control.",
    focus: "Confidence & Power",
    icon: Zap,
  },
  {
    name: "Heart",
    sanskrit: "Anahata",
    color: "bg-chakra-heart",
    textColor: "text-chakra-heart",
    description: "The bridge between upper and lower chakras, representing love, compassion, and connection.",
    focus: "Love & Compassion",
    icon: Heart,
  },
  {
    name: "Throat",
    sanskrit: "Vishuddha",
    color: "bg-chakra-throat",
    textColor: "text-chakra-throat",
    description: "The center of communication, self-expression, and the ability to speak your truth.",
    focus: "Truth & Expression",
    icon: MessageCircle,
  },
  {
    name: "Third Eye",
    sanskrit: "Ajna",
    color: "bg-chakra-thirdeye",
    textColor: "text-chakra-thirdeye",
    description: "The seat of intuition and the ability to see the big picture beyond the physical world.",
    focus: "Intuition & Wisdom",
    icon: Eye,
  },
  {
    name: "Crown",
    sanskrit: "Sahasrara",
    color: "bg-chakra-crown",
    textColor: "text-chakra-crown",
    description: "The highest chakra representing spiritual connection, enlightenment, and universal consciousness.",
    focus: "Spirituality & Bliss",
    icon: CrownIcon,
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/3ea184ee-79fb-47ef-adf6-f506a10b36a9.png" alt="Mindquest Studios" className="w-10 h-10 object-contain" />
          <span className="font-serif text-xl font-bold tracking-tight">Mindquest Studios</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#how-it-works" className="hover:text-chakra-thirdeye transition-colors">How it Works</a>
          <a href="#chakras" className="hover:text-chakra-thirdeye transition-colors">The 7 Chakras</a>
          <a href="#pricing" className="hover:text-chakra-thirdeye transition-colors">Pricing</a>
          <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">Get Started</Button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border p-4 flex flex-col gap-4 shadow-xl"
        >
          <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-lg font-medium">How it Works</a>
          <a href="#chakras" onClick={() => setIsOpen(false)} className="text-lg font-medium">The 7 Chakras</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="text-lg font-medium">Pricing</a>
          <Button className="w-full">Get Started</Button>
        </motion.div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
                <img src="/3ea184ee-79fb-47ef-adf6-f506a10b36a9.png" alt="Mindquest Studios" className="w-10 h-10 object-contain" />
                <div className="flex flex-col">
                  <span className="font-serif text-sm font-bold tracking-tight leading-none">Mindquest Studios</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Holistic Wellness</span>
                </div>
              </div>
              <Badge variant="secondary" className="mb-4 px-4 py-1 text-chakra-thirdeye bg-chakra-thirdeye/10 border-chakra-thirdeye/20 uppercase tracking-wider text-[10px] font-bold">
                Unlock Your Inner Potential
              </Badge>
              <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
                Balance Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-chakra-root via-chakra-heart to-chakra-crown">Vibrant Energy</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                A comprehensive 7-day journey to realign your body, mind, and spirit through ancient wisdom and modern practice.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button size="lg" className="px-8 py-6 text-lg rounded-full group">
                  Begin the Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-full">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 flex justify-center"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-chakra-root/20 via-chakra-heart/20 to-chakra-crown/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <div className="relative flex gap-4 md:gap-8 items-end">
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="w-48 md:w-64 bg-white rounded-xl shadow-2xl overflow-hidden transform -rotate-6 border border-border"
                  >
                    <img src="./guide_cover.png" alt="Program Guide" className="w-full h-auto" />
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="w-48 md:w-64 bg-white rounded-xl shadow-2xl overflow-hidden transform rotate-6 border border-border"
                  >
                    <img src="./cookbook_cover.png" alt="Cookbook Cover" className="w-full h-auto" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
              {[...Array(7)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/5"
                  style={{ 
                    width: `${(i + 1) * 100}px`, 
                    height: `${(i + 1) * 100}px`,
                    opacity: 1 - i * 0.15
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { title: "Assess", desc: "Take our energy audit to identify which chakras need the most attention." },
    { title: "Align", desc: "Follow daily guided rituals including yoga, meditation, and nutrition." },
    { title: "Awaken", desc: "Feel the shift as your energy flows freely, boosting vitality and clarity." }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A structured, simple approach to complex energy systems. No prior experience required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-chakra-root via-chakra-heart to-chakra-crown -translate-y-1/2 opacity-20" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative bg-background p-8 rounded-2xl shadow-lg border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-6 shadow-md relative z-10">
                {i + 1}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChakraGrid() {
  return (
    <section id="chakras" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Explore the 7 Energy Centers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Each chakra governs different physical and emotional aspects of your life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chakras.map((chakra, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className={`h-2 w-full ${chakra.color}`} />
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${chakra.color} flex items-center justify-center mb-4 text-white shadow-lg`}>
                    <chakra.icon size={24} />
                  </div>
                  <CardTitle className="font-serif text-2xl flex items-center justify-between">
                    {chakra.name}
                    <span className="text-xs font-sans font-normal opacity-50 italic">{chakra.sanskrit}</span>
                  </CardTitle>
                  <CardDescription className={`font-semibold ${chakra.textColor}`}>
                    {chakra.focus}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {chakra.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          
          {/* Final "Your Journey" card to fill the 8th slot in a 4-col grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="sm:col-span-1 lg:col-span-1"
          >
            <Card className="h-full bg-gradient-to-br from-chakra-root/10 via-chakra-heart/10 to-chakra-crown/10 border-dashed border-2 border-primary/20 flex flex-col items-center justify-center p-8 text-center group">
              <Sparkles className="w-12 h-12 text-primary mb-4 animate-pulse" />
              <h3 className="font-serif text-2xl font-bold mb-2">Your Path Awaits</h3>
              <p className="text-sm text-muted-foreground mb-6">Complete alignment is just 7 days away.</p>
              <Button variant="outline" className="rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Start Now
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const offer = {
    name: "The Full Chakra Awakening Bundle",
    price: "$49",
    description: "Your complete toolkit for total energetic alignment and spiritual growth in one comprehensive package.",
    features: [
      "7-Day Chakra Balancing E-Book",
      "The Chakra Kitchen Companion Cookbook",
      "7 Guided Chakra Meditation Audios",
      "Interactive Chakra Alignment Web App",
      "Lifetime Access & Future Updates"
    ],
    buttonText: "Get the Full Bundle Now"
  };

  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-chakra-crown text-chakra-crown font-bold">
            SPECIAL LIMITED TIME OFFER
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Begin Your Transformation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Invest in your holistic well-being today with our most comprehensive collection of resources.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-chakra-crown border-2 shadow-2xl overflow-hidden bg-background">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-chakra-root/5 via-chakra-heart/5 to-chakra-crown/5">
                <div className="relative mb-8 flex justify-center scale-90 md:scale-100 h-48 items-center">
                  <div className="absolute inset-0 bg-chakra-crown/5 blur-3xl rounded-full" />
                  <img src="./guide_cover.png" alt="E-book" className="w-32 md:w-40 h-auto shadow-2xl transform -rotate-6 z-10" />
                  <img src="./cookbook_cover.png" alt="Cookbook" className="w-32 md:w-40 h-auto shadow-2xl transform rotate-6 -ml-16 mt-8" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-serif font-bold mb-4">{offer.name}</h3>
                  <div className="flex items-baseline justify-center md:justify-start gap-2 mb-4">
                    <span className="text-5xl font-bold">{offer.price}</span>
                    <span className="text-muted-foreground line-through opacity-50">$147 VALUE</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {offer.description}
                  </p>
                </div>
              </div>
              
              <div className="p-8 md:p-12 flex flex-col justify-between border-t md:border-t-0 md:border-l border-border bg-card">
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-muted-foreground">What's Included:</h4>
                  <ul className="space-y-4 mb-8">
                    {offer.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-chakra-heart/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-chakra-heart" />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <Button className="w-full py-8 rounded-xl text-xl font-bold bg-chakra-crown hover:bg-chakra-crown/90 text-white shadow-lg shadow-chakra-crown/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    {offer.buttonText}
                  </Button>
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-[10px] text-muted-foreground flex items-center gap-1.5 uppercase tracking-wider font-semibold">
                      <Shield className="w-3 h-3" />
                      Secure One-Time Payment
                    </p>
                    <div className="flex gap-4 opacity-30 grayscale scale-75">
                      {/* Placeholder for payment icons if needed, but keeping it minimal */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          <p className="text-center mt-8 text-muted-foreground text-sm italic">
            "This bundle completely changed my morning routine and my energy levels have never been higher." 
            <span className="block not-italic font-bold mt-1 text-foreground">— Sarah J., Wellness Coach</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img src="/3ea184ee-79fb-47ef-adf6-f506a10b36a9.png" alt="Mindquest Studios" className="w-8 h-8 object-contain opacity-80 grayscale hover:grayscale-0 transition-all" />
            <span className="font-serif text-xl font-bold tracking-tight">Mindquest Studios</span>
          </div>
          
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Contact Support</a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mindquest Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen selection:bg-chakra-heart/30 selection:text-chakra-heart-foreground">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <ChakraGrid />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
