import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "JNTUH University",
    period: "2015 - 2019",
    description:
      "Focused on software engineering, data structures, algorithms, and mobile application development.",
    achievements: [
      "Graduated with First Class Distinction",
      "Active member of the Computer Science Club",
      "Participated in multiple hackathons and coding competitions",
      "Completed capstone project on Android Application Development"
    ],
    technologies: ["Java", "C++", "Android", "MySQL", "Data Structures"]
  },
  {
    degree: "Higher Secondary Education",
    institution: "Sri Chaitanya Junior College",
    period: "2013 - 2015",
    description:
      "Science stream with Mathematics, Physics, and Chemistry focus.",
    achievements: [
      "Scored 95% in Mathematics",
      "State level finalist in Science Olympiad",
      "Editor of school science magazine"
    ],
    technologies: ["Mathematics", "Physics", "Chemistry"]
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
                  <p className="text-primary font-medium mb-3">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {edu.description}
                  </p>

                  <ul
                    className={`space-y-2 mb-4 ${
                      index % 2 === 0 ? "md:text-left" : ""
                    }`}
                  >
                    {edu.achievements.map((achievement) => (
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
                    {edu.technologies.map((tech) => (
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