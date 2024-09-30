'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            
            </MenuItem>
            </Link>
            <MenuItem
            setActive={setActive} active={active} item="Our Services"
            >
               <div className="flex flex-col space-y-4 text-sm">
               <HoveredLink href="/">All Services</HoveredLink>
               <HoveredLink href="/">Creative Design</HoveredLink>
            <HoveredLink href="/">
            Custom Web Applications
            </HoveredLink>
            <HoveredLink href="/">
            Website Design & Development
            </HoveredLink>
            <HoveredLink href="/">E-Commerce Solutions</HoveredLink>
            <HoveredLink href="/">
            Mobile App Development
            </HoveredLink>
            <HoveredLink href="/">
            Digital Strategy & Consulting
            </HoveredLink>
               </div>
            </MenuItem>
            <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
            
            </MenuItem>
            </Link>
        </Menu>
    </motion.div>
  )
}

export default Navbar