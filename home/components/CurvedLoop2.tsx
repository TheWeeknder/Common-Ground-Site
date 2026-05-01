import { ChevronRight } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Hero75Props {
  className?: string;
}

const CurvedLoop2 = ({ className }: Hero75Props) => {
  return (
    <section className={cn("dark flex h-svh max-h-[650px]", className)}>
      <img
        src="/assets/chaps-co-chTK1JJfok0-unsplash.jpg"
        alt=""
        className="hidden w-1/2 object-cover lg:block"
      />
      <div className="flex w-full items-center justify-center bg-gradient-to-b from-[#2d2d2d] to-[#232320] lg:w-1/2">
        <div className="container my-10 flex w-[500px] flex-col gap-10 px-[5%]">
          <h1 className="text-4xl text-white">
            The Chair{" "}
            <span className="bg-linear-to-tr from-foreground to-muted bg-clip-text text-white">
              VIP
            </span>
          </h1>
          <div>
            <h2 className="text-4xl text-white lg:text-6xl">
              Skip the Wait. Book Like a Regular.
            </h2>
            <p className="mt-2.5 text-white lg:text-xl">
              Lock in your spot before anyone else, get priority booking, and
              never sit in the waiting room again.
            </p>
            <Button className="mt-10 flex h-fit items-center gap-2.5 rounded-xl px-5 py-4 font-bold text-white">
              <span>Book your cut</span>
              <ChevronRight className="size-5!" />
            </Button>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export { CurvedLoop2 };