import {
  Shield,
  Sparkles,
  Zap,
  Heart,
  MessageCircle,
  Eye,
  Crown as CrownIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Chakra {
  name: string;
  sanskrit: string;
  day: number;
  theme: string;
  color: string;
  textColor: string;
  description: string;
  focus: string;
  icon: LucideIcon;
}

export const chakras: Chakra[] = [
  {
    name: "Root",
    sanskrit: "Muladhara",
    day: 1,
    theme: "Return to the Earth",
    color: "bg-chakra-root",
    textColor: "text-chakra-root",
    description: "Find your foundation and silence the pulse of anxiety. Here, where the body meets the earth, you remember what it means to belong.",
    focus: "Grounding & Safety",
    icon: Shield,
  },
  {
    name: "Sacral",
    sanskrit: "Svadhishthana",
    day: 2,
    theme: "The Flow of Creation",
    color: "bg-chakra-sacral",
    textColor: "text-chakra-sacral",
    description: "Unlock your passion and the fluid energy of change. Let the river of your creative force run wild and untamed once more.",
    focus: "Passion & Flow",
    icon: Sparkles,
  },
  {
    name: "Solar Plexus",
    sanskrit: "Manipura",
    day: 3,
    theme: "The Golden Center",
    color: "bg-chakra-solar",
    textColor: "text-chakra-solar",
    description: "Ignite your personal power and the fire of confidence. This is the sun within you — a radiance that refuses to dim.",
    focus: "Power & Confidence",
    icon: Zap,
  },
  {
    name: "Heart",
    sanskrit: "Anahata",
    day: 4,
    theme: "Infinite Compassion",
    color: "bg-chakra-heart",
    textColor: "text-chakra-heart",
    description: "Open the gateway to radical self-love and radical peace. Where the upper and lower worlds meet, the heart holds everything.",
    focus: "Love & Peace",
    icon: Heart,
  },
  {
    name: "Throat",
    sanskrit: "Vishuddha",
    day: 5,
    theme: "Your Authentic Voice",
    color: "bg-chakra-throat",
    textColor: "text-chakra-throat",
    description: "Speak your truth with the clarity of a mountain stream. What has been held in silence finally finds its song.",
    focus: "Truth & Expression",
    icon: MessageCircle,
  },
  {
    name: "Third Eye",
    sanskrit: "Ajna",
    day: 6,
    theme: "The Inner Vision",
    color: "bg-chakra-thirdeye",
    textColor: "text-chakra-thirdeye",
    description: "Peer beyond the physical and trust the wisdom of your intuition. The eye that sees inward sees everything.",
    focus: "Intuition & Clarity",
    icon: Eye,
  },
  {
    name: "Crown",
    sanskrit: "Sahasrara",
    day: 7,
    theme: "Pure Consciousness",
    color: "bg-chakra-crown",
    textColor: "text-chakra-crown",
    description: "Dissolve the boundaries and connect with the infinite. Here at the summit, you are no longer separate — you are the whole.",
    focus: "Unity & Transcendence",
    icon: CrownIcon,
  },
];
