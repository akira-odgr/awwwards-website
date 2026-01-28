"use client"

import { gsap, useGSAP, SplitText } from '@/lib/gsap-utils'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    useGSAP(() => {
        const textSplit = SplitText.create(".text", {
            type: "words",
            linesClass: "text-line"
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero-wrapper",
                start: "top center",
                // markers: true
            }
        })

        tl.from(textSplit.words, {
            yPercent: 100,
            ease: "power2.inOut",
            duration: 1,
            stagger: 0.03
        })
    }, { scope: containerRef })

    return (
        <section ref={containerRef} className={cn('py-20', 'lg:py-28')}>
            <div className={cn('container', 'flex flex-col')}>
                {/* Wrapper */}
                <div className='hero-wrapper'>
                    <h1 className={cn('text', 'hero-title')}>building</h1>
                    <h2 className={cn('text', 'hero-title')}>impactful</h2>
                    {/* wrapper */}
                    <div className='flex items-center gap-6'>
                        <h2 className={cn('text', 'hero-title')}>digital</h2>
                        <div className={cn('font-medium tracking-wider uppercase -space-y-1 text-neutral-800 hidden', 'sm:text-2xl sm:block')}>
                            <p className={cn('text', 'hero-text')}>freelancer</p>
                            <p className={cn('text', 'hero-text')}>digital designer</p>
                            <p className={cn('text', 'hero-text')}>webflow expert</p>
                        </div>
                    </div>

                    {/* text */}
                    <h2 className={cn('text', 'hero-title mb-2.5')}>presence</h2>

                    {/* sm text */}
                    <div className={cn('font-medium tracking-wider uppercase -space-y-1 text-neutral-800', 'sm:text-2xl sm:hidden')}>
                        <p className={cn('text', 'hero-text')}>freelancer</p>
                        <p className={cn('text', 'hero-text')}>digital designer</p>
                        <p className={cn('text', 'hero-text')}>webflow expert</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero