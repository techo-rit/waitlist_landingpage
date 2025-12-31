import React from 'react';
import { LegalLayout } from '../components/LegalLayout';

export const Privacy: React.FC = () => {
  return (
    <LegalLayout title="Privacy Policy" date="Last Updated: December 31, 2025">
      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">1. INTRODUCTION</h2>
        <p>nopromt.ai ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Hrit Chaudhury (Operator).</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">2. INFORMATION WE COLLECT</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-text-primary">Personal Data:</strong> Name, email address, and billing information (billing info is tokenized and processed by Razorpay).</li>
          <li><strong className="text-text-primary">Usage Data:</strong> IP address, browser type, device information, and interaction logs collected via Google Analytics.</li>
          <li><strong className="text-text-primary">Generated Content:</strong> Prompts and images created using our AI tools.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">3. LEGAL BASIS FOR PROCESSING</h2>
        <p className="mb-4">We process your data under the following legal bases:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-text-primary">Contractual Necessity:</strong> To provide the services you subscribed to.</li>
          <li><strong className="text-text-primary">Legitimate Interests:</strong> To improve our AI models and website functionality.</li>
          <li><strong className="text-text-primary">Compliance:</strong> To satisfy legal obligations (e.g., tax laws in India).</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">4. DATA SHARING AND THIRD PARTIES</h2>
        <p className="mb-4">We do not sell your data. We share data strictly with:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-text-primary">Payment Processors:</strong> Razorpay (for transaction processing).</li>
          <li><strong className="text-text-primary">Analytics:</strong> Google Analytics (for site performance).</li>
          <li><strong className="text-text-primary">Law Enforcement:</strong> Only if required by a valid court order or under the Information Technology Act, 2000.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">5. DATA RETENTION</h2>
        <p>We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. You may request deletion of your account at any time.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">6. SECURITY</h2>
        <p>We implement industry-standard encryption (SSL/TLS) and security protocols. However, no method of transmission over the Internet is 100% secure.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">7. CHILDREN'S PRIVACY</h2>
        <p>Our Service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">8. YOUR RIGHTS</h2>
        <p>Depending on your location, you may have rights to access, correct, delete, or restrict the use of your personal data. To exercise these rights, email <a href="mailto:noprompt1111@gmail.com" className="text-gold hover:underline">noprompt1111@gmail.com</a>.</p>
      </section>
    </LegalLayout>
  );
};
