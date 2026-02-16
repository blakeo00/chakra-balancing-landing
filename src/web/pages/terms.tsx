import { Link } from "wouter";
import { ArrowLeft, FileText } from "lucide-react";

export default function Terms() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-16 max-w-3xl">
                <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <div className="flex items-center gap-3 mb-8">
                    <FileText className="w-8 h-8 text-chakra-thirdeye" />
                    <h1 className="text-4xl font-serif font-bold">Terms of Service</h1>
                </div>

                <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
                    <p className="text-sm">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

                    <h2 className="text-xl font-serif font-bold text-foreground">1. Acceptance of Terms</h2>
                    <p>By accessing and using Mindquest Studios products and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>

                    <h2 className="text-xl font-serif font-bold text-foreground">2. Digital Products</h2>
                    <p>All products sold by Mindquest Studios are digital downloads. Upon purchase, you receive a non-transferable, personal license to use the materials for your own personal wellness practice.</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>You may not redistribute, resell, or share purchased materials.</li>
                        <li>You may not use materials for commercial purposes without written permission.</li>
                        <li>You retain lifetime access to purchased products and all future updates.</li>
                    </ul>

                    <h2 className="text-xl font-serif font-bold text-foreground">3. Refund Policy</h2>
                    <p>We offer a <strong>30-day money-back guarantee</strong> on all purchases. If you are not satisfied, contact us within 30 days for a full refund — no questions asked.</p>

                    <h2 className="text-xl font-serif font-bold text-foreground">4. Health Disclaimer</h2>
                    <p>The content provided by Mindquest Studios is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider before beginning any new wellness practice.</p>

                    <h2 className="text-xl font-serif font-bold text-foreground">5. Intellectual Property</h2>
                    <p>All content, including texts, images, audio recordings, and software, is the intellectual property of Mindquest Studios and is protected by copyright law.</p>

                    <h2 className="text-xl font-serif font-bold text-foreground">6. Limitation of Liability</h2>
                    <p>Mindquest Studios shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services.</p>

                    <h2 className="text-xl font-serif font-bold text-foreground">7. Contact</h2>
                    <p>For questions about these terms, email us at <a href="mailto:support@mindqueststudios.com" className="text-chakra-heart hover:underline">support@mindqueststudios.com</a>.</p>
                </div>
            </div>
        </div>
    );
}
