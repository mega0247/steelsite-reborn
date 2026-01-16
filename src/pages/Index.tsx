import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import aboutImage from "@/assets/about-image.jpg";
import productsImage from "@/assets/products-image.jpg";
import servicesImage from "@/assets/services-image.jpg";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    text: "Super tight pull through door for unloading, but they help. Friendly fellas and fast unload. Keep up the good work y'all!",
    author: "John M."
  },
  {
    text: "Came here on one of the hottest days of the year, they showed me where a cooler was and said help yourself. They even let me leave my truck running for my dog so she was comfortable. Didn't expect that, considering my truck was mostly in the building. Tight docks, but their staff helps guide you in.",
    author: "TJ B."
  },
  {
    text: "Great people, great service! Fast loading and unloading! They go out of the way for their customers as well!",
    author: "William S."
  }
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[600px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight font-heading uppercase">
              Your Trusted Family Owned and Operated Steel Service Center Since 1951
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              For All of Your Flat Rolled Steel Needs
            </p>
            <Link 
              to="/contact" 
              className="btn-primary inline-block text-lg px-8 py-4"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">
            Competitive Pricing, Exceptional Customer Service
          </h2>
          <p className="text-center text-foreground max-w-4xl mx-auto text-lg leading-relaxed">
            Manufacturers Steel Company is a third-generation, family-owned and operated steel service center located in Springville, CA. Serving clients locally and nationwide, we pride ourselves on our commitment to quality, competitive pricing, exceptional customer service, and an extensive offering of products and services. Our skilled and experienced team is here to help you with all your flat-rolled steel needs, ensuring timely deliveries and outstanding customer service. Contact us today for a quote and experience our reliability and expertise for yourself.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 bg-steel-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* About Card */}
            <Link to="/about" className="group card-hover block">
              <div className="bg-card rounded overflow-hidden shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={aboutImage} 
                    alt="About Manufacturers Steel" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 bg-primary text-primary-foreground text-center">
                  <h3 className="text-xl font-bold font-heading">About Us</h3>
                </div>
              </div>
            </Link>

            {/* Products Card */}
            <Link to="/products" className="group card-hover block">
              <div className="bg-card rounded overflow-hidden shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={productsImage} 
                    alt="Steel Products" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 bg-primary text-primary-foreground text-center">
                  <h3 className="text-xl font-bold font-heading">Products</h3>
                </div>
              </div>
            </Link>

            {/* Services Card */}
            <Link to="/services" className="group card-hover block">
              <div className="bg-card rounded overflow-hidden shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={servicesImage} 
                    alt="Steel Services" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 bg-primary text-primary-foreground text-center">
                  <h3 className="text-xl font-bold font-heading">Services</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">
              Experience Quality and Service You Can Trust
            </h2>
            <p className="text-foreground text-lg leading-relaxed mb-8">
              Manufacturers Steel Company is your trusted partner for high-quality steel solutions that meet the most demanding standards. Our experienced team provides personalized support at every stage, ensuring your project runs smoothly—from concept to completion. We deliver the reliability, expertise and responsive service you need. Discover why fabricators, OEM's, job shops and more depend on Manufacturers Steel to power their success. Contact us today to see how we can support your next project.
            </p>
            <Link 
              to="/contact" 
              className="btn-primary inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-steel-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-lg shadow-lg p-8 md:p-12 relative">
              <Quote className="w-16 h-16 text-primary/20 absolute top-6 left-6" />
              
              <div className="text-center relative z-10">
                <p className="text-lg md:text-xl text-foreground italic mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <p className="font-bold text-steel-dark font-heading">
                  {testimonials[currentTestimonial].author}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-primary' : 'bg-muted-foreground/30'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
