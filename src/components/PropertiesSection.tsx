import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Maximize, Bed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { properties } from "@/data/properties";

const PropertiesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">
              Featured Listings
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              추천 매물
            </h2>
          </div>
          <Link to="/properties">
            <Button variant="ghost" className="mt-4 md:mt-0 text-primary hover:text-accent">
              전체 매물 보기
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.slice(0, 3).map((property, index) => (
            <Link 
              to={`/property/${property.id}`} 
              key={property.id}
              className="block"
            >
              <article
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift border border-border/50 animate-fade-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={property.images[0]?.url}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-primary text-primary-foreground">
                      {property.type}
                    </Badge>
                    {property.tag && (
                      <Badge className="bg-accent text-accent-foreground">
                        {property.tag}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {property.title}
                  </h3>
                  
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    {property.location}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Maximize className="w-4 h-4" />
                      {property.size}
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      {property.rooms}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-lg font-bold text-primary">
                      {property.price}
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
