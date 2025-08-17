"use client";

import { Star } from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    profileImage: {
      src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      alt: "Emma Thompson profile picture",
      width: 58,
      height: 58,
    },
    quote:
      "The quality is exceptional - these pieces feel like haute couture. Every stitch is perfect and the fabric is luxurious.",
    rating: 5,
    author: {
      name: "Emma Thompson",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    },
  },
  {
    profileImage: {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      alt: "Michael Chen profile picture",
      width: 54,
      height: 54,
    },
    quote:
      "Perfect fit and fast shipping! The sizing guide was spot on and my order arrived within 2 days. Impressed with the service.",
    rating: 5,
    author: {
      name: "Michael Chen",
      location: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
  },
  {
    profileImage: {
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      alt: "Sofia Rodriguez profile picture",
      width: 60,
      height: 60,
    },
    quote:
      "My go-to for statement pieces! The designs are unique and always get compliments. The quality-to-price ratio is unbeatable.",
    rating: 5,
    author: {
      name: "Sofia Rodriguez",
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
  },
  {
    profileImage: {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      alt: "James Wilson profile picture",
      width: 66,
      height: 66,
    },
    quote:
      "Outstanding customer service and beautiful clothes. Had an issue with sizing and they resolved it immediately with a perfect exchange.",
    rating: 5,
    author: {
      name: "James Wilson",
      location: "Chicago, IL",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
  },
  {
    profileImage: {
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      alt: "Isabella Martinez profile picture",
      width: 58,
      height: 58,
    },
    quote:
      "The attention to detail is incredible. From the packaging to the garment construction, everything screams premium quality.",
    rating: 5,
    author: {
      name: "Isabella Martinez",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    },
  },
  {
    profileImage: {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      alt: "Alexander Kim profile picture",
      width: 58,
      height: 58,
    },
    quote:
      "Finally found a brand that gets it right - modern styles, sustainable materials, and ethical production. Will definitely order again!",
    rating: 5,
    author: {
      name: "Alexander Kim",
      location: "Seattle, WA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    },
  },
];

const CompanyLogoTestimonials = () => {
  return (
    <section className="py-32 bg-background">
      <div className="border-y">
        <div className="container mx-auto flex flex-col gap-6 border-x py-4 max-lg:border-x lg:py-8">
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl font-[var(--font-display)]">
            What Our Customers Say
          </h2>
          <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground">
            Real reviews from fashion enthusiasts worldwide
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-10 grid gap-8 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="flex flex-col gap-6 rounded-md bg-card p-6 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <img
                src={testimonial.profileImage.src}
                alt={testimonial.profileImage.alt}
                width={testimonial.profileImage.width}
                height={testimonial.profileImage.height}
                className="rounded-full object-cover"
              />
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
            </div>

            <blockquote className="text-muted-foreground text-lg font-normal italic">{`"${testimonial.quote}"`}</blockquote>

            <div className="mt-auto flex items-center gap-4">
              <img
                src={testimonial.author.image}
                alt={`${testimonial.author.name}'s profile picture`}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-lg tracking-[-0.36px] font-[var(--font-display)]">
                  {testimonial.author.name}
                </p>
                <p className="text-muted-foreground">
                  {testimonial.author.location}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container mx-auto h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export { CompanyLogoTestimonials };