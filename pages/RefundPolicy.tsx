import React from 'react';
import { LegalLayout } from '../components/LegalLayout';

export const RefundPolicy: React.FC = () => {
  return (
    <LegalLayout title="Refund & Cancellation Policy">
      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">1. PHILOSOPHY</h2>
        <p>At nopromt.ai, we believe in fair business. Unlike many digital platforms, we offer a refund guarantee on unconsumed value.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">2. REFUND ELIGIBILITY (The "100% Unused" Guarantee)</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-text-primary">Condition:</strong> You are eligible for a 100% refund on any unused credits remaining in your account.</li>
          <li><strong className="text-text-primary">Used Credits:</strong> Credits that have already been utilized to generate images or perform tasks are non-refundable as the computing resources have already been expended.</li>
          <li><strong className="text-text-primary">Timeframe:</strong> You may request a refund for unused credits at any time while your account is active.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">3. SUBSCRIPTION CANCELLATION</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>You may cancel your recurring subscription at any time via your account dashboard.</li>
          <li>Upon cancellation, you will not be charged for the next billing cycle.</li>
          <li>Remaining credits after cancellation can either be used or refunded upon request.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">4. HOW TO REQUEST A REFUND</h2>
        <p className="mb-4">To initiate a refund, please email <a href="mailto:noprompt1111@gmail.com" className="text-gold hover:underline">noprompt1111@gmail.com</a> with the subject line "Refund Request" and include:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Registered Email Address.</li>
          <li>Transaction ID / Order ID.</li>
          <li>(Optional) A brief reason (helps us improve).</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">5. PROCESSING TIMELINE</h2>
        <p>Once approved, refunds are processed back to the original payment method (via Razorpay). Please allow 5–7 business days for the funds to appear in your bank account, depending on your bank's processing speed.</p>
      </section>
    </LegalLayout>
  );
};
