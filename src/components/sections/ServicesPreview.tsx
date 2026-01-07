import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Building, Receipt, FileText, Users, Calculator, 
  ShieldCheck, FileCheck, Scale, ClipboardList, BadgeCheck
} from "lucide-react";
import { AnimatedSection, AnimatedText } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";

const services = [
  {
    icon: Calculator,
    title: "Income Tax Consultancy",
    description: "Expert income tax planning, filing, and compliance for individuals, professionals, and businesses.",
  },
  {
    icon: Receipt,
    title: "GST Services",
    description: "Complete GST registration, return filing, compliance, and advisory to keep your business tax-ready.",
  },
  {
    icon: Building,
    title: "Company Registration",
    description: "End-to-end registration for Proprietorship, Partnership, LLP, and Private Limited companies.",
  },
  {
    icon: ShieldCheck,
    title: "Audit Assignments",
    description: "Professional audit services including internal audit, statutory audit, tax audit, and compliance reviews.",
  },
  {
    icon: BadgeCheck,
    title: "Trade License",
    description: "Assistance with trade license registration, renewal, and regulatory documentation.",
  },
  {
    icon: ClipboardList,
    title: "Labour License",
    description: "Labour license registration and statutory compliance for businesses across sectors.",
  },
  {
    icon: FileText,
    title: "Food License (FSSAI)",
    description: "Complete support for food business registration, licensing, and regulatory compliance.",
  },
  {
    icon: Scale,
    title: "Labour Law Consultancy",
    description: "Advisory and compliance support for labour laws, employee regulations, and statutory filings.",
  },
];

export function ServicesPreview() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <AnimatedText>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Expertise
            </span>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6">
              Complete Financial & Compliance Solutions
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-muted-foreground text-lg">
              From startup registrations to complex audits, we provide end-to-end services 
              to keep your business compliant and financially healthy.
            </p>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.05}>
              <GlassCard
                className="h-full group cursor-pointer hover:shadow-glass-lg transition-all duration-500"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all duration-300 group"
            >
              <span className="relative">
                View All Services
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
