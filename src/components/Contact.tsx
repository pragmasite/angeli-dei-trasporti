import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();
  const phone = "+41774029767";
  const email = "angelideitrasporti@gmail.com";
  const address = "Via alle Bolle 1, 6500 Bellinzona, CH";
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763.8047959097!2d9.036331!3d46.208033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47860a1e2b2e2e2d%3A0x2b2e2e2d2b2e2e2d!2sVia%20alle%20Bolle%201%2C%206500%20Bellinzona!5e0!3m2!1sen!2sch!4v1234567890";

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-2">
            {t.contact.title1}
            <br />
            <span className="text-primary">{t.contact.title2}</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="font-serif text-lg mb-1">{t.contact.phone}</h4>
                <a
                  href={`tel:${phone}`}
                  className="text-primary font-medium hover:underline"
                >
                  {phone}
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  Disponibile 24/7
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="font-serif text-lg mb-1">{t.contact.email}</h4>
                <a
                  href={`mailto:${email}`}
                  className="text-primary font-medium hover:underline"
                >
                  {email}
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  Risponderemo entro 24 ore
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="font-serif text-lg mb-1">{t.contact.address}</h4>
                <p className="text-primary font-medium">{address}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Bellinzona, Ticino, Svizzera
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <Button asChild size="lg" className="w-full gap-2">
                <a href={`tel:${phone}`}>
                  <Phone className="h-5 w-5" />
                  {t.contact.callNow}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-border shadow-medium h-96"
          >
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="Google Map"
              src={mapEmbedUrl}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
