import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Building, FileCheck, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedText } from "@/components/ui/AnimatedSection";
import heroImage from "@/assets/hero-consulting.jpg";

const stats = [
  { icon: Building, value: "500+", label: "Registrations" },
  { icon: FileCheck, value: "2000+", label: "Returns Filed" },
  { icon: ShieldCheck, value: "300+", label: "Audits Done" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional tax and compliance consultants in Bengaluru, Kengeri, and Hoskote"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 left-20 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div className="text-white">
            <AnimatedText>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white/90 mb-6">
                <Shield className="w-4 h-4 text-accent" />
                Auditor & Tax Consultant
              </span>
            </AnimatedText>

            <AnimatedText delay={0.1}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-6">
                Tax, GST, Audit & Compliance Services in Bengaluru
              </h1>
            </AnimatedText>

            <AnimatedText delay={0.2}>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                From business registrations to tax planning and audits, H & H Consultancy provides end-to-end financial, compliance, and licensing services in Bengaluru, Kengeri, and Hoskote to help your business grow with confidence.
              </p>
            </AnimatedText>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl text-base px-8 bg-accent hover:bg-accent/90 text-primary shadow-soft-lg hover:shadow-glow transition-all duration-300"
                >
                  <Link to="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* Stats Card */}
          <AnimatedSection delay={0.4}>
            <motion.div
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-display text-xl font-semibold text-white mb-6 text-center">
                Why Businesses Trust Us
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                    <div className="font-display text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
