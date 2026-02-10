import "./home.scss";
import { FaFacebook, FaInstagram, FaLine } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import DotGrid from "@/components/ReactBits/DotGrid/DotGrid";

export default function Home() {
  return (
    <div>
      <div className="w-full h-screen fixed top-0 z-0">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#efefef"
          activeColor="#bebebe"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <div className="container mx-auto relative z-10 w-full h-screen flex flex-col items-center justify-center">
        <div className="section-social">
          <a href="https://www.facebook.com/Burinsampanwatsopa" target="_blank">
            <div className="box-link-social bg-color-facebook shadow-md">
              <div className="flex items-center justify-center gap-5">
                <FaFacebook /> <span>Facebook</span>
              </div>
              <div className="icon-go-to-link">
                <MdArrowOutward />
              </div>
            </div>
          </a>

          <a href="https://www.instagram.com/burin.41/" target="_blank">
            <div className="box-link-social bg-color-instagram shadow-md">
              <div className="flex items-center justify-center gap-5">
                <FaInstagram /> <span>Instagram</span>
              </div>
              <div className="icon-go-to-link">
                <MdArrowOutward />
              </div>
            </div>
          </a>

          <a href="https://line.me/ti/p/7dcSNRE4kg" target="_blank">
            <div className="box-link-social bg-color-line shadow-md">
              <div className="flex items-center justify-center gap-5">
                <FaLine /> <span>Line</span>
              </div>
              <div className="icon-go-to-link">
                <MdArrowOutward />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
