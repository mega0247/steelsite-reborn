import Layout from "@/components/Layout";
import aboutImage from "@/assets/about-image.jpg";
import communityImage from "@/assets/community-image.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-steel-dark"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-center font-heading">
            
          </h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">
                Our History
              </h2>
              <p className="text-foreground text-lg leading-relaxed mb-6">
                Manufacturers Steel Company is a third-generation, family-owned and operated steel service center. Since 1951, we have been serving clients locally and nationwide with an unwavering commitment to quality, competitive pricing, and exceptional customer service.
              </p>
              <p className="text-foreground text-lg leading-relaxed mb-6">
                What started as a small operation has grown into a trusted name in the steel industry. Our experienced team brings decades of expertise to every project, ensuring that our customers receive the highest quality products and services.
              </p>
              <p className="text-foreground text-lg leading-relaxed">
                We take pride in our long-standing relationships with fabricators, OEMs, job shops, and contractors who have relied on us for their steel needs for generations.
              </p>
            </div>
            <div className="rounded overflow-hidden shadow-xl">
              <img 
                src={aboutImage} 
                alt="Manufacturers Steel Facility" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-steel-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded shadow-lg text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-foreground text-2xl font-bold font-heading">Q</span>
              </div>
              <h3 className="text-xl font-bold text-steel-dark mb-4 font-heading">Quality</h3>
              <p className="text-foreground">
                We are committed to providing the highest quality flat rolled steel products that meet and exceed industry standards.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded shadow-lg text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-foreground text-2xl font-bold font-heading">S</span>
              </div>
              <h3 className="text-xl font-bold text-steel-dark mb-4 font-heading">Service</h3>
              <p className="text-foreground">
                Our dedicated team provides personalized support at every stage, ensuring your project runs smoothly from start to finish.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded shadow-lg text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-foreground text-2xl font-bold font-heading">I</span>
              </div>
              <h3 className="text-xl font-bold text-steel-dark mb-4 font-heading">Integrity</h3>
              <p className="text-foreground">
                As a family-owned business, we operate with honesty and transparency in all our dealings with customers and partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded overflow-hidden shadow-xl">
              <img 
                src={communityImage} 
                alt="Manufacturers Steel Team" 
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="section-title">
                Community Involvement
              </h2>
              <p className="text-foreground text-lg leading-relaxed mb-6">
                At Manufacturers Steel, we believe in giving back to the community that has supported us for over seven decades. We actively participate in local initiatives and support various charitable organizations.
              </p>
              <p className="text-foreground text-lg leading-relaxed mb-8">
                Our commitment extends beyond providing excellent steel products – we strive to make a positive impact in Springville and the surrounding communities.
              </p>
              <Link 
                to="/contact" 
                className="btn-primary inline-block"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
