import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Developer",
    company: "CSS India Pvt Ltd - India",
    period: "Jan, 2022 - Aug, 2022",
    description:
      "Leading Android development initiatives, implementing modern architecture patterns, and mentoring junior developers.",
    achievements: [

      "Integrated digital stethoscope & telemedicine initiatives and digital monitoring, increasing patient access to care by 20%.",
      "Delivered patient-centered care to 50+ patients per week, accurately maintaining confidential records in Electronic Health Record (EHR) systems, resulting in a 20% reduction in documentation errors",
      "Optimized & enhanced calendar integration with Microsoft Outlook sync for automated event updates.",
      "Built event booking system for sports and dining reservations.",
      "Applied Clean Architecture with Google Components.",
      "Worked in Agile Scrum with designers & QA to deliver on-time releases.",

    ],
    technologies: ["Kotlin", "Jetpack Compose", "Firebase", "GitLab CI"],
  },
  {
    title: "Android Developer",
    company: "NSL GROUP Public Ltd - India",
    period: "Jan, 2021 - Dc, 2021",
    description:
      "Developed and maintained multiple Android applications, focusing on performance optimization and user experience.",
    achievements: [
      "Created interactive sales and inventory dashboards to track key business KPIs.",
      "Engineered live vehicle tracking and real-time inventory scheduling solutions, reducing operational costs by 60%.",
      "Implemented real-time inventory scheduling with automated reminders.",
      "Enabled graph visualizations (line, bar, pie, radar) via chart libraries.",
      "Analyzed delivery and usage data to optimize logistics and reduce idle time.",
    ],
    technologies: ["Java", "Kotlin", "Room", "Retrofit", "Maps SDK"],
  },
  {
    title: "Junior Android Developer",
    company: "UMDAA Healthcare Pvt Ltd - India",
    period: "July, 2019 - Oct, 2020",
    description:
      "Started professional journey building Android applications and learning best practices in mobile development.",
    achievements: [
      "Collaborated with a team of 10+ medical professionals to streamline clinical workflows, improving patient throughput by 15% while maintaining full regulatory compliance",
      "Supported diagnostic testing to enhance health outcomes.",
      "Applied strong communication, problem-solving, and adaptability in high-pressure healthcare settings."
    ],
    technologies: ["Java", "XML", "Firebase", "Git"],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-secondary/30">
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
              Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Professional Experience
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
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
                    {exp.period}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {exp.description}
                  </p>

                  <ul
                    className={`space-y-2 mb-4 ${
                      index % 2 === 0 ? "md:text-left" : ""
                    }`}
                  >
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
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