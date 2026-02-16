import { Link } from "wouter";
import { ArrowLeft, Shield } from "lucide-react";

export default function Privacy() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-16 max-w-3xl">
                <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <div className="flex items-center gap-3 mb-8">
                    <Shield className="w-8 h-8 text-chakra-heart" />
                    <h1 className="text-4xl font-serif font-bold">Privacy Policy</h1>
                </div>

                <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
                    <p className="text-sm">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

                    <h2 className="text-xl font-serif font-bold text-foreground">1. Information We Collect</h2>
                    <p>When you use Mindquest Studios, we may collect the following information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Email address</strong> — when you subscribe to our newsletter or purchase a product.</li>
                        <li><strong>Payment information</strong> — processed securely through our payment provider (Stripe). We never store your card details.</li>
                        <li><strong>Usage data</strong> — anonymous analytics to improve our products and website experience.</li>
                    </ul>

                    <h2 className="text-xl font-serif font-bold text-foreground">2. How We Use Your Information</h2>
                    <p>We use collected information to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Deliver purchased digital products and updates.</li>
                        <li>Send occasional wellness tips and exclusive offers (with your consent).</li>
                        <li>Improve our products and user experience.</li>
                    </ul>

                    <h2 className="text-xl font-serif font-bold text-foreground">3. Data Sharing</h2>
                    <p>We do not sell, trade, or share your personal information with third parties, except as required to process payments or comply with legal obligations.</p>

                    <h2 className="text-xl font-serif font-bold text-foreground">4. Cookies</h2>
                    <p>Our website uses essential cookies to provide core functionality and anonymous analytics cookies to understand how visitors use our site. You can disable cookies in your browser settings.</p>

                    <h2 className="text-xl font-serif font-bold text-foreground">5. Your Rights</h2>
                    <p>You have the right to access, correct, or delete your personal data at any time. To exercise these rights, contact us at support@mindqueststudios.com.</p>

                    <h2 className="text-xl font-serif font-bold text-foreground">6. Contact</h2>
                    <p>For questions about this privacy policy, email us at <a href="mailto:support@mindqueststudios.com" className="text-chakra-heart hover:underline">support@mindqueststudios.com</a>.</p>
                </div>
            </div>
        </div>
    );
}
