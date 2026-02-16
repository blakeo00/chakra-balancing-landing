import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleNav = (id: string) => {
        setIsOpen(false);
        scrollTo(id);
    };

    return (
        <nav className="sticky top-0 z-50 w-full glass-strong">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src="/3ea184ee-79fb-47ef-adf6-f506a10b36a9.png" alt="Mindquest Studios" className="w-10 h-10 object-contain" />
                    <span className="text-xl font-semibold tracking-wide">Mindquest Studios</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
                    <button onClick={() => scrollTo("how-it-works")} className="hover:text-chakra-crown transition-colors duration-300">How it Works</button>
                    <button onClick={() => scrollTo("chakras")} className="hover:text-chakra-crown transition-colors duration-300">The 7 Chakras</button>
                    <button onClick={() => scrollTo("pricing")} className="hover:text-chakra-crown transition-colors duration-300">Pricing</button>
                    <Button variant="default" size="sm" onClick={() => scrollTo("pricing")}>
                        Get Started
                    </Button>
                </div>

                <div className="flex items-center gap-2 md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-16 left-0 w-full glass-strong p-4 flex flex-col gap-4"
                >
                    <button onClick={() => handleNav("how-it-works")} className="text-lg font-medium text-left tracking-wide">How it Works</button>
                    <button onClick={() => handleNav("chakras")} className="text-lg font-medium text-left tracking-wide">The 7 Chakras</button>
                    <button onClick={() => handleNav("pricing")} className="text-lg font-medium text-left tracking-wide">Pricing</button>
                    <Button className="w-full" onClick={() => handleNav("pricing")}>Get Started</Button>
                </motion.div>
            )}
        </nav>
    );
}
