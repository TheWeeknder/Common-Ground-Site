import { ChevronRight } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Hero75Props {
  className?: string;
}

const StatementBanner = ({ className }: Hero75Props) => {
  return (
    <section className={cn("dark flex h-svh max-h-[650px]", className)}>
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
          </div>
          <button className="
            relative top-0
            bg-transparent text-white text-xs sm:text-sm
            px-8 py-4 sm:px-10 sm:py-[18px]
            font-bold tracking-[0.12em] rounded-full
            border-2 border-[#ffe590]
            hover:bg-white/5
            active:scale-[0.98]
            transition-all duration-[120ms]
            touch-manipulation min-h-[44px] sm:min-h-[68px]
            w-fit mx-auto sm:mx-0
          ">
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
      <img
        src="/assets/chaps-co-chTK1JJfok0-unsplash.jpg"
        alt=""
        className="hidden w-1/2 object-cover lg:block"
      />
    </section>
  );
};

export { StatementBanner };
