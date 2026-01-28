"use client"
import { gsap, useGSAP, SplitText } from "@/lib/gsap-utils"
import { useRef } from "react"
import { projectItems } from "@/data/data"
import { cn } from "@/lib/utils"
import Image from "next/image"

export const Projects = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const projectRef = useRef<(HTMLDivElement | null)[]>([])

    useGSAP(() => {
        const textSplit = SplitText.create(".text", {
            type: "words lines",
            linesClass: "text-line"
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".projects-wrapper",
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

        projectRef.current.forEach(item => {
            if (!item) return
            const imageWrapper = item.querySelector(".project-img")
            if (!imageWrapper) return

            const xTo = gsap.quickTo(imageWrapper, "x", {
                duration: 0.4,
                ease: "power3"
            })
            const yTo = gsap.quickTo(imageWrapper, "y", {
                duration: 0.4,
                ease: "power3"
            })

            const onMove = (e: MouseEvent) => {
                const rect = item.getBoundingClientRect()
                const x = e.clientX - rect.left - 150
                const y = e.clientY - rect.top - 125

                xTo(x)
                yTo(y)
            }

            const onEnter = () => {
                gsap.to(imageWrapper, {
                    autoAlpha: 1,
                    scale: 1,
                    duration: 0.3
                })
            }
            const onLeave = () => {
                gsap.to(imageWrapper, {
                    autoAlpha: 0,
                    scale: 0.5,
                    duration: 0.3
                })
            }

            item.addEventListener("mousemove", onMove as EventListener)
            item.addEventListener("mouseenter", onEnter)
            item.addEventListener("mouseleave", onLeave)

            return () => {
                item.removeEventListener("mousemove", onMove as EventListener)
                item.removeEventListener("mouseenter", onEnter)
                item.removeEventListener("mouseleave", onLeave)
            }
        })
    }, { scope: containerRef })

    return (
        <section ref={containerRef} className={cn('section')}>
            <div className={cn('container', 'space-y-14', 'lg:space-y-20')}>
                {/* Title */}
                <div className="projects-wrapper">
                    <p className={cn('text', 'uppercase font-medium')}>Recent Projects</p>
                    <h2 className={cn('text', 'text-4xl font-medium max-w-2xl mt-2', 'sm:text-5xl', 'lg:text-7xl lg:max-w-4xl')}>Selected works that demonstrate our approach to digital craft</h2>
                </div>
                {/* Wrapper */}
                <div className={cn('divide-y divide-neutral-300 border-t border-neutral-300 flex-1 max-w-[80%]')}>
                    {projectItems.map((item, index) => (
                        <div key={item.id} ref={(el) => { projectRef.current[index] = el }} className={cn('relative p-8 cursor-pointer transition-all', 'hover:bg-neutral-50 hover:pl-12', 'focus:bg-neutral-50')}>
                            <h3 className={cn('relative text-3xl font-medium z-10', 'sm:text-4xl', 'lg:text-7xl')}>{item.title}</h3>
                            {/* Image */}
                            <div className={cn('project-img', 'absolute top-0 left-0 pointer-events-none scale-50 z-20 max-w-60 w-full h-40 opacity-0')}>
                                <Image src={item.img} alt={item.title} fill className={cn('project-img', 'w-full h-full object-cover')} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default Projects