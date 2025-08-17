import {
  Shirt,
  Users,
  Gem,
  Star,
  Tag,
  ShoppingBag,
} from "lucide-react";

const ComplexBentoGrid = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs text-muted-foreground md:text-sm">
            CURATED COLLECTIONS
          </div>
          <h2 className="mt-4 mb-8 text-4xl font-semibold text-pretty md:text-6xl">
            Explore Collections
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">
            Discover our carefully curated selection of premium fashion pieces, 
            from timeless essentials to exclusive designer collaborations.
          </p>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <a
            href="#"
            className="group relative isolate h-80 overflow-hidden rounded-2xl border border-border transition-transform duration-300 hover:-translate-y-0.5"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Women's Essentials"
              className="absolute inset-0 -z-20 size-full rounded-2xl object-cover grayscale-100 transition-all duration-300 group-hover:grayscale-0"
            />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="flex size-12 items-center justify-center rounded-xl border border-background/20 bg-background/15 backdrop-blur-sm">
                <Shirt
                  className="size-5 text-background"
                  strokeWidth={1.5}
                />
              </span>
              <div>
                <h3 className="font-medium text-background">
                  Women's Essentials
                </h3>
                <p className="mt-2 text-background/70">
                  Timeless wardrobe staples crafted with premium materials for 
                  everyday elegance.
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-background">
                    Shop Now <ShoppingBag className="size-4" />
                  </span>
                </div>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="group relative isolate h-80 overflow-hidden rounded-2xl border border-border transition-transform duration-300 hover:-translate-y-0.5 lg:col-span-2"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Men's Formal"
              className="absolute inset-0 -z-20 size-full rounded-2xl object-cover grayscale-100 transition-all duration-300 group-hover:grayscale-0"
            />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="flex size-12 items-center justify-center rounded-xl border border-background/20 bg-background/15 backdrop-blur-sm">
                <Users
                  className="size-5 text-background"
                  strokeWidth={1.5}
                />
              </span>
              <div>
                <h3 className="font-medium text-background">
                  Men's Formal
                </h3>
                <p className="mt-2 text-background/70">
                  Sophisticated suits and professional wear designed for the 
                  modern gentleman.
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-background">
                    Shop Now <ShoppingBag className="size-4" />
                  </span>
                </div>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="group relative isolate h-80 overflow-hidden rounded-2xl border border-border transition-transform duration-300 hover:-translate-y-0.5 lg:col-span-2"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Seasonal Accessories"
              className="absolute inset-0 -z-20 size-full rounded-2xl object-cover grayscale-100 transition-all duration-300 group-hover:grayscale-0"
            />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="flex size-12 items-center justify-center rounded-xl border border-background/20 bg-background/15 backdrop-blur-sm">
                <Gem className="size-5 text-background" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="font-medium text-background">Seasonal Accessories</h3>
                <p className="mt-2 text-background/70">
                  Curated selection of bags, jewelry, and shoes to complete your 
                  seasonal looks.
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-background">
                    Shop Now <ShoppingBag className="size-4" />
                  </span>
                </div>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="group relative isolate h-80 overflow-hidden rounded-2xl border border-border transition-transform duration-300 hover:-translate-y-0.5"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Designer Collaborations"
              className="absolute inset-0 -z-20 size-full rounded-2xl object-cover grayscale-100 transition-all duration-300 group-hover:grayscale-0"
            />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="flex size-12 items-center justify-center rounded-xl border border-background/20 bg-background/15 backdrop-blur-sm">
                <Star
                  className="size-5 text-background"
                  strokeWidth={1.5}
                />
              </span>
              <div>
                <h3 className="font-medium text-background">
                  Designer Collaborations
                </h3>
                <p className="mt-2 text-background/70">
                  Exclusive limited-edition pieces from renowned fashion 
                  designers and emerging talents.
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-background">
                    Shop Now <ShoppingBag className="size-4" />
                  </span>
                </div>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="group relative isolate h-80 overflow-hidden rounded-2xl border border-border transition-transform duration-300 hover:-translate-y-0.5"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-accent/80 to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Sale Items"
              className="absolute inset-0 -z-20 size-full rounded-2xl object-cover grayscale-100 transition-all duration-300 group-hover:grayscale-0"
            />
            <div className="flex h-full flex-col justify-between p-10">
              <div className="flex items-center gap-2">
                <span className="flex size-12 items-center justify-center rounded-xl border border-background/20 bg-background/15 backdrop-blur-sm">
                  <Tag
                    className="size-5 text-background"
                    strokeWidth={1.5}
                  />
                </span>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  Up to 70% Off
                </span>
              </div>
              <div>
                <h3 className="font-medium text-background">Sale Items</h3>
                <p className="mt-2 text-background/70">
                  Discover luxury pieces at exceptional prices. Premium quality, 
                  unbeatable value.
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-background">
                    Shop Now <ShoppingBag className="size-4" />
                  </span>
                </div>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="group relative isolate h-80 overflow-hidden rounded-2xl border border-border transition-transform duration-300 hover:-translate-y-0.5 lg:col-span-2"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="New Arrivals"
              className="absolute inset-0 -z-20 size-full rounded-2xl object-cover grayscale-100 transition-all duration-300 group-hover:grayscale-0"
            />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="flex size-12 items-center justify-center rounded-xl border border-background/20 bg-background/15 backdrop-blur-sm">
                <Star className="size-5 text-background" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="font-medium text-background">
                  New Arrivals
                </h3>
                <p className="mt-2 text-background/70">
                  Be first to discover the latest trends and must-have pieces 
                  from top fashion houses.
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-background">
                    Shop Now <ShoppingBag className="size-4" />
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export { ComplexBentoGrid };