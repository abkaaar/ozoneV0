import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Future of Electric Mobility: What You Need to Know",
      description: "Discover how electric mobility is transforming urban transportation while addressing sustainability challenges.",
      author: "Autoklik A.",
    },
    {
      title: "5 Reasons Why Liquid Tree Technology is a Game-Changer",
      description: "Learn how our innovative liquid trees are improving urban air quality worldwide.",
      author: "Autoklik A.",
    },
    {
      title: "The Future of Electric Mobility: What You Need to Know",
      description: "Discover how electric mobility is transforming urban transportation while addressing sustainability challenges.",
      author: "Autoklik A.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog</h1>
        <Button variant="outline" className='rounded-none px-6 py-6'>
          Read More
        </Button>
      </div>
      
      <p className="text-gray-600 mb-8">
        Explore our range of eco-conscious services aimed at creating a sustainable and profitable future.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <Card key={index} className="bg-white">
            <CardHeader className="p-0">
              <div className="bg-emerald-800 h-48 w-full flex items-center justify-center">
                <div className="text-white">
                  {/* Placeholder for image */}
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {post.description}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-sm text-gray-600">By {post.author}</span>
              <Button variant="outline" size="sm" className='rounded-none'>
                <ChevronRight className="h-4 w-4" />
                
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;