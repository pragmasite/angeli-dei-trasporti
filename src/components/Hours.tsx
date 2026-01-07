import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  // Opening hours: Monday-Friday 08:00-17:30, Saturday-Sunday 00:00-23:59 (open)
  const schedule = [
    { hours: "08:00 - 17:30" }, // Monday
    { hours: "08:00 - 17:30" }, // Tuesday
    { hours: "08:00 - 17:30" }, // Wednesday
    { hours: "08:00 - 17:30" }, // Thursday
    { hours: "08:00 - 17:30" }, // Friday
    { hours: t.hours.open24 },  // Saturday
    { hours: t.hours.open24 },  // Sunday
  ];

  const todayIndex = new Date().getDay();
  // Convert JS getDay (0=Sunday) to our array (0=Monday)
  const adjustedTodayIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <section id="hours" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.hours.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-2">
            {t.hours.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl rounded-2xl border border-border bg-background shadow-soft overflow-hidden"
        >
          <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg">{t.hours.header}</span>
          </div>
          <div className="divide-y">
            {schedule.map((item, i) => {
              const isToday = i === adjustedTodayIndex;
              const isClosed =
                item.hours === t.hours.closed || item.hours === t.hours.open24;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className={`px-6 py-4 flex justify-between items-center ${
                    isToday ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && (
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    )}
                    <span
                      className={
                        isToday ? "font-semibold text-primary" : "font-medium"
                      }
                    >
                      {t.hours.days[i]}
                    </span>
                    {isToday && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                        {t.hours.today}
                      </span>
                    )}
                  </div>
                  <span
                    className={`font-medium ${
                      item.hours === t.hours.closed
                        ? "text-muted-foreground"
                        : "text-primary"
                    }`}
                  >
                    {item.hours}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-muted-foreground text-sm">
            Disponibile 24/7 per servizi di emergenza
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
