import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-steel-dark">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-center font-heading">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-foreground text-lg leading-relaxed mb-6">
              <strong>Effective Date:</strong> January 1, 2024
            </p>

            <p className="text-foreground leading-relaxed mb-6">
              Manufacturers Steel Company ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-steel-dark mb-4 mt-8 font-heading">
              Information We Collect
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-foreground mb-6 space-y-2">
              <li>Fill out a contact form on our website</li>
              <li>Request a quote for our products or services</li>
              <li>Subscribe to our newsletter or mailing list</li>
              <li>Contact us via phone, email, or other means</li>
            </ul>
            <p className="text-foreground leading-relaxed mb-6">
              This information may include your name, email address, phone number, company name, and any other information you choose to provide.
            </p>

            <h2 className="text-2xl font-bold text-steel-dark mb-4 mt-8 font-heading">
              How We Use Your Information
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              We may use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 text-foreground mb-6 space-y-2">
              <li>Responding to your inquiries and fulfilling your requests</li>
              <li>Providing you with information about our products and services</li>
              <li>Processing transactions and sending related information</li>
              <li>Improving our website and customer service</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-steel-dark mb-4 mt-8 font-heading">
              Information Sharing
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share information with trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
            </p>

            <h2 className="text-2xl font-bold text-steel-dark mb-4 mt-8 font-heading">
              Data Security
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-steel-dark mb-4 mt-8 font-heading">
              Your Rights
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              You have the right to request access to, correction of, or deletion of your personal information. If you wish to exercise these rights or have any questions about our privacy practices, please contact us using the information below.
            </p>

            <h2 className="text-2xl font-bold text-steel-dark mb-4 mt-8 font-heading">
              Contact Us
            </h2>
            <p className="text-foreground leading-relaxed mb-2">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-foreground leading-relaxed">
              <strong>Manufacturers Steel Company</strong><br />
              34766 HIGHWAY 190<br />
              SPRINGVILLE, CA 93265<br />
              Phone: 840-242-7954
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
