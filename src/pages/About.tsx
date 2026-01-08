import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection, AnimatedText } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { SEO } from "@/components/SEO";
import { Target, Eye, Heart, Award, Shield, CheckCircle, Star, Users } from "lucide-react";
import heroImage from "@/assets/hero-consulting.jpg";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "Ethical standards guide our actions, ensuring trust and reliability in all we do.",
  },
  {
    icon: Target,
    title: "Accuracy",
    description: "We approach every engagement with meticulous attention to detail and unwavering accuracy.",
  },
  {
    icon: Shield,
    title: "Compliance Excellence",
    description: "Ensuring full regulatory compliance and staying ahead of changing requirements.",
  },
  {
    icon: Users,
    title: "Client Commitment",
    description: "Dedicated to client success with personalized service and unwavering support.",
  },
];

const founder = {
  name: "Shivakumar H",
  qualification: "B.Com, CA-Inter",
  title: "Proprietor & Chief Consultant",
  bio: "With years of hands-on experience in taxation, audits, and regulatory compliance, Shivakumar H leads H & H Consultancy with a strong commitment to professionalism, integrity, and client-first service. His expertise helps businesses remain compliant while optimizing financial efficiency.",
  initials: "SH"
};

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional tax and compliance consulting team at H & H Consultancy in Bengaluru, Kengeri, and Hoskote"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl opacity-60" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl text-white">
            <AnimatedText>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white/90 mb-6">
                About Us
              </span>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mt-4 mb-6 leading-tight">
                Building Trust Through Compliance & Expertise
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                H & H Consultancy is a Bengaluru-based professional firm providing audit, taxation, compliance, and business licensing services in Kengeri, Hoskote, and across Bengaluru. Founded and led by Shivakumar H (B.Com, CA-Inter), the firm is committed to delivering accurate, ethical, and timely solutions for individuals, startups, and established businesses.
              </p>
            </AnimatedText>
            <AnimatedText delay={0.3}>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mt-4">
                With a strong focus on regulatory compliance, financial transparency, and client success, H & H Consultancy helps organizations in Bengaluru, Kengeri, and Hoskote navigate complex tax laws, registrations, and statutory requirements with confidence.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection>
              <div className="glass-panel-strong rounded-3xl aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-2xl bg-primary mx-auto mb-6 flex items-center justify-center">
                    <span className="text-primary-foreground font-display text-4xl font-bold">H</span>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    H & H Consultancy
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div>
              <AnimatedText>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                  Our Story
                </h2>
              </AnimatedText>
              <AnimatedText delay={0.1}>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  H & H Consultancy is a Bengaluru-based professional firm providing audit, taxation, compliance, and business licensing services. Founded and led by Shivakumar H (B.Com, CA-Inter), the firm is committed to delivering accurate, ethical, and timely solutions for individuals, startups, and established businesses.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.2}>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  With a strong focus on regulatory compliance, financial transparency, and client success, H & H Consultancy helps organizations navigate complex tax laws, registrations, and statutory requirements with confidence.
                </p>
              </AnimatedText>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <AnimatedText>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Our Values
              </span>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-4">
                Principles That Guide Us
              </h2>
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <GlassCard className="h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <AnimatedText>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Leadership
              </span>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-4">
                Our Founder
              </h2>
            </AnimatedText>
          </div>

          <div className="max-w-2xl mx-auto">
            <AnimatedSection>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="glass-panel-strong rounded-2xl p-8 text-center"
              >
                <div className="w-24 h-24 rounded-2xl bg-primary mx-auto mb-6 flex items-center justify-center">
                  <span className="text-primary-foreground font-display text-2xl font-semibold">
                    {founder.initials}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  {founder.name}
                </h3>
                <p className="text-accent font-medium mb-1">
                  {founder.qualification}
                </p>
                <p className="text-muted-foreground mb-6">
                  {founder.title}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {founder.bio}
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
