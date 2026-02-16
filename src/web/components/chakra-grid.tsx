import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { chakras } from "@/lib/chakra-data";

const glowMap: Record<string, string> = {
    Root: "glow-root",
    Sacral: "glow-sacral",
    "Solar Plexus": "glow-solar",
    Heart: "glow-heart",
    Throat: "glow-throat",
    "Third Eye": "glow-thirdeye",
    Crown: "glow-crown",
};

function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function ChakraGrid() {
    return (
        <section id="chakras" className="py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Seven Days, Seven Frequencies</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-sans">
                        Each day awakens a different layer of who you are — from the earth beneath your feet to the light above your crown.
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
                            <Card className={`h-full transition-all duration-500 overflow-hidden group ${glowMap[chakra.name] || ""}`}>
                                <div className={`h-2 w-full ${chakra.color}`} />
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-3">
                                        <div className={`w-12 h-12 rounded-lg ${chakra.color} flex items-center justify-center text-white shadow-lg`}>
                                            <chakra.icon size={24} />
                                        </div>
                                        <span className={`text-xs font-bold uppercase tracking-widest ${chakra.textColor} opacity-80 font-sans`}>Day {chakra.day}</span>
                                    </div>
                                    <CardTitle className="text-2xl">
                                        {chakra.name}
                                    </CardTitle>
                                    <p className="text-xs italic opacity-50 font-sans">{chakra.sanskrit} — {chakra.theme}</p>
                                    <CardDescription className={`font-semibold ${chakra.textColor} mt-1 font-sans`}>
                                        {chakra.focus}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                                        {chakra.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}

                    {/* Final "Your Journey" card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="sm:col-span-1 lg:col-span-1"
                    >
                        <Card className="h-full border-dashed border-2 border-primary/20 flex flex-col items-center justify-center p-8 text-center group">
                            <Sparkles className="w-12 h-12 text-primary mb-4 animate-pulse" />
                            <h3 className="text-2xl font-semibold mb-2">Begin the Tuning</h3>
                            <p className="text-sm text-muted-foreground mb-6">Seven frequencies. One vibrant, aligned you.</p>
                            <Button
                                variant="outline"
                                className="rounded-full border-white/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                                onClick={() => scrollTo("pricing")}
                            >
                                Start Now
                            </Button>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
