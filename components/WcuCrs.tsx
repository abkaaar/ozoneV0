"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

// import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    // CarouselNext,
    // CarouselPrevious,
} from "@/components/ui/carousel"

export function WcuCarousel() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    const images = [
        "/assets/wcu/8.png",
        "/assets/wcu/2.png",
        "/assets/wcu/3.png",
        "/assets/wcu/4.png",
        "/assets/wcu/5.png",
    ]

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs mb-6 md:hidden"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {images.map((src, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                        <Image
                                        src={src}
                                        alt={`Carousel image ${index + 1}`}
                                        width={500}
                                        height={500}
                                        className="w-full object-cover"
                                    />
                            {/* <Card>
                                <CardContent className="flex aspect-square items-center justify-center">
                                  
                                </CardContent>
                            </Card> */}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
        </Carousel>
    )
}
