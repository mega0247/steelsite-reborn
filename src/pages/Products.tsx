import Layout from "@/components/Layout";
import productsImage from "@/assets/products-image.jpg";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const productCategories = [
  {
    title: "Hot Rolled Steel",
    items: [
      "Hot Rolled Sheets",
      "Hot Rolled Coils", 
      "Pickled & Oiled Steel",
      "Hot Rolled Plate"
    ]
  },
  {
    title: "Cold Rolled Steel",
    items: [
      "Cold Rolled Sheets",
      "Cold Rolled Coils",
      "Cold Rolled Strip",
      "Cold Rolled Plate"
    ]
  },
  {
    title: "Galvanized Steel",
    items: [
      "Galvanized Sheets",
      "Galvanized Coils",
      "Galvannealed Steel",
      "Electrogalvanized Steel"
    ]
  },
  {
    title: "Specialty Products",
    items: [
      "Aluminized Steel",
      "Pre-painted Steel",
      "Stainless Steel",
      "High Strength Low Alloy"
    ]
  }
];

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-steel-dark">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-center font-heading">
            Our Products
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">
                Comprehensive Steel Solutions
              </h2>
              <p className="text-foreground text-lg leading-relaxed mb-6">
                Manufacturers Steel Company offers an extensive range of flat rolled steel products to meet all your industrial and commercial needs. Our inventory includes a wide variety of grades, sizes, and finishes to accommodate any project requirement.
              </p>
              <p className="text-foreground text-lg leading-relaxed mb-8">
                With competitive pricing and reliable delivery, we ensure that you get the right materials when you need them. Our knowledgeable staff can help you select the perfect product for your specific application.
              </p>
              <Link 
                to="/contact" 
                className="btn-primary inline-block"
              >
                Request a Quote
              </Link>
            </div>
            <div className="rounded overflow-hidden shadow-xl">
              <img 
                src={productsImage} 
                alt="Steel Products" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-steel-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">
            Product Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-card p-6 rounded shadow-lg">
                <h3 className="text-xl font-bold text-steel-dark mb-4 font-heading border-b border-primary pb-2">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">
            Custom Specifications
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2 font-heading">.015"–.500"</div>
                <p className="text-foreground font-medium">Thickness Range</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2 font-heading">1"–72"</div>
                <p className="text-foreground font-medium">Width Range</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2 font-heading">Custom</div>
                <p className="text-foreground font-medium">Lengths Available</p>
              </div>
            </div>
            <p className="text-center text-foreground text-lg mt-8">
              Can't find what you're looking for? Contact us for custom orders and special specifications.
            </p>
            <div className="text-center mt-6">
              <Link 
                to="/contact" 
                className="btn-primary inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
