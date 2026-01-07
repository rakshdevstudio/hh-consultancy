import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedText } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-40" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* CTA Content */}
          <div>
            <AnimatedText>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Get Started Today
              </span>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6">
                Ready to Simplify Your Financial Compliance?
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Let our expert team handle your registrations, tax filings, and audits 
                while you focus on growing your business. Get a free consultation today.
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
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-xl text-base px-8 border-accent/30 hover:bg-accent/5"
                >
                  <Link to="/contact">
                    Contact Our Expert
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Info Card */}
          <AnimatedSection delay={0.4}>
            <motion.div
              className="glass-panel-strong rounded-3xl p-8 md:p-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <motion.a
                  href="tel:+919535823762"
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Phone</div>
                    <div className="text-foreground font-medium">9535823762</div>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:hhconsultancy28@gmail.com"
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email</div>
                    <div className="text-foreground font-medium">hhconsultancy28@gmail.com</div>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Address</div>
                    <div className="text-foreground font-medium">
                      No.21 "Hongirana", 3rd Cross, 6th Phase, Nisarga Hi Tech Layout, Hoskote-562114
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Address</div>
                    <div className="text-foreground font-medium">
                      No.31, Krishna Sagara, Bengaluraiah Circle, Kengeri-Tavarekere Main Road, Bengaluru-560060
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 pt-8 border-t border-foreground/10">
                <p className="text-muted-foreground text-sm">
                  <span className="text-accent font-medium">Business Hours:</span><br />
                  Monday – Saturday: 09:00 AM – 07:00 PM<br />
                  Sunday: Holiday
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
