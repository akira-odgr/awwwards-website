import Marquee from 'react-fast-marquee'
import { companyLogos } from '@/data/data'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export const WorkWith = () => {
    return (
        <section className={cn("py-20 mb-[70vh]")}>
            <div>
                <p className={cn("text-xl font-medium text-center uppercase mb-9")}>worked with some of the best out there</p>
            </div>

            {/* Logo wrapper */}
            <div>
                <Marquee autoFill={true}>
                    {companyLogos.map(logo => (
                        <div key={logo.id} className={cn("px-9", "lg:px-16")}>
                            <Image src={logo.icon} alt='logo' width={140} height={39} className={cn("w-full h-auto")} />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}

export default WorkWith