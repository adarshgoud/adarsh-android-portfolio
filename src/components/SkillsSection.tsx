import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      "Java",
      "Kotlin",
      "Python",
      "C#",
      "XML"
    ],
  },
  {
    title: "Backend & Enterprise Development",
    skills: [
      "Java SE",
      "Spring Boot",
      "Spring MVC",
      "REST API Development",
      "Java Multithreading (Basic)",
      "Server-side Backend Development (Basic)"
    ],
  },
  {
    title: "Databases",
    skills: [
      "SQL",
      "PostgreSQL",
      "Oracle DB (Basic)",
      "MS SQL Server (Basic)",
      "Relational Database Design",
      "Transactions & Indexing",
      "MongoDB Node "
    ],
  },
  {
    title: "Warehouse & Logistics Systems",
    skills: [
      "Warehouse Management Systems (WMS – Basic)",
      "Intralogistics Processes",
      "Material Flow Concepts",
      "Customer-Specific Software Customization"
    ],
  },
  {
    title: "Android Development",
    skills: [
      "Android SDK",
      "Jetpack Components",
      "Room DB",
      "LiveData",
      "ViewModel",
      "Retrofit",
      "WorkManager",
      "Navigation Component",
      "Firebase",
      "Crashlytics"
    ],
  },
  {
    title: "Architecture & Design",
    skills: [
      "MVVM",
      "MVP",
      "Clean Architecture",
      "Modular Software Design"
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub",
      "GitLab CI",
      "CI/CD Pipelines",
      "Docker",
      "Postman",
      "Linux",
      "Android Studio"
    ],
  },
  {
    title: "Testing & Quality",
    skills: [
      "Unit Testing",
      "Integration Testing",
      "Debugging in Production Systems"
    ],
  },
];


export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-secondary/30">
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
              Technical Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Skills & Technologies
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.03,
                      }}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
