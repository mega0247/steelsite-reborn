import Layout from "@/components/Layout";
import servicesImage from "@/assets/services-image.jpg";
import { Link } from "react-router-dom";
import { Scissors, Ruler, Package, Truck, Wrench, Shield } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Shearing",
    description: "Precision shearing services to cut steel sheets and plates to your exact specifications with clean, accurate edges."
  },
  {
    icon: Ruler,
    title: "Slitting",
    description: "High-quality slitting capabilities to convert master coils into narrower widths while maintaining tight tolerances."
  },
  {
    icon: Package,
    title: "Blanking",
    description: "Custom blanking services to produce flat, accurately cut pieces ready for your manufacturing process."
  },
  {
    icon: Wrench,
    title: "Leveling",
    description: "Precision leveling to ensure your steel products are flat and free of coil memory for optimal fabrication."
  },
  {
    icon: Shield,
    title: "Edge Conditioning",
    description: "Edge conditioning services including deburred, rounded, or slit edge options to meet your requirements."
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Reliable delivery services to get your materials to your facility on time, every time."
  }
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-steel-dark">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-center font-heading">
            Our Services
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded overflow-hidden shadow-xl">
              <img 
                src={servicesImage} 
                alt="Steel Processing Services" 
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="section-title">
                Full-Service Steel Processing
              </h2>
              <p className="text-foreground text-lg leading-relaxed mb-6">
                Manufacturers Steel Company provides comprehensive steel processing services to meet all your fabrication needs. Our state-of-the-art equipment and experienced operators ensure precise, high-quality results every time.
              </p>
              <p className="text-foreground text-lg leading-relaxed mb-8">
                From simple cuts to complex processing requirements, we have the capabilities and expertise to handle projects of any size. Our commitment to quality and customer satisfaction has made us a trusted partner for businesses across the nation.
              </p>
              <Link 
                to="/contact" 
                className="btn-primary inline-block"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-steel-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">
            Processing Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card p-8 rounded shadow-lg card-hover">
                <service.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-bold text-steel-dark mb-4 font-heading">
                  {service.title}
                </h3>
                <p className="text-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">
              Why Choose Manufacturers Steel?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-left">
              <div className="flex gap-4">
                <div className="w-2 bg-primary flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-steel-dark mb-2 font-heading">Experienced Team</h3>
                  <p className="text-foreground">
                    Our skilled operators bring decades of combined experience to every project.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 bg-primary flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-steel-dark mb-2 font-heading">Modern Equipment</h3>
                  <p className="text-foreground">
                    State-of-the-art machinery ensures precision and quality in every cut.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 bg-primary flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-steel-dark mb-2 font-heading">Fast Turnaround</h3>
                  <p className="text-foreground">
                    We work efficiently to meet your deadlines without compromising quality.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 bg-primary flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-steel-dark mb-2 font-heading">Competitive Pricing</h3>
                  <p className="text-foreground">
                    Fair pricing combined with exceptional service delivers real value.
                  </p>
                </div>
              </div>
            </div>
            <Link 
              to="/contact" 
              className="btn-primary inline-block mt-10"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
