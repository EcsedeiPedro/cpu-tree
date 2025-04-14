import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogDescription } from "@radix-ui/react-dialog";

export type CarouselItemData = {
  title: string;
  description: string;
  content: React.ReactNode;
  image?: string;
};

type CarouselGenericProps = {
  items: CarouselItemData[];
};

export const CoreCarousel = ({ items }: CarouselGenericProps) => {
  return (
    <Carousel className="w-full h-[500px] relative">
      <CarouselContent className={`h-[500px] w-full flex items-center ${items.length === 1 ? "justify-center" : ""}`}>
        {items
          ? items.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-1/3 flex items-center justify-center gap-10 rounded-lg"
              >
                <div className=" rounded-md overflow-hidden shadow-md w-full h-full">
                  <div
                    className="relative py-16 px-5 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: item.image
                        ? `url(${item.image})`
                        : undefined,
                      backgroundColor: item.image ? undefined : "#0f0f0f",
                    }}
                  >
                    <div className="absolute bg-black/60 inset-0 z-10" />

                    <h3 className="text-white font-bold text-xl relative z-20">
                      {item.title}
                    </h3>
                  </div>

                  <div className="bg-white p-5 flex items-center gap-5">
                    <p className="text-black/70 text-sm">{item.description}</p>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">Ver mais</Button>
                      </DialogTrigger>

                      <DialogContent className="lg:min-w-[768px] p-0 border-0 gap-0 rounded-none overflow-hidden shadow-md w-full">
                        <DialogHeader
                          className="relative z-10 py-16 px-5 bg-cover bg-center"
                          style={{
                            backgroundImage: item.image
                              ? `url(${item.image})`
                              : undefined,
                            backgroundColor: item.image ? undefined : "#0f0f0f",
                          }}
                        >
                          <div className="absolute bg-black/60 inset-0 z-10" />

                          <div className="relative z-20 flex flex-col gap-5">
                            <DialogTitle className="text-white font-bold text-2xl">
                              {item.title}
                            </DialogTitle>

                            <DialogDescription className="text-white font-bold text-sm">
                              {item.description}
                            </DialogDescription>
                          </div>
                        </DialogHeader>

                        <div className="bg-white p-5 gap-5 h-full max-h-[500px] overflow-y-auto">
                          {item.content}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CarouselItem>
            ))
          : null}
      </CarouselContent>

      {items.length > 1 ? (
        <>
          <CarouselPrevious >
            <span className="text-black">Previous</span>
          </CarouselPrevious>

          <CarouselNext>
            <span className="text-black">Next</span>
          </CarouselNext>
        </>
      ) : null}
    </Carousel>
  );
};
