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
      `${import.meta.env.BASE_URL}screenshots/screen_01.jpeg`,
      `${import.meta.env.BASE_URL}screenshots/screen_02.jpeg`,
      `${import.meta.env.BASE_URL}screenshots/screen_03.jpeg`,
      `${import.meta.env.BASE_URL}screenshots/screen_04.jpeg`
    ],
  },
  {
    id: "coupon-referral-app",
    title: "Coupon Referral System",
    description:
      "A viral referral platform for small businesses that rewards customers for bringing in new clients through shareable coupons.",
    features: [
      "Mobile registration with phone number",
      "Referral tracking and reward distribution",
      "Business analytics for coupon performance",
      "Gamification for top referrers",
    ],
    techStack: ["Android", "Kotlin", "MVVM Architecture"],
    images: [
      `${import.meta.env.BASE_URL}screenshots/img_1.jpeg`,
      `${import.meta.env.BASE_URL}screenshots/img_2.jpeg`,
      `${import.meta.env.BASE_URL}screenshots/img_3.jpeg`,
      `${import.meta.env.BASE_URL}screenshots/img_4.jpeg`,
      `${import.meta.env.BASE_URL}screenshots/img_5.jpeg`,
      `${import.meta.env.BASE_URL}screenshots/img_6.jpeg`,
    ],
  },
];

const comingSoon = [
  {
    title: "Vitals App (KMP Platform)",
    description: "Full-featured Medical app with cross-platform support",
  },
  {
    title: "Vechile Tracker",
    description: "User monitoring with GPS and activity tracking",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // State for carousel - track current image for each project
  const [currentIndices, setCurrentIndices] = useState(
    projects.map(() => 0)
  );
  
  // Auto-advance carousel for all projects
  useEffect(() => {
    const intervals = projects.map((project, projectIndex) => {
      return setInterval(() => {
        setCurrentIndices(prevIndices => {
          const newIndices = [...prevIndices];
          const projectImages = projects[projectIndex]?.images || [];
          newIndices[projectIndex] = (newIndices[projectIndex] + 1) % projectImages.length;
          return newIndices;
        });
      }, 3000); // Change image every 3 seconds
    });
    
    return () => intervals.forEach(interval => clearInterval(interval));
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
              <>
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group bg-card rounded-3xl shadow-card overflow-hidden hover:shadow-hover transition-all duration-500 border border-border/30"
                >
                <div className="w-full">
                  {/* Image and Content Row */}
                  <div className="grid lg:grid-cols-12 gap-8 mb-6">
                    {/* Image - 30% width */}
                    <div className="lg:col-span-4">
                      <div className="relative h-64 lg:h-96 bg-gradient-to-br from-primary/10 via-accent to-secondary overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full max-w-xs h-80 bg-card rounded-2xl shadow-xl">
                            <div className="w-full h-full rounded-2xl p-4 overflow-hidden relative">
                              {project.images && project.images.length > 0 ? (
                                <div className="relative w-full h-full">
                                  {project.images.map((image, imgIndex) => (
                                    <div 
                                      key={imgIndex}
                                      className={`absolute inset-0 ${imgIndex === currentIndices[index] ? 'block z-10' : 'hidden z-0'}`}>
                                      <img 
                                        src={image} 
                                        alt={`${project.title} screenshot ${imgIndex + 1}`} 
                                        className="w-full h-full object-contain rounded-xl"
                                        onError={(e) => console.error('Image failed to load:', image, e)}
                                        onLoad={() => console.log(`Image ${imgIndex} loaded:`, image, imgIndex === currentIndices[index] ? '(CURRENT)' : '(HIDDEN)')}
                                      />
                                    </div>
                                  ))}
                                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                                    {project.images.map((_, imgIndex) => (
                                      <button
                                        key={imgIndex}
                                        onClick={() => {
                                          setCurrentIndices(prev => {
                                            const newIndices = [...prev];
                                            newIndices[index] = imgIndex;
                                            return newIndices;
                                          });
                                        }}
                                        className={`w-2 h-2 rounded-full ${imgIndex === currentIndices[index] ? 'bg-white' : 'bg-white/50'}`}
                                        aria-label={`Go to slide ${imgIndex + 1}`}
                                      />
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-xl">
                                  <span className="text-gray-500">No screenshots available</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content - 70% width */}
                    <div className="lg:col-span-8 p-8 lg:p-10 flex flex-col justify-center">
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

                  {/* GIF Section - Below the row */}
                  {project.id === 'nurse-management' && (
                    <div className="flex justify-center mb-6">
                      <div className="overflow-hidden rounded-lg">
                        <img 
                          src={`${import.meta.env.BASE_URL}gifs/nurse_app_flow.gif`}
                          alt="Nurse App Workflow Demo" 
                          className="w-full h-auto"
                          style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '400px', transform: 'scale(1.3)', transformOrigin: 'center' }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}
                  {/* GIF Section - Will be added later
                  {project.id === 'coupon-referral-app' && (
                    <div className="flex justify-center mb-6">
                      <div className="overflow-hidden rounded-lg">
                        <img 
                          src={`${import.meta.env.BASE_URL}gifs/coupon_referral_demo.gif`}
                          alt="Coupon Referral App Workflow Demo" 
                          className="w-full h-auto"
                          style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '400px', transform: 'scale(1.3)', transformOrigin: 'center' }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}
                  */}
                </div>
              </motion.div>
              {/* Strong divider between projects */}
              {index < projects.length - 1 && (
                <div className="my-12 py-6">
                  <div className="border-t-2 border-primary/20 rounded-full mx-auto w-32"></div>
                  <div className="text-center mt-4">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent-foreground/70 text-xs font-medium rounded-full">
                      Next Project
                    </span>
                  </div>
                </div>
              )}
            </>))}
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