import "./SectionSocial.scss";
import { FaFacebook, FaInstagram, FaLine, FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import { MdApartment } from "react-icons/md";
import { TbLemon2Filled } from "react-icons/tb";
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
      // {
      //   href: "https://th.shp.ee/04q8rj1?smtt=0.0.9",
      //   icon: SiShopee,
      //   label: "Shopee Video",
      //   colorClass: "bg-color-shopee",
      // },
    ],
  },
  {
    title: "อสังหาริมทรัพย์",
    description: "โครงการบ้านและคอนโดที่น่าสนใจ",
    links: [
      {
        href: "/property",
        icon: MdApartment,
        label: "ดูโครงการทั้งหมด",
        colorClass: "bg-color-property",
      },
    ],
  },
  {
    title: "Social Media",
    description: "ติดตามและพูดคุยกับ อาเฮียฮ้อ ได้ทุกช่องทาง",
    links: [
      {
        href: "https://www.facebook.com/rdoublehofficial",
        icon: FaFacebook,
        label: "Facebook: อาเฮียฮ้อ",
        colorClass: "bg-color-facebook",
      },
      {
        href: "https://www.instagram.com/rhiahor.official?igsh=Yzl5ZHgxaGQxaGtw&utm_source=qr",
        icon: FaInstagram,
        label: "Instagram: rhiahor.official",
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
      {
        href: "https://www.tiktok.com/@rhiahor",
        icon: FaTiktok,
        label: "TikTok: @rhiahor",
        colorClass: "bg-color-tiktok",
      },
      {
        href: "https://s.lemon8-app.com/s/GgbdZeThSU",
        icon: TbLemon2Filled,
        label: "Lemon8: @rhiahor",
        colorClass: "bg-color-lemon8",
      },
    ],
  },
];

export default function SectionSocial() {
  return (
    <div className="container mx-auto relative z-10 w-full py-10 px-8 flex flex-col items-center justify-center h-screen">
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
