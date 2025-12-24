import { Phone, MapPin, Clock, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-building.jpg";
import PhoneCallDialog from "./PhoneCallDialog";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="하이브엘 탑 부동산 - 광교 프리미엄 아파트"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 pb-32 md:pb-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 bg-accent/90 text-accent-foreground px-4 py-2 rounded-full mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Building2 className="w-4 h-4" />
            <span className="text-sm font-semibold">공인중개사사무소</span>
          </div>

          {/* Title */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            하이브엘 탑
            <span className="block text-gradient-gold">부동산</span>
          </h1>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-cream/80 mb-8 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            광교 풍경채 어바니티를 전문으로 하는 믿을 수 있는 부동산입니다.
            <br />
            매매 · 전세 · 월세 최적의 조건으로 상담해 드립니다.
          </p>

          {/* Contact Info */}
          <div 
            className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a 
              href="tel:031-262-4959" 
              className="flex items-center gap-3 bg-card/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-cream/20 hover:bg-card/20 transition-colors"
            >
              <Phone className="w-5 h-5 text-accent" />
              <div>
                <p className="text-xs text-cream/60">대표전화</p>
                <p className="text-cream font-bold">031-262-4959</p>
              </div>
            </a>
            <a 
              href="tel:010-4684-3412" 
              className="flex items-center gap-3 bg-card/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-cream/20 hover:bg-card/20 transition-colors"
            >
              <Phone className="w-5 h-5 text-accent" />
              <div>
                <p className="text-xs text-cream/60">휴대전화</p>
                <p className="text-cream font-bold">010-4684-3412</p>
              </div>
            </a>
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <PhoneCallDialog>
              <Button variant="gold" size="xl">
                <Phone className="w-5 h-5" />
                전화 상담하기
              </Button>
            </PhoneCallDialog>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-cream text-cream hover:bg-cream hover:text-foreground"
              onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
            >
              매물 보러가기
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              <span>경기도 용인시 수지구 진산로 106 휘미리빌딩 116호</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 text-accent" />
              <span>영업시간: 09:00 - 19:00 (연중무휴)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
