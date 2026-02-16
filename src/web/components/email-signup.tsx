import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function EmailSignup() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setStatus("error");
            setMessage("Please enter a valid email address.");
            return;
        }

        setStatus("loading");

        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, source: "landing-page" }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("success");
                setMessage(data.message || "You're on the list! We'll be in touch soon.");
                setEmail("");
            } else {
                setStatus("error");
                setMessage(data.error || "Something went wrong. Please try again.");
            }
        } catch {
            setStatus("error");
            setMessage("Network error. Please check your connection and try again.");
        }
    };

    return (
        <section id="email-capture" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-chakra-root/10 via-chakra-heart/10 to-chakra-crown/10 rounded-3xl blur-2xl" />
                        <div className="relative glass-strong rounded-2xl p-8 md:p-12">
                            <Mail className="w-10 h-10 text-chakra-heart mx-auto mb-4" />
                            <h2 className="text-3xl md:text-4xl font-bold mb-3">
                                Stay in Resonance
                            </h2>
                            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                                Join a quiet community of seekers. Be the first to receive new meditations,
                                wellness rituals, and offerings — delivered gently to your inbox.
                            </p>

                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex items-center justify-center gap-3 text-chakra-heart font-medium py-4"
                                >
                                    <CheckCircle className="w-6 h-6" />
                                    <span>{message}</span>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                if (status === "error") setStatus("idle");
                                            }}
                                            placeholder="Enter your email"
                                            className="flex-1 px-5 py-3 rounded-full glass-subtle text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-chakra-heart/40 transition-shadow"
                                            disabled={status === "loading"}
                                        />
                                        <Button
                                            type="submit"
                                            disabled={status === "loading"}
                                            className="btn-soft bg-chakra-heart/20 border-chakra-heart/30 hover:bg-chakra-heart/25 hover:border-chakra-heart/50 hover:shadow-[0_0_25px_rgba(34,197,94,0.25),0_0_50px_rgba(34,197,94,0.1)] text-white font-semibold group"
                                        >
                                            {status === "loading" ? (
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                            ) : (
                                                <>
                                                    Join Now
                                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </Button>
                                    </div>

                                    {status === "error" && (
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="text-sm text-red-400"
                                        >
                                            {message}
                                        </motion.p>
                                    )}

                                    <p className="text-xs text-muted-foreground">
                                        No noise. No spam. Only what serves your journey. Unsubscribe anytime.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
