import { motion } from "framer-motion";
import { BookOpen, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Preview() {
    return (
        <section id="preview" className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        A Glimpse Behind the Veil
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        These are living pages — breathe with them, and feel what seven days can awaken.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* E-book Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="overflow-hidden h-full">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-chakra-heart/10 flex items-center justify-center">
                                        <BookOpen className="w-5 h-5 text-chakra-heart" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Day 4: Heart Chakra</h3>
                                        <p className="text-xs text-muted-foreground">Sample from the E-Book</p>
                                    </div>
                                </div>
                                <div className="glass-subtle rounded-xl p-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                                    <p className="text-foreground font-semibold text-base">Opening the Heart Center — Anahata</p>
                                    <p>
                                        Settle into stillness. Place your right hand on your heart
                                        and feel the warmth radiating outward like a green sun. With each inhale,
                                        visualize an emerald light dissolving the walls you've built —
                                        the ones that kept love out and sorrow locked in.
                                    </p>
                                    <p>
                                        Today's affirmation: <em className="text-chakra-heart">"I give and receive love freely.
                                            My heart is open, and I am woven into the fabric of all living things."</em>
                                    </p>
                                    <p className="text-xs opacity-60 pt-2 border-t border-white/10">
                                        — continues with guided yoga sequence, journaling prompts, and evening reflection…
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Meditation Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                    >
                        <Card className="overflow-hidden h-full">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-chakra-thirdeye/10 flex items-center justify-center">
                                        <Headphones className="w-5 h-5 text-chakra-thirdeye" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Guided Meditation</h3>
                                        <p className="text-xs text-muted-foreground">Sample Script Excerpt</p>
                                    </div>
                                </div>
                                <div className="glass-subtle rounded-xl p-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                                    <p className="text-foreground font-semibold text-base">Third Eye Activation — 12 min</p>
                                    <p>
                                        Close your eyes gently. Let three deep breaths carry away
                                        the noise of the world. Now bring your awareness to the space
                                        between your eyebrows — your Ajna center, the seat of inner sight.
                                    </p>
                                    <p>
                                        Imagine a deep indigo sphere of light pulsing gently here.
                                        With each breath it grows brighter… more vivid… expanding your
                                        vision beyond the physical, into the infinite field of knowing.
                                    </p>
                                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                        <div className="flex gap-[3px] items-end">
                                            {[3, 5, 8, 5, 7, 4, 6, 8, 5, 3, 6, 7, 4, 5, 8, 6, 3, 5, 7, 4].map((h, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="w-1 bg-chakra-thirdeye/60 rounded-full"
                                                    style={{ height: `${h * 3}px` }}
                                                    animate={{ height: [`${h * 3}px`, `${(h + 2) * 3}px`, `${h * 3}px`] }}
                                                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-xs opacity-60">Audio preview • 12:34</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
