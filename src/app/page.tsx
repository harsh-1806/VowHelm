import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection";
import SmartHelmetsSection from "@/components/home/SmartHelmetsSection";
import MediaCoverageSection from "@/components/home/MediaCoverageSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <SmartHelmetsSection />
      <MediaCoverageSection />
    </MainLayout>
  );
}
