import React from 'react';
import { LegalLayout } from '../components/LegalLayout';

export const Terms: React.FC = () => {
  return (
    <LegalLayout 
      title="TERMS OF SERVICE & USER AGREEMENT" 
      date="Last Updated: January 1, 2026 | Effective Date: January 1, 2026"
    >
      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">AGREEMENT TO TERMS</h2>
        <p className="mb-4">
          These Terms of Service ("Terms," "Agreement") constitute a legally binding contract between you, whether as an individual or entity ("you," "user," "your") and Hrit Chaudhury, operating as nopromt.ai ("Company," "we," "us," "our," "Service").
        </p>
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded text-red-200 mb-6">
          <p className="font-bold mb-2">IF YOU DO NOT AGREE TO THESE TERMS IN THEIR ENTIRETY, YOU ARE NOT AUTHORIZED TO USE THIS SERVICE. DISCONTINUE ACCESS IMMEDIATELY.</p>
        </div>
        <p className="mb-2">By using this Service, you accept:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Binding legal obligation under Indian law</li>
          <li>Binding arbitration (no court lawsuits)</li>
          <li>All liability limitations in Section 6</li>
          <li>Indemnification obligations in Section 7</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">1. SERVICE DESCRIPTION & INTELLECTUAL PROPERTY RIGHTS</h2>
        
        <h3 className="text-xl font-bold text-text-primary mt-6 mb-2">1.1 Service Overview</h3>
        <p className="mb-2">nopromt.ai provides artificial intelligence-powered image transformation and style visualization services via a SaaS credit-based subscription model.</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li><strong>Service Type:</strong> SaaS via credit-based subscription</li>
          <li><strong>Availability:</strong> Subject to technical limitations and maintenance</li>
          <li><strong>Support:</strong> Community-based; no guaranteed 24/7 support</li>
        </ul>

        <h3 className="text-xl font-bold text-text-primary mt-6 mb-2">1.2 Ownership of Generated Content</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white/5 p-4 rounded border border-white/10">
            <strong className="text-text-primary block mb-2">Your Rights:</strong>
            <ul className="list-disc pl-4 space-y-1 text-sm opacity-90">
              <li>You own all rights, title, and interest in your final AI-generated images</li>
              <li>You may use images for personal and commercial purposes</li>
              <li>You may use images in marketing, products, and publications</li>
            </ul>
          </div>
          <div className="bg-white/5 p-4 rounded border border-white/10">
            <strong className="text-text-primary block mb-2">Our Rights:</strong>
            <ul className="list-disc pl-4 space-y-1 text-sm opacity-90">
              <li>We retain rights in the Service, algorithms, UI, and code</li>
              <li>We may use anonymized data to improve algorithms</li>
              <li>We may display your images in promotions (only with consent)</li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-text-primary mt-6 mb-2">1.3 Third-Party IP & Attribution</h3>
        <p className="mb-4">You assume all liability for copyright/trademark infringement if your generated image contains third-party IP. You will indemnify us against all claims.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">2. USER ACCOUNTS, REGISTRATION & SECURITY</h2>
        <div className="p-4 bg-white/5 rounded border border-white/10 mb-4">
          <strong className="text-text-primary">Age Requirement:</strong> You must be 18 years or older to use this Service. If under 18, you must have verifiable parental consent.
        </div>
        <h3 className="text-xl font-bold text-text-primary mt-6 mb-2">2.2 Account Security</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>You are solely responsible for maintaining the confidentiality of your password.</li>
          <li>You agree not to share your account credentials with others.</li>
          <li>We may suspend/terminate accounts for violations, fraud, or abuse.</li>
        </ul>
        <p className="text-sm opacity-75"><strong>Multi-Account Policy:</strong> You agree to maintain only ONE active account. Multiple accounts result in immediate suspension and forfeiture of credits.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">3. ACCEPTABLE USE POLICY (ZERO TOLERANCE)</h2>
        <p className="mb-4">You agree NOT to use the Service to create, upload, or share content that involves:</p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Illegal Content:</strong> Violations of Indian IT Act 2000, gambling, fraud.</li>
            <li><strong>Exploitation:</strong> CSAM, exploitation of minors, non-consensual sexual content.</li>
            <li><strong>Harassment:</strong> Bullying, defamation, hate speech.</li>
          </ul>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>IP Violations:</strong> Copyright infringement, unauthorized deepfakes.</li>
            <li><strong>Deception:</strong> Fraudulent impersonation, phishing, scams.</li>
            <li><strong>Regulated Goods:</strong> Counterfeit currency, drugs, weapons.</li>
          </ul>
        </div>

        <h3 className="text-xl font-bold text-text-primary mt-6 mb-2">3.4 Enforcement & Penalties</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse my-4 min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-2 text-text-primary">Violation</th>
                <th className="p-2 text-text-primary">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5"><td className="p-2">Minor first offense</td><td className="p-2">Account warning; temporary suspension (7 days)</td></tr>
              <tr className="border-b border-white/5"><td className="p-2">Serious violation / Harassment</td><td className="p-2">Permanent ban; credits forfeited; no refund</td></tr>
              <tr className="border-b border-white/5"><td className="p-2">CSAM or illegal content</td><td className="p-2">Permanent ban; immediate law enforcement report</td></tr>
              <tr className="border-b border-white/5"><td className="p-2">Fraud / Payment abuse</td><td className="p-2">Permanent ban; potential legal prosecution</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">4. PAYMENT, CREDITS & BILLING</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Credit System:</strong> 1 credit = 1 image transformation. Credits are non-refundable unless specified.</li>
          <li><strong>Payment Processing:</strong> Processed via Razorpay. We do not store raw credit card data.</li>
          <li><strong>Taxes:</strong> You are responsible for any sales tax, VAT, or GST applicable in your region.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">5. REFUND & CANCELLATION POLICY</h2>
        <h3 className="text-xl font-bold text-text-primary mt-6 mb-2">5.1 Refund Eligibility</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse my-4 min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-2 text-text-primary">Scenario</th>
                <th className="p-2 text-text-primary">Refund Terms</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5"><td className="p-2">Unused Credits (72 hours)</td><td className="p-2">100% refund if requested within 72 hours; credits never generated</td></tr>
              <tr className="border-b border-white/5"><td className="p-2">Service Outage</td><td className="p-2">Prorated refund if unavailable &gt;4 hours; excludes maintenance</td></tr>
              <tr className="border-b border-white/5"><td className="p-2">Duplicate Charge</td><td className="p-2">Full refund if reported within 30 days</td></tr>
              <tr className="border-b border-white/5"><td className="p-2">Fraud</td><td className="p-2">Full refund if fraudulent purchase verified</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4"><strong>No Refunds For:</strong> Buyer's remorse, low-quality generations, or bans due to Terms violations.</p>
        <p><strong>To Request Refund:</strong> Email <a href="mailto:noprompt1111@gmail.com" className="text-gold hover:underline">privacy_support</a> with order number and reason.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">6. LIMITATION OF LIABILITY & DISCLAIMERS</h2>
        
        <div className="p-4 bg-white/5 rounded border border-white/10 mb-6">
          <h3 className="font-bold text-text-primary mb-2">6.1 SERVICE "AS-IS" DISCLAIMER</h3>
          <p className="opacity-90">THE SERVICE IS PROVIDED "AS-IS" WITHOUT WARRANTIES OF ANY KIND. We do NOT warrant regarding accuracy, reliability, specific AI outputs, or compliance with laws in your jurisdiction.</p>
        </div>

        <h3 className="text-xl font-bold text-text-primary mt-6 mb-2">6.2 Limitation of Liability</h3>
        <p className="mb-4">EXCEPT WHERE PROHIBITED BY LAW, YOU AGREE THAT WE ARE NOT LIABLE FOR:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4 opacity-90">
          <li>Data Loss or Service Failure</li>
          <li>Inaccurate or offensive generated images</li>
          <li>Indirect, consequential, or punitive damages</li>
          <li>Third-party IP infringement claims against you</li>
        </ul>
        
        <div className="p-4 bg-white/5 rounded border border-white/10">
          <strong className="text-text-primary">Maximum Liability Cap:</strong> In no event shall our total liability exceed the LESSER of the amount you paid us in the last 12 months OR <strong>100 Indian Rupees (₹100)</strong>.
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">7. INDEMNIFICATION</h2>
        <p>You agree to defend, indemnify, and hold harmless nopromt.ai, Hrit Chaudhury, and affiliates from all claims, damages, and expenses arising from your use of the Service, your violation of these Terms, or your violation of third-party rights (including IP).</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">8. INTELLECTUAL PROPERTY RIGHTS</h2>
        <p className="mb-2">We retain all IP rights in the Service platform, code, and brand ("nopromt.ai").</p>
        <p className="mb-2"><strong>DMCA:</strong> We respect copyright law. If you believe your copyright is infringed, email <a href="mailto:noprompt1111@gmail.com" className="text-gold hover:underline">noprompt1111@gmail.com</a>.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">9. LINKS & THIRD-PARTY SERVICES</h2>
        <p>We use third-party APIs (Google Gemini, Razorpay, Supabase). We are not responsible for their downtime, content, or privacy practices.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">12. GOVERNING LAW & DISPUTE RESOLUTION</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Governing Law:</strong> India (Information Technology Act 2000).</li>
          <li><strong>Binding Arbitration:</strong> Any dispute shall be resolved through binding arbitration in <strong>Guwahati, Assam, India</strong>.</li>
          <li><strong>No Class Actions:</strong> You waive the right to class action lawsuits.</li>
          <li><strong>Pre-Arbitration:</strong> You must provide written notice and attempt good-faith negotiation for 30 days before initiating arbitration.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">18. CONTACT & LEGAL NOTICES</h2>
        <div className="space-y-2">
          <p><strong>General Inquiries:</strong> <a href="mailto:noprompt1111@gmail.com" className="text-gold hover:underline">inquiries</a></p>
          <p><strong>Legal & Service of Process:</strong> <a href="mailto:noprompt1111@gmail.com" className="text-gold hover:underline">legal</a></p>
          <p><strong>Refunds & Disputes:</strong> <a href="mailto:noprompt1111@gmail.com" className="text-gold hover:underline">refunds</a></p>
        </div>
      </section>

      <section className="mt-8 pt-8 border-t border-white/20">
        <h2 className="text-xl font-bold text-text-primary mb-4">19. ACKNOWLEDGMENT OF UNDERSTANDING</h2>
        <p className="mb-4">BY USING NOPROMT.AI, YOU EXPLICITLY ACKNOWLEDGE THAT:</p>
        <ul className="space-y-1 opacity-80 pl-4">
          <li>✓ You have read and fully understood these Terms</li>
          <li>✓ You accept all liability limitations and disclaimers</li>
          <li>✓ You accept binding arbitration (no court lawsuits)</li>
          <li>✓ You accept the Acceptable Use Policy and zero-tolerance enforcement</li>
          <li>✓ You are 18+ years old</li>
        </ul>
      </section>

      <section className="mt-8 text-center text-xs opacity-50">
        <p className="font-bold mb-2">FINAL NOTICE: THIS IS A BINDING LEGAL AGREEMENT.</p>
        <p>© 2026 nopromt.ai. All Rights Reserved.</p>
        <p>Operator: Hrit Chaudhury</p>
        <p>Last Updated: January 1, 2026</p>
      </section>
    </LegalLayout>
  );
};