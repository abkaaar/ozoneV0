import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import Link from 'next/link';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Future of Electric Mobility: What You Need to Know",
      description: "Discover how electric mobility is transforming urban transportation while addressing sustainability challenges.",
      author: "Autoklik A.",
      link: "/blog/1"
    },
    {
      title: "5 Reasons Why Liquid Tree Technology is a Game-Changer",
      description: "Learn how our innovative liquid trees are improving urban air quality worldwide.",
      author: "Autoklik A.",
      link: "/blog/2"
    },
    {
      title: "The Future of Electric Mobility: What You Need to Know",
      description: "Discover how electric mobility is transforming urban transportation while addressing sustainability challenges.",
      author: "Autoklik A.",
      link: "/blog/3"
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-20 md:py-28 ">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog</h1>
        <Link href="/blog">
          <Button variant="outline" className='rounded-none px-6 py-6 hidden md:flex'>
            Read More
          </Button>
        </Link>
      </div>
      
      <p className="text-gray-600 mb-8">
        Explore our range of eco-conscious services aimed at creating a sustainable and profitable future.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <Link href={post.link} key={index}>
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="bg-emerald-800 h-48 w-full flex items-center justify-center">
                  <div className="text-white">
                    {/* Placeholder for image */}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <h2 className="text-base mb-4 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-sm text-gray-600">By {post.author}</span>
                <Button variant="outline" size="sm" className='rounded-none'>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
        <Link href="/blog">
          <Button variant="outline" className='rounded-none px-6 py-6 md:hidden'>
            Read More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;