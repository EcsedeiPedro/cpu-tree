import { ImageGallery } from "../../components/imageGallery";
import { desktopGallery, netbookGallery, serverGallery } from "./mock-data";

export const Gallery = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#181513] px-4 mt-16 py-10">
      <div className="container">
        <div className="py-10">
          <h3 className="text-2xl text-white font-bold">
            Processadores de Desktop e Notebook
          </h3>
          <ImageGallery images={desktopGallery} />
        </div>

        <div className="py-10">
          <h3 className="text-2xl text-white font-bold">
            Processadores de Servidores
          </h3>
          <ImageGallery images={serverGallery} />
        </div>

        <div className="py-10">
          <h3 className="text-2xl text-white font-bold">
            Processadores de Netbooks
          </h3>
          <ImageGallery images={netbookGallery} />
        </div>
      </div>
    </section>
  );
};
