import { Building2, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-cream py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Building2 className="w-7 h-7 text-accent-foreground" />
              </div>
              <div>
                <p className="font-bold text-xl">하이브엘 탑 부동산</p>
                <p className="text-cream/60 text-sm">공인중개사사무소</p>
              </div>
            </div>
            <p className="text-cream/70 leading-relaxed max-w-md mb-6">
              광교 풍경채 어바니티 전문 부동산입니다. 
              20년 경력의 전문 중개사가 고객님의 소중한 부동산 거래를 책임집니다.
            </p>
            <div className="flex items-center gap-2 text-sm text-cream/60">
              <span>대표: 구소장</span>
              <span>|</span>
              <span>사업자등록번호: 555-19-02591</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">연락처</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-cream/70">
                <Phone className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-cream font-medium">031-262-4959</p>
                  <p className="text-sm">010-4684-3412</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-cream/70">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>경기도 용인시 수지구 진산로 106 휘미리빌딩 116호</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">바로가기</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-cream/70 hover:text-accent transition-colors">
                  매매 매물
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 hover:text-accent transition-colors">
                  전세 매물
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 hover:text-accent transition-colors">
                  월세 매물
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 hover:text-accent transition-colors">
                  시세 조회
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/50">
            <p>© 2025 하이브엘 탑 부동산. All rights reserved.</p>
            <p>개설등록번호: 41465-2025-00041</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
