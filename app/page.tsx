import DotGrid from "@/components/ReactBits/DotGrid/DotGrid";
import SectionSocial from "@/components/SectionSocial";

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
      <SectionSocial />
    </div>
  );
}
