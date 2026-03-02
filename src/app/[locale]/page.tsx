import HeroSlider from "@/components/HeroSlider";
import ProductGrid from "@/components/ProductGrid";
import FeatureBlocks from "@/components/FeatureBlocks";
import PartnerSlider from "@/components/PartnerSlider";

export default async function Home(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  return (
    <main className="min-h-screen">
      <HeroSlider />
      <ProductGrid />
      <FeatureBlocks />
      <PartnerSlider />
    </main>
  );
}
