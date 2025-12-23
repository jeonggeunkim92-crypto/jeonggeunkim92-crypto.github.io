import { Link } from "react-router-dom";
import { MapPin, Maximize, Bed, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { properties } from "@/data/properties";
import { useState, useEffect } from "react";

const Properties = () => {
  const [filter, setFilter] = useState<"전체" | "매매" | "전세" | "월세">("전체");

  // 페이지 진입 시 상단으로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProperties = filter === "전체" 
    ? properties 
    : properties.filter(p => p.type === filter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
              전체 매물
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              광교 신도시의 다양한 매물을 확인해보세요
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Button
              variant={filter === "전체" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("전체")}
              className="text-sm"
            >
              <Filter className="w-4 h-4 mr-1" />
              전체
            </Button>
            <Button
              variant={filter === "매매" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("매매")}
              className="text-sm"
            >
              매매
            </Button>
            <Button
              variant={filter === "전세" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("전세")}
              className="text-sm"
            >
              전세
            </Button>
            <Button
              variant={filter === "월세" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("월세")}
              className="text-sm"
            >
              월세
            </Button>
          </div>

          {/* Results Count */}
          <p className="text-sm text-muted-foreground mb-6">
            총 {filteredProperties.length}개의 매물
          </p>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredProperties.map((property, index) => (
              <Link 
                to={`/property/${property.id}`} 
                key={property.id}
                className="block"
              >
                <article
                  className="group bg-card rounded-xl overflow-hidden shadow-card hover-lift border border-border/50 animate-fade-up"
                  style={{ animationDelay: `${0.05 * (index + 1)}s` }}
                >
                  {/* Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={property.images[0]?.url}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <Badge className="bg-primary text-primary-foreground text-xs">
                        {property.type}
                      </Badge>
                      {property.tag && (
                        <Badge className="bg-accent text-accent-foreground text-xs">
                          {property.tag}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors line-clamp-1">
                      {property.title}
                    </h3>
                    
                    <div className="flex items-center gap-1 text-muted-foreground text-xs sm:text-sm mb-3">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="line-clamp-1">{property.location}</span>
                    </div>

                    <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Maximize className="w-3.5 h-3.5" />
                        {property.size}
                      </div>
                      <div className="flex items-center gap-1">
                        <Bed className="w-3.5 h-3.5" />
                        {property.rooms}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-border">
                      <p className="text-sm sm:text-base font-bold text-primary line-clamp-1">
                        {property.price}
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Properties;
