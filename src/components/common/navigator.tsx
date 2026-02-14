"use client";

import { motion } from "framer-motion";
import { Compass, Mountain, Pencil, Play, Plane } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/travel", label: "Travel", icon: Plane, adminOnly: false },
  { href: "/videos", label: "Videos", icon: Play, adminOnly: false },
  { href: "/climbing", label: "Climbing", icon: Mountain, adminOnly: false },
  { href: "/write", label: "Write", icon: Pencil, adminOnly: true },
] as const;

const isDevMode = process.env.NODE_ENV === "development";

const Navigator = () => {
  const pathname = usePathname() ?? "";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 w-full glass"
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-full ring-2 ring-border group-hover:ring-primary transition-all duration-300">
            <Image
              src="/profile.png"
              alt="Supin"
              width={36}
              height={36}
              className="object-cover"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm text-foreground tracking-tight">
              supin
            </span>
            <span className="font-pixel text-[8px] text-brand-cyan tracking-wider">
              .log
            </span>
          </div>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {NAV_ITEMS.filter((item) => !item.adminOnly || isDevMode).map(({ href, label, icon: Icon }) => {
            const isActive =
              pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`
                  relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200
                  ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }
                `}
              >
                <Icon size={14} />
                <span className="hidden sm:inline">{label}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </motion.header>
  );
};

export default Navigator;
