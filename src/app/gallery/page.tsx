import { PhotoGallery } from "@/components/shared/PhotoGallery";

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h1 className="font-bebas-neue text-6xl md:text-8xl tracking-tighter uppercase mb-4">
          Training <span className="text-[#E50914]">Gallery</span>
        </h1>
        <div className="w-24 h-1 bg-[#E50914] mb-6" />
        <p className="text-[#B3B3B3] max-w-2xl font-light text-lg">
          Take a look at our state-of-the-art facilities and elite training equipment designed to push your limits.
        </p>
      </div>
      
      <PhotoGallery />
    </div>
  );
}
