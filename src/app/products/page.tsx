import MainLayout from "@/components/layout/MainLayout";
import ProductHero from "@/components/products/ProductHero";
import FeaturesSection from "@/components/products/FeaturesSection";
import AttachablesSection from "@/components/products/AttachablesSection";
import AppSection from "@/components/products/AppSection";
import PreviousModelsSection from "@/components/products/PreviousModelsSection";

export default function ProductsPage() {
  return (
    <MainLayout>
      <ProductHero />
      <FeaturesSection />
      <AttachablesSection />
      <AppSection />
      <PreviousModelsSection />
    </MainLayout>
  );
}
