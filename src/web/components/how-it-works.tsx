import { motion } from "framer-motion";

const steps = [
    { title: "Listen", desc: "Tune into the subtle signals your body and spirit have been sending. A gentle energy audit reveals which frequencies need recalibration." },
    { title: "Attune", desc: "Follow daily guided rituals — breath, movement, nourishment, and sound — each one crafted to awaken a different energy center." },
    { title: "Radiate", desc: "Feel the shift as blocked energy dissolves. What remains is clarity, vitality, and a deep, quiet knowing that you are whole." }
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">The Rhythm of Return</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Three movements. One transformation. No prior experience required — only a willingness to feel.
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
                            className="relative glass p-8 rounded-2xl"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-6 shadow-md relative z-10">
                                {i + 1}
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
