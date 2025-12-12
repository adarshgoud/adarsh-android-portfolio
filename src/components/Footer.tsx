import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#" className="text-xl font-bold text-foreground">
              <span className="text-gradient">A</span>darsh
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Android Developer | Building Modern Apps
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:adarsh.goud@outlook.com"
              className="p-2.5 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/adarsh-g-a0040b273"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/adarshgoud"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} Adarsh. Built with{" "}
            <Heart className="w-4 h-4 text-primary fill-primary" /> using React and AI Tools
          </p>
        </div>
      </div>
    </footer>
  );
};
