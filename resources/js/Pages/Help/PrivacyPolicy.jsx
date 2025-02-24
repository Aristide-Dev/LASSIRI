import React from 'react';
import AppLayout from '@/Layouts/AppLayout';

function PrivacyPolicy() {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <p className="text-gray-600 mb-8">
            This Privacy Policy (“Policy”) describes how VIDITEC DMCC (“Kulu,” “we,” “our,” or “us”) collects, uses, discloses, and processes your Personal Information when you visit our websites (collectively, the “Site”), download or use our digital wallet mobile application, or use any of our products or services (collectively, the “Services”) in Guinea, West Africa.
          </p>
          <p className="text-gray-600 mb-8">
            By accessing or using our Site and Services, you acknowledge that you have read, understood, and agree to be bound by this Policy. If you do not agree, please do not access or use our Site or Services.
          </p>

          <div className="space-y-8">
            {/* 1. APPLICABLE LAW & DATA CONTROLLER & DATA PROCESSOR */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. APPLICABLE LAW & DATA CONTROLLER & DATA PROCESSOR
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <strong>Local Compliance:</strong> We are committed to complying with applicable data protection laws and regulations in Guinea, as well as other relevant West African frameworks.
                </li>
                <li>
                  <strong>Data Controller:</strong> For purposes of this Policy, DIWALGUI is the Data Controller, determining the purposes and means of controlling your Personal Information.
                </li>
                <li>
                  <strong>Data Processor:</strong> For purposes of this Policy, VIDITEC DMCC is the Data Processor, determining the purposes and means of processing your Personal Information.
                </li>
              </ul>
            </section>

            {/* 2. PERSONAL INFORMATION WE COLLECT */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. PERSONAL INFORMATION WE COLLECT
              </h2>
              <div className="space-y-4 text-gray-600">
                <h3 className="text-xl font-medium">Information You Provide</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Account Details:</strong> When you create an account to use the Services, you may provide your name, email address, phone number, and other required information.
                  </li>
                  <li>
                    <strong>Communication Information:</strong> If you contact us for support or inquiries, we may collect your name, contact details, and the content of your message(s).
                  </li>
                </ul>
                <h3 className="text-xl font-medium mt-4">Information We Collect Automatically</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Log Data:</strong> When you access the Site, we may automatically collect information such as your IP address, browser type, and how you interact with our Site.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> We may automatically gather information about your use of the Services, including content viewed, features used, timestamps, and other device information.
                  </li>
                  <li>
                    <strong>Analytics:</strong> We may use analytics tools (e.g., cookies, web beacons) to measure usage patterns and improve the user experience.
                  </li>
                </ul>
                <p className="mt-4">
                  <strong>Card Payment Information:</strong> We do not store or collect payment card details.
                </p>
              </div>
            </section>

            {/* 3. LAWFUL BASES FOR PROCESSING */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. LAWFUL BASES FOR PROCESSING
              </h2>
              <p className="text-gray-600">
                We process your Personal Information under one or more of the following legal bases:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-2">
                <li>
                  <strong>Consent:</strong> Where you have given consent (e.g., for marketing communications, certain analytics).
                </li>
                <li>
                  <strong>Contract:</strong> Where processing is necessary to fulfill a contractual obligation (e.g., to provide our Services).
                </li>
                <li>
                  <strong>Legal Obligation:</strong> Where processing is required to comply with applicable law.
                </li>
                <li>
                  <strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate business interests, such as enhancing security or improving our Services, provided those interests are not overridden by your rights.
                </li>
              </ul>
            </section>

            {/* 4. HOW WE USE YOUR PERSONAL INFORMATION */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. HOW WE USE YOUR PERSONAL INFORMATION
              </h2>
              <p className="text-gray-600">
                We may use your Personal Information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-2">
                <li>
                  <strong>Providing Services:</strong> To set up and maintain your account, process transactions, and deliver our Services.
                </li>
                <li>
                  <strong>Communication:</strong> To respond to your inquiries, send administrative notifications, and provide support.
                </li>
                <li>
                  <strong>Personalization:</strong> To tailor your user experience, including recommended features or content based on your preferences.
                </li>
                <li>
                  <strong>Internal Research & Improvement:</strong> To conduct research, monitor usage trends, and enhance or develop new products and Services.
                </li>
                <li>
                  <strong>Security & Fraud Prevention:</strong> To detect, investigate, and respond to security incidents or fraudulent activities.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> To comply with applicable laws, regulatory requirements, or governmental requests.
                </li>
              </ul>
            </section>

            {/* 5. SHARING AND DISCLOSURE OF PERSONAL INFORMATION */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. SHARING AND DISCLOSURE OF PERSONAL INFORMATION
              </h2>
              <p className="text-gray-600">
                We do not sell your Personal Information. However, we may share or disclose your data as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-2">
                <li>
                  <strong>Vendors & Service Providers:</strong> We may share data with third-party vendors who perform services on our behalf (e.g., hosting, analytics). They process your data according to our instructions and are bound by confidentiality obligations.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, reorganization, bankruptcy, receivership, or sale of all or a portion of our assets, your Personal Information may be transferred to the acquiring entity.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose Personal Information if required by law, court order, or other legitimate governmental request, or if necessary to protect our rights or the rights of others.
                </li>
                <li>
                  <strong>Affiliates:</strong> We may share your Personal Information with our affiliated entities, who will use it in accordance with this Policy.
                </li>
                <li>
                  <strong>Other Users:</strong> Certain information, such as your username or activities within the Service, may be visible to other users if you choose to engage in public features.
                </li>
              </ul>
            </section>

            {/* 6. CROSS-BORDER DATA TRANSFERS */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. CROSS-BORDER DATA TRANSFERS
              </h2>
              <p className="text-gray-600">
                Your Personal Information may be transferred to and processed in countries other than Guinea where our servers, affiliates, or service providers are located. We take steps to ensure adequate protections are in place, such as using contractual clauses or other data transfer mechanisms recognized by applicable laws.
              </p>
            </section>

            {/* 7. DATA RETENTION */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. DATA RETENTION
              </h2>
              <p className="text-gray-600">
                We retain your Personal Information only for as long as necessary to fulfill the purposes outlined in this Policy, or as required by law. Retention periods may vary depending on the type of data and the specific legal or operational needs:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-2">
                <li>
                  <strong>Account Information:</strong> Retained until the account is deleted or otherwise deactivated.
                </li>
                <li>
                  <strong>Transaction Data:</strong> Retained as required for financial and regulatory compliance up to 7 years.
                </li>
                <li>
                  <strong>Marketing Data:</strong> Retained until you opt-out or withdraw consent.
                </li>
              </ul>
            </section>

            {/* 8. USER RIGHTS & CHOICES */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. USER RIGHTS & CHOICES
              </h2>
              <p className="text-gray-600">
                In accordance with local laws, you may have the following rights over your Personal Information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-2">
                <li>
                  <strong>Access:</strong> Request details about the Personal Information we hold about you.
                </li>
                <li>
                  <strong>Rectification:</strong> Correct or update inaccurate or incomplete information.
                </li>
                <li>
                  <strong>Erasure:</strong> Request deletion of your Personal Information, subject to legal exemptions.
                </li>
                <li>
                  <strong>Restriction:</strong> Request that we limit the processing of your Personal Information.
                </li>
                <li>
                  <strong>Objection:</strong> Object to the processing of your Personal Information for specific purposes, such as direct marketing.
                </li>
                <li>
                  <strong>Data Portability:</strong> Request a copy of your Personal Information in a structured, commonly used format.
                </li>
                <li>
                  <strong>Withdraw Consent:</strong> Where processing is based on consent, you can withdraw your consent at any time.
                </li>
              </ul>
              <p className="text-gray-600 mt-2">
                To exercise these rights or if you have questions, please contact us at: <a href="mailto:privacy@kulu.com" className="text-blue-600 hover:text-blue-800">privacy@kulu.com</a>. We will respond within a reasonable time frame, in accordance with applicable laws.
              </p>
            </section>

            {/* 9. COOKIES & TRACKING TECHNOLOGIES */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. COOKIES & TRACKING TECHNOLOGIES
              </h2>
              <p className="text-gray-600">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-2">
                <li>Recognize you and your device when you return to our Site.</li>
                <li>Remember your preferences and settings.</li>
                <li>Analyze Site performance and user engagement.</li>
              </ul>
              <p className="text-gray-600 mt-2">
                You can control cookies through your browser settings or dedicated tools. However, disabling cookies may affect the functionality and features of our Site or Services.
              </p>
            </section>

            {/* 10. ADVERTISING & MARKETING */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. ADVERTISING & MARKETING
              </h2>
              <p className="text-gray-600">
                We may use your Personal Information to send you marketing communications or show you relevant advertisements. You can unsubscribe from marketing emails at any time by clicking the “unsubscribe” link in the email or by contacting us at <a href="mailto:privacy@kulu.com" className="text-blue-600 hover:text-blue-800">privacy@kulu.com</a>. For targeted ads, you can manage your preferences through your device settings or any provided opt-out links.
              </p>
            </section>

            {/* 11. MINORS */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. MINORS
              </h2>
              <p className="text-gray-600">
                Our Services are not intended for individuals under the age of 18 years old. If you believe that a minor has provided us with Personal Information, please contact us at <a href="mailto:privacy@kulu.com" className="text-blue-600 hover:text-blue-800">privacy@kulu.com</a> and we will work to delete the information promptly.
              </p>
            </section>

            {/* 12. SECURITY & BREACH NOTIFICATION */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. SECURITY & BREACH NOTIFICATION
              </h2>
              <p className="text-gray-600">
                We employ reasonable physical, technical, and administrative measures designed to protect your Personal Information from unauthorized access, use, or disclosure. However, no security measures are infallible. If a security breach occurs, we will take appropriate steps in accordance with applicable laws, including notifying affected individuals and relevant authorities if required.
              </p>
            </section>

            {/* 13. OPT-OUT MECHANISMS */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                13. OPT-OUT MECHANISMS
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <strong>Analytics:</strong> You may opt-out of analytics tools where available (e.g., using a browser extension or our in-app settings).
                </li>
                <li>
                  <strong>Third-Party Sharing:</strong> For non-essential data sharing, you can contact us at <a href="mailto:privacy@kulu.com" className="text-blue-600 hover:text-blue-800">privacy@kulu.com</a> to inquire about your opt-out options.
                </li>
                <li>
                  <strong>Marketing Communications:</strong> You can unsubscribe from marketing emails by clicking the link in the email or contacting us at <a href="mailto:privacy@kulu.com" className="text-blue-600 hover:text-blue-800">privacy@kulu.com</a>.
                </li>
              </ul>
            </section>

            {/* 14. CONTACT INFORMATION & DATA PROTECTION OFFICER */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                14. CONTACT INFORMATION & DATA PROTECTION OFFICER (IF APPLICABLE)
              </h2>
              <p className="text-gray-600">
                For data protection inquiries, concerns, or to exercise your rights, please contact:
              </p>
              <p className="text-gray-600 mt-2">
                <strong>VIDITEC DMCC</strong><br />
                Attn: Data Protection Officer<br />
                Email: <a href="mailto:privacy@kulu.com" className="text-blue-600 hover:text-blue-800">privacy@kulu.com</a><br />
                Address: Office 2705-D, JBC4, Cluster N, Jumeirah Lakes Towers, Dubai - United Arab Emirates
              </p>
            </section>

            {/* 15. CHANGES TO THIS PRIVACY POLICY */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                15. CHANGES TO THIS PRIVACY POLICY
              </h2>
              <p className="text-gray-600">
                We may update this Policy from time to time to reflect changes in our business, technology, legal requirements, or for other reasons. When we make changes, we will post the updated Policy on our Site and indicate the “Last Updated” date. Any changes become effective immediately upon posting.
              </p>
              <p className="text-gray-600 mt-2">
                <strong>Version:</strong> 1.1<br />
                <strong>Last Updated:</strong> January 13, 2025
              </p>
            </section>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default PrivacyPolicy;
