"use client"

import Link from 'next/link'
import { navItems } from '@/data/data'
import { cn } from '@/lib/utils'
import { useGSAP, gsap, ScrollTrigger } from "@/lib/gsap-utils"

export const Header = () => {
    useGSAP(() => {
        const showAnim = gsap.timeline({ paused: true }).fromTo(".header", { yPercent: 0 }, { yPercent: -100, duration: 0.3, ease: "power2.inOut" });

        ScrollTrigger.create({ start: "top top", end: "max", markers: true, onUpdate: (self) => { self.direction === 1 ? showAnim.play() : showAnim.reverse(); } })
    }, {});

    return (
        <header className='sticky top-0 left-0 bg-white/40 backdrop-blur-md w-full py-4 z-50'>
            <div className={cn("container", "flex items-center justify-between")}>
                {/* Logo */}
                <Link href={"/"} className="font-bold text-2xl">Novak</Link>

                {/* Nav List */}
                <nav className="flex items-center gap-5">
                    <ul className={cn("flex flex-col", "sm:flex-row sm:items-center sm:gap-5")}>
                        {navItems.map(item => (
                            <li key={item.id}>
                                <Link href={item.href} className={cn("uppercase font-medium transition-opacity", "hover:opacity-75")}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>

                    <button className={cn("bg-neutral-900 text-white uppercase px-5 py-3 rounded-lg transition-opacity hidden", "md:block", "hover:opacity-85", "focus:opacity-85")}>Watch tutorial</button>
                </nav>
            </div>
        </header>
    )
}

export default Header