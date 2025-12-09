import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Smartphone, Bug, Layers } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "3.8+",
    label: "Years Experience",
    description: "Professional Android Development",
  },
  {
    icon: Smartphone,
    value: "7+",
    label: "Android Apps",
    description: "Successfully Delivered",
  },
  {
    icon: Bug,
    value: "100+",
    label: "Bugs Fixed",
    description: "Performance Optimizations",
  },
  {
    icon: Layers,
    value: "MVVM",
    label: "Architecture",
    description: "Expert Level",
  },
];

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 text-center"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-primary rounded-xl shadow-glow">
                  <stat.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="pt-6">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};