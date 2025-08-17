import { MoveUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const FullScreenBackgroundHero = () => {
  return (
    <section className="font-display relative h-svh max-h-[1400px] w-full overflow-hidden bg-[url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat py-12 after:absolute after:left-0 after:top-0 after:block after:h-full after:w-full after:bg-black/50 after:content-[''] md:py-20">
      <div className="container relative z-20 h-full w-full max-w-[85rem] mx-auto">
        <div className="flex h-full w-full flex-col justify-end gap-12">
          <div className="flex max-w-[61.375rem] flex-col gap-1">
            <h1 className="leading-tight text-white text-3xl md:text-4xl lg:text-6xl font-bold">
              Fall Collection 2024
            </h1>
          </div>
          <div className="flex w-full flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <p className="border-white/40 text-white/90 max-w-[32rem] border-l pl-6 text-base">
              Curated pieces that define modern elegance. From timeless classics to contemporary statements.
            </p>
            <div className="shrink-0 flex gap-4">
              <Button
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 group flex h-fit w-fit items-center gap-3 rounded-full px-6 py-4 text-sm uppercase font-medium"
              >
                <a href="#">
                  <p className="group-hover:underline">Shop Women</p>
                  <MoveUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/40 text-white group flex h-fit w-fit items-center gap-3 rounded-full border bg-transparent px-6 py-4 text-sm uppercase font-medium hover:bg-white/10"
              >
                <a href="#">
                  <p className="group-hover:underline">Shop Men</p>
                  <MoveUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FullScreenBackgroundHero };