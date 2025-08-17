"use client";

import { ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface HorizontalCarouselGalleryItem {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  brand?: string;
  price?: string;
  category?: string;
}

export interface HorizontalCarouselGalleryProps {
  title?: string;
  description?: string;
  items?: HorizontalCarouselGalleryItem[];
}

const data = [
  {
    id: "designer-dress-1",
    title: "Silk Midi Dress",
    description: "Elegant silk midi dress with contemporary cut",
    brand: "Valentino",
    price: "$2,890",
    category: "Designer Dresses",
    href: "/products/silk-midi-dress",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "premium-denim-1",
    title: "Heritage Straight Leg",
    description: "Premium selvedge denim with vintage wash",
    brand: "Acne Studios",
    price: "$395",
    category: "Premium Denim",
    href: "/products/heritage-straight-leg",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "luxury-handbag-1",
    title: "Structured Top Handle",
    description: "Italian leather top handle bag with gold hardware",
    brand: "Bottega Veneta",
    price: "$3,200",
    category: "Luxury Handbags",
    href: "/products/structured-top-handle",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "statement-accessories-1",
    title: "Vintage Gold Hoops",
    description: "18k gold-plated statement earrings",
    brand: "Mejuri",
    price: "$165",
    category: "Statement Accessories",
    href: "/products/vintage-gold-hoops",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "designer-dress-2",
    title: "Evening Gown",
    description: "Floor-length evening gown with intricate beadwork",
    brand: "Oscar de la Renta",
    price: "$4,590",
    category: "Designer Dresses",
    href: "/products/evening-gown",
    image:
      "https://images.unsplash.com/photo-1566479179817-c08cbcf60bb6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const HorizontalCarouselGallery = ({
  title = "Trending Now",
  description = "Discover this season's must-have pieces",
  items = data,
}: HorizontalCarouselGalleryProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium font-display md:text-4xl lg:text-5xl text-foreground">
              {title}
            </h2>
            <p className="max-w-lg text-muted-foreground font-body">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto border border-border hover:bg-secondary"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto border border-border hover:bg-secondary"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:mr-[max(0rem,calc(50vw-700px))] 2xl:ml-[max(8rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <div className="group rounded-xl cursor-pointer bg-card">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    
                    {/* Quick Add to Cart Button - Only visible on hover */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Button
                        size="icon"
                        className="bg-white/90 text-foreground hover:bg-white hover:scale-105 shadow-lg backdrop-blur-sm"
                      >
                        <ShoppingCart className="size-4" />
                      </Button>
                    </div>

                    {/* Category Badge */}
                    {item.category && (
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-foreground backdrop-blur-sm">
                          {item.category}
                        </span>
                      </div>
                    )}

                    {/* Product Information */}
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      {item.brand && (
                        <div className="text-sm font-medium text-white/80 mb-1">
                          {item.brand}
                        </div>
                      )}
                      <div className="mb-2 text-xl font-semibold font-display md:mb-3">
                        {item.title}
                      </div>
                      <div className="mb-4 line-clamp-2 text-white/90 font-body">
                        {item.description}
                      </div>
                      <div className="flex items-center justify-between w-full">
                        {item.price && (
                          <div className="text-lg font-semibold font-display">
                            {item.price}
                          </div>
                        )}
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:scale-105">
                          View Details
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? "w-8 bg-primary" 
                  : "w-4 bg-primary/30 hover:bg-primary/50"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { HorizontalCarouselGallery };