"use client"
import { gsap, useGSAP, SplitText } from "@/lib/gsap-utils"
import { useRef } from "react"

import { processItems } from "@/data/data"
import { cn } from "@/lib/utils"

export const Process = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        const textSplit = SplitText.create(".text", {
            type: "words lines",
            linesClass: "text-line"
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".process-wrapper",
                start: "top 60%",
                // markers: true
            }
        })

        tl.from(textSplit.words, {
            yPercent: 100,
            duration: 1,
            ease: "power2.inOut",
            stagger: 0.03
        })

    }, { scope: containerRef })

    return (
        <section ref={containerRef} className={cn("section")}>
            <div className={cn("container")}>
                {/* Title */}
                <div className={cn("process-wrapper")}>
                    <h2 className={cn("text", "section-title")}>thoughtfull</h2>
                    {/* Text wrapper */}
                    <div className={cn("flex items-center gap-5")}>
                        <h2 className={cn("text", "section-title")}>process</h2>
                        <p className={cn("text", "uppercase font-medium")}>i think a lot</p>
                    </div>
                </div>
                {/* Card wrapper */}
                <div className={cn("grid gap-6 mt-24", "sm:grid-cols-2", "lg:grid-cols-3 lg:mt-28")}>
                    {processItems.map(item => (
                        <div key={item.id} className={cn("border p-6")}>
                            {/* Icon */}
                            <div className={cn("outlined-text", "text-[200px] uppercase leading-tight relative max-w-max mx-auto group")}>
                                <span>{item.icon}</span>
                                <span className={cn("absolute -top-2 -left-2 transition-all duration-400", "group-hover:top-0 group-hover:left-0")}>{item.icon}</span>
                                <span className={cn("absolute -top-4 -left-4 transition-all duration-400", "group-hover:top-0 group-hover:left-0")}>{item.icon}</span>
                            </div>
                            {/* content */}
                            <div className={cn("space-y-2")}>
                                <div className={cn("flex items-start gap-1.5")}>
                                    <p className={cn("text-neutral-500")}>{item.id}/</p>
                                    <h3 className={cn("card-title")}>{item.title}</h3>
                                </div>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Process