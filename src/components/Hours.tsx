import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  // Schedule: Mon-Fri 08:00-12:00 & 13:00-17:00, Sat 08:00-12:00, Sun Closed
  const schedule = [
    { hours: "08:00 - 12:00, 13:00 - 17:00" }, // Monday
    { hours: "08:00 - 12:00, 13:00 - 17:00" }, // Tuesday
    { hours: "08:00 - 12:00, 13:00 - 17:00" }, // Wednesday
    { hours: "08:00 - 12:00, 13:00 - 17:00" }, // Thursday
    { hours: "08:00 - 12:00, 13:00 - 17:00" }, // Friday
    { hours: "08:00 - 12:00" }, // Saturday
    { hours: t.hours.closed }, // Sunday
  ];

  const todayIndex = [6, 0, 1, 2, 3, 4, 5][new Date().getDay()];

  return (
    <section id="hours" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            {t.hours.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            {t.hours.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-xl rounded-2xl border bg-background shadow-medium overflow-hidden"
        >
          <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg text-primary">
              {t.hours.header}
            </span>
          </div>

          <div className="divide-y">
            {schedule.map((item, i) => {
              const isToday = i === todayIndex;
              const isClosed = item.hours === t.hours.closed;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`px-6 py-4 flex justify-between items-center transition-colors ${
                    isToday ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && (
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    )}
                    <span className={isToday ? "font-semibold text-primary" : ""}>
                      {t.hours.days[i]}
                    </span>
                    {isToday && (
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full font-medium">
                        {t.hours.today}
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-right ${isClosed ? "text-muted-foreground font-medium" : ""}`}
                  >
                    {item.hours}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
