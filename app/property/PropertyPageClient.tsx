"use client";

import { useState } from "react";
import { MdSearch } from "react-icons/md";
import PropertyCard from "@/components/PropertyCard";
import type { PropertyData } from "@/components/PropertyCard/PropertyCard";

const projectTypeLabels: Record<string, string> = {
  condominium: "คอนโดมิเนียม",
  house: "บ้านเดี่ยว",
  townhouse: "ทาวน์เฮ้าส์",
  villa: "วิลล่า",
};

interface PropertyPageClientProps {
  properties: PropertyData[];
}

export default function PropertyPageClient({ properties }: PropertyPageClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeType, setActiveType] = useState("all");

  const existingTypes = [...new Set(properties.map((p) => p.projectType))];

  const filteredProperties = properties.filter((p) => {
    const matchesType = activeType === "all" || p.projectType === activeType;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      !query ||
      p.name.toLowerCase().includes(query) ||
      p.location.toLowerCase().includes(query);
    return matchesType && matchesSearch;
  });

  return (
    <>
      {/* Search */}
      <div className="property-page__search">
        <MdSearch className="property-page__search-icon" />
        <input
          type="text"
          placeholder="ค้นหาโครงการ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="property-page__search-input"
        />
      </div>

      {/* Filter pills */}
      {existingTypes.length > 1 && (
        <div className="property-page__filters">
          <button
            className={`property-page__filter ${activeType === "all" ? "property-page__filter--active" : ""}`}
            onClick={() => setActiveType("all")}
          >
            ทั้งหมด
          </button>
          {existingTypes.map((type) => (
            <button
              key={type}
              className={`property-page__filter ${activeType === type ? "property-page__filter--active" : ""}`}
              onClick={() => setActiveType(type)}
            >
              {projectTypeLabels[type] || type}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      {filteredProperties.length > 0 ? (
        <div className="property-page__grid">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="property-page__empty">
          <p>ไม่พบโครงการที่ตรงกับการค้นหา</p>
        </div>
      )}
    </>
  );
}
