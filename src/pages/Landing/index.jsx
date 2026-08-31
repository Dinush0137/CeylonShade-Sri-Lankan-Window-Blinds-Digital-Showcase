import Header from "../../components/Header";
import Hero from "./Hero";
import CategoryGrid from "./CategoryGrid";
import TrustRow from "./TrustRow";
import FeaturedProducts from "./FeaturedProducts";
import BottomCta from "./BottomCta";
import Footer from "../../components/Footer";

export default function Landing() {
  return (
    <>
      <Header activePage="home" />
      <main className="flex-grow pt-[80px]">
        <Hero />
        <CategoryGrid />
        <TrustRow />
        <FeaturedProducts />
        <BottomCta />
      </main>
      <Footer />
    </>
  );
}
