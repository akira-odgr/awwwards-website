"use client"
import { gsap, useGSAP, SplitText } from '@/lib/gsap-utils'
import { useRef } from 'react'

import { cn } from '@/lib/utils'
import { awards } from '@/data/data'
import Image from 'next/image'

export const Awards = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        const textSplit = SplitText.create(".text", {
            type: "words lines",
            linesClass: "text-line"
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".awards-wrapper",
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
        <section ref={containerRef} className={cn("section")}>
            <div >
                {/* Title */}
                <div className={cn("awards-wrapper", "container")}>
                    <h2 className={cn("text", "section-title")}>Awards &</h2>
                    <h2 className={cn("text", "section-title")}>Recognition</h2>
                </div>

                {/* Wrapper */}
                <div className={cn("flex items-center justify-center py-16 mt-16 gap-7 overflow-x-hidden")}>
                    {awards.map(award => (
                        <div key={award.id} className={cn("shrink-0 odd:-mt-8", "lg:odd:-mt-18")}>
                            <Image src={award.img} alt={"image"} width={150} height={150} className='w-full h-full object-cover' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Awards