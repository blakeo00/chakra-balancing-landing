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
                        <div className="max-w-md mx-auto relative group">
                            {/* Outer glow */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-chakra-root/20 via-chakra-heart/20 to-chakra-crown/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-80" />

                            {/* Decorative chakra rings behind the image */}
                            <div className="absolute inset-0 flex items-center justify-center -z-0">
                                {[
                                    "border-chakra-root/20",
                                    "border-chakra-heart/15",
                                    "border-chakra-crown/20",
                                ].map((borderColor, i) => (
                                    <motion.div
                                        key={i}
                                        className={`absolute rounded-full border ${borderColor}`}
                                        style={{
                                            width: `${100 + (i + 1) * 15}%`,
                                            height: `${100 + (i + 1) * 15}%`,
                                        }}
                                        animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                                        transition={{
                                            duration: 40 + i * 10,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Sassy image */}
                            <div className="relative z-10">
                                <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                                    <img
                                        src="/sassy-chakra.jpg"
                                        alt="Sassy — Chief Zen Master, Mindquest Studios"
                                        className="w-full h-auto"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                        <p className="text-lg font-bold text-white drop-shadow-lg font-serif">Sassy</p>
                                        <p className="text-xs uppercase tracking-[0.25em] text-white/80 font-sans mt-1">Chief Zen Master</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
