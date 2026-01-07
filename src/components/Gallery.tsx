import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/hooks/useLanguage";
import { X } from "lucide-react";

const Gallery = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder gallery images with descriptions
  const images = [
    { src: "/images/gallery-1.jpg", alt: "Moderner Boden" },
    { src: "/images/gallery-2.jpg", alt: "Elegante Wandgestaltung" },
    { src: "/images/gallery-3.jpg", alt: "Deckendesign" },
    { src: "/images/gallery-4.jpg", alt: "Wohnzimmereinrichtung" },
    { src: "/images/gallery-5.jpg", alt: "Geschäftsraum" },
    { src: "/images/gallery-6.jpg", alt: "Komplettlösung" },
  ];

  return (
    <section id="gallery" className="py-24 bg-muted">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20"
              onClick={() => setSelectedImage(index)}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/10 group-hover:bg-foreground/20 transition-colors">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                    <div className="w-8 h-8 border-2 border-accent rounded-full" />
                  </div>
                  <p className="text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/70 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl"
            >
              <div className="aspect-[4/3] bg-foreground/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <div className="w-12 h-12 border-2 border-accent rounded-full" />
                  </div>
                  <p className="text-white text-lg">
                    {images[selectedImage].alt}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-accent transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
