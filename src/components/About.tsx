import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  const features = [
    { icon: "🎯", title: t.about.features[0].title, description: t.about.features[0].description },
    { icon: "👥", title: t.about.features[1].title, description: t.about.features[1].description },
    { icon: "✨", title: t.about.features[2].title, description: t.about.features[2].description },
    { icon: "⏰", title: t.about.features[3].title, description: t.about.features[3].description },
  ];

  return (
    <section id="about-us" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.about.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-2">
            {t.about.title1}
            <br />
            <span className="text-primary">{t.about.title2}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-2xl mb-4">{t.about.title2}</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.about.p2}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-background rounded-lg p-6 shadow-soft text-center">
              <div className="text-3xl font-serif text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">
                {t.about.stat1}
              </div>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-soft text-center">
              <div className="text-3xl font-serif text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">
                {t.about.stat2}
              </div>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-soft text-center">
              <div className="text-3xl font-serif text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">
                {t.about.stat3}
              </div>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-soft text-center">
              <div className="text-3xl font-serif text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">
                {t.hours.open24}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg p-6 shadow-soft hover:shadow-medium transition-shadow"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h4 className="font-serif text-lg mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
