"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar(){
  const pathname = usePathname();
  const isEN = pathname?.startsWith("/en");
  const switchHref = isEN ? "/" : "/en";
  return (
    <header className="fixed top-0 inset-x-0 z-20 bg-white/70 backdrop-blur border-b">
      <div className="container h-16 flex items-center justify-between">
        <Link href={isEN?"/en":"/"} className="font-poppins font-semibold">10but</Link>
        <nav className="flex items-center gap-3">
          <a href="https://cal.com/david-10but/15min" target="_blank" className="btn-cta hidden md:inline-flex">Book</a>
          <Link href={switchHref} className="px-3 py-1 rounded border text-sm">{isEN?"FR":"EN"}</Link>
        </nav>
      </div>
    </header>
  );
}
