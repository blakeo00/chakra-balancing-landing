import { Link } from "wouter";
import { ArrowLeft, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // For now, open the user's email client
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const subject = encodeURIComponent(formData.get("subject") as string || "Contact from Website");
        const body = encodeURIComponent(formData.get("message") as string || "");
        window.open(`mailto:support@mindqueststudios.com?subject=${subject}&body=${body}`);
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-16 max-w-2xl">
                <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <div className="flex items-center gap-3 mb-8">
                    <MessageSquare className="w-8 h-8 text-chakra-throat" />
                    <h1 className="text-4xl font-serif font-bold">Contact Support</h1>
                </div>

                <div className="space-y-8">
                    <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
                        <div className="flex items-center gap-3 mb-3">
                            <Mail className="w-5 h-5 text-chakra-heart" />
                            <h2 className="font-bold">Email Us Directly</h2>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">
                            For the fastest response, email us at:
                        </p>
                        <a
                            href="mailto:support@mindqueststudios.com"
                            className="text-chakra-heart hover:underline font-medium"
                        >
                            support@mindqueststudios.com
                        </a>
                    </div>

                    <div className="border border-border rounded-2xl p-6">
                        <h2 className="font-bold mb-4">Send a Message</h2>
                        {submitted ? (
                            <p className="text-chakra-heart font-medium">
                                Your email client has been opened. If it didn't open, please email us directly at support@mindqueststudios.com.
                            </p>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        placeholder="What can we help with?"
                                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-chakra-heart/40"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        placeholder="Tell us more…"
                                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-chakra-heart/40 resize-none"
                                    />
                                </div>
                                <Button type="submit" className="bg-chakra-throat hover:bg-chakra-throat/90 text-white rounded-lg">
                                    Send Message
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
