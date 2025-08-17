"use client"

import { Button } from "@/components/ui/button";

const MutedContainerCta = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container overflow-hidden mx-auto">
        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-6 overflow-hidden rounded-xl border bg-muted/50 md:flex-row">
          <div className="max-w-xl self-center p-6 md:p-12">
            <h2 className="text-3xl font-semibold md:text-4xl font-display">
              Stay In Style
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Be the first to know about new arrivals, exclusive collections, and seasonal sales.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                We respect your privacy. Unsubscribe at any time. 2-3 emails per week.
              </p>
            </div>
          </div>
          <div className="relative ml-6 max-h-96 md:mt-8 md:ml-0">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Fashion styling flat lay with elegant accessories"
              width={600}
              height={400}
              className="z-10 aspect-video h-full w-full rounded-tl-xl border-t border-l object-cover pt-3.5 pl-3.5 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { MutedContainerCta };