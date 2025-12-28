import React from 'react';
import { SiInstagram, SiGithub, SiBehance } from "react-icons/si";

export interface NavItem {
    label: string;
    href: string;
}

export interface SocialItem {
    label: string;
    href: string;
    icon: React.ElementType;
}

export const NAV_LINKS: NavItem[] = [
    { label: "Domů", href: "/" },
    { label: "O mně", href: "/about" },
    { label: "Projekty", href: "#projekty" },
    { label: "Pracovní zkušenost", href: "#projekty" },
    { label: "Kontakt", href: "#kontakt" },
];

export const SOCIALS: SocialItem[] = [
    { label: "Instagram", href: "/", icon: SiInstagram },
    { label: "GitHub", href: "/", icon: SiGithub },
    { label: "Behance", href: "/", icon: SiBehance },
];