import { CoreCarousel } from "@/src/components/core-carousel"
import netbookCpuContent from "./mock-data"

export const NetBookPage = () => {
  return (
    <section className="mt-16">
      <div className="container flex flex-col items-center justify-center h-full min-h-[calc(100vh-64px)]">
        <h1 className="text-center text-white text-4xl font-bold">
          Processadores de Netbooks
        </h1>

        <CoreCarousel items={netbookCpuContent} />
      </div>
    </section>
  )
}