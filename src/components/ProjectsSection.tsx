import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, Github, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "nurse-management",
    title: "Nurse Asst App",
    description:
      "Vitals Monitoring Application for Nurses with real-time sync and offline support for seamless productivity.",
    features: [
      "Patient profile creation",
      "Recording of vital signs",
      "Automatic risk assessment",
      "Offline data with Room DB",
    ],
    techStack: ["Jetpack Compose", "Kotlin", "MVVM", "Room Database"],
    images: [
      "/screenshots/screen_01.jpeg",
      "/screenshots/screen_02.jpeg",
      "/screenshots/screen_03.jpeg",
      "/screenshots/screen_04.jpeg"
    ],
  },
];

const comingSoon = [
  {
    title: "Vitals App (KMP)",
    description: "Full-featured Medical app",
  },
  {
    title: "Vechile Tracker",
    description: "User monitoring with GPS and activity tracking",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // State for carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % projects[0].images.length);
    }, 3000); // Change image every 3 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-24 bg-background">
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
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Featured Projects
            </h2>
          </div>

          {/* Featured Projects */}
          <div className="space-y-8 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-card rounded-3xl shadow-card overflow-hidden hover:shadow-hover transition-all duration-500"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto bg-gradient-to-br from-primary/10 via-accent to-secondary overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full max-w-xs h-80 bg-card rounded-2xl shadow-xl">
                        <div className="w-full h-full rounded-2xl p-4 overflow-hidden relative">
                          {project.images.map((image, index) => (
                            <img 
                              key={index}
                              src={image} 
                              alt={`${project.title} screenshot ${index + 1}`} 
                              className={`absolute inset-0 w-full h-full object-contain rounded-2xl transition-opacity duration-500 ${
                                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Hidden buttons - Uncomment when ready to use
                    <div className="flex flex-wrap gap-3">
                      <Link
                        to={`/project/${project.id}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all duration-200"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-secondary/80 transition-all duration-200"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    </div>
                    */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              More Projects Coming Soon
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {comingSoon.map((project) => (
                <div
                  key={project.title}
                  className="p-6 bg-card/50 border border-border rounded-2xl"
                >
                  <h4 className="font-semibold text-foreground mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};