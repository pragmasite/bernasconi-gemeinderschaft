import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/hooks/useLanguage";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 62 787 88 44",
      href: "tel:+41627878844",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "info@bernasconi.ch",
      href: "mailto:info@bernasconi.ch",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Feldhofweg 1, 4663 Aarburg, CH",
      href: "https://maps.google.com/?q=Feldhofweg+1,+4663+Aarburg,+CH",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            {t.contact.title1}
            <br />
            <span className="text-accent">{t.contact.title2}</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mt-4">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.label === t.contact.address ? "_blank" : undefined}
                  rel={item.label === t.contact.address ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-lg bg-background border border-border shadow-soft hover:shadow-medium hover:border-accent/30 transition-all group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-serif text-lg text-primary mb-1">
                      {item.label}
                    </h3>
                    <p className="text-foreground/70 group-hover:text-foreground transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6"
            >
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-lg py-6">
                <a href="tel:+41627878844">
                  <Phone className="mr-2 h-5 w-5" />
                  {t.contact.cta}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden shadow-medium h-96 md:h-full min-h-96"
          >
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2705.3654842265737!2d7.904767!3d47.331228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b6e5f6a8c8c8d%3A0x0!2sBernasconi%20Gemeinderschaft!5e0!3m2!1sde!2sch!4v1234567890"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
