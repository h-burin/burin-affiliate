import "./SectionSocial.scss";
import { FaFacebook, FaInstagram, FaLine, FaYoutube, FaTiktok } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import { MdApartment } from "react-icons/md";
import { TbLemon2Filled } from "react-icons/tb";
import type { IconType } from "react-icons";
import SocialLink from "./SocialLink";
import ProfileCard from "@/components/ProfileCard";
import socialGroups from "@/data/social-links.json";

const iconMap: Record<string, IconType> = {
  SiShopee,
  MdApartment,
  FaFacebook,
  FaInstagram,
  FaLine,
  FaYoutube,
  FaTiktok,
  TbLemon2Filled,
};

export default function SectionSocial() {
  return (
    <div className="container mx-auto relative z-10 w-full py-10 px-8 flex flex-col items-center justify-center min-h-screen">
      <div className="section-social">
        <ProfileCard />
        {socialGroups.map((group) => (
          <div key={group.title} className="social-group">
            <h3 className="social-group-title">{group.title}</h3>
            <p className="social-group-desc">{group.description}</p>
            <div className="social-group-links">
              {group.links.map((link) => (
                <SocialLink
                  key={link.label}
                  href={link.href}
                  icon={iconMap[link.icon]}
                  label={link.label}
                  colorClass={link.colorClass}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
