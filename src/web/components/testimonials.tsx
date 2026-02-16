import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    {
        quote: "By day three, something inside me shifted — not dramatically, but like a river finding its natural path again. I wake up lighter now.",
        name: "Sarah J.",
        title: "Wellness Coach",
        stars: 5,
    },
    {
        quote: "I was skeptical of anything I couldn't measure. But this program changed how I breathe, how I create, how I listen. The meditations are extraordinary.",
        name: "Michael R.",
        title: "Creative Director",
        stars: 5,
    },
    {
        quote: "The cookbook surprised me the most — nourishing my body with intention for each energy center. My family noticed a change in me before I did.",
        name: "Elena K.",
        title: "Yoga Instructor",
        stars: 5,
    },
    {
        quote: "As a therapist, I rarely recommend programs this confidently. The structured, compassionate approach makes ancient wisdom feel safe and accessible.",
        name: "Dr. Priya M.",
        title: "Holistic Therapist",
        stars: 5,
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        They Felt the Shift
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Words from those who walked the seven-day path and found something they didn't know they'd lost.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                        >
                            <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                                <CardContent className="p-8">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(t.stars)].map((_, s) => (
                                            <Star key={s} className="w-4 h-4 fill-chakra-solar text-chakra-solar" />
                                        ))}
                                    </div>
                                    <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                                        "{t.quote}"
                                    </blockquote>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-chakra-heart/30 to-chakra-crown/30 flex items-center justify-center text-sm font-bold">
                                            {t.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm">{t.name}</p>
                                            <p className="text-xs text-muted-foreground">{t.title}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
