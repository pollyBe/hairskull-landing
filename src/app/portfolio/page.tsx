import GallerySection from "@/components/sections/GallerySection";
import { hasPortfolio } from "@/constants/navigation";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Портфолио",
  description:
    "Стрижки, образовательные программы, мастер-классы и профессиональные мероприятия Алексея Платуна.",
  path: "/portfolio",
  // Keep the empty placeholder page out of search results
  robots: hasPortfolio ? undefined : { index: false, follow: true },
});

export default function PortfolioPage() {
  return <GallerySection />;
}
