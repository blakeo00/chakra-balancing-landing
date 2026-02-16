import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-24">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <Sparkles className="w-5 h-5 text-chakra-heart" />
                            <span className="text-sm uppercase tracking-[0.2em] font-semibold text-chakra-heart">Our Story</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Where Science <br />Meets the Sacred
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                Mindquest Studios was born from a quiet conviction: that the ancient
                                architecture of energy — mapped by mystics, validated by modern research —
                                belongs not in distant temples, but in your living room, your morning
                                commute, your everyday breath.
                            </p>
                            <p>
                                Our healers, nutritionists, and meditation guides spent two years
                                translating millennia of wisdom into a living, breathing practice you
                                can hold in your hands. Each frequency has been carefully tuned.
                            </p>
                            <p>
                                Whether you've never sat in stillness or you've walked this path a
                                thousand times, the journey meets you exactly where you stand — and
                                carries you somewhere luminous.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-square max-w-md mx-auto relative">
                            {/* Decorative chakra rings */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                {[
                                    "border-chakra-root/30",
                                    "border-chakra-sacral/25",
                                    "border-chakra-solar/20",
                                    "border-chakra-heart/25",
                                    "border-chakra-throat/20",
                                    "border-chakra-thirdeye/25",
                                    "border-chakra-crown/30",
                                ].map((borderColor, i) => (
                                    <motion.div
                                        key={i}
                                        className={`absolute rounded-full border-2 ${borderColor}`}
                                        style={{
                                            width: `${(i + 1) * 14}%`,
                                            height: `${(i + 1) * 14}%`,
                                        }}
                                        animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                                        transition={{
                                            duration: 30 + i * 5,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Center icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-chakra-root via-chakra-heart to-chakra-crown flex items-center justify-center shadow-2xl">
                                    <img
                                        src="/3ea184ee-79fb-47ef-adf6-f506a10b36a9.png"
                                        alt="Mindquest Studios"
                                        className="w-16 h-16 object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
