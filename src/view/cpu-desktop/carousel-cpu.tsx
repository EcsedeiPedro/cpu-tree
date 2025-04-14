import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CarouselCpu = () => {
  return (
    <Carousel className="w-full h-[500px] relative">
      <CarouselContent className="h-[500px] w-full flex items-center">
        <CarouselItem className="basis-1/3 flex items-center justify-center gap-10 rounded-lg">
          <div className="rounded-md overflow-hidden shadow-md w-full h-full">
            <div className="py-10 px-5 bg-purple-600">
              <h3>Lorem, ipsum.</h3>
            </div>

            <div className="bg-white p-5">
              <h3 className="text-xl font-bold">Title</h3>

              <p className="opacity-60 text-sm font-normal mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore alias autem accusamus! Quia nisi alias earum sapiente!
                Mollitia, praesentium odit!
              </p>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem className="basis-1/3 flex items-center justify-center gap-10 rounded-lg">
          <div className="rounded-md overflow-hidden shadow-md w-full h-full">
            <div className="py-10 bg-purple-600">

            </div>

            <div className="bg-white p-5">
              <h3 className="text-xl font-bold">Title</h3>

              <p className="opacity-60 text-sm font-normal mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore alias autem accusamus! Quia nisi alias earum sapiente!
                Mollitia, praesentium odit!
              </p>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem className="basis-1/3 flex items-center justify-center gap-10 rounded-lg">
          <div className="rounded-md overflow-hidden shadow-md w-full h-full">
            <div className="py-10 bg-purple-600">

            </div>

            <div className="bg-white p-5">
              <h3 className="text-xl font-bold">Title</h3>

              <p className="opacity-60 text-sm font-normal mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore alias autem accusamus! Quia nisi alias earum sapiente!
                Mollitia, praesentium odit!
              </p>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem className="basis-1/3 flex items-center justify-center gap-10 rounded-lg">
          <div className="rounded-md overflow-hidden shadow-md w-full h-full">
            <div className="py-10 bg-purple-600">

            </div>

            <div className="bg-white p-5">
              <h3 className="text-xl font-bold">Title</h3>

              <p className="opacity-60 text-sm font-normal mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore alias autem accusamus! Quia nisi alias earum sapiente!
                Mollitia, praesentium odit!
              </p>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem className="basis-1/3 flex items-center justify-center gap-10 rounded-lg">
          <div className="rounded-md overflow-hidden shadow-md w-full h-full">
            <div className="py-10 bg-purple-600">

            </div>

            <div className="bg-white p-5">
              <h3 className="text-xl font-bold">Title</h3>

              <p className="opacity-60 text-sm font-normal mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore alias autem accusamus! Quia nisi alias earum sapiente!
                Mollitia, praesentium odit!
              </p>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
