import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, CheckCircle, Download } from "lucide-react";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:adarsh.goud@outlook.com",
      text: "adarsh.goud@outlook.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/adarsh-g-a0040b273",
      text: "linkedin.com/in/adarsh-g-a0040b273",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/adarshgoud",
      text: "github.com/adarshgoud",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Have a project in mind? I'd love to hear about it. Let's discuss
              how I can help bring your Android app idea to life.
            </p>
          </div>

          {/* Contact Info - Full width since form is temporarily removed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Connect with me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-3 rounded-xl hover:bg-secondary transition-colors duration-200"
                  >
                    <div className="p-2.5 bg-accent rounded-lg group-hover:bg-primary/10 transition-colors duration-200">
                      <link.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        {link.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {link.text}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Available for freelance
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                I'm currently open to new opportunities and exciting projects.
                Let's build something amazing together!
              </p>
              <a
                href="/resume/Adarsh_Cv.pdf"
                download="Adarsh_Cv.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200 mb-4"
              >
                <Download className="w-4 h-4" />
                Download My Resume
              </a>
              <div className="flex items-center gap-2 text-sm text-primary font-medium">
                <CheckCircle className="w-4 h-4" />
                Quick response guaranteed
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
