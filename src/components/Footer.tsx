import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface FooterProps {
  className?: string;
}

function Footer({ className }: FooterProps) {
  // Example usage of cn function

  return (
    <footer
      className={cn(
        " text-center bg-[#1A181B] text-slate-100",
        className
      )}
    >
      <div className="bg-black/5 p-4 text-center text-surface dark:text-white">
        2024 <Link href="/" className="hover:underline">Affan Abdullah Izzuddin</Link>
      </div>
    </footer>
  );
}
export default Footer;
