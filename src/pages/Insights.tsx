import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection, AnimatedText } from "@/components/ui/AnimatedSection";
import bookkeepingImg from "@/assets/services/bookkeeping.jpg";

const articles = [
  {
    id: 1,
    category: "Tax",
    title: "Understanding Income Tax Changes for FY 2025–26",
    excerpt: "A practical guide to the latest income tax rules, deductions, and compliance requirements for individuals and businesses in India.",
    author: "Shivakumar H",
    date: "Updated 2025",
    readTime: "6 min read",
  },
  {
    id: 2,
    category: "GST",
    title: "GST Filing: Common Mistakes Businesses Must Avoid",
    excerpt: "Learn the most common GST filing errors and how proper compliance can help you avoid penalties and notices.",
    author: "Shivakumar H",
    date: "Updated 2025",
    readTime: "5 min read",
  },
  {
    id: 3,
    category: "Audit",
    title: "Why Regular Audits Are Essential for Business Compliance",
    excerpt: "Understand how internal, statutory, and tax audits protect your business and ensure financial transparency.",
    author: "Shivakumar H",
    date: "Updated 2025",
    readTime: "6 min read",
  },
  {
    id: 4,
    category: "Tax",
    title: "Year-End Tax Planning Strategies for Indian Businesses",
    excerpt: "Key tax-saving opportunities and compliance checks to complete before closing the financial year.",
    author: "Shivakumar H",
    date: "Updated 2025",
    readTime: "5 min read",
  },
  {
    id: 5,
    category: "Registration",
    title: "Company Registration in India: Step-by-Step Process",
    excerpt: "A simple guide to registering Proprietorship, Partnership, LLP, and Private Limited companies in India.",
    author: "Shivakumar H",
    date: "Updated 2025",
    readTime: "6 min read",
  },
  {
    id: 6,
    category: "Compliance",
    title: "Labour Law Compliance: What Every Employer Must Know",
    excerpt: "Overview of statutory labour laws, filings, and licenses required for businesses in India.",
    author: "Shivakumar H",
    date: "Updated 2025",
    readTime: "7 min read",
  },
];

const Insights = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={bookkeepingImg} 
            alt="Business blogs and insights"
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
                Blogs
              </span>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mt-4 mb-6 leading-tight">
                Business Blogs & Compliance Insights
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                Stay updated with the latest tax laws, GST updates, compliance requirements, and business regulations in India. Practical guidance from H & H Consultancy.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
        <div className="container-custom">
          <AnimatedText>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-10">
              Latest Articles
            </h2>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <AnimatedSection key={article.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="glass-panel-strong rounded-2xl p-6 h-full cursor-pointer group"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
                    {article.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{article.author}</span>
                    <span>{article.readTime}</span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
