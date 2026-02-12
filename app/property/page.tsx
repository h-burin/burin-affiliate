import "./property.scss";
import PropertyCard from "@/components/PropertyCard";
import type { PropertyData } from "@/components/PropertyCard/PropertyCard";
import properties from "@/data/properties.json";
import { MdArrowBack } from "react-icons/md";
import Link from "next/link";

export const metadata = {
  title: "อสังหาริมทรัพย์",
  description: "โครงการบ้านและคอนโดที่น่าสนใจ จาก อาเฮียฮ้อ",
};

export default function PropertyPage() {
  return (
    <div className="container mx-auto relative z-10 w-full py-16 px-8">
      <Link href="/" className="property-page__back">
        <MdArrowBack />
        <span>กลับหน้าหลัก</span>
      </Link>

      <div className="property-page__header">
        <h1 className="property-page__title">อสังหาริมทรัพย์</h1>
        <p className="property-page__subtitle">
          โครงการบ้านและคอนโดที่น่าสนใจ
        </p>
      </div>

      <div className="property-page__grid">
        {(properties as PropertyData[]).map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
