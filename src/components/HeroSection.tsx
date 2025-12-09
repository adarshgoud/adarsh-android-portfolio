import { motion } from "framer-motion";
import { Download, ArrowRight, Smartphone } from "lucide-react";
import AndroidIcon from "@/icons/android_icon.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-96 h-96 border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] border border-primary/5 rounded-full"
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary/30 rounded-full"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-primary/40 rounded-full"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6"
            >
              <Smartphone className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-accent-foreground">
                Android Developer
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
              Hi, I'm{" "}
              <span className="text-gradient">Adarsh</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-xl mx-auto lg:mx-0">
              Java & Kotlin Android App Developer
            </p>

            <p className="text-base text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Building modern, high-performance Android applications with clean architecture and exceptional user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="/resume.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-200 shadow-soft hover:shadow-glow"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-all duration-200"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Avatar/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl scale-110" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/10 to-accent/30 p-2 shadow-card">
                <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                    <img src={AndroidIcon} alt="Android Icon" className="w-64 h-64 text-primary/40" />
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 px-4 py-2 bg-card rounded-xl shadow-card"
              >
                <span className="text-sm font-semibold text-foreground">3.8+ Years</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -left-4 px-4 py-2 bg-card rounded-xl shadow-card"
              >
                <span className="text-sm font-semibold text-primary">7+ Apps</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};