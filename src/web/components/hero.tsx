import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
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
                                    <span className="text-sm font-semibold tracking-wide leading-none font-sans">Mindquest Studios</span>
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1 font-sans">Holistic Wellness</span>
                                </div>
                            </div>
                            <Badge variant="secondary" className="mb-4 px-4 py-1 text-chakra-crown bg-chakra-crown/10 border-chakra-crown/20 uppercase tracking-[0.2em] text-[10px] font-bold font-sans">
                                A Seven-Day Sacred Journey
                            </Badge>
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
                                The Frequency of <span className="text-transparent bg-clip-text bg-gradient-to-r from-chakra-root via-chakra-heart to-chakra-crown">Balance</span>
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Seven days. Seven sacred frequencies. One profound awakening. Harmonize the invisible architecture of your energy and return to the vibration you were born to carry.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Button size="lg" className="px-8 py-6 text-lg rounded-full group" onClick={() => scrollTo("pricing")}>
                                    Enter the Frequency
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-full border-white/20 hover:bg-white/10" onClick={() => scrollTo("how-it-works")}>
                                    Discover the Path
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
                                        className="w-48 md:w-64 glass rounded-xl overflow-hidden transform -rotate-6"
                                    >
                                        <img src="./guide_cover.png" alt="Program Guide" className="w-full h-auto" />
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        className="w-48 md:w-64 glass rounded-xl overflow-hidden transform rotate-6"
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
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
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
