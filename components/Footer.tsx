import { cn } from '@/lib/utils'
import React from 'react'

export const Footer = () => {
    return (
        <footer className={cn("bg-neutral-900 text-white h-[70vh] fixed bottom-0 w-full")}>
            <div className={cn("container", "py-8 flex flex-wrap flex-col justify-center min-h-full")}>
                {/* Footer list */}
                <div className={cn("flex flex-wrap flex-col gap-7", "sm:gap-14", "md:flex-row md:items-center", "lg:gap-20")}>
                    {/* Links */}
                    <div>
                        {/* Links wrapper */}
                        <div className={cn("flex gap-2 mb-3", "sm:gap-5")}>
                            {/* Links */}
                            <div className={cn("grid gap-1")}>
                                {["home", "work", "contact"].map(label => (
                                    <a href="#" key={label} className={cn("uppercase", "hover:underline")}>
                                        {label}
                                    </a>
                                ))}
                            </div>
                            {/* Links */}
                            <div className={cn("grid gap-1")}>
                                {["instagram", "linkedin", "awwwards"].map(label => (
                                    <a href="#" key={label} className={cn("uppercase", "hover:underline")}>
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* text */}
                        <p className={cn("max-w-xs text-sm opacity-80 mb-3")}>
                            We design and build thoughtful digital experiences focused on clarity, performance, and long-term impact.
                        </p>
                        {/* text */}
                        <p>&copy; keen coding {new Date().getFullYear()}</p>
                    </div>

                    {/* text */}
                    <div className={cn("flex-1")}>
                        {/* text */}
                        <h3 className={cn("text-4xl font-medium uppercase", "md:text-6xl", "lg:text-8xl")}>let's chat</h3>
                        {/* text */}
                        <p className={cn("max-w-md mt-2 opacity-80")}>
                            Have a project in mind, a question, or just want to say hello? We’re always open to meaningful conversations.
                        </p>

                        {/* text */}
                        <p>privacy policy</p>
                        {/* text wrapper */}
                        <div className={cn("mt-4 text-sm")}>
                            <p>
                                Email:
                                <a href="#" className={cn("hover:underline")}>
                                    hello@Novak.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer