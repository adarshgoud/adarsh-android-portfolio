import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Layers,
  Box,
  Wifi,
  Globe,
  MapPin,
  CreditCard,
  RefreshCw,
  Bug,
} from "lucide-react";

const strengths = [
  { icon: Layers, label: "MVVM Architecture" },
  { icon: Box, label: "Jetpack Components" },
  { icon: Wifi, label: "Offline-first Apps" },
  { icon: Globe, label: "API Integration" },
  { icon: MapPin, label: "Maps & GPS Tracking" },
  { icon: CreditCard, label: "Payment Gateways" },
  { icon: RefreshCw, label: "CI/CD Pipelines" },
  { icon: Bug, label: "Debugging Expert" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Crafting Digital Experiences
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-foreground leading-relaxed">
                I'm a passionate Android Developer with{" "}
                <span className="font-semibold text-primary">3.8+ years</span> of
                hands-on experience building modern, scalable mobile applications.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Experienced with {" "}
                 <span className="font-semibold text-primary">3.8+ years in building high-impact 7+ mobile apps</span> and 4 years of
                freelancing across diverse domains. Skilled in live location tracking, healthtech
                innovation, IoT integration, and real-time
                data solutions. Currently pursuing  {" "} <span className="font-semibold text-primary"> Master’s
                in Media Informatics in University Of
                Vienna, Austria.</span>
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                My expertise lies in crafting high-performance Android apps using
                Java and Kotlin, with a strong foundation in MVVM architecture,
                Jetpack components, and Clean Architecture principles. I'm
                dedicated to writing clean, maintainable code that delivers
                exceptional user experiences.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-1 bg-primary rounded-full" />
                <span className="text-sm text-muted-foreground">
                  Ready to build something amazing
                </span>
              </div>
            </motion.div>

            {/* Strengths Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="group flex items-center gap-3 p-4 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <div className="p-2.5 bg-accent rounded-xl group-hover:bg-primary/10 transition-colors duration-300">
                    <strength.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {strength.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};