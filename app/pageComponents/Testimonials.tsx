"use client"
import { gsap, useGSAP, SplitText } from '@/lib/gsap-utils'
import { testimonialsItems } from '@/data/data'
import { cn } from '@/lib/utils'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

export const Testimonials = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        const textSplit = SplitText.create(".text", {
            type: "words lines",
            linesClass: "text-line"
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".testimonials-wrapper",
                start: "top 60%"
            }
        })

        tl.from(textSplit.words, {
            yPercent: 100,
            ease: "power2.inOut",
            duration: 1,
            stagger: 0.03
        })

        // gsap.to(".")
    }, { scope: containerRef })

    return (
        <section ref={containerRef} className={cn("section")}>
            <div className={cn("container")}>
                {/* Title */}
                <div className={cn("testimonials-wrapper", "sm:mx-auto")}>
                    <div className={cn("flex gap-5 items-end")}>
                        <h2 className={cn("text", "section-title")}>What</h2>
                        <p className={cn("text", "max-w-60 uppercase font-medium hidden", "md:block")}>Over time, some of them have become friends</p>
                    </div>
                    <h2 className={cn("text", "section-title")}>people say</h2>
                    {/* sm text */}
                    <p className={cn("text", "max-w-96 uppercase font-medium mt-2", "md:hidden")}>Over time, some of them have become friends</p>
                </div>
                {/* Wrapper */}
                <div className={cn("border mt-16", "lg:mt-24")}>
                    {testimonialsItems.map(item => (
                        <div key={item.id} className={cn("divide-y")}>
                            {/* Wrapper */}
                            <div className={cn("grid gap-5 p-6", "lg:grid-cols-[0.8fr_1fr] lg:items-center")}>
                                {/* Image */}
                                <div className={cn("max-w-115 w-full h-80 mx-auto")}>
                                    <Image src={item.img} alt={item.name} width={640} height={965} className={cn("w-full h-full object-cover")} />
                                </div>
                                {/* content */}
                                <div className={cn("border-t", "lg:border-l lg:border-t-0 lg:pl-5")}>
                                    {/* info */}
                                    <div className={cn("flex flex-wrap py-5 px-2.5 gap-3 justify-between")}>
                                        <p className={cn("text-lg uppercase")}>
                                            <span className={cn("font-medium")}>name: </span>
                                            {item.name}
                                        </p>
                                        <p className={cn("text-lg uppercase")}>
                                            <span className={cn("font-medium")}>role: </span>
                                            {item.role}
                                        </p>
                                        <p className={cn("text-lg uppercase")}>
                                            <span className={cn("font-medium")}>company: </span>
                                            {item.company}
                                        </p>
                                        <p className={cn("text-lg uppercase")}>
                                            <span className={cn("font-medium")}>project: </span>
                                            {item.project}
                                        </p>
                                    </div>
                                    {/* text */}
                                    <p className={cn("text-xl", "sm:text-2xl")}>{item.desc}</p>
                                </div>
                            </div>
                            {/* Wrapper */}
                            <div className={cn("flex justify-between items-center")}>
                                <button>
                                    <ArrowBigLeft size={40} className={cn("text-neutral-900 transition-colors", "hover:fill-neutral-900")} />
                                </button>
                                <span>01/05</span>
                                <button>
                                    <ArrowBigRight size={40} className={cn("text-neutral-900 transition-colors", "hover:fill-neutral-900")} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default Testimonials