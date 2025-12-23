import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

export interface PropertyImage {
  id: string;
  url: string;
  alt: string;
}

export interface Property {
  id: string;
  type: "매매" | "전세" | "월세";
  title: string;
  location: string;
  address: string;
  size: string;
  exclusiveSize: string;
  rooms: string;
  bathrooms: string;
  floor: string;
  totalFloors: string;
  direction: string;
  moveInDate: string;
  price: string;
  maintenanceFee: string;
  builtYear: string;
  parking: string;
  tag?: string;
  description: string;
  features: string[];
  images: PropertyImage[];
}

export const properties: Property[] = [
  {
    id: "1",
    type: "매매",
    title: "광교 풍경채 어바니티",
    location: "경기도 용인시 수지구",
    address: "경기도 용인시 수지구 광교중앙로 120",
    size: "84㎡",
    exclusiveSize: "59.98㎡",
    rooms: "3룸",
    bathrooms: "2개",
    floor: "15층",
    totalFloors: "35층",
    direction: "남향",
    moveInDate: "즉시 입주 가능",
    price: "매매 12억 5,000만",
    maintenanceFee: "월 25만원",
    builtYear: "2023년",
    parking: "세대당 1.5대",
    tag: "추천",
    description: "광교 신도시의 랜드마크 아파트입니다. 남향으로 일조량이 풍부하고, 광교호수공원이 도보 5분 거리에 있습니다. 신분당선 광교중앙역 초역세권으로 서울 강남까지 30분 이내 출퇴근이 가능합니다.",
    features: [
      "신분당선 광교중앙역 도보 3분",
      "광교호수공원 도보 5분",
      "대형 쇼핑몰 인접",
      "우수 학군 (광교초, 광교중)",
      "커뮤니티 시설 완비",
      "지하주차장 연결",
    ],
    images: [
      { id: "1", url: property1, alt: "거실" },
      { id: "2", url: property2, alt: "안방" },
      { id: "3", url: property3, alt: "외관" },
    ],
  },
  {
    id: "2",
    type: "전세",
    title: "광교 풍경채 어바니티",
    location: "경기도 용인시 수지구",
    address: "경기도 용인시 수지구 광교중앙로 120",
    size: "59㎡",
    exclusiveSize: "42.85㎡",
    rooms: "2룸",
    bathrooms: "1개",
    floor: "8층",
    totalFloors: "35층",
    direction: "동남향",
    moveInDate: "2025년 2월 입주",
    price: "전세 6억 5,000만",
    maintenanceFee: "월 18만원",
    builtYear: "2023년",
    parking: "세대당 1대",
    tag: "신규",
    description: "깔끔하게 관리된 2룸 아파트입니다. 동남향으로 아침 햇살이 좋고, 조용한 동에 위치해 있습니다. 신혼부부나 1~2인 가구에 적합합니다.",
    features: [
      "신분당선 광교중앙역 도보 5분",
      "광교호수공원 도보 7분",
      "풀옵션 (에어컨, 냉장고, 세탁기)",
      "우수 학군",
      "조용한 동 위치",
    ],
    images: [
      { id: "1", url: property2, alt: "안방" },
      { id: "2", url: property1, alt: "거실" },
      { id: "3", url: property3, alt: "외관" },
    ],
  },
  {
    id: "3",
    type: "월세",
    title: "광교 풍경채 어바니티",
    location: "경기도 용인시 수지구",
    address: "경기도 용인시 수지구 광교중앙로 120",
    size: "84㎡",
    exclusiveSize: "59.98㎡",
    rooms: "3룸",
    bathrooms: "2개",
    floor: "22층",
    totalFloors: "35층",
    direction: "남서향",
    moveInDate: "2025년 1월 입주",
    price: "보증금 1억 / 월 150만",
    maintenanceFee: "월 25만원",
    builtYear: "2023년",
    parking: "세대당 1.5대",
    tag: "급매",
    description: "고층 남서향으로 광교호수공원 조망이 가능한 프리미엄 세대입니다. 3룸 구조로 가족 단위 거주에 적합하며, 풀옵션으로 바로 입주 가능합니다.",
    features: [
      "광교호수공원 조망",
      "고층 프리미엄 세대",
      "풀옵션 완비",
      "신분당선 초역세권",
      "넓은 발코니",
      "드레스룸 포함",
    ],
    images: [
      { id: "1", url: property3, alt: "외관" },
      { id: "2", url: property1, alt: "거실" },
      { id: "3", url: property2, alt: "안방" },
    ],
  },
];

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find((p) => p.id === id);
};
