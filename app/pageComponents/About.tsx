"use client"

import { gsap, useGSAP, SplitText } from "@/lib/gsap-utils"
import { useRef } from "react"

import { cn } from '@/lib/utils'

export const About = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        const textSplit = SplitText.create(".text", {
            type: "words lines",
            linesClass: "text-line"
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".about-wrapper",
                start: "top 60%",
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
        <section ref={containerRef} className={cn('pt-20', 'sm:pt-24')}>
            <div className={cn('about-wrapper', 'container', 'flex justify-end-safe')}>
                {/* Wrapper */}
                <div className='max-w-5xl w-full'>
                    {/* Text wrapper */}
                    <div className={cn('flex flex-col', 'md:items-center md:flex-row')}>
                        <p className={cn('text', 'uppercase text-xl font-medium overflow-hidden mb-2', 'sm:mb-0', 'md:px-7')}>about</p>
                        <h2 className={cn('text', 'text-xl overflow-hidden', 'sm:text-2xl', 'lg:text-5xl')}>Kai Novak is an independent</h2>
                    </div>
                    {/* Text wrapper */}
                    <div className={cn('text', 'text-xl', 'sm:text-2xl', 'lg:text-5xl')}>
                        <p>
                            designer focused on crafting immersive
                            digital experiences. They believe every
                            project is an opportunity to deliver a unique
                            and memorable digital experience that
                            delights users and builds brand equity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About