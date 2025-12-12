import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Master's in Media Informatics",
    institution: "University Of Vienna - Austria",
    period: "2023 - Present"
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "JNTUH University - India",
    period: "2015 - 2018"
  }
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
              Academic Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Education
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute top-6 w-4 h-4 bg-primary rounded-full shadow-glow z-10 -left-2 ${
                    index % 2 === 0 ? "md:left-auto md:-right-2" : "md:-left-2"
                  }`}
                />

                {/* Content Card */}
                <div className="ml-6 md:ml-0 bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-shadow duration-300">
                  <div
                    className={`flex items-center gap-2 mb-3 text-sm text-muted-foreground ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};