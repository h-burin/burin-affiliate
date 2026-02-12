"use client";

import "./PropertyCard.scss";
import { useState } from "react";
import Image from "next/image";
import { MdLocationOn, MdKingBed, MdBathtub, MdMap } from "react-icons/md";
import { TbStairs } from "react-icons/tb";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

export interface PropertyData {
  id: string;
  name: string;
  location: string;
  bedrooms: number | string;
  bathrooms: number | string;
  floors: number | string;
  projectType: "condominium" | "house" | "townhouse" | "villa";
  coverImage: string;
  startingPrice?: string;
  maxPrice?: string;
  registerUrl?: string;
  mapUrl?: string;
}

interface PropertyCardProps {
  property: PropertyData;
}

const projectTypeLabels: Record<PropertyData["projectType"], string> = {
  condominium: "คอนโดมิเนียม",
  house: "บ้านเดี่ยว",
  townhouse: "ทาวน์เฮ้าส์",
  villa: "วิลล่า",
};

export default function PropertyCard({ property }: PropertyCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="property-card">
      {/* Skeleton */}
      {!imageLoaded && <div className="property-card__skeleton" />}

      {/* Full-bleed image */}
      <Image
        src={property.coverImage}
        alt={property.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={`property-card__img ${imageLoaded ? "property-card__img--loaded" : ""}`}
        onLoad={() => setImageLoaded(true)}
      />

      {/* Badge */}
      <span
        className={`property-card__badge property-card__badge--${property.projectType}`}
      >
        {projectTypeLabels[property.projectType]}
      </span>

      {/* Smooth blur layer */}
      <div className="property-card__blur" />

      {/* Gradient overlay + info */}
      <div className="property-card__overlay">
        <div className="property-card__info">
          <div className="property-card__header">
            <h3 className="property-card__name">{property.name}</h3>
            {property.startingPrice && (
              <span className="property-card__price">
                {property.startingPrice}
                {property.maxPrice && ` - ${property.maxPrice}`} ล้าน
              </span>
            )}
          </div>

          <div className="property-card__location">
            <MdLocationOn />
            <span>{property.location}</span>
          </div>

          <div className="property-card__details">
            {property.bedrooms && (
              <div className="property-card__detail">
                <MdKingBed />
                <span>{property.bedrooms} ห้องนอน</span>
              </div>
            )}
            {property.bathrooms && (
              <div className="property-card__detail">
                <MdBathtub />
                <span>{property.bathrooms} ห้องน้ำ</span>
              </div>
            )}
            {property.floors && (
              <div className="property-card__detail">
                <TbStairs />
                <span>{property.floors} ชั้น</span>
              </div>
            )}
          </div>

          <div className="property-card__actions">
            {property.registerUrl && (
              <a
                href={property.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="property-card__btn property-card__btn--register"
              >
                <HiOutlineClipboardDocumentList />
                <span>ลงทะเบียน</span>
              </a>
            )}
            {property.mapUrl && (
              <a
                href={property.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="property-card__btn property-card__btn--map"
              >
                <MdMap />
                <span>แผนที่</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
