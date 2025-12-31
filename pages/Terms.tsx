import React from 'react';
import { LegalLayout } from '../components/LegalLayout';

export const Terms: React.FC = () => {
  return (
    <LegalLayout title="Terms and Conditions" date="EFFECTIVE DATE: December 31, 2025">
      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">AGREEMENT TO TERMS</h2>
        <p>These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Hrit Chaudhury doing business as nopromt.ai (“we,” “us,” or “our”), concerning your access to and use of the nopromt.ai website and services.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">1. SERVICE AND INTELLECTUAL PROPERTY</h2>
        <p className="mb-2"><strong className="text-text-primary">1.1 Service:</strong> nopromt.ai provides AI-powered digital content generation services via a credit-based subscription model.</p>
        <p className="mb-2"><strong className="text-text-primary">1.2 Ownership of Generations:</strong> Subject to your compliance with these Terms, you are granted ownership of the images/content you generate using our services for both personal and commercial use.</p>
        <p><strong className="text-text-primary">1.3 Platform Rights:</strong> We retain all rights, title, and interest in the underlying software, algorithms, source code, and UI of nopromt.ai.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">2. USER ACCOUNTS AND SECURITY</h2>
        <p className="mb-2"><strong className="text-text-primary">2.1 Registration:</strong> You agree to provide accurate, current, and complete information during the registration process.</p>
        <p><strong className="text-text-primary">2.2 Security:</strong> You are responsible for safeguarding your password. You agree to accept responsibility for all activities that occur under your account.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">3. ACCEPTABLE USE POLICY (STRICT)</h2>
        <p className="mb-4">You agree not to use the Service to generate, upload, or share content that:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Violates any applicable national or international law (including the IT Act, 2000).</li>
          <li>Is sexually explicit, pornographic, or exploits minors (CSAM).</li>
          <li>Promotes violence, terrorism, or hate speech.</li>
          <li>Infringes upon the copyright, trademark, or intellectual property of others.</li>
        </ul>
        <p><strong className="text-text-primary">Zero Tolerance:</strong> We reserve the right to ban any user immediately without refund if they are found generating illegal or abusive content.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">4. PAYMENT AND CREDITS</h2>
        <p className="mb-2"><strong className="text-text-primary">4.1 Processing:</strong> All financial transactions are processed securely via Razorpay. We do not store your banking credentials.</p>
        <p><strong className="text-text-primary">4.2 Credits:</strong> Services are rendered via a credit system. Credits are valid as long as your account is active.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">5. REFUNDS</h2>
        <p>Refunds are governed strictly by our Refund & Cancellation Policy, which is incorporated into these Terms by reference. We offer refunds solely on unused credits.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">6. LIMITATION OF LIABILITY</h2>
        <p className="mb-4">To the fullest extent permitted by law, in no event will nopromt.ai, its operator, or affiliates be liable to you for any indirect, consequential, exemplary, incidental, or punitive damages, including lost profit or data.</p>
        <p><strong className="text-text-primary">Maximum Liability:</strong> Our liability to you for any cause whatsoever will at all times be limited to the amount paid, if any, by you to us during the one (1) month period prior to any cause of action arising.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">7. INDEMNIFICATION</h2>
        <p>You agree to defend, indemnify, and hold us harmless from and against any loss, damage, liability, claim, or demand, due to or arising out of: (1) your use of the Service; (2) your breach of these Terms; or (3) your violation of the rights of a third party, including intellectual property rights.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">8. GOVERNING LAW AND DISPUTE RESOLUTION</h2>
        <p className="mb-2"><strong className="text-text-primary">8.1 Jurisdiction:</strong> These Terms shall be governed by and defined following the laws of India.</p>
        <p><strong className="text-text-primary">8.2 Dispute Resolution:</strong> Any dispute arising out of or in connection with these Terms, including any question regarding its existence, validity, or termination, shall be subject to the exclusive jurisdiction of the courts located in Guwahati, Assam.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">9. CONTACT</h2>
        <p>For legal correspondence: <a href="mailto:noprompt1111@gmail.com" className="text-gold hover:underline">noprompt1111@gmail.com</a></p>
      </section>
    </LegalLayout>
  );
};
