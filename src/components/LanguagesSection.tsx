import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Languages, Circle } from "lucide-react";

const languages = [
  {
    name: "English",
    proficiency: "4/5",
    description: "Fluent"
  },
  {
    name: "German",
    proficiency: "A1",
    description: "Beginner - Learning"
  }
];

export const LanguagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="languages" className="py-24 bg-secondary/30">
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
              Language Skills
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Languages
            </h2>
          </div>

          {/* Language Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">
                    {language.name}
                  </h3>
                  <Languages className="w-6 h-6 text-primary" />
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-muted-foreground mb-1">
                    <span>{language.description}</span>
                    <span>{language.proficiency}</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5">
                    <div 
                      className="bg-primary h-2.5 rounded-full"
                      style={{ 
                        width: language.name === "English" ? "80%" : "20%"
                      }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Circle
                      key={i}
                      className={`w-3 h-3 ${
                        i < (language.name === "English" ? 4 : 1)
                          ? "text-primary fill-primary"
                          : "text-secondary"
                      }`}
                    />
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