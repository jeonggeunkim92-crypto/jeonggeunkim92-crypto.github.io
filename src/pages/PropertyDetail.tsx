import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  MapPin, 
  Maximize, 
  Bed, 
  Bath, 
  Building, 
  Compass, 
  Calendar, 
  Car, 
  Phone, 
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Check,
  Share2,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPropertyById } from "@/data/properties";
import propertyKitchen from "@/assets/property-kitchen.jpg";
import propertyBathroom from "@/assets/property-bathroom.jpg";
import propertyView from "@/assets/property-view.jpg";

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const property = getPropertyById(id || "");

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          <div className="container mx-auto px-6 py-20 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              매물을 찾을 수 없습니다
            </h1>
            <Link to="/">
              <Button variant="default">
                <ArrowLeft className="w-4 h-4" />
                메인으로 돌아가기
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Add extra images for gallery
  const allImages = [
    ...property.images,
    { id: "kitchen", url: propertyKitchen, alt: "주방" },
    { id: "bathroom", url: propertyBathroom, alt: "욕실" },
    { id: "view", url: propertyView, alt: "전망" },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-secondary/30 border-b border-border">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">홈</Link>
              <span>/</span>
              <Link to="/#properties" className="hover:text-primary transition-colors">매물</Link>
              <span>/</span>
              <span className="text-foreground">{property.title}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Gallery & Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div className="space-y-4">
                {/* Main Image */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted">
                  <img
                    src={allImages[currentImageIndex].url}
                    alt={allImages[currentImageIndex].alt}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-card transition-colors shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-card transition-colors shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-foreground/80 text-cream px-4 py-2 rounded-full text-sm">
                    {currentImageIndex + 1} / {allImages.length}
                  </div>

                  {/* Actions */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        isLiked ? "bg-destructive text-cream" : "bg-card/90 backdrop-blur-sm text-foreground"
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                    </button>
                    <button className="w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-primary text-primary-foreground text-sm px-3 py-1">
                      {property.type}
                    </Badge>
                    {property.tag && (
                      <Badge className="bg-accent text-accent-foreground text-sm px-3 py-1">
                        {property.tag}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {allImages.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === index 
                          ? "border-accent ring-2 ring-accent/30" 
                          : "border-transparent hover:border-border"
                      }`}
                    >
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{property.address}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-1">매물가격</p>
                  <p className="text-3xl font-bold text-primary">{property.price}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    관리비: {property.maintenanceFee}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-card rounded-xl p-4 border border-border">
                    <Maximize className="w-5 h-5 text-accent mb-2" />
                    <p className="text-xs text-muted-foreground">공급면적</p>
                    <p className="font-semibold text-foreground">{property.size}</p>
                  </div>
                  <div className="bg-card rounded-xl p-4 border border-border">
                    <Maximize className="w-5 h-5 text-accent mb-2" />
                    <p className="text-xs text-muted-foreground">전용면적</p>
                    <p className="font-semibold text-foreground">{property.exclusiveSize}</p>
                  </div>
                  <div className="bg-card rounded-xl p-4 border border-border">
                    <Bed className="w-5 h-5 text-accent mb-2" />
                    <p className="text-xs text-muted-foreground">방/욕실</p>
                    <p className="font-semibold text-foreground">{property.rooms} / {property.bathrooms}</p>
                  </div>
                  <div className="bg-card rounded-xl p-4 border border-border">
                    <Building className="w-5 h-5 text-accent mb-2" />
                    <p className="text-xs text-muted-foreground">층수</p>
                    <p className="font-semibold text-foreground">{property.floor} / {property.totalFloors}</p>
                  </div>
                  <div className="bg-card rounded-xl p-4 border border-border">
                    <Compass className="w-5 h-5 text-accent mb-2" />
                    <p className="text-xs text-muted-foreground">방향</p>
                    <p className="font-semibold text-foreground">{property.direction}</p>
                  </div>
                  <div className="bg-card rounded-xl p-4 border border-border">
                    <Calendar className="w-5 h-5 text-accent mb-2" />
                    <p className="text-xs text-muted-foreground">입주가능일</p>
                    <p className="font-semibold text-foreground">{property.moveInDate}</p>
                  </div>
                  <div className="bg-card rounded-xl p-4 border border-border">
                    <Building className="w-5 h-5 text-accent mb-2" />
                    <p className="text-xs text-muted-foreground">준공년도</p>
                    <p className="font-semibold text-foreground">{property.builtYear}</p>
                  </div>
                  <div className="bg-card rounded-xl p-4 border border-border">
                    <Car className="w-5 h-5 text-accent mb-2" />
                    <p className="text-xs text-muted-foreground">주차</p>
                    <p className="font-semibold text-foreground">{property.parking}</p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">매물 설명</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {property.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">주요 특징</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {property.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-foreground">
                        <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-accent" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact Card */}
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-6">
                    이 매물에 관심이 있으신가요?
                  </h3>

                  <div className="space-y-4 mb-6">
                    <Button variant="gold" size="lg" className="w-full">
                      <Phone className="w-5 h-5" />
                      전화 상담하기
                    </Button>
                    <Button variant="outline" size="lg" className="w-full">
                      <MessageSquare className="w-5 h-5" />
                      카카오톡 문의
                    </Button>
                  </div>

                  <div className="border-t border-border pt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                        <Building className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">하이브엘 탑 부동산</p>
                        <p className="text-sm text-muted-foreground">구소장</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2 text-sm">
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="w-4 h-4 text-accent" />
                        031-262-4959
                      </p>
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="w-4 h-4 text-accent" />
                        010-4684-3412
                      </p>
                    </div>
                  </div>
                </div>

                {/* Back Button */}
                <Link to="/#properties" className="block">
                  <Button variant="ghost" className="w-full">
                    <ArrowLeft className="w-4 h-4" />
                    목록으로 돌아가기
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetail;
