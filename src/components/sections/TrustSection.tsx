import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { AnimatedSection, AnimatedText } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Managing Director, Kumar Enterprises",
    content: "Their GST and compliance services have been exceptional. They handle all our registrations and filings with precision, allowing us to focus on our core business.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Founder, Sharma Textiles",
    content: "From company registration to tax audits, they've been our trusted partner for 5 years. Highly professional and always on time with deadlines.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "CEO, Patel Industries",
    content: "Their tax planning strategies saved us significant amounts. The team is knowledgeable, responsive, and genuinely cares about client success.",
    rating: 5,
  },
];

const clients = [
  "Kumar Enterprises",
  "Sharma Textiles",
  "Patel Industries",
  "Singh Manufacturing",
  "Verma Tech Solutions",
  "Gupta Traders",
];

export function TrustSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <AnimatedText>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Client Testimonials
            </span>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6">
              Trusted by Businesses Across Bengaluru
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-muted-foreground text-lg">
              Join hundreds of satisfied clients who trust us with their financial compliance needs.
            </p>
          </AnimatedText>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={index * 0.1}>
              <GlassCard
                className="h-full relative"
                variant="strong"
                whileHover={{ y: -8 }}
              >
                <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="font-display text-lg font-semibold text-accent">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Client Logos */}
        <AnimatedSection delay={0.3}>
          <div className="glass-panel rounded-2xl p-8">
            <p className="text-center text-muted-foreground text-sm mb-6 uppercase tracking-wider">
              Trusted by Leading Businesses
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {clients.map((client, index) => (
                <motion.div
                  key={client}
                  className="text-foreground/50 font-display text-lg font-medium hover:text-accent transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {client}
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
