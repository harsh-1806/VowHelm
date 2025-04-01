import { Button } from '@/components/ui/button'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <section className="relative w-full h-[80vh] flex items-center justify-center text-white overflow-hidden">
            {/* Video or Image Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        // 980 493
                        background: 'url(https://placeholder.co/980x493)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="hero-text text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                        Ensure Safety
                        <br />
                        in case of accidents
                    </h1>
                    <p className="text-xl mb-8 text-altor-light-blue">
                        VowHelm
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="#">
                            <Button
                                variant="outline"
                                className="rounded-full border-white text-white hover:bg-white hover:text-black transition-colors"
                            >
                                Learn More
                            </Button>
                        </Link>
                        <Link href="#">
                            <Button className="rounded-full bg-altor-blue text-white hover:bg-altor-light-blue transition-colors">
                                Shop Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Blue Circular Glowing Pattern */}
            <div className="absolute inset-0 bg-gradient-radial opacity-40 z-0" />
        </section>
    )
}

export default HeroSection
