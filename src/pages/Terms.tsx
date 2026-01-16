import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-steel-dark">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-center font-heading">
            Terms of Service
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
              Welcome to Manufacturers Steel Company. By accessing and using our website and services, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>

            <h2 className="text-2xl font-bold text-steel-dark mb-4 mt-8 font-heading">
              Acceptance of Terms
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              By accessing or using our website, you agree to comply with and be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site.
            </p>

            <h2 className="text-2xl font-bold text-steel-dark mb-4 mt-8 font-heading">
              Products and Services
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              All products and services offered by Manufacturers Steel Company are subject to availability. We reserve the right to limit quantities, discontinue products, or modify specifications at any time without prior notice. Prices are subject to change without notice.
            </p>

            <h2 className="text-2xl font-bold text-steel-dark mb-4 mt-8 font-heading">
              Quotes and Orders
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              All quotes provided are valid for 30 days unless otherwise specified. Orders are not binding until confirmed by Manufacturers Steel Company in writing. We reserve the right to refuse any order at our sole discretion.
            </p>

            <h2 className="text-2xl font-bold text-steel-dark mb-4 mt-8 font-heading">
              Payment Terms
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Payment terms will be established at the time of order confirmation. For new customers, payment may be required in advance. Established customers may be eligible for net terms upon credit approval.
            </p>

            <h2 className="text-2xl font-bold text-steel-dark mb-4 mt-8 font-heading">
              Delivery and Risk of Loss
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Delivery dates are estimates only and are not guaranteed. Risk of loss or damage passes to the buyer upon delivery to the carrier. Claims for damaged or missing products must be made within 48 hours of delivery.
            </p>

            <h2 className="text-2xl font-bold text-steel-dark mb-4 mt-8 font-heading">
              Returns and Refunds
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Custom-processed materials are non-returnable. Stock items may be returned within 30 days with prior authorization and may be subject to a restocking fee. All returns must be in original condition.
            </p>

            <h2 className="text-2xl font-bold text-steel-dark mb-4 mt-8 font-heading">
              Limitation of Liability
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Manufacturers Steel Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our products or services. Our total liability shall not exceed the amount paid for the specific product or service giving rise to the claim.
            </p>

            <h2 className="text-2xl font-bold text-steel-dark mb-4 mt-8 font-heading">
              Intellectual Property
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              All content on this website, including text, graphics, logos, and images, is the property of Manufacturers Steel Company and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
            </p>

            <h2 className="text-2xl font-bold text-steel-dark mb-4 mt-8 font-heading">
              Governing Law
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-steel-dark mb-4 mt-8 font-heading">
              Changes to Terms
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website constitutes acceptance of the modified terms.
            </p>

            <h2 className="text-2xl font-bold text-steel-dark mb-4 mt-8 font-heading">
              Contact Us
            </h2>
            <p className="text-foreground leading-relaxed mb-2">
              If you have questions about these Terms of Service, please contact us at:
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

export default Terms;
