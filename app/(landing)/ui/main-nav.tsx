"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/#"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/#" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Home
        </Link>
        <Link
          href="/#features"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/features")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Features
        </Link>
        <Link
          href="/#pricing"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/pricing")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
            Pricing
        </Link>
        <Link
          href="/#about"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/about")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
            About
        </Link>
        <Link
          href="/#contact"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/contact")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
            Contact Us
        </Link>
        <Link
          href="/login"
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
          )}
        >
            Log in
        </Link>
      </nav>
    </div>
  )
}