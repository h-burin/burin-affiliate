import "./SectionSocial.scss";
import { FaFacebook, FaInstagram, FaLine } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import SocialLink from "./SocialLink";

const socialLinks = [
  {
    href: "https://www.facebook.com/Burinsampanwatsopa",
    icon: FaFacebook,
    label: "Facebook",
    colorClass: "bg-color-facebook",
  },
  {
    href: "https://www.instagram.com/burin.41/",
    icon: FaInstagram,
    label: "Instagram",
    colorClass: "bg-color-instagram",
  },
  {
    href: "https://line.me/ti/p/7dcSNRE4kg",
    icon: FaLine,
    label: "Line",
    colorClass: "bg-color-line",
  },
  {
    href: "https://collshp.com/burin.rhiahor?view=storefront",
    icon: SiShopee,
    label: "หน้าร้าน Shopee",
    colorClass: "bg-color-shopee",
  },

  {
    href: "https://th.shp.ee/04q8rj1?smtt=0.0.9",
    icon: SiShopee,
    label: "Shopee Video",
    colorClass: "bg-color-shopee",
  },
];

export default function SectionSocial() {
  return (
    <div className="container mx-auto relative z-10 w-full h-screen flex flex-col items-center justify-center">
      <div className="section-social">
        {socialLinks.map((link) => (
          <SocialLink key={link.label} {...link} />
        ))}
      </div>
    </div>
  );
}
