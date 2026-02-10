import "./home.scss";
import { FaFacebook } from "react-icons/fa";
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
        <div className="section-social w-full">
          <a href="https://www.facebook.com/Burinsampanwatsopa" target="_blank">
            <div className="box-link-social bg-color-facebook">
              <FaFacebook /> <span>Facebook</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
