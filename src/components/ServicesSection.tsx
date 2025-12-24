import { Building, Home, Key, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "매매",
    description: "아파트, 빌라, 오피스텔 등 다양한 매물의 매매를 도와드립니다.",
  },
  {
    icon: Key,
    title: "전세",
    description: "안전한 전세 계약을 위한 전문 상담과 물건 확인을 제공합니다.",
  },
  {
    icon: Building,
    title: "월세",
    description: "합리적인 월세 조건의 매물을 찾아 연결해 드립니다.",
  },
  {
    icon: TrendingUp,
    title: "시세 상담",
    description: "정확한 시세 분석과 투자 상담을 제공합니다.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            전문 부동산 서비스
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            20년 경력의 전문 중개사가 고객님의 소중한 부동산 거래를 책임집니다.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl md:rounded-2xl p-4 md:p-8 shadow-card hover-lift cursor-pointer border border-border/50 animate-fade-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-6 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="w-5 h-5 md:w-7 md:h-7 text-primary group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-foreground mb-1 md:mb-3">
                {service.title}
              </h3>
              <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
