"use client";

import "./ProfileCard.scss";
import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "motion/react";
import type { SpringOptions } from "motion/react";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import socialGroups from "@/data/social-links.json";
import properties from "@/data/properties.json";
import DecryptedText from "@/components/ReactBits/DecryptedText/DecryptedText";

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

function getAge() {
  const birthday = new Date(1998, 1, 12); // 12 ก.พ. 2541 (พ.ศ.)
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  const monthDiff = today.getMonth() - birthday.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  return age;
}

const totalChannels = socialGroups.reduce((sum, group) => sum + group.links.length, 0);
const totalProjects = properties.length;

const socials = [
  { href: "https://www.facebook.com/rdoublehofficial", icon: FaFacebook, label: "Facebook" },
  { href: "https://www.instagram.com/rhiahor.official", icon: FaInstagram, label: "Instagram" },
  { href: "https://www.youtube.com/@rhiahorOfficial", icon: FaYoutube, label: "YouTube" },
  { href: "https://www.tiktok.com/@rhiahor", icon: FaTiktok, label: "TikTok" },
];

export default function ProfileCard() {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    rotateX.set((offsetY / (rect.height / 2)) * -8);
    rotateY.set((offsetX / (rect.width / 2)) * 8);
  }

  function handleMouseEnter() {
    scale.set(1.02);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div
      ref={ref}
      className="profile-card-wrapper"
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="profile-card"
        style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
      >
        {/* Cover */}
        <div className="profile-card__cover">
          <Image
            src="/images/profile/cover.webp"
            alt="cover"
            fill
            className="profile-card__cover-img"
          />
        </div>

        {/* Avatar */}
        <div className="profile-card__avatar">
          <Image
            src="/images/profile/profile.webp"
            alt="อาเฮียฮ้อ"
            width={96}
            height={96}
            className="profile-card__avatar-img"
          />
        </div>

        {/* Info */}
        <div className="profile-card__body">
          <h1 className="profile-card__name">
            <DecryptedText
              text="อาเฮียฮ้อ (ช่องจริง)"
              animateOn="view"
              revealDirection="start"
              sequential
              speed={50}
            />
          </h1>
          <p className="profile-card__bio">
            รีวิวสินค้า | อสังหาริมทรัพย์ | ไลฟ์สไตล์
          </p>
        </div>

        {/* Stats */}
        <div className="profile-card__stats">
          <div className="profile-card__stat">
            <span className="profile-card__stat-value">{getAge()}</span>
            <span className="profile-card__stat-label">อายุ</span>
          </div>
          <div className="profile-card__stat">
            <span className="profile-card__stat-value">{totalChannels}+</span>
            <span className="profile-card__stat-label">ช่องทาง</span>
          </div>
          <div className="profile-card__stat">
            <span className="profile-card__stat-value">{totalProjects}+</span>
            <span className="profile-card__stat-label">โครงการ</span>
          </div>
        </div>

        {/* Social icons */}
        <div className="profile-card__socials">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-card__social"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
