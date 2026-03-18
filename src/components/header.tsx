"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  logoText: string;
  navLinks: {
    label: string;
    href: string;
  }[];
}

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-sm font-light tracking-widest text-white/80 transition-colors hover:text-white"
  >
    {children}
  </Link>
);

export default function Header({ logoText, navLinks }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="absolute top-2 left-0 z-50 w-full">
      <div className="flex w-full max-w-8xl items-center justify-between mx-auto py-6 pl-12 pr-12">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold tracking-wider text-white"
        >
          {logoText}
        </motion.div>

        {/* Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks
            .filter((link) => !(pathname === "/" && link.href === "/"))
            .map((link) => (
              <NavLink key={link.label} href={link.href}>
                {link.label}
              </NavLink>
            ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-5 bg-white"></span>
        </motion.button>

      </div>
    </header>
  );
}
