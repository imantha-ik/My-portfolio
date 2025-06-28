import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
  return (
    <motion.div
      className="min-h-screen bg-background text-foreground px-6 py-16 max-w-5xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-4xl font-bold text-center mb-8">Legal</h1>

      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          <strong>Introduction</strong><br />
          <em>The Board of Elemental Aim is committed to protecting the privacy of personal information which the organisation collects, holds and administers. Personal information is information which directly or indirectly identifies a person.</em>
        </p>

        <p>
          <strong>Purpose</strong><br />
          The purpose of this document is to provide a framework for Elemental Aim in dealing with privacy considerations.
        </p>

        <p>
          <strong>Policy</strong><br />
          Elemental Aim collects and administers a range of personal information for the purposes of accessing their educational needs. The organisation is committed to protecting the privacy of personal information it collects, holds and administers.
        </p>

        <p>
          Elemental Aim recognises the essential right of individuals to have their information administered in ways which they would reasonably expect – protected on one hand, and made accessible to them on the other. These privacy values are reflected in and supported by our core values and philosophies and also reflected in our Privacy Policy, which is compliant with the Privacy Act 1988 (Cth).
        </p>

        <p>
          Elemental Aim is bound by laws which impose specific obligations when it comes to handling information. The organisation has adopted the following principles contained as minimum standards in relation to handling personal information.
        </p>

        <p><strong>Elemental Aim will:</strong></p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Collect only information which the organisation requires for its primary function;</li>
          <li>Ensure that stakeholders are informed as to why we collect the information and how we administer the information gathered;</li>
          <li>Use and disclose personal information only for our primary functions or a directly related purpose, or for another purpose with the person’s consent;</li>
          <li>Store personal information securely, protecting it from unauthorised access; and</li>
          <li>Provide stakeholders with access to their own information, and the right to seek its correction.</li>
        </ul>

        <p>
          Policies can be established or altered only by The Board: Procedures may be determined by the CEO.
        </p>

        <p>
          <strong>DISCLAIMER:</strong> While all care has been taken in the preparation of this material, no responsibility is accepted by the authors / or Our Community, its staff, volunteers or partners, for any errors, omissions or inaccuracies. The material provided in this resource has been prepared to provide general information only. It is not intended to be relied upon or be a substitute for legal or other professional advice. No responsibility can be accepted by the authors / or Our Community or its partners for any known or unknown consequences that may result from reliance on any information provided in this publication.
        </p>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicyPage;

