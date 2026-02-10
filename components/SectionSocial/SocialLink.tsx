import { MdArrowOutward } from "react-icons/md";
import type { IconType } from "react-icons";

interface SocialLinkProps {
  href: string;
  icon: IconType;
  label: string;
  colorClass: string;
}

export default function SocialLink({
  href,
  icon: Icon,
  label,
  colorClass,
}: SocialLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className={`box-link-social ${colorClass} shadow-md`}>
        <div className="flex items-center justify-center gap-5">
          <Icon /> <span>{label}</span>
        </div>
        <div className="icon-go-to-link">
          <MdArrowOutward />
        </div>
      </div>
    </a>
  );
}
