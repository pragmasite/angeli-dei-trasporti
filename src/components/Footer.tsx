import { Link } from "react-router-dom";
import { Facebook, Linkedin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const phone = "+41774029767";
  const email = "angelideitrasporti@gmail.com";

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <img
              src="/images/logo.png"
              alt="Angeli dei Trasporti"
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-background/70">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about-us"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a
                  href="#hours"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-4">{t.contact.label}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${phone}`}
                  className="text-background/70 hover:text-background transition-colors flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  {phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="text-background/70 hover:text-background transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  {email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg mb-4">Social</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-background/70 hover:text-background transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/70 hover:text-background transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-sm text-background/70">
            © {currentYear} Angeli dei Trasporti. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
