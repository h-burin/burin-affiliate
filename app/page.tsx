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
      <div className="container mx-auto px-4 relative z-10 w-full h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-center my-8">
          Burin Samphanwetsopha
        </h1>
      </div>
    </div>
  );
}
