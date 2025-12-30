import React from 'react';
import { SiInstagram, SiGithub, SiBehance, SiLinkedin } from "react-icons/si";

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
    { label: "Projekty", href: "/projects" },
    { label: "Pracovní zkušenost", href: "/experience" },
    { label: "Kontakt", href: "#kontakt" },
];

export const SOCIALS: SocialItem[] = [
    { label: "Instagram", href: "https://www.instagram.com/michal.718/", icon: SiInstagram },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ptacekmichael/", icon: SiLinkedin },
    { label: "GitHub", href: "https://github.com/michaelptacek05/", icon: SiGithub },
    { label: "Behance", href: "https://www.behance.net/michaelptek1", icon: SiBehance },
];