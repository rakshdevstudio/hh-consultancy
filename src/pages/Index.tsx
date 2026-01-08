import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { TrustSection } from "@/components/sections/TrustSection";
import { CTASection } from "@/components/sections/CTASection";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <Layout>
      <SEO 
        title="H & H Consultancy | Tax, GST, Audit & Compliance Services in Bengaluru"
        description="H & H Consultancy provides expert income tax, GST, audit, company registration, and business compliance services in Bengaluru, Kengeri, and Hoskote. Trusted by 1000+ clients."
        keywords="tax consultant Bengaluru, GST services Kengeri, audit services Hoskote, income tax consultant Bangalore, company registration Bengaluru, FSSAI license Kengeri, trade license Hoskote, labour law consultant Bengaluru"
      />
      <HeroSection />
      <ServicesPreview />
      <TrustSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
