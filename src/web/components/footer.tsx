import { Link } from "wouter";

export function Footer() {
    return (
        <footer className="glass-strong py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <img src="/3ea184ee-79fb-47ef-adf6-f506a10b36a9.png" alt="Mindquest Studios" className="w-8 h-8 object-contain opacity-80 grayscale hover:grayscale-0 transition-all" />
                        <span className="text-xl font-semibold tracking-wide">Mindquest Studios</span>
                    </div>

                    <div className="flex gap-8 text-sm text-muted-foreground tracking-wide">
                        <Link href="/privacy" className="hover:text-primary transition-colors duration-300">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors duration-300">Terms of Service</Link>
                        <Link href="/contact" className="hover:text-primary transition-colors duration-300">Contact Support</Link>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Mindquest Studios. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
