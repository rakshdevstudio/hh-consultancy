import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection, AnimatedText } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-consulting.jpg";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hhconsultancy28@gmail.com",
    href: "mailto:hhconsultancy28@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9535823762",
    href: "tel:+919535823762",
  },
  {
    icon: MapPin,
    label: "Address",
    value: 'No.21 "Hongirana", 3rd Cross, 6th Phase, Nisarga Hi Tech Layout, Hoskote-562114',
    href: "#",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "No.31, Krishna Sagara, Bengaluraiah Circle, Kengeri-Tavarekere Main Road, Bengaluru-560060",
    href: "#",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Get form values
    const firstName = firstNameRef.current?.value || "";
    const lastName = lastNameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const company = companyRef.current?.value || "";
    const message = messageRef.current?.value || "";
    
    // Construct WhatsApp message
    let whatsappMessage = `Hello, I'm ${firstName} ${lastName}`.trim();
    if (email) {
      whatsappMessage += `.\nEmail: ${email}`;
    }
    if (company) {
      whatsappMessage += `\nCompany: ${company}`;
    }
    if (message) {
      whatsappMessage += `\nMessage: ${message}`;
    }
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp number: 9535823762 (remove spaces and + for URL)
    const whatsappNumber = "919535823762";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Contact us"
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
                Contact Us
              </span>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mt-4 mb-6 leading-tight">
                Let's Start a Conversation
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                Whether you have questions about our services or want to discuss 
                a potential engagement, we're here to help.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedText>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
                  Get in Touch
                </h2>
              </AnimatedText>

              {contactInfo.map((item, index) => (
                <AnimatedSection key={item.label} delay={index * 0.1}>
                  <a
                    href={item.href}
                    className="block group"
                  >
                    <GlassCard className="flex items-center gap-4 group-hover:shadow-glass-lg transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {item.label}
                        </div>
                        <div className="text-foreground font-medium">
                          {item.value}
                        </div>
                      </div>
                    </GlassCard>
                  </a>
                </AnimatedSection>
              ))}

              <AnimatedSection delay={0.3}>
                <GlassCard variant="strong" className="mt-8">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Monday – Saturday: 09:00 AM – 07:00 PM</p>
                    <p>Sunday: Holiday</p>
                  </div>
                </GlassCard>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <GlassCard variant="strong" className="p-8 md:p-10">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Send Us a Message
                  </h3>
                      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              First Name
                            </label>
                            <Input
                              ref={firstNameRef}
                              required
                              placeholder="John"
                              className="rounded-xl bg-background/50 border-border focus:border-accent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Last Name
                            </label>
                            <Input
                              ref={lastNameRef}
                              required
                              placeholder="Doe"
                              className="rounded-xl bg-background/50 border-border focus:border-accent"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Email
                          </label>
                          <Input
                            ref={emailRef}
                            required
                            type="email"
                            placeholder="john@company.com"
                            className="rounded-xl bg-background/50 border-border focus:border-accent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Company
                          </label>
                          <Input
                            ref={companyRef}
                            placeholder="Your Company Name"
                            className="rounded-xl bg-background/50 border-border focus:border-accent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            How can we help?
                          </label>
                          <Textarea
                            ref={messageRef}
                            required
                            rows={5}
                            placeholder="Tell us about your needs..."
                            className="rounded-xl bg-background/50 border-border focus:border-accent resize-none"
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          size="lg"
                          className="w-full rounded-xl shadow-soft-lg hover:shadow-glow transition-all duration-300"
                        >
                          {isSubmitting ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                            />
                          ) : (
                            <>
                              Send Message
                              <Send className="ml-2 w-4 h-4" />
                            </>
                          )}
                        </Button>
                      </form>
                </GlassCard>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
