import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

const serviceContent: Record<string, string> = {
  "Income Tax Consultancy": `H & H Consultancy provides expert income tax planning, filing, and compliance services for individuals, professionals, and businesses.
We assist in accurate ITR preparation and timely submissions.
Our services ensure full compliance with current tax laws and regulations.
We help optimize tax liabilities through legal planning strategies.
We handle tax notices, assessments, and departmental communications.
Our advisory supports long-term financial efficiency.
We maintain confidentiality and accuracy in all filings.
We stay updated with changing tax regulations.
We serve clients across multiple industries.
Our goal is stress-free tax compliance for every client.`,

  "GST Services": `We offer complete GST registration, return filing, compliance, and advisory services.
Our team ensures timely GST filings to avoid penalties.
We handle GST assessments, reconciliations, and notices.
We assist in registration, amendments, and cancellations.
Our advisory helps businesses remain tax-efficient.
We ensure proper documentation and regulatory adherence.
We support businesses of all sizes and sectors.
We simplify GST compliance processes.
We monitor changes in GST law and implementation.
Our goal is seamless and compliant GST operations.`,

  "Company Registration": `We provide end-to-end company registration services across all business structures.
Our services cover Proprietorship, Partnership, LLP, and Private Limited companies.
We handle documentation, filings, and statutory approvals.
We ensure compliance with MCA regulations.
We guide entrepreneurs through incorporation procedures.
We help avoid delays and regulatory issues.
We also assist with post-registration compliance.
Our process is transparent and efficient.
We support startups and established businesses.
Our aim is smooth and legally compliant business formation.`,

  "Audit Assignments": `H & H Consultancy offers professional internal, statutory, and tax audit services.
We ensure financial accuracy and regulatory compliance.
Our audits identify risks, discrepancies, and improvement areas.
We follow structured documentation and reporting standards.
We help maintain transparency in financial statements.
We support statutory and regulatory audits.
We ensure a true and fair view of business accounts.
We protect businesses from legal and financial risks.
We maintain strict confidentiality.
Our objective is strong compliance and financial integrity.`,

  "Trade License": `We assist businesses in obtaining and renewing trade licenses.
Our team handles applications, documentation, and approvals.
We ensure compliance with local municipal regulations.
Trade licenses are mandatory for commercial establishments.
We help avoid penalties and operational disruptions.
We also support license amendments and renewals.
We coordinate with government authorities.
We simplify the regulatory process for business owners.
We ensure timely approvals.
Our aim is hassle-free legal operation of your business.`,

  "Labour License": `We provide complete support for labour license registration and compliance.
We assist employers in meeting statutory workforce regulations.
Our services cover documentation, filing, and renewals.
Labour licenses are essential for legally employing workers.
We help prevent penalties and legal complications.
We ensure adherence to labour department guidelines.
We support businesses across various industries.
We manage regulatory filings efficiently.
We maintain accuracy and compliance.
Our goal is legally secure workforce management.`,

  "Food License (FSSAI)": `We offer end-to-end assistance for FSSAI food license registration.
We support restaurants, manufacturers, distributors, and food businesses.
We handle applications, documentation, and regulatory approvals.
Food licenses ensure compliance with food safety laws.
We help avoid fines and business disruptions.
We assist with renewals and modifications.
We ensure adherence to FSSAI standards.
We guide businesses through compliance procedures.
We ensure timely approvals.
Our goal is legally compliant and safe food operations.`,

  "Labour Law Consultancy": `We provide expert consultancy on labour law compliance and employee regulations.
We help businesses understand statutory obligations.
Our services cover wage laws, employee benefits, and workplace regulations.
We ensure compliance with government labour policies.
We reduce legal risks and operational challenges.
We assist with documentation and regulatory filings.
We guide HR and management on best practices.
We maintain confidentiality and legal accuracy.
We offer practical compliance solutions.
Our goal is a legally compliant and stable workforce.`,
};

interface ServiceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceTitle: string;
}

export function ServiceModal({ open, onOpenChange, serviceTitle }: ServiceModalProps) {
  const content = serviceContent[serviceTitle] || "";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel-strong border-white/30 p-8">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
            {serviceTitle}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-base md:text-lg">
            {content}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

