import "./SectionSocial.scss";
import { FaFacebook, FaInstagram, FaLine, FaYoutube } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import SocialLink from "./SocialLink";

const socialGroups = [
  {
    title: "Shopping",
    description: "เลือกซื้อสินค้าและดูรีวิวได้ที่นี่",
    links: [
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
    ],
  },
  {
    title: "Social Media",
    description: "ติดตามและพูดคุยกับ อาเฮียฮ้อ ได้ทุกช่องทาง",
    links: [
      {
        href: "https://www.facebook.com/Burinsampanwatsopa",
        icon: FaFacebook,
        label: "Facebook: Burin Sampanwatsopa",
        colorClass: "bg-color-facebook",
      },
      {
        href: "https://www.instagram.com/burin.41/",
        icon: FaInstagram,
        label: "Instagram: birin.41",
        colorClass: "bg-color-instagram",
      },
      {
        href: "https://line.me/ti/p/7dcSNRE4kg",
        icon: FaLine,
        label: "Line ID: hoa41",
        colorClass: "bg-color-line",
      },
      {
        href: "https://www.youtube.com/@rhiahorOfficial",
        icon: FaYoutube,
        label: "YouTube: อาเฮียฮ้อ (ช่องจริง)",
        colorClass: "bg-color-youtube",
      },
    ],
  },
];

export default function SectionSocial() {
  return (
    <div className="container mx-auto relative z-10 w-full h-screen flex flex-col items-center justify-center">
      <div className="section-social">
        {socialGroups.map((group) => (
          <div key={group.title} className="social-group">
            <h3 className="social-group-title">{group.title}</h3>
            <p className="social-group-desc">{group.description}</p>
            <div className="social-group-links">
              {group.links.map((link) => (
                <SocialLink key={link.label} {...link} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
