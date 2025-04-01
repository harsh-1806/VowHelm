import MainLayout from "@/components/layout/MainLayout";
import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import TeamSection from "@/components/about/TeamSection";
import InvestorsSection from "@/components/about/InvestorsSection";
import ContactSection from "@/components/about/ContactSection";

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutHero />
      <StorySection />
      <TeamSection />
      <InvestorsSection />
      <ContactSection />
    </MainLayout>
  );
}
