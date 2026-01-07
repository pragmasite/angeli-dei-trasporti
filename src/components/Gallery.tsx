import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();

  // Placeholder gallery items - can be updated with actual images
  const images = [
    { src: "/images/service-1.jpg", alt: "Servizio Trasporto" },
    { src: "/images/service-2.jpg", alt: "Supporto Medico" },
    { src: "/images/service-3.jpg", alt: "Assistenza Spesa" },
    { src: "/images/service-4.jpg", alt: "Servizio Navetta" },
    { src: "/images/service-5.jpg", alt: "Team Professionale" },
    { src: "/images/service-6.jpg", alt: "Comfort Garantito" },
  ];

  return (
    <section id="gallery" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-2">
            {t.gallery.title}
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-secondary"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="text-3xl">📸</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium text-white">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm italic">
            Le immagini della galleria verranno aggiunte presto
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
