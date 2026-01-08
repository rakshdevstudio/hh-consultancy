import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

const serviceContent: Record<string, string> = {
  "Income Tax Consultancy": `Income Tax Consultancy helps individuals and businesses calculate, file, and manage their income tax correctly.
It ensures that tax returns are prepared as per government rules.
This service helps you avoid mistakes, penalties, and legal notices.
It also helps in planning taxes to reduce liability in a legal way.
Income tax consultants handle ITR filing for individuals and companies.
They assist in responding to tax notices and assessments.
They ensure all income sources are properly reported.
This service saves time and prevents costly errors.
It keeps your finances compliant with tax laws.
It gives peace of mind during tax filing and assessments.`,

  "GST Services": `GST Services help businesses register, file returns, and comply with Goods and Services Tax laws.
Every GST-registered business must file regular returns.
This service ensures returns are filed correctly and on time.
It helps avoid late fees, penalties, and legal issues.
It manages GST registration, amendments, and cancellations.
It also handles GST notices, audits, and assessments.
Businesses get help with documentation and tax calculations.
This service keeps your business legally compliant.
It reduces compliance burden for business owners.
It ensures smooth GST operations without errors.`,

  "Company Registration": `Company Registration is the legal process of forming a business entity.
It allows a business to operate officially under government laws.
This service helps register Proprietorships, Partnerships, LLPs, and Private Limited companies.
It includes preparing documents and submitting applications to authorities.
Registration gives your business legal identity.
It is required to open bank accounts and enter contracts.
It protects business owners legally.
It ensures compliance with government regulations.
This service helps avoid legal complications.
It enables your business to operate legally and professionally.`,

  "Audit Assignments": `Audit Assignments involve reviewing financial records to verify accuracy and compliance.
Audits ensure that accounts are properly maintained.
They help detect errors, fraud, and financial risks.
Businesses may require audits for statutory or tax purposes.
This service checks whether records follow accounting and legal standards.
It ensures transparency in financial reporting.
Audits help build trust with regulators, investors, and banks.
They reduce the risk of penalties and legal issues.
They improve financial control within the business.
They ensure your accounts reflect a true and fair position.`,

  "Trade License": `A Trade License is a government permit required to legally operate a business.
It is issued by the local municipal authority.
This service helps businesses apply for and renew trade licenses.
It ensures the business complies with local laws and regulations.
Without a trade license, a business may face penalties or closure.
The service manages documentation and approvals.
It helps avoid legal and operational issues.
It is mandatory for shops, offices, and commercial establishments.
It ensures your business is legally recognized by authorities.
It allows smooth and lawful business operations.`,

  "Labour License": `A Labour License is required for businesses employing workers.
It ensures compliance with labour laws and employment regulations.
This service helps employers apply for and renew labour licenses.
It manages documentation and statutory filings.
It helps avoid fines and legal disputes.
It ensures proper workforce regulation.
It supports compliance with labour department rules.
It protects both employers and employees legally.
It helps maintain lawful employment practices.
It ensures your business follows labour regulations correctly.`,

  "Food License (FSSAI)": `A Food License (FSSAI) is mandatory for businesses involved in food production or sale.
It ensures compliance with food safety standards.
This service helps register food businesses under FSSAI.
It handles documentation and application processes.
It ensures your food business operates legally.
It helps avoid fines, closure, and legal action.
It is required for restaurants, manufacturers, and distributors.
It builds customer trust in food safety.
It ensures hygiene and safety regulations are followed.
It allows lawful and professional food business operations.`,

  "Labour Law Consultancy": `Labour Law Consultancy helps businesses understand and follow employment laws.
It covers rules related to wages, working hours, and employee benefits.
This service ensures compliance with government labour regulations.
It helps prevent legal disputes and penalties.
It guides employers on statutory obligations.
It assists in handling inspections and audits.
It supports documentation and regulatory filings.
It ensures fair and lawful employment practices.
It protects businesses from labour-related legal risks.
It helps maintain a legally compliant workplace.`,

  "Payroll": `Payroll services manage employee salary processing and statutory deductions.
This service ensures accurate preparation of monthly salary statements.
It handles Provident Fund (PF), ESI, and Professional Tax compliance.
It ensures correct calculation of employee earnings and deductions.
It helps employers meet statutory filing and payment deadlines.
It reduces errors in salary processing and compliance reporting.
It maintains proper payroll records for audits and inspections.
It supports businesses in managing employee compensation efficiently.
It ensures adherence to labour and tax regulations.
It allows employers to focus on operations while payroll is handled professionally.`,
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
