import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
    {
        q: "I've never meditated — is this really for me?",
        a: "Absolutely. This journey was designed for the curious, the skeptical, and the completely new. Each day holds your hand with clear, gentle guidance. No experience required — only a willingness to be still.",
    },
    {
        q: "What exactly is inside the Full Awakening Bundle?",
        a: "The 7-Day Chakra Balancing E-Book, The Chakra Kitchen Companion Cookbook, 7 guided meditation audio tracks (one per energy center), access to our Interactive Chakra Alignment Web App, and lifetime updates to every resource.",
    },
    {
        q: "How is everything delivered?",
        a: "Instantly and digitally. The e-book and cookbook arrive as beautiful PDFs, the meditations as downloadable MP3s, and the web app is accessible from any browser on any device — no waiting, no shipping.",
    },
    {
        q: "How long does each day's practice take?",
        a: "About 20–30 minutes of your morning or evening — a guided meditation (10–15 min), a short journaling exercise, and optional movement. The cookbook recipes range from 15 to 45 minutes to prepare.",
    },
    {
        q: "Can I move through the days at my own rhythm?",
        a: "Of course. While it's designed as a 7-day journey, some people spend a week on a single chakra. There is no rush. Many return to the full cycle again and again, finding something new each time.",
    },
    {
        q: "What if it doesn't resonate with me?",
        a: "We offer a 30-day, no-questions-asked refund. If the journey doesn't speak to you, we'll return every penny. We only want you here if it serves you.",
    },
    {
        q: "Will I receive future updates?",
        a: "Yes — your purchase includes lifetime access to all future updates. As we release new meditations, recipes, or app features, they'll arrive for you automatically.",
    },
    {
        q: "Is this grounded in real practice?",
        a: "Deeply. Our program weaves traditional chakra wisdom with evidence-based techniques. The meditations draw from peer-reviewed mindfulness research, the nutrition is guided by certified professionals, and the yoga sequences are designed by experienced instructors.",
    },
];

export function FAQ() {
    return (
        <section id="faq" className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Before You Begin
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Gentle answers to the questions most seekers carry.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto glass rounded-2xl p-6 md:p-8">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="border-white/10">
                                <AccordionTrigger className="text-left text-base font-semibold tracking-wide">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
