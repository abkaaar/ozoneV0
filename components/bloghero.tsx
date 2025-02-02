import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

interface BlogHeroProps {
    backgroundImage?: string;
    title: string;
    date: string;
}

// Revolutionizing Mobility, Sustainability, and Energy Access!
// 
// Get started today
// learn more about us

function BlogHero({
    backgroundImage = '/assets/ozone-banner.png',
    title,
    date,
}: BlogHeroProps) {
    return (
        <section
            className="flex h-[50vh] bg-cover bg-center"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
            <div className="flex flex-col w-full h-full bg-black bg-opacity-50 py-16 px-16 gap-14">
                <Link href="/">
                <ArrowLeft className="h-8 w-8 text-white border" />
                </Link>

                <article className="flex items-start flex-col md:flex-row justify-between text-start gap-4 text-white w-full">
                    <h1 className="text-2xl md:text-5xl max-w-2xl">{title}</h1>
                <div>
                <span>By August Blue</span>
                <p className="text-sm md:text-base font-thin">{date}</p>
                <span>5min read</span>
                </div>
                </article>
            </div>
        </section>
    )
}

export default BlogHero