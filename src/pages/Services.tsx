import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, FileCheck, Scale, ShieldCheck, Building, 
  Briefcase, CheckCircle, Users, FileText, Calculator, Receipt,
  ClipboardList, Landmark, Globe, BadgeCheck
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection, AnimatedText } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";

// Import service images
import registrationImg from "@/assets/services/registration.jpg";
import gstTaxImg from "@/assets/services/gst-tax.jpg";
import bookkeepingImg from "@/assets/services/bookkeeping.jpg";
import payrollImg from "@/assets/services/payroll.jpg";
import incomeTaxImg from "@/assets/services/income-tax.jpg";
import auditImg from "@/assets/services/audit.jpg";
import tradelicenseImg from "@/assets/services/tradelicense.png";

const serviceCategories = [
  {
    id: "income-tax",
    icon: Calculator,
    title: "Income Tax Consultancy",
    description: "Expert income tax planning, filing, and compliance for individuals, professionals, and businesses.",
    image: incomeTaxImg,
    services: [
      "Income Tax Planning",
      "ITR Filing for Individuals",
      "ITR Filing for Businesses",
      "Tax Compliance & Advisory",
      "Tax Notice Handling",
    ],
  },
  {
    id: "gst",
    icon: Receipt,
    title: "GST Services",
    description: "Complete GST registration, return filing, compliance, and advisory to keep your business tax-ready.",
    image: gstTaxImg,
    services: [
      "GST Registration",
      "GST Return Filing",
      "GST Compliance",
      "GST Advisory & Consultancy",
      "GST Assessments",
    ],
  },
  {
    id: "company-registration",
    icon: Building,
    title: "Company Registration",
    description: "End-to-end registration for Proprietorship, Partnership, LLP, and Private Limited companies.",
    image: registrationImg,
    services: [
      "Proprietorship Registration",
      "Partnership Registration",
      "LLP Registration",
      "Private Limited Company Registration",
      "Company Incorporation Support",
    ],
  },
  {
    id: "audits",
    icon: ShieldCheck,
    title: "Audit Assignments",
    description: "Professional audit services including internal audit, statutory audit, tax audit, and compliance reviews.",
    image: auditImg,
    services: [
      "Internal Audit",
      "Statutory Audit",
      "Tax Audit",
      "Compliance Reviews",
      "Audit Reporting",
    ],
  },
  {
    id: "trade-license",
    icon: BadgeCheck,
    title: "Trade License",
    description: "Assistance with trade license registration, renewal, and regulatory documentation.",
    image: tradelicenseImg,
    services: [
      "Trade License Registration",
      "License Renewal",
      "Regulatory Documentation",
      "Compliance Support",
      "License Amendments",
    ],
  },
  {
    id: "labour-license",
    icon: ClipboardList,
    title: "Labour License",
    description: "Labour license registration and statutory compliance for businesses across sectors.",
    image: payrollImg,
    services: [
      "Labour License Registration",
      "Statutory Compliance",
      "License Renewal",
      "Regulatory Filings",
      "Compliance Advisory",
    ],
  },
  {
    id: "food-license",
    icon: FileText,
    title: "Food License (FSSAI)",
    description: "Complete support for food business registration, licensing, and regulatory compliance.",
    image: bookkeepingImg,
    services: [
      "FSSAI Registration",
      "Food License Application",
      "Regulatory Compliance",
      "License Renewal",
      "Documentation Support",
    ],
  },
  {
    id: "labour-law",
    icon: Scale,
    title: "Labour Law Consultancy",
    description: "Advisory and compliance support for labour laws, employee regulations, and statutory filings.",
    image: auditImg,
    services: [
      "Labour Law Advisory",
      "Employee Regulations Compliance",
      "Statutory Filings",
      "Legal Compliance Support",
      "Regulatory Updates & Guidance",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={gstTaxImg} 
            alt="Tax and compliance services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl opacity-40" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <AnimatedText>
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white/90 mb-6">
                  Our Services
                </span>
              </AnimatedText>
              <AnimatedText delay={0.1}>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mt-4 mb-6 leading-tight">
                  Complete Financial & Compliance Solutions
                </h1>
              </AnimatedText>
              <AnimatedText delay={0.2}>
                <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
                  From business registrations to audits, we provide comprehensive services 
                  to keep your business compliant and financially healthy.
                </p>
              </AnimatedText>
              <AnimatedSection delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-xl text-base px-8 shadow-soft-lg hover:shadow-glow transition-all duration-300"
                  >
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.3}>
              <div className="relative">
                <motion.div
                  className="glass-panel-strong rounded-3xl p-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Building, label: "Registrations", count: "500+" },
                      { icon: FileCheck, label: "Returns Filed", count: "2000+" },
                      { icon: ShieldCheck, label: "Audits Done", count: "300+" },
                      { icon: Users, label: "Happy Clients", count: "1000+" },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="bg-white/50 rounded-xl p-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                        <div className="font-display text-2xl font-bold text-foreground">{stat.count}</div>
                        <div className="text-muted-foreground text-sm">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section-padding bg-gradient-to-b from-secondary/30 to-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <AnimatedText>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                What We Offer
              </span>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6">
                Comprehensive Services for Your Business
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-muted-foreground text-lg">
                We offer a full range of financial and compliance services tailored to meet 
                the unique needs of your business.
              </p>
            </AnimatedText>
          </div>

          <div className="space-y-10">
            {serviceCategories.map((category, index) => (
              <AnimatedSection key={category.id} delay={index * 0.1}>
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Side */}
                  <motion.div 
                    className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="relative overflow-hidden rounded-3xl shadow-soft-xl">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-3 text-white">
                          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <category.icon className="w-6 h-6" />
                          </div>
                          <span className="font-display text-xl font-semibold">{category.title}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Side */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <GlassCard
                      className="h-full"
                      variant="strong"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                          <category.icon className="w-7 h-7 text-accent" />
                        </div>
                        <h3 className="font-display text-2xl font-semibold text-foreground">
                          {category.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {category.description}
                      </p>
                      <ul className="space-y-3">
                        {category.services.map((service) => (
                          <motion.li 
                            key={service} 
                            className="flex items-start gap-3 text-foreground"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>{service}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </GlassCard>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <AnimatedText>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-4 mb-6">
                Your Trusted Financial Partner
              </h2>
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BadgeCheck,
                title: "Expert Team",
                description: "Qualified CAs and professionals with years of experience",
              },
              {
                icon: Globe,
                title: "Pan India Service",
                description: "We serve clients across all states and territories",
              },
              {
                icon: Receipt,
                title: "Affordable Pricing",
                description: "Competitive rates without compromising on quality",
              },
              {
                icon: Landmark,
                title: "Timely Delivery",
                description: "We ensure all filings are done before deadlines",
              },
            ].map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <GlassCard
                  className="h-full text-center group"
                  whileHover={{ y: -8 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
        <div className="container-custom">
          <AnimatedSection>
            <div className="glass-panel-strong rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                  Let us handle your financial compliance while you focus on growing your business. 
                  Contact us for a free consultation today.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-xl text-base px-8 shadow-soft-lg hover:shadow-glow transition-all duration-300"
                  >
                    <Link to="/contact">
                      Schedule Consultation
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-xl text-base px-8 border-accent/30 hover:bg-accent/5"
                  >

                    <a href="tel:+919535823762">
                      Call Us Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
