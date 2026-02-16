import { motion } from "framer-motion";
import { Check, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const offer = {
    name: "The Full Chakra Awakening Bundle",
    price: "$49",
    description: "Everything you need to tune, align, and awaken every frequency of your being — gathered into one luminous collection.",
    features: [
        "7-Day Chakra Balancing E-Book",
        "The Chakra Kitchen Companion Cookbook",
        "7 Guided Chakra Meditation Audios",
        "Interactive Chakra Alignment Web App",
        "Lifetime Access & Future Updates"
    ],
    buttonText: "Get the Full Bundle Now"
};

export function Pricing() {
    return (
        <section id="pricing" className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 px-4 py-1 border-chakra-crown text-chakra-crown font-bold tracking-wider font-sans">
                        LIMITED OFFERING
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Invest in Your Resonance</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        The tools, the teachings, the frequencies — all in one place. Your transformation is not a luxury; it is a homecoming.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <Card className="glass-strong border-chakra-crown/30 border-2 shadow-2xl overflow-hidden">
                        <div className="grid md:grid-cols-2">
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="relative mb-8 flex justify-center scale-90 md:scale-100 h-48 items-center">
                                    <div className="absolute inset-0 bg-chakra-crown/5 blur-3xl rounded-full" />
                                    <img src="./guide_cover.png" alt="E-book" className="w-32 md:w-40 h-auto shadow-2xl transform -rotate-6 z-10" />
                                    <img src="./cookbook_cover.png" alt="Cookbook" className="w-32 md:w-40 h-auto shadow-2xl transform rotate-6 -ml-16 mt-8" />
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-3xl font-bold mb-4">{offer.name}</h3>
                                    <div className="flex items-baseline justify-center md:justify-start gap-2 mb-4">
                                        <span className="text-5xl font-bold">{offer.price}</span>
                                        <span className="text-muted-foreground line-through opacity-50">$147 VALUE</span>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                                        {offer.description}
                                    </p>
                                </div>
                            </div>

                            <div className="p-8 md:p-12 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 glass-subtle">
                                <div>
                                    <h4 className="font-semibold text-xs uppercase tracking-[0.2em] mb-6 text-muted-foreground">What's Included:</h4>
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
                                    <Button
                                        className="btn-soft w-full py-8 text-xl font-bold bg-chakra-crown/20 border-chakra-crown/30 hover:bg-chakra-crown/25 hover:border-chakra-crown/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3),0_0_60px_rgba(168,85,247,0.12)] text-white active:scale-[0.98]"
                                        onClick={() => scrollTo("email-capture")}
                                    >
                                        {offer.buttonText}
                                    </Button>
                                    <div className="flex flex-col items-center gap-2">
                                        <p className="text-[10px] text-muted-foreground flex items-center gap-1.5 uppercase tracking-wider font-semibold">
                                            <Shield className="w-3 h-3" />
                                            Secure One-Time Payment
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
