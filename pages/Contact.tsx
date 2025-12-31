import React from 'react';
import { LegalLayout } from '../components/LegalLayout';

export const Contact: React.FC = () => {
  return (
    <LegalLayout title="Contact & Support">
      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">GET IN TOUCH</h2>
        <p className="mb-8">We are here to help. Whether you have a technical issue, a billing inquiry, or legal questions, please reach out.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 p-6 rounded-xl border border-border-subtle">
            <h3 className="text-xl font-bold text-text-primary mb-4">Customer Support & Legal Inquiries</h3>
            <p className="mb-2"><strong className="text-text-primary">Email:</strong> <a href="mailto:noprompt1111@gmail.com" className="text-gold hover:underline">noprompt1111@gmail.com</a></p>
            <p><strong className="text-text-primary">Response Time:</strong> We aim to respond to all inquiries within 24–48 hours.</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-border-subtle">
            <h3 className="text-xl font-bold text-text-primary mb-4">Business Details</h3>
            <p className="mb-2"><strong className="text-text-primary">Operator:</strong> Hrit Chaudhury</p>
            <p className="mb-2"><strong className="text-text-primary">Location:</strong> Assam, India</p>
            <p><strong className="text-text-primary">Platform:</strong> nopromt.ai</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Dispute Resolution</h2>
        <p>For formal grievances regarding data processing or content, please direct your correspondence to the email above, addressed to the 'Grievance Officer'.</p>
      </section>
    </LegalLayout>
  );
};
