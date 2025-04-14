import { CoreCarousel } from "../../components/core-carousel";
import { desktopCpuContent } from "./mock-data";

export const DesktopPage = () => {
  return (
    <section className="mt-16">
      <div className="container flex flex-col items-center justify-center h-full min-h-[calc(100vh-64px)]">
        <h1 className="text-center text-white text-4xl font-bold">
          Processadores de Desktop
        </h1>

        <CoreCarousel items={desktopCpuContent} />
      </div>
    </section>
  );
};
