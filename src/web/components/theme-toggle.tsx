import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check localStorage first, then system preference
        const stored = localStorage.getItem("theme");
        if (stored === "dark") {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        } else if (stored === "light") {
            setIsDark(false);
            document.documentElement.classList.remove("dark");
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggle = () => {
        const next = !isDark;
        setIsDark(next);
        if (next) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            className="rounded-full w-9 h-9"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <Sun className="w-4 h-4 text-chakra-solar" />
            ) : (
                <Moon className="w-4 h-4 text-chakra-thirdeye" />
            )}
        </Button>
    );
}
