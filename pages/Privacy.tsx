import React from 'react';
import { LegalLayout } from '../components/LegalLayout';

export const Privacy: React.FC = () => {
  return (
    <LegalLayout 
  title="PRIVACY POLICY & LEGAL DISCLAIMERS" 
  date="Last Updated: January 1, 2026 | Effective Date: January 1, 2026"
  pageTitle="Privacy Policy"
  description="Learn how nopromt.ai collects, uses, and protects your data. Our privacy policy covers data handling, cookies, and your rights."
>
      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">1. INTRODUCTION & ACKNOWLEDGMENT</h2>
        <p className="mb-4">
          nopromt.ai ("Service," "we," "our," "us") is operated by Hrit Chaudhury ("Operator").
        </p>
        <p className="mb-4 font-bold text-text-primary">
          BY ACCESSING AND USING THIS SERVICE, YOU EXPLICITLY ACKNOWLEDGE THAT:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>You have read and understood this entire Privacy Policy</li>
          <li>You consent to our data collection, processing, and sharing practices</li>
          <li>You accept all terms herein in their entirety</li>
          <li>Any disagreement with this policy means you should not use the Service</li>
        </ul>
        <p className="p-4 bg-white/5 rounded border border-white/10">
          <strong className="text-text-primary">Dispute Resolution Notice:</strong> Using this Service constitutes acceptance of binding arbitration (Section 18).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">2. INFORMATION WE COLLECT</h2>
        
        <h3 className="text-xl font-bold text-text-primary mt-6 mb-2">2.1 Voluntarily Provided Data</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-text-primary">Account Creation:</strong> Name, email address</li>
          <li><strong className="text-text-primary">Payment Processing:</strong> Billing information (processed by Razorpay; we do not store unencrypted card data)</li>
          <li><strong className="text-text-primary">Communication:</strong> Messages sent via contact forms, email, or support channels</li>
          <li><strong className="text-text-primary">User Content:</strong> Photos, prompts, and preferences uploaded for AI processing</li>
        </ul>

        <h3 className="text-xl font-bold text-text-primary mt-6 mb-2">2.2 Automatically Collected Data</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-text-primary">Usage Analytics:</strong> Pages visited, features accessed, time spent, click behavior</li>
          <li><strong className="text-text-primary">Device Information:</strong> Browser type, OS, device model, screen resolution, device ID</li>
          <li><strong className="text-text-primary">Network Data:</strong> IP address, approximate location (city/country level, NOT precise)</li>
          <li><strong className="text-text-primary">Cookies:</strong> Google Analytics tracking cookies (_ga, ga*)</li>
          <li><strong className="text-text-primary">Technical Logs:</strong> Error logs, server access logs, API call records</li>
        </ul>

        <h3 className="text-xl font-bold text-text-primary mt-6 mb-2">2.3 AI-Generated Data</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-text-primary">Generated Content:</strong> Images, transformations, metadata about generation process</li>
          <li><strong className="text-text-primary">Interaction Patterns:</strong> Which templates selected, regeneration counts, user preferences</li>
        </ul>

        <h3 className="text-xl font-bold text-text-primary mt-6 mb-2">2.4 Sensitive Data DISCLAIMER</h3>
        <p className="p-4 bg-red-500/10 border border-red-500/20 rounded text-red-200">
          YOU ASSUME ALL RISK for uploading sensitive data (government IDs, biometric data, etc.). We are NOT responsible for misuse or unauthorized access to sensitive data you voluntarily provide.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">3. COOKIES AND TRACKING TECHNOLOGIES</h2>
        
        <h3 className="text-xl font-bold text-text-primary mt-6 mb-2">3.1 Cookies We Use</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse my-4 min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-2 text-text-primary">Cookie</th>
                <th className="p-2 text-text-primary">Purpose</th>
                <th className="p-2 text-text-primary">Duration</th>
                <th className="p-2 text-text-primary">Provider</th>
                <th className="p-2 text-text-primary">Type</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="p-2 font-mono text-sm">_ga</td>
                <td className="p-2">Persistent user ID</td>
                <td className="p-2">2 years</td>
                <td className="p-2">Google Analytics</td>
                <td className="p-2">Analytics</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="p-2 font-mono text-sm">_ga_G-9TBNMQZ8N0</td>
                <td className="p-2">Session tracking</td>
                <td className="p-2">2 years</td>
                <td className="p-2">Google Analytics</td>
                <td className="p-2">Analytics</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-text-primary mt-6 mb-2">3.2 Cookie Usage Rights</h3>
        <p className="mb-2">By using this Service, you consent to cookie placement. Cookies help us:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Analyze traffic patterns</li>
          <li>Detect and prevent fraud</li>
          <li>Measure feature effectiveness</li>
          <li>Improve user experience</li>
        </ul>

        <h3 className="text-xl font-bold text-text-primary mt-6 mb-2">3.3 Opt-Out Methods (Your Responsibility)</h3>
        <p className="mb-2">Users may opt out of analytics tracking:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Browser cookie settings (each device/browser separately)</li>
          <li>Google Analytics Opt-out Browser Add-on</li>
          <li>DNS-level ad blockers or VPN services</li>
          <li>Do Not Track (DNT) signals (honored where technically feasible)</li>
        </ul>
        <p className="text-sm opacity-80">IMPORTANT: We are not responsible for cookie storage issues caused by browser malfunctions, extensions, or user misconfiguration.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">4. LEGAL BASES FOR DATA PROCESSING</h2>
        <p className="mb-4">We process your data under these legal justifications:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-text-primary">Explicit Consent</strong> – You agree when using the Service</li>
          <li><strong className="text-text-primary">Contract Performance</strong> – Necessary to deliver the AI transformation service</li>
          <li><strong className="text-text-primary">Legitimate Business Interests</strong> – Prevent fraud, improve algorithms, ensure security</li>
          <li><strong className="text-text-primary">Legal Compliance</strong> – Tax requirements (India), court orders, regulatory mandates</li>
          <li><strong className="text-text-primary">Public Interest</strong> – Safety, security, detection of illegal activity</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">5. HOW WE USE YOUR INFORMATION</h2>
        <div className="space-y-4">
          <div>
            <strong className="text-text-primary block mb-1">Service Delivery:</strong>
            <ul className="list-disc pl-6 opacity-90">
              <li>Account management and authentication</li>
              <li>Processing AI transformation requests</li>
              <li>Delivering generated content</li>
              <li>Payment processing and invoicing</li>
            </ul>
          </div>
          <div>
            <strong className="text-text-primary block mb-1">Improvement & Analytics:</strong>
            <ul className="list-disc pl-6 opacity-90">
              <li>Analyzing usage patterns (anonymized/aggregated)</li>
              <li>Training and optimizing AI models using non-identifiable data</li>
              <li>A/B testing and feature optimization</li>
              <li>Fraud detection and abuse prevention</li>
            </ul>
          </div>
          <div>
            <strong className="text-text-primary block mb-1">Communications:</strong>
            <ul className="list-disc pl-6 opacity-90">
              <li>Transactional emails (account confirmations, receipts)</li>
              <li>Service announcements and updates</li>
              <li>Support responses to your inquiries</li>
              <li>Marketing emails (with unsubscribe option)</li>
            </ul>
          </div>
          <div>
            <strong className="text-text-primary block mb-1">Legal & Security:</strong>
            <ul className="list-disc pl-6 opacity-90">
              <li>Respond to legal requests and law enforcement inquiries</li>
              <li>Enforce Terms of Service</li>
              <li>Detect and prevent illegal activity</li>
              <li>Protect against security threats</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">6. DATA SHARING AND THIRD PARTIES</h2>
        
        <h3 className="text-xl font-bold text-text-primary mt-6 mb-2">6.1 Third-Party Processors (Data Sharing)</h3>
        <p className="mb-4">We do NOT sell your personal data for monetary compensation. However, we share data with these service providers:</p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse my-4 min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-2 text-text-primary">Service</th>
                <th className="p-2 text-text-primary">Purpose</th>
                <th className="p-2 text-text-primary">Data Shared</th>
                <th className="p-2 text-text-primary">Location</th>
                <th className="p-2 text-text-primary">Agreement</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="p-2">Razorpay</td>
                <td className="p-2">Payment processing</td>
                <td className="p-2">Name, email, billing info</td>
                <td className="p-2">India</td>
                <td className="p-2">DPA*</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="p-2">Google Analytics</td>
                <td className="p-2">Analytics</td>
                <td className="p-2">Anonymized usage data, session IDs</td>
                <td className="p-2">USA</td>
                <td className="p-2">DPA*</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="p-2">Supabase</td>
                <td className="p-2">Database/hosting</td>
                <td className="p-2">Account data, generated content</td>
                <td className="p-2">USA</td>
                <td className="p-2">DPA*</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="p-2">Google Gemini API</td>
                <td className="p-2">Image generation</td>
                <td className="p-2">Uploaded photos, prompts</td>
                <td className="p-2">USA</td>
                <td className="p-2">DPA*</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm opacity-70 mb-6">*DPA = Data Processing Agreement with GDPR/CCPA clauses</p>

        <h3 className="text-xl font-bold text-text-primary mt-6 mb-2">6.2 International Data Transfers & Safeguards</h3>
        <p className="mb-4">Your data may be transferred to the USA and EU. By using this Service, you consent to cross-border data transfers. Safeguards include Standard Contractual Clauses (SCCs), Encryption (TLS 1.2+ / AES-256), and service agreements.</p>
        <p className="p-4 bg-white/5 rounded border border-white/10 text-sm">
          <strong>Risk Acknowledgment:</strong> You understand that US law enforcement may access data under FISA, the Patriot Act, or other laws, and we may be prohibited from disclosing such requests.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">7. DATA RETENTION & DELETION</h2>
        
        <h3 className="text-xl font-bold text-text-primary mt-6 mb-2">7.1 Retention Schedule</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse my-4 min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-2 text-text-primary">Data Type</th>
                <th className="p-2 text-text-primary">Retention Period</th>
                <th className="p-2 text-text-primary">Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5"><td className="p-2">Active User Account Data</td><td className="p-2">Until deletion requested</td><td className="p-2">Service provision</td></tr>
              <tr className="border-b border-white/5"><td className="p-2">Waitlist Emails</td><td className="p-2">6 months after service launch</td><td className="p-2">Legal compliance, business records</td></tr>
              <tr className="border-b border-white/5"><td className="p-2">Generated AI Images</td><td className="p-2">90 days after creation</td><td className="p-2">Storage cost optimization</td></tr>
              <tr className="border-b border-white/5"><td className="p-2">Payment Records</td><td className="p-2">7 years</td><td className="p-2">Indian tax law (Section 133 IT Act)</td></tr>
              <tr className="border-b border-white/5"><td className="p-2">Analytics Data (GA4)</td><td className="p-2">2 months</td><td className="p-2">User privacy protection</td></tr>
              <tr className="border-b border-white/5"><td className="p-2">Server/Access Logs</td><td className="p-2">30 days</td><td className="p-2">Security, abuse detection</td></tr>
              <tr className="border-b border-white/5"><td className="p-2">Support Tickets</td><td className="p-2">2 years</td><td className="p-2">Legal, customer service records</td></tr>
              <tr className="border-b border-white/5"><td className="p-2">Inactive Accounts</td><td className="p-2">2 years of zero activity</td><td className="p-2">Notification sent before deletion</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-text-primary mt-6 mb-2">7.2 Deletion Process & Limitations</h3>
        <p className="mb-2">You can request account deletion by emailing <a href="mailto:noprompt1111@gmail.com" className="text-gold hover:underline">noprompt1111@gmail.com</a> with subject "DELETE MY ACCOUNT."</p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white/5 p-4 rounded">
            <strong className="text-text-primary block mb-2">Deletion includes:</strong>
            <ul className="list-disc pl-4 space-y-1 text-sm">
              <li>Account information, profile data</li>
              <li>Generated images and content</li>
              <li>Payment data (except legally-required tax records)</li>
            </ul>
          </div>
          <div className="bg-white/5 p-4 rounded">
            <strong className="text-text-primary block mb-2">Cannot be deleted (legal requirement):</strong>
            <ul className="list-disc pl-4 space-y-1 text-sm">
              <li>Anonymized/aggregated analytics</li>
              <li>Tax/accounting records (7-year retention)</li>
              <li>Data required by court order</li>
              <li>Fraud investigation records</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">8. DATA SECURITY & BREACH LIABILITY</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Encryption:</strong> SSL/TLS for transmission; AES-256 for storage</li>
          <li><strong>Access Control:</strong> Role-based permissions, password requirements</li>
          <li><strong>Authentication:</strong> Secure password hashing (bcrypt/Argon2)</li>
          <li><strong>Payment:</strong> PCI-DSS compliant via Razorpay (not stored on our servers)</li>
        </ul>
        <div className="p-4 bg-white/5 rounded border border-white/10 mt-4">
          <h4 className="text-text-primary font-bold mb-2">SECURITY LIMITATIONS & DISCLAIMER</h4>
          <p className="mb-2">YOU ACKNOWLEDGE THAT No security system is 100% impenetrable. We are NOT liable for unauthorized access due to:</p>
          <ul className="list-disc pl-6 space-y-1 opacity-80">
            <li>Password compromise (your responsibility)</li>
            <li>Malware on your device</li>
            <li>Compromise of third-party services we use</li>
            <li>Natural disasters or force majeure events</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">9. YOUR PRIVACY RIGHTS</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold text-text-primary">9.1 Universal Rights (All Users)</h3>
            <ul className="list-disc pl-6 mt-1">
              <li>Access, Correction, Deletion, and Data Portability</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-text-primary">9.2 EU/GDPR Rights</h3>
            <ul className="list-disc pl-6 mt-1">
              <li>Right to Restrict Processing, Object, and Automated Decision-Making Review</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-text-primary">9.3 California/CCPA Rights</h3>
            <ul className="list-disc pl-6 mt-1">
              <li>Know, Delete, Opt-Out of Sale (we don't sell), Non-Discrimination</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-text-primary">9.4 India/DPDP Rights</h3>
            <ul className="list-disc pl-6 mt-1">
              <li>Correction, Deletion, Grievance Redressal, Consent Withdrawal</li>
            </ul>
          </div>
          <p className="mt-4 pt-4 border-t border-white/10">
            <strong>How to Exercise Your Rights:</strong> Email <a href="mailto:noprompt1111@gmail.com" className="text-gold hover:underline">noprompt1111@gmail.com</a>. We respond to standard requests within 30 days.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">10. AUTOMATED DECISION-MAKING & AI PROCESSING</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Process:</strong> Our Service uses Google's Gemini 2.0 Flash API to process your photos.</li>
          <li><strong>No Legal Decisions:</strong> We do NOT use AI for credit, employment, insurance, or healthcare decisions.</li>
          <li><strong>Training:</strong> Your uploaded photos are NOT used for training without explicit separate consent.</li>
        </ul>
        <p className="p-4 bg-white/5 rounded border border-white/10 text-sm">
          <strong>AI Disclaimer:</strong> AI-generated images may contain artifacts or errors. We do NOT guarantee accuracy, quality, or suitability. Using generated images for illegal/harmful purposes is YOUR responsibility.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">11. CHILDREN'S PRIVACY & PARENTAL RIGHTS</h2>
        <p className="mb-4">Our Service is intended for users 18 years and older. Users under 18 may use the Service only with verifiable parental consent.</p>
        <p>Parents may request access/deletion of their child's data by emailing <a href="mailto:noprompt1111@gmail.com" className="text-gold hover:underline">noprompt1111@gmail.com</a> with proof of guardianship.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">12. CONSENT MANAGEMENT & WITHDRAWAL</h2>
        <p className="mb-4">By using this Service, you consent to the data collection described herein. You can withdraw consent by emailing <a href="mailto:noprompt1111@gmail.com" className="text-gold hover:underline">noprompt1111@gmail.com</a>.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">13. DATA SUBJECT RIGHTS LIMITATIONS</h2>
        <p>We may DENY requests if they are frivolous, vague, violate another's privacy, conflict with legal obligations, or if the user is subject to suspension.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">14. THIRD-PARTY LINKS & SERVICES</h2>
        <p>This policy applies ONLY to nopromt.ai. We are NOT responsible for third-party websites (e.g., Razorpay, Google) linked from our service.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">15. POLICY UPDATES & CHANGES</h2>
        <p>We may update this policy to reflect legal or service changes. Continued use after updates constitutes acceptance.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">16. DO NOT SELL MY PERSONAL INFORMATION</h2>
        <p className="mb-4">We DO NOT sell your personal information for monetary compensation. However, you may opt-out of data sharing practices that might be classified as "sales" under CCPA by emailing us.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">17. DISCLAIMER OF WARRANTIES & LIABILITY LIMITATIONS</h2>
        <div className="space-y-4">
          <div className="p-4 bg-white/5 rounded">
            <h3 className="font-bold text-text-primary">AS-IS DISCLAIMER</h3>
            <p className="text-sm mt-2 opacity-90">THE SERVICE IS PROVIDED "AS-IS" WITHOUT WARRANTIES OF ANY KIND. We do not warrant that the Service is error-free, secure, or that AI results will meet expectations.</p>
          </div>
          <div className="p-4 bg-white/5 rounded">
            <h3 className="font-bold text-text-primary">LIABILITY LIMITATIONS</h3>
            <p className="text-sm mt-2 opacity-90">We are NOT liable for data breaches, loss of data, inaccurate AI content, or indirect damages. Total liability shall not exceed the amount paid in the last 12 months or $100.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">18. DISPUTE RESOLUTION & GOVERNING LAW</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Governing Law:</strong> India (IT Act 2000, DPDP Act 2023).</li>
          <li><strong>Binding Arbitration:</strong> Disputes shall be resolved by a single arbitrator in Guwahati, Assam, India.</li>
          <li><strong>No Class Actions:</strong> You waive the right to class action lawsuits.</li>
          <li><strong>Jurisdiction:</strong> Courts of Guwahati, Assam, India.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">19. CONTACT & PRIVACY QUESTIONS</h2>
        <div className="space-y-2">
          <p><strong>General Inquiries:</strong> <a href="mailto:noprompt1111@gmail.com" className="text-gold hover:underline">noprompt1111@gmail.com</a></p>
          <p><strong>Privacy Inquiries:</strong> <a href="mailto:noprompt1111@gmail.com" className="text-gold hover:underline">noprompt1111@gmail.com</a></p>
          <p><strong>Data Protection Officer:</strong> Hrit Chaudhury</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">20. COMPLIANCE CERTIFICATIONS</h2>
        <p className="mb-2">This Privacy Policy is designed to comply with:</p>
        <div className="grid grid-cols-2 gap-2 text-sm opacity-90 mb-4">
          <span> GDPR (EU)</span>
          <span> CCPA (California)</span>
          <span> CalOPPA (California)</span>
          <span> DPDP Act 2023 (India)</span>
          <span> IT Act 2000 (India)</span>
          <span> PIPEDA (Canada)</span>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">21. ENTIRE AGREEMENT</h2>
        <p>This Privacy Policy, combined with our Terms of Service, constitutes the entire agreement regarding your data and use of nopromt.ai.</p>
      </section>

      <section className="mt-8 pt-8 border-t border-white/20">
        <h2 className="text-xl font-bold text-text-primary mb-4 text-center">FINAL LEGAL NOTICE</h2>
        <p className="text-center opacity-80 mb-4">BY USING NOPROMT.AI, YOU ACKNOWLEDGE:</p>
        <ul className="list-disc max-w-2xl mx-auto space-y-2 text-sm opacity-70 mb-8 pl-6">
          <li>You have read this entire Privacy Policy</li>
          <li>You understand all terms and conditions</li>
          <li>You accept all limitations of liability and disclaimers</li>
          <li>You consent to arbitration and binding resolution in India</li>
          <li>You waive the right to jury trial and class action lawsuits</li>
          <li>You are 18+ (or have parental consent if under 18)</li>
        </ul>
        <div className="text-center text-xs opacity-50">
          <p>© 2026 nopromt.ai. All Rights Reserved.</p>
          <p>Last Updated: January 1, 2026</p>
        </div>
      </section>
    </LegalLayout>
  );
};