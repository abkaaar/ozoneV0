import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

interface HeroProps {
    backgroundImage?: string;
    title: string;
    description: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    onPrimaryClick?: () => void;
    onSecondaryClick?: () => void;
    showPrimaryButton?: boolean;
    showSecondaryButton?: boolean;
    primaryButtonLink?: string;
    secondaryButtonLink?: string;
}


function Hero({
    backgroundImage = '/assets/ozone-banner.png',
    title,
    description,
    primaryButtonText = 'Get Started Today',
    secondaryButtonText = 'Learn More',
    onPrimaryClick,
    onSecondaryClick,
    showPrimaryButton = true,
    showSecondaryButton = true,
    primaryButtonLink = '#',
    secondaryButtonLink = '#',
}: HeroProps) {
    return (
        <section
            className="flex h-[100vh] bg-cover "
            style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
            <div className="flex items-center w-full h-full bg-black bg-opacity-50 md:px-24">
                <article className="flex items-start text-start flex-col gap-4 text-white w-full max-w-[600px] mx-8">
                    <h1 className="text-2xl md:text-5xl">{title}</h1>
                    <p className="text-sm md:text-base font-thin">{description}</p>
                    <div className="btns flex flex-col sm:flex-row gap-4 justify-start w-full">
                        {showPrimaryButton && (
                            <Link href={primaryButtonLink}>
                                <Button onClick={onPrimaryClick} className="bg-black py-6 px-6 rounded-none w-full">
                                    {primaryButtonText}
                                </Button>
                            </Link>
                        )}
                        {showSecondaryButton && (
                            <Link href={secondaryButtonLink}>
                                <Button variant="ghost" onClick={onSecondaryClick} className="border py-6 px-6 rounded-none w-full">
                                    {secondaryButtonText}
                                </Button>
                            </Link>
                        )}
                    </div>
                    <div className="justify-center flex gap-2" />
                </article>
            </div>
        </section>
    )
}

export default Hero