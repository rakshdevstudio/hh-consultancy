import { Link } from "react-router-dom";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about" },
    { label: "Careers", href: "/contact" },
  ],
  services: [
    { label: "Audit & Assurance", href: "/services" },
    { label: "Risk Advisory", href: "/services" },
    { label: "Tax Consulting", href: "/services" },
  ],
  resources: [
    { label: "Blogs", href: "/insights" },
    { label: "Case Studies", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display text-lg font-bold">H</span>
              </div>
              <span className="font-display text-xl font-semibold">
                H & H Consultancy
              </span>
            </Link>
            <p className="text-primary-foreground/70 max-w-sm mb-6 leading-relaxed">
              H & H Consultancy is a professional audit and tax consulting firm in Bengaluru, offering reliable compliance, taxation, and business licensing services.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 capitalize">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2026 H & H Consultancy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <Link to="/contact" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
