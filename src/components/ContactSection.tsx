import { Phone, MessageSquare, Clock, MapPin, Building2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-hero text-cream">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              지금 바로 상담받으세요
            </h2>
            <p className="text-cream/80 text-lg leading-relaxed mb-8">
              광교 풍경채 어바니티 전문 중개사가 최적의 조건으로 
              고객님의 부동산 거래를 도와드립니다.
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button variant="gold" size="lg" className="flex-1">
                <Phone className="w-5 h-5" />
                전화 상담
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="flex-1 border-cream text-cream hover:bg-cream hover:text-foreground"
              >
                <MessageSquare className="w-5 h-5" />
                카카오톡 상담
              </Button>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-cream/10 backdrop-blur-sm rounded-xl p-5 border border-cream/20">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="w-5 h-5 text-accent" />
                  <span className="font-semibold">상호명</span>
                </div>
                <p className="text-cream/80 text-sm">하이브엘 탑 부동산</p>
              </div>
              <div className="bg-cream/10 backdrop-blur-sm rounded-xl p-5 border border-cream/20">
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="w-5 h-5 text-accent" />
                  <span className="font-semibold">등록번호</span>
                </div>
                <p className="text-cream/80 text-sm">41465-2025-00041</p>
              </div>
            </div>
          </div>

          {/* Right Content - Info Box */}
          <div className="bg-card text-foreground rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">연락처 정보</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">대표전화</p>
                  <p className="text-xl font-bold text-primary">031-262-4959</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">휴대전화</p>
                  <p className="text-xl font-bold text-primary">010-4684-3412</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">주소</p>
                  <p className="font-medium">경기도 용인시 수지구 진산로 106</p>
                  <p className="text-muted-foreground">휘미리빌딩 116호</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">영업시간</p>
                  <p className="font-medium">09:00 - 19:00</p>
                  <p className="text-muted-foreground">연중무휴</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
