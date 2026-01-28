"use client"

import { gsap, useGSAP, SplitText } from '@/lib/gsap-utils'

import { workSecItems } from '@/data/data'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useRef } from 'react'

export const Works = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        const textSplit = SplitText.create(".text", {
            type: "words lines",
            linesClass: "text-line"
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".works-wrapper",
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

        gsap.to(".section-img", {
            duration: 1,
            stagger: 0.7,
            clipPath: "polygon(0% 0%, 100% 0%,100% 100%,0% 100%)",
            scrollTrigger: {
                trigger: ".work-section-wrapper",
                start: "top center",
                // markers: true
            }
        })
    }, { scope: containerRef })

    return (
        <section ref={containerRef} className='section'>
            <div className={cn('container')}>
                {/* Title */}
                <div className={cn('works-wrapper', 'flex flex-wrap items-center justify-between gap-6')}>
                    {/* Text wrapper */}
                    <div>
                        <h2 className={cn('text', 'section-title')}>selected</h2>
                        <h2 className={cn('text', 'section-title')}>Work</h2>
                    </div>
                    {/* Wrapper */}
                    <div className={cn('uppercase font-medium', 'sm:text-2xl')}>
                        <p className='text'>Selected</p>
                        <p className='text'>Works and Projects</p>
                    </div>
                </div>
                {/* Wrapper */}
                <div className={cn('work-section-wrapper', 'space-y-32 mt-24', 'lg:space-y-44 lg:mt-36')}>
                    {workSecItems.map(item => (
                        <div key={item.id} className={cn('flex flex-col gap-6 group', 'lg:flex-row lg:justify-center lg:items-center lg:gap-8', 'xl:gap-16')}>
                            {/* content */}
                            <div className={cn('text', 'space-y-1.5')}>
                                <h3 className='text-4xl uppercase font-medium'>{item.title}</h3>
                                <p className='max-w-md'>{item.text}</p>
                            </div>
                            {/* Image */}
                            <div className={cn('section-img', 'lg:group-nth-[2]:order-first')} style={{ clipPath: 'polygon(0% 0%, 0% 0%,0% 100%,0% 100%)' }}    >
                                <Image src={item.img} alt={item.title} width={583} height={260} className='w-full h-full object-cover' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default Works