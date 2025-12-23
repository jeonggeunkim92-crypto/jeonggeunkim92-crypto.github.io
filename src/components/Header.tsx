import { Building2, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "홈", href: "/" },
    { name: "매물보기", href: "/#properties" },
    { name: "서비스", href: "/#services" },
    { name: "블로그", href: "/blog" },
    { name: "연락처", href: "/#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (href.startsWith("/#")) {
      const sectionId = href.substring(2);
      
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-cream" />
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-foreground leading-tight">하이브엘 탑</p>
              <p className="text-xs text-muted-foreground">부동산</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="gold" size="sm">
              <Phone className="w-4 h-4" />
              상담하기
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors py-2 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <Button variant="gold" size="sm" className="mt-2">
                <Phone className="w-4 h-4" />
                상담하기
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
